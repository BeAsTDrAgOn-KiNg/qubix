import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

// Initialize Gemini if key exists
let ai: GoogleGenAI | null = null;
if (process.env.GEMINI_API_KEY) {
  try {
    ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
    console.log("Gemini API Client initialized successfully.");
  } catch (error) {
    console.error("Failed to initialize Gemini API Client:", error);
  }
} else {
  console.log("GEMINI_API_KEY not found. Running server with fallback mock response systems.");
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route: Check Gemini availability/status
  app.get("/api/ai-status", (req, res) => {
    res.json({ enabled: !!ai });
  });

  // API Route: Secure Payment Gateway simulation
  // Handles mocked stripe-like secure intent creation
  app.post("/api/payments/create-intent", (req, res) => {
    const { amount, currency, description, clientEmail } = req.body;
    
    if (!amount || amount <= 0) {
      return res.status(400).json({ error: "Invalid payment amount" });
    }

    const transactionId = "TX_" + Math.random().toString(36).substr(2, 12).toUpperCase();
    const clientSecret = "sec_" + Math.random().toString(36).substr(2, 16) + "_secret";
    
    res.json({
      success: true,
      transactionId,
      clientSecret,
      amount,
      currency: currency || "USD",
      status: "requires_payment_method",
      fee: Math.round(amount * 0.029 + 30) / 100, // standard Stripe fee (2.9% + 30c) simulation
      createdAt: new Date().toISOString(),
      gateway: "Mock-Secure Stripe Proxy",
      sandbox: true
    });
  });

  // API Route: Confirm simulated payments
  app.post("/api/payments/confirm", (req, res) => {
    const { transactionId, paymentMethod } = req.body;
    if (!transactionId || !paymentMethod) {
      return res.status(400).json({ error: "Missing transaction parameters" });
    }

    res.json({
      success: true,
      transactionId,
      status: "succeeded",
      receiptUrl: `https://receipthub.mock/receipts/${transactionId}`,
      message: "Simulated secure payment confirmed and cleared successfully.",
      clearedAt: new Date().toISOString()
    });
  });

  // API Route: Real-time messaging service powered by Gemini or Fallback AI agent
  app.post("/api/chat", async (req, res) => {
    const { messages, userRole } = req.body; // userRole is either 'hire' or 'work'
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Invalid messages array" });
    }

    const lastMessage = messages[messages.length - 1]?.content;
    if (!lastMessage) {
      return res.status(400).json({ error: "Empty message content" });
    }

    // Default simulation response
    let responseText = "";

    if (ai) {
      try {
        const sysInstruction = userRole === 'hire'
          ? "You are Alex, an expert Senior Technical Lead and Freelance Coordinator. You represent our premium collective of software developers, product designers, and technical writers. A prospective client is interested in hiring us. Be professional, direct, clear about our strengths, and emphasize our portfolio results. Keep responses concise (under 120 words)."
          : "You are Morgan, the Talent Acquisition Manager and Developer Advocate. A freelance developer, designer, or specialist wants to work with us / join our premium network. Be warm, professional, encouraging, and ask relevant tech or creative process questions. Keep responses concise (under 120 words).";

        const geminiMessages = messages.map(msg => ({
          role: msg.sender === 'user' ? 'user' : 'model',
          parts: [{ text: msg.content }]
        }));

        const response = await ai.models.generateContent({
          model: "gemini-3.5-flash",
          contents: {
            parts: [{ text: `System context: ${sysInstruction}\n\nConversation history so far. Reply to the last user message:\n${messages.map(m => `${m.sender === 'user' ? 'User' : 'Assistant'}: ${m.content}`).join('\n')}` }]
          }
        });

        responseText = response.text || "I appreciate you sharing this! Could you tell me more about your requirements?";
      } catch (err: any) {
        console.error("Gemini API error:", err);
        // Fallback to static rules below if API key errors out
      }
    }

    // Fallback Mock Messaging Engine if Gemini is disabled or failed
    if (!responseText) {
      const lowerMsg = lastMessage.toLowerCase();
      if (userRole === 'hire') {
        if (lowerMsg.includes("hello") || lowerMsg.includes("hi")) {
          responseText = "Hello! Thanks for reaching out to Freelance Portal. I'm Alex, your contract coordinator. Are you looking to hire for a specific project, or do you need ongoing dedicated developers/designers? Let me know your stack!";
        } else if (lowerMsg.includes("price") || lowerMsg.includes("rate") || lowerMsg.includes("cost") || lowerMsg.includes("budget")) {
          responseText = "Our senior devs/designers typically range from $75 to $130/hr, depending on scope and expertise. We also structure fixed-price milestones with a secure 15% escrow deposit. What size or speed are you aiming for?";
        } else if (lowerMsg.includes("portfolio") || lowerMsg.includes("project") || lowerMsg.includes("past")) {
          responseText = "We have shipped enterprise SaaS, premium finance platforms, and WebGL experiences. You can browse our Portfolio section below! I can also send custom case studies. What domain are you in?";
        } else if (lowerMsg.includes("stack") || lowerMsg.includes("react") || lowerMsg.includes("next")) {
          responseText = "We specialize in modern architectures: React, Next.js, Node.js, TypeScript, Tailwind, Python AI pipelines, and cloud engineering (AWS/GCP). We're happy to jump on a quick call to audit your existing system!";
        } else {
          responseText = "That sounds like an amazing initiative. Our custom senior team can absolutely cover that. Would you like to set up an introductory scoping call, or should I walk you through our payment escrow system?";
        }
      } else {
        // Work for us flow
        if (lowerMsg.includes("hello") || lowerMsg.includes("hi")) {
          responseText = "Welcome! I'm Morgan, lead network builder. We are always seeking world-class freelancers (React/Vue developers, Figma designers, and DevOps wizards). What is your primary field of expertise?";
        } else if (lowerMsg.includes("apply") || lowerMsg.includes("jobs") || lowerMsg.includes("hiring")) {
          responseText = "Great! You can review our active openings below. Feel free to submit an application form directly. Once received, we'll review your GitHub/portfolio and schedule a 20-min tech alignment chat!";
        } else if (lowerMsg.includes("pay") || lowerMsg.includes("salary") || lowerMsg.includes("rate")) {
          responseText = "Our network members set their own hourly rates while bidding, and we secure contracts via our built-in payment portal. Real-time payouts are cleared within 3 business days of milestone signoffs!";
        } else {
          responseText = "Wonderful. We pride ourselves on transparent, fast-paying, and high-impact remote work. Do you have a link to your current portfolio, live projects, or GitHub repository?";
        }
      }
    }

    res.json({
      id: "MSG_" + Math.random().toString(36).substr(2, 9),
      sender: "assistant",
      content: responseText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    });
  });

  // API Route: Handle active openings list
  app.get("/api/jobs", (req, res) => {
    const openings = [
      {
        id: "J1",
        title: "Senior Full-Stack Developer",
        department: "Engineering",
        type: "Contract (Remote)",
        location: "Global Remote",
        salary: "$85 - $120 / hr",
        description: "Join our core collective to build web applications with React, Next.js, TypeScript, and Node.js for Fortune 500 clients.",
        requirements: ["5+ years React exp", "Strong TypeScript foundation", "Familiar with scalable AWS setups"]
      },
      {
        id: "J2",
        title: "Senior Product Designer",
        department: "Design",
        type: "Contract (Remote)",
        location: "Global Remote",
        salary: "$75 - $110 / hr",
        description: "Design pixel-perfect, highly responsive products, wireframes, and design systems in Figma. Collaborate directly with engineering.",
        requirements: ["Diverse interactive web portfolio", "Expert Figma & design system knowledge", "Prototyping motion animations"]
      },
      {
        id: "J3",
        title: "AI Specialist (Generative Models)",
        department: "Engineering",
        type: "Contract (Remote)",
        location: "Global Remote",
        salary: "$95 - $140 / hr",
        description: "Develop server-side LLM integrations, fine-tune prompts, implement vector databases (Pinecone/Chroma), and build intelligent agents.",
        requirements: ["Proficiency with Python, Node.js & LangChain", "Hands-on experience with Gemini and OpenAI APIs", "Prompt engineering secrets"]
      }
    ];
    res.json(openings);
  });

  // Vite development integration or static files serving for production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
    console.log("Vite dev middleware attached.");
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
    console.log("Serving static production files from dist.");
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Express server running on http://localhost:${PORT}`);
  });
}

startServer();
