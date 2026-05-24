import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Send, 
  Sparkles, 
  Mail, 
  CheckCircle,
  Coffee,
  Utensils,
  ShoppingBag,
  Briefcase,
  LineChart,
  Grid,
  TrendingUp,
  Flame,
  Phone,
  MapPin,
  Instagram,
  Check,
  Zap,
  MessageSquare,
  Award,
  BookOpen
} from 'lucide-react';
import { PORTFOLIO_PROJECTS, TEAM_STATEMENT } from './data.ts';
import { ShaderBackground } from '@/components/ui/animated-shader-hero';

const QubixLogoIcon = () => (
  <svg viewBox="0 0 100 100" className="w-8 h-8 select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="logoTeal" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2ab4d0" />
        <stop offset="50%" stopColor="#3cd0ec" />
        <stop offset="100%" stopColor="#1a91aa" />
      </linearGradient>
      <linearGradient id="logoTealGlow" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2ab4d0" stopOpacity="0.25" />
        <stop offset="100%" stopColor="#2ab4d0" stopOpacity="0.0" />
      </linearGradient>
    </defs>
    {/* Outer Hexagon / Isometric Boundary */}
    <path d="M50 12 L85 32 L85 68 L50 88 L15 68 L15 32 Z" stroke="url(#logoTeal)" strokeWidth="5.5" strokeLinejoin="round" />
    
    {/* Three central dividing lines for isometric projection */}
    <path d="M50 50 L50 88" stroke="url(#logoTeal)" strokeWidth="4.5" strokeLinejoin="round" />
    <path d="M50 50 L15 32" stroke="url(#logoTeal)" strokeWidth="4.5" strokeLinejoin="round" />
    <path d="M50 50 L85 32" stroke="url(#logoTeal)" strokeWidth="4.5" strokeLinejoin="round" />
    
    {/* Inner offset structure representing architectural spaces/cube divisions resembling the image */}
    <path d="M30 41 L50 52 L70 41" stroke="url(#logoTeal)" strokeWidth="3" strokeLinejoin="round" strokeDasharray="1 1" opacity="0.8" />
    <path d="M30 41 L30 60" stroke="url(#logoTeal)" strokeWidth="3" strokeLinejoin="round" opacity="0.6" />
    <path d="M70 41 L70 60" stroke="url(#logoTeal)" strokeWidth="3" strokeLinejoin="round" opacity="0.6" />
    
    {/* Central glow core */}
    <circle cx="50" cy="50" r="12" fill="url(#logoTealGlow)" />
  </svg>
);

export default function App() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Smooth scroll handler
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Simple clean mock form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      }, 5000);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#D4AF37]/20 antialiased">
      
      {/* 1. Header Navigation - Minimal, Editorial, High Contrast */}
      <nav className="sticky top-0 z-50 bg-[#050505]/95 backdrop-blur-md border-b border-white/10 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer select-none group" onClick={() => handleScrollTo('hero')}>
            <div className="relative flex-shrink-0">
              <QubixLogoIcon />
              <div className="absolute inset-0 bg-[#2ab4d0]/25 blur-md rounded-full -z-10 opacity-70 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-xl font-bold tracking-wide text-white leading-none">
                Qubix
              </span>
              <span className="text-[9px] uppercase tracking-[0.18em] text-[#D4AF37] font-semibold leading-tight mt-1">
                Simply Smarter
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6 text-[11px] font-mono uppercase tracking-widest">
            <button 
              onClick={() => handleScrollTo('services')} 
              className="text-white/70 hover:text-[#D4AF37] transition-colors cursor-pointer"
            >
              Services
            </button>
            <button 
              onClick={() => handleScrollTo('portfolio')} 
              className="text-white/70 hover:text-[#D4AF37] transition-colors cursor-pointer"
            >
              Our Work
            </button>
            <button 
              onClick={() => handleScrollTo('process')} 
              className="text-white/70 hover:text-[#D4AF37] transition-colors cursor-pointer"
            >
              Process
            </button>
            <button 
              onClick={() => handleScrollTo('why')} 
              className="text-white/70 hover:text-[#D4AF37] transition-colors cursor-pointer"
            >
              Why Us
            </button>
            <button 
              onClick={() => handleScrollTo('about')} 
              className="text-white/70 hover:text-[#D4AF37] transition-colors cursor-pointer"
            >
              The Team
            </button>
            <button 
              onClick={() => handleScrollTo('contact')} 
              className="px-4 py-2 bg-white/5 border border-[#D4AF37]/30 hover:border-[#D4AF37] text-[#D4AF37] rounded-sm transition-all shadow-sm font-semibold cursor-pointer"
            >
              Contact
            </button>
          </div>
          {/* Mobile minimal call-to-action */}
          <div className="md:hidden flex items-center space-x-3 text-[11px] font-mono uppercase tracking-widest">
            <button 
              onClick={() => handleScrollTo('contact')} 
              className="px-3 py-1.5 bg-white/5 border border-[#D4AF37]/30 hover:border-[#D4AF37] text-[#D4AF37] rounded-sm transition-all text-[10px] font-semibold cursor-pointer"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* 2. Hero Section - Crisp typography, spacious negative space */}
      <section id="hero" className="relative min-h-[90vh] flex items-center justify-center py-20 sm:py-32 px-6 overflow-hidden">
        {/* WebGL Golden Aurora Shader Background */}
        <ShaderBackground className="opacity-75" />
        
        {/* Soft bottom mask and vignette to blend into the ultra-dark page design */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[#050505]/20 backdrop-blur-[1px] pointer-events-none" />
        
        {/* Subtle grid accent background */}
        <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-30" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-bold"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Bangalore-Based Software Builders</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-5xl sm:text-7xl font-light tracking-tight text-white leading-[1.1]"
          >
            Simply <span className="text-[#D4AF37] italic">Smarter.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-sm sm:text-base md:text-lg text-white/60 max-w-2xl mx-auto font-sans leading-relaxed text-justify sm:text-center"
          >
            At QUBIX, we focus on building quiet, high-integrity software products, deep data analytics pipelines, and elegant workflow automation scripts for local businesses. No fluff, no bloated corporate overhead. Just actual digital assets built to perform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-4"
          >
            <button
              onClick={() => handleScrollTo('contact')}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-[#D4AF37] hover:bg-[#c29d2e] text-[#050505] font-semibold uppercase text-xs tracking-[0.2em] transition-all rounded-sm shadow-md cursor-pointer hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
              id="hero-cta-button"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Tagline Ribbon & Stats Band */}
      <div className="bg-gradient-to-r from-black via-[#0a0a0a] to-black border-y border-white/10 py-6 text-center">
        <span className="font-serif text-lg sm:text-2xl font-light tracking-wide text-white">Let's <span className="text-[#D4AF37] italic">build.</span> Grow. <span className="text-[#D4AF37] italic">Scale</span> together.</span>
      </div>

      <div className="bg-[#050505] border-b border-white/5 py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-1">
            <span className="block font-serif text-3xl sm:text-4xl text-[#D4AF37] font-light">Custom</span>
            <span className="block text-[9px] uppercase tracking-widest text-white/50 font-bold">Solutions Engineered</span>
          </div>
          <div className="space-y-1">
            <span className="block font-serif text-3xl sm:text-4xl text-[#D4AF37] font-light">Direct</span>
            <span className="block text-[9px] uppercase tracking-widest text-white/50 font-bold">Creator Communication</span>
          </div>
          <div className="space-y-1">
            <span className="block font-serif text-3xl sm:text-4xl text-[#D4AF37] font-light">100%</span>
            <span className="block text-[9px] uppercase tracking-widest text-white/50 font-bold">Authentic Deliverables</span>
          </div>
          <div className="space-y-1">
            <span className="block font-serif text-3xl sm:text-4xl text-[#D4AF37] font-light">Bangalore</span>
            <span className="block text-[9px] uppercase tracking-widest text-white/50 font-bold">Base of Execution</span>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 border-t border-white/10 bg-[#050505]">
        <div className="max-w-6xl mx-auto animate-fadeIn">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-bold bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full inline-block">
              What We Do
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-white tracking-tight">
              Our <span className="text-[#D4AF37]">Services.</span>
            </h2>
            <p className="text-xs sm:text-sm text-white/50 italic font-sans leading-relaxed">
              End-to-end custom digital solutions — from process intelligence to technical architecture — built with absolute integrity.
            </p>
          </div>

          <div className="space-y-16">
            {/* Category 1 */}
            <div>
              <div className="flex items-center space-x-4 mb-8">
                <span className="font-mono text-xs text-[#D4AF37] font-bold tracking-widest">01 /</span>
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-white/70 font-semibold">Strategy & Consulting</span>
                <div className="flex-1 h-[1px] bg-white/10" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[#0a0a0a] border border-white/10 rounded-sm p-6 hover:border-[#D4AF37]/35 transition-all">
                  <div className="w-10 h-10 bg-white/5 border border-white/10 text-[#D4AF37] rounded-sm flex items-center justify-center mb-6">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-serif font-light text-white mb-3">Business Strategy</h3>
                  <p className="text-xs text-white/60 leading-relaxed italic mb-4">We map your growth path with clarity — competitive positioning, market entry, and operational planning.</p>
                  <ul className="space-y-2 text-[10px] font-mono text-white/50">
                    <li className="flex items-center space-x-2"><Check className="w-3 h-3 text-[#D4AF37]" /> <span>Market & Competitive Reviews</span></li>
                    <li className="flex items-center space-x-2"><Check className="w-3 h-3 text-[#D4AF37]" /> <span>Growth Action Plans</span></li>
                    <li className="flex items-center space-x-2"><Check className="w-3 h-3 text-[#D4AF37]" /> <span>Business Model Alignment</span></li>
                  </ul>
                </div>

                <div className="bg-[#0a0a0a] border border-white/10 rounded-sm p-6 hover:border-[#D4AF37]/35 transition-all">
                  <div className="w-10 h-10 bg-white/5 border border-white/10 text-[#D4AF37] rounded-sm flex items-center justify-center mb-6">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-serif font-light text-white mb-3">Digital Transformation</h3>
                  <p className="text-xs text-white/60 leading-relaxed italic mb-4">Transition securely from manual processes to modern systems. We guide your entire digital roadmap.</p>
                  <ul className="space-y-2 text-[10px] font-mono text-white/50">
                    <li className="flex items-center space-x-2"><Check className="w-3 h-3 text-[#D4AF37]" /> <span>Infrastructure Audits</span></li>
                    <li className="flex items-center space-x-2"><Check className="w-3 h-3 text-[#D4AF37]" /> <span>Process Automation Scopes</span></li>
                    <li className="flex items-center space-x-2"><Check className="w-3 h-3 text-[#D4AF37]" /> <span>Modern Software Transition</span></li>
                  </ul>
                </div>

                <div className="bg-[#0a0a0a] border border-white/10 rounded-sm p-6 hover:border-[#D4AF37]/35 transition-all">
                  <div className="w-10 h-10 bg-white/5 border border-white/10 text-[#D4AF37] rounded-sm flex items-center justify-center mb-6">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-serif font-light text-white mb-3">Brand Strategy</h3>
                  <p className="text-xs text-white/60 leading-relaxed italic mb-4">Define absolute brand identity and styling principles that reinforce immediate clarity with local patrons.</p>
                  <ul className="space-y-2 text-[10px] font-mono text-white/50">
                    <li className="flex items-center space-x-2"><Check className="w-3 h-3 text-[#D4AF37]" /> <span>Identity Style Frameworks</span></li>
                    <li className="flex items-center space-x-2"><Check className="w-3 h-3 text-[#D4AF37]" /> <span>Core Message Positioning</span></li>
                    <li className="flex items-center space-x-2"><Check className="w-3 h-3 text-[#D4AF37]" /> <span>Audience Alignment Designs</span></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Category 2 */}
            <div>
              <div className="flex items-center space-x-4 mb-8">
                <span className="font-mono text-xs text-[#D4AF37] font-bold tracking-widest">02 /</span>
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-white/70 font-semibold">Analytics & Intelligence</span>
                <div className="flex-1 h-[1px] bg-white/10" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[#0a0a0a] border border-white/10 rounded-sm p-6 hover:border-[#D4AF37]/35 transition-all">
                  <div className="w-10 h-10 bg-white/5 border border-white/10 text-[#D4AF37] rounded-sm flex items-center justify-center mb-6">
                    <LineChart className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-serif font-light text-white mb-3">Data Analytics</h3>
                  <p className="text-xs text-white/60 leading-relaxed italic mb-4">Unlock raw numerical datasets with customizable dashboards and direct process reporting lines.</p>
                  <ul className="space-y-2 text-[10px] font-mono text-white/50">
                    <li className="flex items-center space-x-2"><Check className="w-3 h-3 text-[#D4AF37]" /> <span>KPI Analytics Dashboards</span></li>
                    <li className="flex items-center space-x-2"><Check className="w-3 h-3 text-[#D4AF37]" /> <span>Sales & Operational Trends</span></li>
                    <li className="flex items-center space-x-2"><Check className="w-3 h-3 text-[#D4AF37]" /> <span>Audience Retention Metrics</span></li>
                  </ul>
                </div>

                <div className="bg-[#0a0a0a] border border-white/10 rounded-sm p-6 hover:border-[#D4AF37]/35 transition-all">
                  <div className="w-10 h-10 bg-white/5 border border-white/10 text-[#D4AF37] rounded-sm flex items-center justify-center mb-6">
                    <Flame className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-serif font-light text-white mb-3">AI & Predictive Modeling</h3>
                  <p className="text-xs text-white/60 leading-relaxed italic mb-4">Leverage modular forecasting frameworks and regression models to estimate operational benchmarks.</p>
                  <ul className="space-y-2 text-[10px] font-mono text-white/50">
                    <li className="flex items-center space-x-2"><Check className="w-3 h-3 text-[#D4AF37]" /> <span>Regression Forecasting Systems</span></li>
                    <li className="flex items-center space-x-2"><Check className="w-3 h-3 text-[#D4AF37]" /> <span>Optimization Computations</span></li>
                    <li className="flex items-center space-x-2"><Check className="w-3 h-3 text-[#D4AF37]" /> <span>Algorithmic Logic Scripts</span></li>
                  </ul>
                </div>

                <div className="bg-[#0a0a0a] border border-white/10 rounded-sm p-6 hover:border-[#D4AF37]/35 transition-all">
                  <div className="w-10 h-10 bg-white/5 border border-white/10 text-[#D4AF37] rounded-sm flex items-center justify-center mb-6">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-serif font-light text-white mb-3">Market Intelligence</h3>
                  <p className="text-xs text-white/60 leading-relaxed italic mb-4">Gather absolute insights about competitive performance corridors and neighborhood demand channels.</p>
                  <ul className="space-y-2 text-[10px] font-mono text-white/50">
                    <li className="flex items-center space-x-2"><Check className="w-3 h-3 text-[#D4AF37]" /> <span>Competitor Performance Mapping</span></li>
                    <li className="flex items-center space-x-2"><Check className="w-3 h-3 text-[#D4AF37]" /> <span>Localized Consumer Trends</span></li>
                    <li className="flex items-center space-x-2"><Check className="w-3 h-3 text-[#D4AF37]" /> <span>Feedback Response Analysis</span></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Category 3 */}
            <div>
              <div className="flex items-center space-x-4 mb-8">
                <span className="font-mono text-xs text-[#D4AF37] font-bold tracking-widest">03 /</span>
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-white/70 font-semibold">Automation & Technology</span>
                <div className="flex-1 h-[1px] bg-white/10" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-[#0a0a0a] border border-white/10 rounded-sm p-5 hover:border-[#D4AF37]/35 transition-all flex flex-col justify-between">
                  <div>
                    <div className="text-[#D4AF37] font-bold font-mono text-[10px] tracking-wide mb-3">SYSTEMIC / 01</div>
                    <h4 className="font-serif text-base text-white mb-2">Workflow Automation</h4>
                    <p className="text-[11px] text-white/60 italic leading-relaxed">Quiet, efficient programs automating repetitive daily operations and freeing staff time.</p>
                  </div>
                </div>

                <div className="bg-[#0a0a0a] border border-white/10 rounded-sm p-5 hover:border-[#D4AF37]/35 transition-all flex flex-col justify-between">
                  <div>
                    <div className="text-[#D4AF37] font-bold font-mono text-[10px] tracking-wide mb-3">SYSTEMIC / 02</div>
                    <h4 className="font-serif text-base text-white mb-2">CRM Integration</h4>
                    <p className="text-[11px] text-white/60 italic leading-relaxed">Synchronize client funnels across Zoho, HubSpot, or custom pipelines with no database friction.</p>
                  </div>
                </div>

                <div className="bg-[#0a0a0a] border border-white/10 rounded-sm p-5 hover:border-[#D4AF37]/35 transition-all flex flex-col justify-between">
                  <div>
                    <div className="text-[#D4AF37] font-bold font-mono text-[10px] tracking-wide mb-3">SYSTEMIC / 03</div>
                    <h4 className="font-serif text-base text-white mb-2">Web & Client Portals</h4>
                    <p className="text-[11px] text-white/60 italic leading-relaxed">High-performance digital storefronts and unified operational portals designed to compile fast.</p>
                  </div>
                </div>

                <div className="bg-[#0a0a0a] border border-white/10 rounded-sm p-5 hover:border-[#D4AF37]/35 transition-all flex flex-col justify-between">
                  <div>
                    <div className="text-[#D4AF37] font-bold font-mono text-[10px] tracking-wide mb-3">SYSTEMIC / 04</div>
                    <h4 className="font-serif text-base text-white mb-2">AI Interface Chat</h4>
                    <p className="text-[11px] text-white/60 italic leading-relaxed">Deploy robust automated leads intake routing and responsive chat workflows 24 hours a day.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Category 4 */}
            <div>
              <div className="flex items-center space-x-4 mb-8">
                <span className="font-mono text-xs text-[#D4AF37] font-bold tracking-widest">04 /</span>
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-white/70 font-semibold">Growth & Marketing</span>
                <div className="flex-1 h-[1px] bg-white/10" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[#0a0a0a] border border-white/10 rounded-sm p-6 hover:border-[#D4AF37]/35 transition-all">
                  <div className="w-10 h-10 bg-white/5 border border-white/10 text-[#D4AF37] rounded-sm flex items-center justify-center mb-6">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-serif font-light text-white mb-3">Performance Marketing</h3>
                  <p className="text-xs text-white/60 leading-relaxed italic mb-4">Optimize distribution on Google, Meta, and target channels to convert visitors cleanly with low daily waste.</p>
                  <ul className="space-y-2 text-[10px] font-mono text-white/50">
                    <li className="flex items-center space-x-2"><Check className="w-3 h-3 text-[#D4AF37]" /> <span>Search & Social Ad Outlays</span></li>
                    <li className="flex items-center space-x-2"><Check className="w-3 h-3 text-[#D4AF37]" /> <span>Lead Route Retargeting</span></li>
                    <li className="flex items-center space-x-2"><Check className="w-3 h-3 text-[#D4AF37]" /> <span>Conversion Optimization Plans</span></li>
                  </ul>
                </div>

                <div className="bg-[#0a0a0a] border border-white/10 rounded-sm p-6 hover:border-[#D4AF37]/35 transition-all">
                  <div className="w-10 h-10 bg-white/5 border border-white/10 text-[#D4AF37] rounded-sm flex items-center justify-center mb-6">
                    <Grid className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-serif font-light text-white mb-3">SEO & Organic Strategy</h3>
                  <p className="text-xs text-white/60 leading-relaxed italic mb-4">Structure web resources and direct index mappings so your organic discoverability rises naturally over time.</p>
                  <ul className="space-y-2 text-[10px] font-mono text-white/50">
                    <li className="flex items-center space-x-2"><Check className="w-3 h-3 text-[#D4AF37]" /> <span>Technical Architecture Indexing</span></li>
                    <li className="flex items-center space-x-2"><Check className="w-3 h-3 text-[#D4AF37]" /> <span>Search Term Discoverability</span></li>
                    <li className="flex items-center space-x-2"><Check className="w-3 h-3 text-[#D4AF37]" /> <span>Local Listing Domination</span></li>
                  </ul>
                </div>

                <div className="bg-[#0a0a0a] border border-white/10 rounded-sm p-6 hover:border-[#D4AF37]/35 transition-all">
                  <div className="w-10 h-10 bg-white/5 border border-white/10 text-[#D4AF37] rounded-sm flex items-center justify-center mb-6">
                    <Coffee className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-serif font-light text-white mb-3">Social Media & Styling</h3>
                  <p className="text-xs text-white/60 leading-relaxed italic mb-4">Design rich, authentic styling, consistent visual grid catalogs, and direct messaging guides for local accounts.</p>
                  <ul className="space-y-2 text-[10px] font-mono text-white/50">
                    <li className="flex items-center space-x-2"><Check className="w-3 h-3 text-[#D4AF37]" /> <span>Visual Styling Handbooks</span></li>
                    <li className="flex items-center space-x-2"><Check className="w-3 h-3 text-[#D4AF37]" /> <span>Grid Catalog Organization</span></li>
                    <li className="flex items-center space-x-2"><Check className="w-3 h-3 text-[#D4AF37]" /> <span>Local Brand Voice Setup</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Portfolio Block - Crisp grid displaying the simplified collaborations + data science projects */}
      <section id="portfolio" className="py-24 px-6 border-t border-white/10 bg-black/40">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-bold bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full inline-block">
              Our Collaborations & Builds
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-white tracking-tight">
              Real Scopes<span className="text-[#D4AF37]">. Transparent Engineering.</span>
            </h2>
            <p className="text-xs sm:text-sm text-white/50 italic font-sans leading-relaxed">
              We focus on building functional software and risk models suited directly for operations. Here is a review of our live projects and technical labs.
            </p>
          </div>

          {/* Grid Layout of projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PORTFOLIO_PROJECTS.map((project, index) => {
              // Custom lightweight client category icons
              const getIcon = (id: string) => {
                if (id === 'p-1') return <Utensils className="w-5 h-5" />;
                if (id === 'p-2') return <Coffee className="w-5 h-5" />;
                if (id === 'p-4') return <ShoppingBag className="w-5 h-5" />;
                if (id === 'p-5') return <Briefcase className="w-5 h-5" />;
                if (id === 'p-6') return <LineChart className="w-5 h-5" />;
                if (id === 'p-7') return <Flame className="w-5 h-5" />;
                return <Grid className="w-5 h-5" />;
              };

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                  className="bg-[#0e0e0e] border border-white/10 hover:border-[#D4AF37]/40 rounded-sm overflow-hidden flex flex-col justify-between hover:shadow-lg transition-all duration-300"
                  id={`portfolio-card-${project.id}`}
                >
                  <div>
                    {/* Visual Card Image */}
                    <div className="h-48 overflow-hidden relative">
                      <img 
                        src={project.imageUrl} 
                        alt={project.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center filter saturate-[0.85] hover:saturate-100 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                      
                      {/* Floating custom icon tag */}
                      <div className="absolute top-4 right-4 w-9 h-9 bg-[#050505] border border-[#D4AF37]/35 text-[#D4AF37] rounded-sm flex items-center justify-center shadow-sm">
                        {getIcon(project.id)}
                      </div>
                    </div>

                    {/* Text Details */}
                    <div className="p-6 space-y-4">
                      <div>
                        <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#D4AF37] font-bold">
                          {project.category}
                        </span>
                        <h3 className="font-serif text-xl sm:text-2xl font-light text-white mt-1 leading-tight border-b border-white/5 pb-2">
                          {project.title}
                        </h3>
                      </div>
                      
                      <p className="text-xs text-white/70 leading-relaxed font-sans text-justify italic">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Badges footer */}
                  <div className="p-6 pt-0">
                    <div className="pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-sm bg-white/[0.03] text-[#D4AF37] font-mono text-[8px] uppercase tracking-wider font-semibold border border-[#D4AF37]/15"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Agile Core Statement - Humble, authentic, high-impact branding block */}
      <section id="about" className="py-24 px-6 bg-[#050505] border-t border-white/5 text-white overflow-hidden relative">
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-bold"
          >
            <Briefcase className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>DIRECT ARCHITECTURE & CODE</span>
          </motion.div>

          <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight">
            Our Agile <span className="text-[#D4AF37] italic">Core Statement.</span>
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-white/70 leading-relaxed font-sans text-justify sm:text-center italic max-w-3xl mx-auto">
            "{TEAM_STATEMENT}"
          </p>

          <div className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-6 font-mono max-w-2xl mx-auto">
            <div className="p-4 bg-white/5 border border-white/5 rounded-sm">
              <span className="block font-serif text-3xl text-white font-light">15+</span>
              <span className="text-[8px] uppercase tracking-widest text-[#D4AF37] block mt-1 font-bold">Clients Served</span>
            </div>
            <div className="p-4 bg-white/5 border border-white/5 rounded-sm">
              <span className="block font-serif text-3xl text-[#D4AF37] font-light">98%</span>
              <span className="text-[8px] uppercase tracking-widest text-white/50 block mt-1 font-bold">Retention Rate</span>
            </div>
            <div className="p-4 bg-white/5 border border-white/5 rounded-sm">
              <span className="block font-serif text-3xl text-white font-light">5×</span>
              <span className="text-[8px] uppercase tracking-widest text-[#D4AF37] block mt-1 font-bold">Avg. ROI Delivered</span>
            </div>
            <div className="p-4 bg-white/5 border border-white/5 rounded-sm">
              <span className="block font-serif text-3xl text-[#D4AF37] font-light">1</span>
              <span className="text-[8px] uppercase tracking-widest text-white/50 block mt-1 font-bold">Years in Bangalore</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section id="process" className="py-24 px-6 border-t border-white/5 bg-[#0a0a0a] relative">
        <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-10" />
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-bold bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full inline-block">
              Our Process
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-white tracking-tight">
              A Simple <span className="text-[#D4AF37] italic">Engineered Routine.</span>
            </h2>
            <p className="text-xs sm:text-sm text-white/50 italic font-sans leading-relaxed text-center">
              We skip lengthy corporate workshops and deploy reliable structures with direct, actionable check-ins.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            <div className="bg-[#050505] border border-white/10 rounded-sm p-6 space-y-4 hover:border-[#D4AF37]/30 transition-all">
              <span className="font-mono text-xs text-[#D4AF37] font-semibold block bg-white/5 w-8 h-8 rounded-full flex items-center justify-center border border-white/10">01</span>
              <h3 className="font-serif text-lg text-white">Discover & Audit</h3>
              <p className="text-xs text-white/60 leading-relaxed italic">We inspect your current workflows, legacy software structures, and client intake channels with no friction.</p>
            </div>

            <div className="bg-[#050505] border border-white/10 rounded-sm p-6 space-y-4 hover:border-[#D4AF37]/30 transition-all">
              <span className="font-mono text-xs text-[#D4AF37] font-semibold block bg-white/5 w-8 h-8 rounded-full flex items-center justify-center border border-white/10">02</span>
              <h3 className="font-serif text-lg text-white">Strategise & Plan</h3>
              <p className="text-xs text-white/60 leading-relaxed italic">Draft a plain-English roadmap identifying immediate automation objectives, data modeling boundaries, and expected outcomes.</p>
            </div>

            <div className="bg-[#050505] border border-white/10 rounded-sm p-6 space-y-4 hover:border-[#D4AF37]/30 transition-all">
              <span className="font-mono text-xs text-[#D4AF37] font-semibold block bg-white/5 w-8 h-8 rounded-full flex items-center justify-center border border-white/10">03</span>
              <h3 className="font-serif text-lg text-white">Build & Execute</h3>
              <p className="text-xs text-white/60 leading-relaxed italic">Deploy high-integrity digital assets directly. You review early iterations face-to-face with the developers.</p>
            </div>

            <div className="bg-[#050505] border border-white/15 rounded-sm p-6 space-y-4 hover:border-[#D4AF37]/35 transition-all">
              <span className="font-mono text-xs text-[#D4AF37] font-semibold block bg-white/5 w-8 h-8 rounded-full flex items-center justify-center border border-white/10">04</span>
              <h3 className="font-serif text-lg text-white">Measure & Scale</h3>
              <p className="text-xs text-white/60 leading-relaxed italic">Continuously streamline the code base, monitor lead flows, and optimize local visibility networks securely.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why" className="py-24 px-6 border-t border-white/5 bg-[#050505]">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-bold bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full inline-block">
              Why us
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-white tracking-tight">
              The <span className="text-[#D4AF37] italic">Qubix Advantage.</span>
            </h2>
            <p className="text-xs sm:text-sm text-white/50 italic font-sans leading-relaxed text-center">
              We focus on measurable utility and quiet code excellence over marketing fluff.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#0a0a0a] border border-white/10 rounded-sm p-8 text-center space-y-4 hover:border-[#D4AF37]/30 transition-all">
              <div className="w-12 h-12 bg-white/5 text-[#D4AF37] border border-white/10 rounded-full flex items-center justify-center mx-auto">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif font-light text-white">Bangalore-First Focus</h3>
              <p className="text-xs text-white/65 leading-relaxed italic">We understand the local hospitality, retail, and consulting ecosystems like our own backyard.</p>
            </div>

            <div className="bg-[#0a0a0a] border border-white/10 rounded-sm p-8 text-center space-y-4 hover:border-[#D4AF37]/30 transition-all">
              <div className="w-12 h-12 bg-white/5 text-[#D4AF37] border border-white/10 rounded-full flex items-center justify-center mx-auto">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif font-light text-white">Process Automation</h3>
              <p className="text-xs text-white/65 leading-relaxed italic">Leverage high-utility custom programs to streamline manual data tracking and client booking cycles.</p>
            </div>

            <div className="bg-[#0a0a0a] border border-white/10 rounded-sm p-8 text-center space-y-4 hover:border-[#D4AF37]/30 transition-all">
              <div className="w-12 h-12 bg-white/5 text-[#D4AF37] border border-white/10 rounded-full flex items-center justify-center mx-auto">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif font-light text-white">Direct Execution</h3>
              <p className="text-xs text-white/65 leading-relaxed italic">Work directly with original builders—zero project managers, zero communication delay, and true execution speed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic CTA Ribbon Band */}
      <div className="bg-gradient-to-r from-black via-[#0a0a0a] to-black border-y border-white/10 py-16 px-6 text-center space-y-6">
        <h2 className="font-serif text-3xl sm:text-4xl font-light text-white tracking-tight">
          Ready to <span className="text-[#D4AF37]">Build. Grow. Scale?</span>
        </h2>
        <p className="text-xs sm:text-sm text-white/60 font-sans italic max-w-lg mx-auto leading-relaxed text-center">
          Let's talk about how we can transform your local business operations with streamlined custom software and dashboard analytics.
        </p>
        <button 
          onClick={() => handleScrollTo('contact')}
          className="inline-flex items-center space-x-2 px-8 py-3 bg-[#D4AF37] hover:bg-[#c29d2e] text-[#050505] font-mono text-xs uppercase tracking-[0.2em] font-bold rounded-sm shadow-md transition-all hover:scale-[1.02] cursor-pointer"
        >
          <span>Start the Conversation</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 5. Ultra-Basic Contact Form - Basic, extremely intuitive and direct */}
      <section id="contact" className="py-24 px-6 bg-[#050505] border-t border-white/10 relative">
        <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-20" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16 space-y-4">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-bold bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full inline-block">
              Initiate Collaborative Scopes
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-white tracking-tight">
              Let's <span className="text-[#D4AF37] italic">Collaborate.</span>
            </h2>
            <p className="text-xs sm:text-sm text-white/50 font-sans italic max-w-lg mx-auto leading-relaxed text-center">
              Ready to automate your operations or outline a clean data dashboard? Let's connect directly below.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column: Direct Contact Details List */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="font-serif text-2xl sm:text-3xl font-light text-white">
                  Talk to the <span className="text-[#D4AF37]">Qubix Team.</span>
                </h3>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-sans italic">
                  Whether you're looking to scale, automate, or completely transform your digital presence — we're one direct, middle-man-free conversation away.
                </p>
              </div>

              <div className="space-y-4">
                <a 
                  href="tel:+919986592905" 
                  className="flex items-center space-x-4 p-4 rounded-sm bg-white/[0.02] border border-white/5 hover:border-[#D4AF37]/35 transition-all group"
                >
                  <div className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 text-[#D4AF37] flex items-center justify-center group-hover:bg-[#D4AF37]/5 transition-all">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-mono text-[8px] uppercase tracking-wider text-white/40 font-bold">Call Us Direct</span>
                    <span className="block text-sm sm:text-base text-white font-semibold font-mono group-hover:text-[#D4AF37] transition-all">+91 99865 92905</span>
                  </div>
                </a>

                <a 
                  href="mailto:theteam.qubix@gmail.com" 
                  className="flex items-center space-x-4 p-4 rounded-sm bg-white/[0.02] border border-white/5 hover:border-[#D4AF37]/35 transition-all group"
                >
                  <div className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 text-[#D4AF37] flex items-center justify-center group-hover:bg-[#D4AF37]/5 transition-all">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-mono text-[8px] uppercase tracking-wider text-white/40 font-bold">Email Us Directly</span>
                    <span className="block text-sm sm:text-base text-white font-semibold font-mono group-hover:text-[#D4AF37] transition-all">theteam.qubix@gmail.com</span>
                  </div>
                </a>

                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-sm bg-white/[0.02] border border-white/5 hover:border-[#D4AF37]/35 transition-all group"
                >
                  <div className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 text-[#D4AF37] flex items-center justify-center group-hover:bg-[#D4AF37]/5 transition-all">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-mono text-[8px] uppercase tracking-wider text-white/40 font-bold">DM on Instagram</span>
                    <span className="block text-sm sm:text-base text-white font-semibold font-mono group-hover:text-[#D4AF37] transition-all">@qubix.co</span>
                  </div>
                </a>

                <div className="flex items-center space-x-4 p-4 rounded-sm bg-white/[0.02] border border-white/5">
                  <div className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 text-[#D4AF37] flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-mono text-[8px] uppercase tracking-wider text-white/40 font-bold">Location Hub</span>
                    <span className="block text-sm sm:text-base text-white font-semibold font-mono">Bangalore, Karnataka</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Custom Rich Message Form */}
            <div className="border border-white/10 rounded-sm bg-[#0a0a0a] p-6 sm:p-10 shadow-sm relative w-full">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                  >
                    <div className="space-y-1.5">{/* Name */}
                      <label className="block text-[10px] uppercase font-mono tracking-widest text-white/60 font-bold">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border border-white/10 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] rounded-sm bg-white/[0.02] text-xs sm:text-sm font-sans text-white placeholder-white/30 outline-none transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">{/* Email */}
                      <label className="block text-[10px] uppercase font-mono tracking-widest text-white/60 font-bold">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border border-white/10 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] rounded-sm bg-white/[0.02] text-xs sm:text-sm font-sans text-white placeholder-white/30 outline-none transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">{/* Phone */}
                      <label className="block text-[10px] uppercase font-mono tracking-widest text-white/60 font-bold">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. +91 99865 92905"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 border border-white/10 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] rounded-sm bg-white/[0.02] text-xs sm:text-sm font-sans text-white placeholder-white/30 outline-none transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">{/* Service Selector */}
                      <label className="block text-[10px] uppercase font-mono tracking-widest text-white/60 font-bold">
                        Service Interested In
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 border border-white/10 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] rounded-sm bg-[#0e0e0e] text-xs sm:text-sm font-sans text-white placeholder-white/30 outline-none transition-all"
                      >
                        <option value="">Select a service category...</option>
                        <option value="business-strategy">Business Strategy & Consulting</option>
                        <option value="digital-transformation">Digital Transformation & Tech Stack</option>
                        <option value="brand-strategy">Brand Strategy & Personas</option>
                        <option value="data-analytics">KPI Data Analytics & Dashboards</option>
                        <option value="ai-ml">AI & Predictive Modeling Systems</option>
                        <option value="workflow-automation">Workflow Automation Scripts</option>
                        <option value="crm-integration">CRM Implementation (Zoho/HubSpot)</option>
                        <option value="development">Web & Client Portal Development</option>
                        <option value="performance-marketing">Performance Marketing & Growth</option>
                        <option value="seo">SEO & Local Organic Growth</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">{/* Message */}
                      <label className="block text-[10px] uppercase font-mono tracking-widest text-white/60 font-bold">
                        Detailed Message
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Tell us about your business and goals..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 border border-white/10 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] rounded-sm bg-white/[0.02] text-xs sm:text-sm font-sans text-white placeholder-white/30 outline-none transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-[#D4AF37] hover:bg-[#c29d2e] text-[#050505] font-mono text-xs uppercase tracking-[0.2em] font-bold rounded-sm shadow-md cursor-pointer transition-all flex items-center justify-center space-x-2 animate-fadeIn"
                    >
                      <span>Send Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 text-center space-y-4"
                  >
                    <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center text-[#D4AF37] mx-auto border border-[#D4AF37]/20">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h3 className="font-serif text-2xl font-light text-white">
                      Message Received.
                    </h3>
                    <p className="text-xs text-white/60 leading-relaxed font-sans max-w-sm mx-auto">
                      Thank you, {formData.name}. We will review your message immediately and respond directly to <span className="font-bold text-[#D4AF37] font-mono">{formData.email}</span> within 24 hours.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Simple Editorial Footer */}
      <footer className="bg-[#050505] text-white/40 py-12 px-6 border-t border-white/5 font-mono text-center">
        <div className="max-w-6xl mx-auto space-y-4">
          <div className="flex items-center justify-center space-x-2.5 group">
            <QubixLogoIcon />
            <span className="font-sans text-lg font-bold tracking-wide text-white leading-none">
              Qubix
            </span>
          </div>
          <p className="text-[10px] uppercase tracking-widest leading-loose">
            © {new Date().getFullYear()} QUBIX (SIMPLY SMARTER). ALL RIGHTS RESERVED.
          </p>
          <div className="flex justify-center space-x-6 text-[9px] uppercase tracking-widest font-semibold pt-1 text-white/50">
            <button onClick={() => handleScrollTo('hero')} className="hover:text-[#D4AF37]">Home</button>
            <span>•</span>
            <button onClick={() => handleScrollTo('portfolio')} className="hover:text-[#D4AF37]">Projects</button>
            <span>•</span>
            <button onClick={() => handleScrollTo('about')} className="hover:text-[#D4AF37]">The Team</button>
            <span>•</span>
            <a href="mailto:theteam.qubix@gmail.com" className="hover:text-[#D4AF37]">Support</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
