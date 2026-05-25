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
      <linearGradient id="logoCyanTeal" x1="15%" y1="15%" x2="85%" y2="85%">
        <stop offset="0%" stopColor="#25e5fc" />
        <stop offset="35%" stopColor="#1bb8f1" />
        <stop offset="70%" stopColor="#0e9df1" />
        <stop offset="100%" stopColor="#0072f5" />
      </linearGradient>
      <linearGradient id="logoGlow" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#25e5fc" stopOpacity="0.35" />
        <stop offset="100%" stopColor="#0072f5" stopOpacity="0" />
      </linearGradient>
    </defs>
    
    {/* Outer Isometric Hexagon boundary with premium styling */}
    <path 
      d="M50 14.5 L84.6 34.5 L84.6 72.5 L50 92.5 L15.4 72.5 L15.4 34.5 Z" 
      stroke="url(#logoCyanTeal)" 
      strokeWidth="5.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />

    {/* Top Face - Concentric outer diamond border */}
    <path 
      d="M50 14.5 L84.6 34.5 L50 54.5 L15.4 34.5 Z" 
      stroke="url(#logoCyanTeal)" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      opacity="0.3" 
    />

    {/* Top Face - Mid-size concentric diamond */}
    <path 
      d="M50 24.5 L69 35.5 L50 46.5 L31 35.5 Z" 
      stroke="url(#logoCyanTeal)" 
      strokeWidth="3.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />

    {/* Top Face - Inner concentric smaller diamond */}
    <path 
      d="M50 29.5 L60 35.5 L50 41.5 L40 35.5 Z" 
      stroke="url(#logoCyanTeal)" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />

    {/* Center Vertical Axis Link */}
    <path 
      d="M50 54.5 L50 71.5" 
      stroke="url(#logoCyanTeal)" 
      strokeWidth="4" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />

    {/* Front Left Face - Outer-ish concentric left border line */}
    <path 
      d="M23.5 39.5 L23.5 68 L50 83.3" 
      stroke="url(#logoCyanTeal)" 
      strokeWidth="3.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
    <path 
      d="M50 83.3 L50 78.5" 
      stroke="url(#logoCyanTeal)" 
      strokeWidth="3.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />

    {/* Front Left Face - Floating C-shape / hook structure */}
    <path 
      d="M29.5 62 L45.5 71.2 L45.5 62.5 L34.5 56" 
      stroke="url(#logoCyanTeal)" 
      strokeWidth="3.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />

    {/* Front Left Face - Small decorative isometric floating square */}
    <polygon 
      points="41.5,45.5 45.5,47.8 45.5,51.8 41.5,49.5" 
      fill="url(#logoCyanTeal)" 
    />

    {/* Front Right Face - Skewed Portal/Doorway Frame */}
    <path 
      d="M57.5 54.3 L74.5 44.5 L74.5 74.3 L57.5 84.1 Z" 
      stroke="url(#logoCyanTeal)" 
      strokeWidth="3.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />

    {/* Front Right Face - Inner vertical slot and handle */}
    <path 
      d="M66 49.4 L66 79.2" 
      stroke="url(#logoCyanTeal)" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
    />
    
    {/* Door Handle Plate Detail */}
    <polygon 
      points="66,61 70,58.7 70,66.7 66,69" 
      fill="url(#logoCyanTeal)" 
    />

    {/* Front Right Face - Left column square dots */}
    {/* Upper Square */}
    <polygon 
      points="52.5,53.5 55.5,51.8 55.5,55.8 52.5,57.5" 
      fill="url(#logoCyanTeal)" 
    />
    {/* Lower Square */}
    <polygon 
      points="52.5,73.5 55.5,71.8 55.5,75.8 52.5,77.5" 
      fill="url(#logoCyanTeal)" 
    />

    {/* Top-Right & Top-Left face dynamic separation lines (delightful subtle details) */}
    <path 
      d="M15.4 34.5 L50 54.5 L84.6 34.5" 
      stroke="url(#logoCyanTeal)" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      opacity="0.25" 
    />

    {/* Soft inner glow core mimicking the glass surface depth */}
    <polygon points="50,24.5 69,35.5 50,46.5 31,35.5" fill="url(#logoGlow)" />
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
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-sky-200/50 antialiased">
      
      {/* 1. Header Navigation - Minimal, Editorial, High Contrast */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-sky-100 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer select-none group" onClick={() => handleScrollTo('hero')}>
            <div className="relative flex-shrink-0">
              <QubixLogoIcon />
              <div className="absolute inset-0 bg-[#2ab4d0]/15 blur-md rounded-full -z-10 opacity-70 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-xl font-bold tracking-wide text-slate-900 leading-none">
                Qubix
              </span>
              <span className="text-[9px] uppercase tracking-[0.18em] text-sky-600 font-semibold leading-tight mt-1">
                Simply Smarter
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6 text-[11px] font-mono uppercase tracking-widest">
            <button 
              onClick={() => handleScrollTo('services')} 
              className="text-slate-600 hover:text-sky-600 transition-colors cursor-pointer"
            >
              Services
            </button>
            <button 
              onClick={() => handleScrollTo('portfolio')} 
              className="text-slate-600 hover:text-sky-600 transition-colors cursor-pointer"
            >
              Our Work
            </button>
            <button 
              onClick={() => handleScrollTo('process')} 
              className="text-slate-600 hover:text-sky-600 transition-colors cursor-pointer"
            >
              Process
            </button>
            <button 
              onClick={() => handleScrollTo('why')} 
              className="text-slate-600 hover:text-sky-600 transition-colors cursor-pointer"
            >
              Why Us
            </button>
            <button 
              onClick={() => handleScrollTo('about')} 
              className="text-slate-600 hover:text-sky-600 transition-colors cursor-pointer"
            >
              The Team
            </button>
            <button 
              onClick={() => handleScrollTo('contact')} 
              className="px-4 py-2 bg-sky-50 border border-sky-200 hover:border-sky-400 hover:bg-sky-100/50 text-sky-600 rounded-sm transition-all shadow-sm font-semibold cursor-pointer"
            >
              Contact
            </button>
          </div>
          {/* Mobile minimal call-to-action */}
          <div className="md:hidden flex items-center space-x-3 text-[11px] font-mono uppercase tracking-widest">
            <button 
              onClick={() => handleScrollTo('contact')} 
              className="px-3 py-1.5 bg-sky-50 border border-sky-200 hover:border-sky-400 hover:bg-sky-100/50 text-sky-600 rounded-sm transition-all text-[10px] font-semibold cursor-pointer"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* 2. Hero Section - Crisp typography, spacious negative space */}
      <section id="hero" className="relative min-h-[90vh] flex items-center justify-center py-20 sm:py-32 px-6 overflow-hidden">
        {/* WebGL Golden Aurora Shader Background - shifted to Beautiful Sky Blue in shader code */}
        <ShaderBackground className="opacity-75" />
        
        {/* Soft bottom mask and vignette to blend into the light page design */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-white/25 backdrop-blur-[1px] pointer-events-none" />
        
        {/* Subtle grid accent background */}
        <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-10" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-155 border-sky-100 text-[10px] uppercase tracking-[0.2em] text-sky-600 font-bold"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Bangalore-Based Software Builders</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-5xl sm:text-7xl font-light tracking-tight text-slate-900 leading-[1.1]"
          >
            Simply <span className="text-sky-600 italic">Smarter.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-sm sm:text-base md:text-lg text-slate-650 max-w-2xl mx-auto font-sans leading-relaxed text-justify sm:text-center"
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
              className="inline-flex items-center space-x-2 px-8 py-4 bg-sky-600 hover:bg-sky-700 text-white font-semibold uppercase text-xs tracking-[0.2em] transition-all rounded-sm shadow-md cursor-pointer hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
              id="hero-cta-button"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Tagline Ribbon & Stats Band */}
      <div className="bg-gradient-to-r from-sky-50 via-white to-sky-50 border-y border-sky-100 py-6 text-center">
        <span className="font-serif text-lg sm:text-2xl font-light tracking-wide text-slate-800">Let's <span className="text-sky-600 italic">build.</span> Grow. <span className="text-sky-600 italic">Scale</span> together.</span>
      </div>

      <div className="bg-white border-b border-sky-100/60 py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-1">
            <span className="block font-serif text-3xl sm:text-4xl text-sky-600 font-light">Custom</span>
            <span className="block text-[9px] uppercase tracking-widest text-slate-400 font-bold">Solutions Engineered</span>
          </div>
          <div className="space-y-1">
            <span className="block font-serif text-3xl sm:text-4xl text-sky-600 font-light">Direct</span>
            <span className="block text-[9px] uppercase tracking-widest text-slate-400 font-bold">Creator Communication</span>
          </div>
          <div className="space-y-1">
            <span className="block font-serif text-3xl sm:text-4xl text-sky-600 font-light">100%</span>
            <span className="block text-[9px] uppercase tracking-widest text-slate-400 font-bold">Authentic Deliverables</span>
          </div>
          <div className="space-y-1">
            <span className="block font-serif text-3xl sm:text-4xl text-sky-600 font-light">Bangalore</span>
            <span className="block text-[9px] uppercase tracking-widest text-slate-400 font-bold">Base of Execution</span>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 border-t border-sky-100 bg-slate-50">
        <div className="max-w-6xl mx-auto animate-fadeIn">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-sky-600 font-bold bg-sky-50 border border-sky-100 px-3.5 py-1.5 rounded-full inline-block">
              What We Do
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-slate-900 tracking-tight">
              Our <span className="text-sky-600">Services.</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 italic font-sans leading-relaxed">
              End-to-end custom digital solutions — from process intelligence to technical architecture — built with absolute integrity.
            </p>
          </div>

          <div className="space-y-16">
            {/* Category 1 */}
            <div>
              <div className="flex items-center space-x-4 mb-8">
                <span className="font-mono text-xs text-sky-600 font-bold tracking-widest">01 /</span>
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-slate-650 font-semibold">Strategy & Consulting</span>
                <div className="flex-1 h-[1px] bg-slate-200" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white border border-sky-100/80 rounded-sm p-6 hover:border-sky-300 shadow-sm transition-all hover:shadow-md">
                  <div className="w-10 h-10 bg-sky-50/70 border border-sky-100/70 text-sky-600 rounded-sm flex items-center justify-center mb-6">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-serif font-light text-slate-800 mb-3">Business Strategy</h3>
                  <p className="text-xs text-slate-600 leading-relaxed italic mb-4">We map your growth path with clarity — competitive positioning, market entry, and operational planning.</p>
                  <ul className="space-y-2 text-[10px] font-mono text-slate-500">
                    <li className="flex items-center space-x-2"><Check className="w-3 h-3 text-sky-500" /> <span>Market & Competitive Reviews</span></li>
                    <li className="flex items-center space-x-2"><Check className="w-3 h-3 text-sky-500" /> <span>Growth Action Plans</span></li>
                    <li className="flex items-center space-x-2"><Check className="w-3 h-3 text-sky-505 text-sky-500" /> <span>Business Model Alignment</span></li>
                  </ul>
                </div>

                <div className="bg-white border border-sky-100/80 rounded-sm p-6 hover:border-sky-300 shadow-sm transition-all hover:shadow-md">
                  <div className="w-10 h-10 bg-sky-50/70 border border-sky-100/70 text-sky-600 rounded-sm flex items-center justify-center mb-6">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-serif font-light text-slate-800 mb-3">Digital Transformation</h3>
                  <p className="text-xs text-slate-600 leading-relaxed italic mb-4">Transition securely from manual processes to modern systems. We guide your entire digital roadmap.</p>
                  <ul className="space-y-2 text-[10px] font-mono text-slate-500">
                    <li className="flex items-center space-x-2"><Check className="w-3 h-3 text-sky-505 text-sky-500" /> <span>Infrastructure Audits</span></li>
                    <li className="flex items-center space-x-2"><Check className="w-3 h-3 text-sky-505 text-sky-500" /> <span>Process Automation Scopes</span></li>
                    <li className="flex items-center space-x-2"><Check className="w-3 h-3 text-sky-505 text-sky-500" /> <span>Modern Software Transition</span></li>
                  </ul>
                </div>

                <div className="bg-white border border-sky-100/80 rounded-sm p-6 hover:border-sky-300 shadow-sm transition-all hover:shadow-md">
                  <div className="w-10 h-10 bg-sky-50/70 border border-sky-100/70 text-sky-600 rounded-sm flex items-center justify-center mb-6">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-serif font-light text-slate-800 mb-3">Brand Strategy</h3>
                  <p className="text-xs text-slate-600 leading-relaxed italic mb-4">Define absolute brand identity and styling principles that reinforce immediate clarity with local patrons.</p>
                  <ul className="space-y-2 text-[10px] font-mono text-slate-500">
                    <li className="flex items-center space-x-2"><Check className="w-3 h-3 text-sky-505 text-sky-500" /> <span>Identity Style Frameworks</span></li>
                    <li className="flex items-center space-x-2"><Check className="w-3 h-3 text-sky-505 text-sky-500" /> <span>Core Message Positioning</span></li>
                    <li className="flex items-center space-x-2"><Check className="w-3 h-3 text-sky-505 text-sky-500" /> <span>Audience Alignment Designs</span></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Category 2 */}
            <div>
              <div className="flex items-center space-x-4 mb-8">
                <span className="font-mono text-xs text-sky-600 font-bold tracking-widest">02 /</span>
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-slate-650 font-semibold">Analytics & Intelligence</span>
                <div className="flex-1 h-[1px] bg-slate-200" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white border border-sky-100/80 rounded-sm p-6 hover:border-sky-300 shadow-sm transition-all hover:shadow-md">
                  <div className="w-10 h-10 bg-sky-50/70 border border-sky-100/70 text-sky-600 rounded-sm flex items-center justify-center mb-6">
                    <LineChart className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-serif font-light text-slate-800 mb-3">Data Analytics</h3>
                  <p className="text-xs text-slate-600 leading-relaxed italic mb-4">Unlock raw numerical datasets with customizable dashboards and direct process reporting lines.</p>
                  <ul className="space-y-2 text-[10px] font-mono text-slate-500">
                    <li className="flex items-center space-x-2"><Check className="w-3 h-3 text-sky-505 text-sky-500" /> <span>KPI Analytics Dashboards</span></li>
                    <li className="flex items-center space-x-2"><Check className="w-3 h-3 text-sky-505 text-sky-500" /> <span>Sales & Operational Trends</span></li>
                    <li className="flex items-center space-x-2"><Check className="w-3 h-3 text-sky-505 text-sky-500" /> <span>Audience Retention Metrics</span></li>
                  </ul>
                </div>

                <div className="bg-white border border-sky-100/80 rounded-sm p-6 hover:border-sky-300 shadow-sm transition-all hover:shadow-md">
                  <div className="w-10 h-10 bg-sky-50/70 border border-sky-100/70 text-sky-600 rounded-sm flex items-center justify-center mb-6">
                    <Flame className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-serif font-light text-slate-800 mb-3">AI & Predictive Modeling</h3>
                  <p className="text-xs text-slate-600 leading-relaxed italic mb-4">Leverage modular forecasting frameworks and regression models to estimate operational benchmarks.</p>
                  <ul className="space-y-2 text-[10px] font-mono text-slate-500">
                    <li className="flex items-center space-x-2"><Check className="w-3 h-3 text-sky-505 text-sky-500" /> <span>Regression Forecasting Systems</span></li>
                    <li className="flex items-center space-x-2"><Check className="w-3 h-3 text-sky-505 text-sky-500" /> <span>Optimization Computations</span></li>
                    <li className="flex items-center space-x-2"><Check className="w-3 h-3 text-sky-505 text-sky-500" /> <span>Algorithmic Logic Scripts</span></li>
                  </ul>
                </div>

                <div className="bg-white border border-sky-100/80 rounded-sm p-6 hover:border-sky-300 shadow-sm transition-all hover:shadow-md">
                  <div className="w-10 h-10 bg-sky-50/70 border border-sky-100/70 text-sky-600 rounded-sm flex items-center justify-center mb-6">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-serif font-light text-slate-800 mb-3">Market Intelligence</h3>
                  <p className="text-xs text-slate-600 leading-relaxed italic mb-4">Gather absolute insights about competitive performance corridors and neighborhood demand channels.</p>
                  <ul className="space-y-2 text-[10px] font-mono text-slate-500">
                    <li className="flex items-center space-x-2"><Check className="w-3 h-3 text-sky-505 text-sky-500" /> <span>Competitor Performance Mapping</span></li>
                    <li className="flex items-center space-x-2"><Check className="w-3 h-3 text-sky-505 text-sky-500" /> <span>Localized Consumer Trends</span></li>
                    <li className="flex items-center space-x-2"><Check className="w-3 h-3 text-sky-505 text-sky-500" /> <span>Feedback Response Analysis</span></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Category 3 */}
            <div>
              <div className="flex items-center space-x-4 mb-8">
                <span className="font-mono text-xs text-sky-600 font-bold tracking-widest">03 /</span>
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-slate-650 font-semibold">Automation & Technology</span>
                <div className="flex-1 h-[1px] bg-slate-200" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white border border-sky-100/80 rounded-sm p-5 hover:border-sky-300 shadow-sm transition-all flex flex-col justify-between hover:shadow-md">
                  <div>
                    <div className="text-sky-600 font-bold font-mono text-[10px] tracking-wide mb-3">SYSTEMIC / 01</div>
                    <h4 className="font-serif text-base text-slate-800 mb-2">Workflow Automation</h4>
                    <p className="text-[11px] text-slate-600 italic leading-relaxed">Quiet, efficient programs automating repetitive daily operations and freeing staff time.</p>
                  </div>
                </div>

                <div className="bg-white border border-sky-100/80 rounded-sm p-5 hover:border-sky-300 shadow-sm transition-all flex flex-col justify-between hover:shadow-md">
                  <div>
                    <div className="text-sky-600 font-bold font-mono text-[10px] tracking-wide mb-3">SYSTEMIC / 02</div>
                    <h4 className="font-serif text-base text-slate-800 mb-2">API & Database Sync</h4>
                    <p className="text-[11px] text-slate-600 italic leading-relaxed">Synchronize core client funnels and data pipelines across endpoints with no backend friction.</p>
                  </div>
                </div>

                <div className="bg-white border border-sky-100/80 rounded-sm p-5 hover:border-sky-300 shadow-sm transition-all flex flex-col justify-between hover:shadow-md">
                  <div>
                    <div className="text-sky-600 font-bold font-mono text-[10px] tracking-wide mb-3">SYSTEMIC / 03</div>
                    <h4 className="font-serif text-base text-slate-800 mb-2">Web & Client Portals</h4>
                    <p className="text-[11px] text-slate-600 italic leading-relaxed">High-performance digital storefronts and unified operational portals designed to compile fast.</p>
                  </div>
                </div>

                <div className="bg-white border border-sky-100/80 rounded-sm p-5 hover:border-sky-300 shadow-sm transition-all flex flex-col justify-between hover:shadow-md">
                  <div>
                    <div className="text-sky-600 font-bold font-mono text-[10px] tracking-wide mb-3">SYSTEMIC / 04</div>
                    <h4 className="font-serif text-base text-slate-800 mb-2">AI Interface Chat</h4>
                    <p className="text-[11px] text-slate-600 italic leading-relaxed">Deploy robust automated leads intake routing and responsive chat workflows 24 hours a day.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Category 4 */}
            <div>
              <div className="flex items-center space-x-4 mb-8">
                <span className="font-mono text-xs text-sky-600 font-bold tracking-widest">04 /</span>
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-slate-650 font-semibold">Growth & Marketing</span>
                <div className="flex-1 h-[1px] bg-slate-200" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white border border-sky-100/80 rounded-sm p-6 hover:border-sky-300 shadow-sm transition-all hover:shadow-md">
                  <div className="w-10 h-10 bg-sky-50/70 border border-sky-100/70 text-sky-600 rounded-sm flex items-center justify-center mb-6">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-serif font-light text-slate-800 mb-3">Performance Marketing</h3>
                  <p className="text-xs text-slate-600 leading-relaxed italic mb-4">Optimize distribution on Google, Meta, and target channels to convert visitors cleanly with low daily waste.</p>
                  <ul className="space-y-2 text-[10px] font-mono text-slate-500">
                    <li className="flex items-center space-x-2"><Check className="w-3 h-3 text-sky-500" /> <span>Search & Social Ad Outlays</span></li>
                    <li className="flex items-center space-x-2"><Check className="w-3 h-3 text-sky-500" /> <span>Lead Route Retargeting</span></li>
                    <li className="flex items-center space-x-2"><Check className="w-3 h-3 text-sky-500" /> <span>Conversion Optimization Plans</span></li>
                  </ul>
                </div>

                <div className="bg-white border border-sky-100/80 rounded-sm p-6 hover:border-sky-300 shadow-sm transition-all hover:shadow-md">
                  <div className="w-10 h-10 bg-sky-50/70 border border-sky-100/70 text-sky-600 rounded-sm flex items-center justify-center mb-6">
                    <Grid className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-serif font-light text-slate-800 mb-3">Search Architecture</h3>
                  <p className="text-xs text-slate-600 leading-relaxed italic mb-4">Structure web engines and fast-rendering content pipelines so your organic discoverability rises naturally.</p>
                  <ul className="space-y-2 text-[10px] font-mono text-slate-500">
                    <li className="flex items-center space-x-2"><Check className="w-3 h-3 text-sky-500" /> <span>Technical Search Indexing</span></li>
                    <li className="flex items-center space-x-2"><Check className="w-3 h-3 text-sky-500" /> <span>Semantic Engine Discovery</span></li>
                    <li className="flex items-center space-x-2"><Check className="w-3 h-3 text-sky-500" /> <span>Performance Web Rendering</span></li>
                  </ul>
                </div>

                <div className="bg-white border border-sky-100/80 rounded-sm p-6 hover:border-sky-300 shadow-sm transition-all hover:shadow-md">
                  <div className="w-10 h-10 bg-sky-50/70 border border-sky-100/70 text-sky-600 rounded-sm flex items-center justify-center mb-6">
                    <Coffee className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-serif font-light text-slate-800 mb-3">Social Media & Styling</h3>
                  <p className="text-xs text-slate-600 leading-relaxed italic mb-4">Design rich, authentic styling, consistent visual grid catalogs, and direct messaging guides for local accounts.</p>
                  <ul className="space-y-2 text-[10px] font-mono text-slate-500">
                    <li className="flex items-center space-x-2"><Check className="w-3 h-3 text-sky-500" /> <span>Visual Styling Handbooks</span></li>
                    <li className="flex items-center space-x-2"><Check className="w-3 h-3 text-sky-500" /> <span>Grid Catalog Organization</span></li>
                    <li className="flex items-center space-x-2"><Check className="w-3 h-3 text-sky-500" /> <span>Local Brand Voice Setup</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Portfolio Block - Crisp grid displaying the simplified collaborations + data science projects */}
      <section id="portfolio" className="py-24 px-6 border-t border-sky-100 bg-sky-50/50">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-sky-600 font-bold bg-white border border-sky-100 px-3.5 py-1.5 rounded-full inline-block">
              Our Collaborations & Builds
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-slate-900 tracking-tight">
              Real Scopes<span className="text-sky-600">. Transparent Engineering.</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 italic font-sans leading-relaxed">
              We focus on building functional software suited directly for operations. Here is a review of our live projects and technical labs.
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
                return <Grid className="w-5 h-5" />;
              };

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                  className="bg-white border border-sky-100/80 hover:border-sky-300 rounded-sm overflow-hidden flex flex-col justify-between hover:shadow-lg transition-all duration-300"
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
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent pointer-events-none" />
                      
                      {/* Floating custom icon tag */}
                      <div className="absolute top-4 right-4 w-9 h-9 bg-white border border-sky-200 text-sky-600 rounded-sm flex items-center justify-center shadow-sm">
                        {getIcon(project.id)}
                      </div>
                    </div>

                    {/* Text Details */}
                    <div className="p-6 space-y-4">
                      <div>
                        <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-sky-600 font-bold">
                          {project.category}
                        </span>
                        <h3 className="font-serif text-xl sm:text-2xl font-light text-slate-800 mt-1 leading-tight border-b border-slate-100 pb-2">
                          {project.title}
                        </h3>
                      </div>
                      
                      <p className="text-xs text-slate-600 leading-relaxed font-sans text-justify italic">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Badges footer */}
                  <div className="p-6 pt-0">
                    <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-sm bg-sky-50 text-sky-700 font-mono text-[8px] uppercase tracking-wider font-semibold border border-sky-100/70"
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
      <section id="about" className="py-24 px-6 bg-white border-t border-sky-100/60 text-slate-850 overflow-hidden relative">
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-[10px] uppercase tracking-[0.2em] text-sky-600 font-bold"
          >
            <Briefcase className="w-3.5 h-3.5 text-sky-600" />
            <span>DIRECT ARCHITECTURE & CODE</span>
          </motion.div>

          <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-tight text-slate-900 leading-tight">
            Our Agile <span className="text-sky-600 italic">Core Statement.</span>
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed font-sans text-justify sm:text-center italic max-w-3xl mx-auto">
            "{TEAM_STATEMENT}"
          </p>

          <div className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-6 font-mono max-w-2xl mx-auto">
            <div className="p-4 bg-sky-50/40 border border-sky-100/80 rounded-sm">
              <span className="block font-serif text-3xl text-slate-800 font-light">15+</span>
              <span className="text-[8px] uppercase tracking-widest text-sky-600 block mt-1 font-bold">Clients Served</span>
            </div>
            <div className="p-4 bg-sky-50/40 border border-sky-100/80 rounded-sm">
              <span className="block font-serif text-3xl text-sky-600 font-light">98%</span>
              <span className="text-[8px] uppercase tracking-widest text-slate-500 block mt-1 font-bold">Retention Rate</span>
            </div>
            <div className="p-4 bg-sky-50/40 border border-sky-100/80 rounded-sm">
              <span className="block font-serif text-3xl text-slate-800 font-light">5×</span>
              <span className="text-[8px] uppercase tracking-widest text-sky-600 block mt-1 font-bold">Avg. ROI Delivered</span>
            </div>
            <div className="p-4 bg-sky-50/40 border border-sky-100/80 rounded-sm">
              <span className="block font-serif text-3xl text-sky-600 font-light">Local</span>
              <span className="text-[8px] uppercase tracking-widest text-slate-500 block mt-1 font-bold">Base of Operations</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section id="process" className="py-24 px-6 border-t border-sky-100/60 bg-slate-50 relative">
        <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-5" />
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-sky-600 font-bold bg-sky-50 border border-sky-100 px-3.5 py-1.5 rounded-full inline-block">
              Our Process
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-slate-900 tracking-tight">
              A Simple <span className="text-sky-600 italic">Engineered Routine.</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 italic font-sans leading-relaxed text-center">
              We skip lengthy corporate workshops and deploy reliable structures with direct, actionable check-ins.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            <div className="bg-white border border-sky-100/80 rounded-sm p-6 space-y-4 hover:border-sky-300 shadow-sm transition-all">
              <span className="font-mono text-xs text-sky-600 font-semibold block bg-sky-50 w-8 h-8 rounded-full flex items-center justify-center border border-sky-100">01</span>
              <h3 className="font-serif text-lg text-slate-800">Discover & Audit</h3>
              <p className="text-xs text-slate-600 leading-relaxed italic">We inspect your current workflows, legacy software structures, and client intake channels with no friction.</p>
            </div>

            <div className="bg-white border border-sky-100/80 rounded-sm p-6 space-y-4 hover:border-sky-300 shadow-sm transition-all">
              <span className="font-mono text-xs text-sky-600 font-semibold block bg-sky-50 w-8 h-8 rounded-full flex items-center justify-center border border-sky-100">02</span>
              <h3 className="font-serif text-lg text-slate-800">Strategise & Plan</h3>
              <p className="text-xs text-slate-600 leading-relaxed italic">Draft a plain-English roadmap identifying immediate automation objectives, data modeling boundaries, and expected outcomes.</p>
            </div>

            <div className="bg-white border border-sky-100/80 rounded-sm p-6 space-y-4 hover:border-sky-300 shadow-sm transition-all">
              <span className="font-mono text-xs text-sky-600 font-semibold block bg-sky-50 w-8 h-8 rounded-full flex items-center justify-center border border-sky-100">03</span>
              <h3 className="font-serif text-lg text-slate-800">Build & Execute</h3>
              <p className="text-xs text-slate-600 leading-relaxed italic">Deploy high-integrity digital assets directly. You review early iterations face-to-face with the developers.</p>
            </div>

            <div className="bg-white border border-sky-100/80 rounded-sm p-6 space-y-4 hover:border-sky-300 shadow-sm transition-all">
              <span className="font-mono text-xs text-sky-600 font-semibold block bg-sky-50 w-8 h-8 rounded-full flex items-center justify-center border border-sky-100">04</span>
              <h3 className="font-serif text-lg text-slate-800">Measure & Scale</h3>
              <p className="text-xs text-slate-600 leading-relaxed italic">Continuously streamline the code base, monitor lead flows, and optimize local visibility networks securely.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why" className="py-24 px-6 border-t border-sky-100 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-sky-600 font-bold bg-sky-50 border border-sky-100 px-3.5 py-1.5 rounded-full inline-block">
              Why us
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-slate-900 tracking-tight">
              The <span className="text-sky-600 italic">Qubix Advantage.</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 italic font-sans leading-relaxed text-center">
              We focus on measurable utility and quiet code excellence over marketing fluff.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-sky-50/50 border border-sky-100 rounded-sm p-8 text-center space-y-4 hover:border-sky-300 transition-all">
              <div className="w-12 h-12 bg-white text-sky-600 border border-sky-200 rounded-full flex items-center justify-center mx-auto">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif font-light text-slate-800">Bangalore-First Focus</h3>
              <p className="text-xs text-slate-600 leading-relaxed italic">We understand the local hospitality, retail, and consulting ecosystems like our own backyard.</p>
            </div>

            <div className="bg-sky-50/50 border border-sky-100 rounded-sm p-8 text-center space-y-4 hover:border-sky-300 transition-all">
              <div className="w-12 h-12 bg-white text-sky-600 border border-sky-200 rounded-full flex items-center justify-center mx-auto">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif font-light text-slate-800">Process Automation</h3>
              <p className="text-xs text-slate-600 leading-relaxed italic">Leverage high-utility custom programs to streamline manual data tracking and client booking cycles.</p>
            </div>

            <div className="bg-sky-50/50 border border-sky-100 rounded-sm p-8 text-center space-y-4 hover:border-sky-300 transition-all">
              <div className="w-12 h-12 bg-white text-sky-600 border border-sky-200 rounded-full flex items-center justify-center mx-auto">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif font-light text-slate-800">Direct Execution</h3>
              <p className="text-xs text-slate-600 leading-relaxed italic">Work directly with original builders—zero project managers, zero communication delay, and true execution speed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic CTA Ribbon Band */}
      <div className="bg-gradient-to-r from-sky-600 via-sky-600 to-sky-700 border-y border-sky-500 py-16 px-6 text-center space-y-6 shadow-inner text-white">
        <h2 className="font-serif text-3xl sm:text-4xl font-light text-white tracking-tight">
          Ready to <span className="text-sky-100">Build. Grow. Scale?</span>
        </h2>
        <p className="text-xs sm:text-sm text-sky-50 font-sans italic max-w-lg mx-auto leading-relaxed text-center">
          Let's talk about how we can transform your local business operations with streamlined custom software and dashboard analytics.
        </p>
        <button 
          onClick={() => handleScrollTo('contact')}
          className="inline-flex items-center space-x-2 px-8 py-3 bg-white hover:bg-sky-50 text-sky-700 font-mono text-xs uppercase tracking-[0.2em] font-bold rounded-sm shadow-md transition-all hover:scale-[1.02] cursor-pointer"
        >
          <span>Start the Conversation</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 5. Ultra-Basic Contact Form - Basic, extremely intuitive and direct */}
      <section id="contact" className="py-24 px-6 bg-slate-50 border-t border-sky-100 relative">
        <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-5" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16 space-y-4">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-sky-600 font-bold bg-white border border-sky-100 px-3.5 py-1.5 rounded-full inline-block">
              Initiate Collaborative Scopes
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-slate-900 tracking-tight">
              Let's <span className="text-sky-600 italic">Collaborate.</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-sans italic max-w-lg mx-auto leading-relaxed text-center">
              Ready to automate your operations or outline a clean data dashboard? Let's connect directly below.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column: Direct Contact Details List */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="font-serif text-2xl sm:text-3xl font-light text-slate-800">
                  Talk to the <span className="text-sky-600">Qubix Team.</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans italic">
                  Whether you're looking to scale, automate, or completely transform your digital presence — we're one direct, middle-man-free conversation away.
                </p>
              </div>

              <div className="space-y-4">
                <a 
                  href="tel:+919986592905" 
                  className="flex items-center space-x-4 p-4 rounded-sm bg-white border border-sky-100/60 hover:border-sky-300 transition-all group shadow-sm"
                >
                  <div className="w-10 h-10 rounded-sm bg-sky-50 border border-sky-100 text-sky-600 flex items-center justify-center group-hover:bg-sky-100 transition-all">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-mono text-[8px] uppercase tracking-wider text-slate-400 font-bold">Call Us Direct</span>
                    <span className="block text-sm sm:text-base text-slate-700 font-semibold font-mono group-hover:text-sky-600 transition-all">+91 99865 92905</span>
                  </div>
                </a>

                <a 
                  href="mailto:theteam.qubix@gmail.com" 
                  className="flex items-center space-x-4 p-4 rounded-sm bg-white border border-sky-100/60 hover:border-sky-300 transition-all group shadow-sm"
                >
                  <div className="w-10 h-10 rounded-sm bg-sky-50 border border-sky-100 text-sky-600 flex items-center justify-center group-hover:bg-sky-100 transition-all">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-mono text-[8px] uppercase tracking-wider text-slate-400 font-bold">Email Us Directly</span>
                    <span className="block text-sm sm:text-base text-slate-700 font-semibold font-mono group-hover:text-sky-600 transition-all">theteam.qubix@gmail.com</span>
                  </div>
                </a>

                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-sm bg-white border border-sky-100/60 hover:border-sky-300 transition-all group shadow-sm"
                >
                  <div className="w-10 h-10 rounded-sm bg-sky-50 border border-sky-100 text-sky-600 flex items-center justify-center group-hover:bg-sky-100 transition-all">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-mono text-[8px] uppercase tracking-wider text-slate-400 font-bold">DM on Instagram</span>
                    <span className="block text-sm sm:text-base text-slate-700 font-semibold font-mono group-hover:text-sky-600 transition-all">@qubix.co</span>
                  </div>
                </a>

                <div className="flex items-center space-x-4 p-4 rounded-sm bg-white border border-sky-100/60 shadow-sm">
                  <div className="w-10 h-10 rounded-sm bg-sky-50 border border-sky-100 text-sky-600 flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-mono text-[8px] uppercase tracking-wider text-slate-400 font-bold">Location Hub</span>
                    <span className="block text-sm sm:text-base text-slate-700 font-semibold font-mono">Bangalore, Karnataka</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Custom Rich Message Form */}
            <div className="border border-sky-100 rounded-sm bg-white p-6 sm:p-10 shadow-md relative w-full">
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
                      <label className="block text-[10px] uppercase font-mono tracking-widest text-slate-500 font-bold">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-200 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 rounded-sm bg-slate-50/50 text-xs sm:text-sm font-sans text-slate-800 placeholder-slate-400 outline-none transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">{/* Email */}
                      <label className="block text-[10px] uppercase font-mono tracking-widest text-slate-500 font-bold">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-200 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 rounded-sm bg-slate-50/50 text-xs sm:text-sm font-sans text-slate-800 placeholder-slate-400 outline-none transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">{/* Phone */}
                      <label className="block text-[10px] uppercase font-mono tracking-widest text-slate-500 font-bold">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. +91 99865 92905"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-200 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 rounded-sm bg-slate-50/50 text-xs sm:text-sm font-sans text-slate-800 placeholder-slate-400 outline-none transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">{/* Service Selector */}
                      <label className="block text-[10px] uppercase font-mono tracking-widest text-slate-500 font-bold">
                        Service Interested In
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-200 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 rounded-sm bg-white text-xs sm:text-sm font-sans text-slate-800 outline-none transition-all"
                      >
                        <option value="">Select a service category...</option>
                        <option value="business-strategy">Business Strategy & Consulting</option>
                        <option value="digital-transformation">Digital Transformation & Tech Stack</option>
                        <option value="brand-strategy">Brand Strategy & Personas</option>
                        <option value="data-analytics">KPI Data Analytics & Dashboards</option>
                        <option value="ai-ml">AI & Predictive Modeling Systems</option>
                        <option value="workflow-automation">Workflow Automation Scripts</option>
                        <option value="crm-integration">API & Database Integrations</option>
                        <option value="development">Web & Client Portal Development</option>
                        <option value="performance-marketing">Performance Marketing & Growth</option>
                        <option value="seo">Search & Performance Architecture</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">{/* Message */}
                      <label className="block text-[10px] uppercase font-mono tracking-widest text-slate-500 font-bold">
                        Detailed Message
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Tell us about your business and goals..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-200 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 rounded-sm bg-slate-50/50 text-xs sm:text-sm font-sans text-slate-800 placeholder-slate-400 outline-none transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-sky-600 hover:bg-sky-700 text-white font-mono text-xs uppercase tracking-[0.2em] font-bold rounded-sm shadow-md cursor-pointer transition-all flex items-center justify-center space-x-2 animate-fadeIn"
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
                    <div className="w-16 h-16 bg-sky-50 text-sky-600 rounded-full flex items-center justify-center mx-auto border border-sky-100">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h3 className="font-serif text-2xl font-light text-slate-800">
                      Message Received.
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-sans max-w-sm mx-auto">
                      Thank you, {formData.name}. We will review your message immediately and respond directly to <span className="font-bold text-sky-600 font-mono">{formData.email}</span> within 24 hours.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Simple Editorial Footer */}
      <footer className="bg-[#03152d] text-sky-200/50 py-12 px-6 border-t border-sky-950 font-mono text-center">
        <div className="max-w-6xl mx-auto space-y-4">
          <div className="flex items-center justify-center space-x-2.5 group">
            <QubixLogoIcon />
            <span className="font-sans text-lg font-bold tracking-wide text-white leading-none">
              Qubix
            </span>
          </div>
          <p className="text-[10px] uppercase tracking-widest leading-loose text-sky-200/40">
            © {new Date().getFullYear()} QUBIX (SIMPLY SMARTER). ALL RIGHTS RESERVED.
          </p>
          <div className="flex justify-center space-x-6 text-[9px] uppercase tracking-widest font-semibold pt-1 text-sky-200/60">
            <button onClick={() => handleScrollTo('hero')} className="hover:text-white transition-colors">Home</button>
            <span>•</span>
            <button onClick={() => handleScrollTo('portfolio')} className="hover:text-white transition-colors">Projects</button>
            <span>•</span>
            <button onClick={() => handleScrollTo('about')} className="hover:text-white transition-colors">The Team</button>
            <span>•</span>
            <a href="mailto:theteam.qubix@gmail.com" className="hover:text-white transition-colors">Support</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
