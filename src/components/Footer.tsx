import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="w-full font-sans text-sm text-gray-300">
      {/* Top CTA Area */}
      <div className="relative bg-gradient-to-br from-midnight to-[#0a1930] overflow-hidden py-24 border-t border-electric/20">
        <div className="absolute right-[-10%] top-[-50%] w-[500px] h-[500px] bg-electric rounded-full blur-[120px] opacity-10 pointer-events-none"></div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-wide text-white leading-tight mb-4">
            Connects technology, people and care.
          </h2>
          <p className="text-xl md:text-2xl text-slate-text font-medium mb-10">
            Sense Wise. <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#168BFF] to-[#D71920] font-bold">Save Lives.</span>
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#demo" className="bg-[#D71920] text-white font-bold px-8 py-3.5 rounded-full shadow-[0_0_20px_rgba(215,25,32,0.4)] flex justify-center items-center gap-2 transition-all hover:shadow-[0_0_25px_rgba(215,25,32,0.6)] hover:-translate-y-0.5">
              Explore the Platform
            </a>
            <a href="#contact" className="glass-panel text-white font-bold px-8 py-3.5 rounded-full flex justify-center items-center gap-2 transition-all hover:border-electric">
              Contact Sales
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-[#020914] pt-16 pb-6">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

            {/* Column 1: Brand & About (Span 5) */}
            <div className="lg:col-span-5 pr-4">
              <div className="mb-6 flex items-center gap-3">
                <span className="text-2xl font-black text-white tracking-widest uppercase">D-CURE</span>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-sm mb-6">
                An AI-powered multimodal wearable designed for proactive dementia safety, continuous vital monitoring, early risk prediction, and context-aware caregiver support.
              </p>
            </div>

            {/* Column 2: Quick Links (Span 3) */}
            <div className="lg:col-span-3">
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-[13px]">Menu</h4>
              <ul className="space-y-3">
                <li><a href="#home" className="text-slate-text hover:text-white transition-colors">Home</a></li>
                <li><a href="#problem" className="text-slate-text hover:text-white transition-colors">The Problem</a></li>
                <li><a href="#solution" className="text-slate-text hover:text-white transition-colors">Our Solution</a></li>
                <li><a href="#pipeline" className="text-slate-text hover:text-white transition-colors">Technology</a></li>
                <li><a href="#impact" className="text-slate-text hover:text-white transition-colors">Impact</a></li>
                <li><a href="#team" className="text-slate-text hover:text-white transition-colors">About Us</a></li>
              </ul>
            </div>

            {/* Column 4: Contact Us & Legal (Span 4) */}
            <div className="lg:col-span-4">
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-[13px]">Contact & Legal</h4>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-slate-text shrink-0" strokeWidth={1.5} />
                  <span className="text-slate-text">+91 9345874343</span>
                </li>

                <li className="flex items-center gap-3">
                  <MapPin size={18} className="text-slate-text shrink-0" strokeWidth={1.5} />
                  <span className="text-slate-text">Chennai, India</span>
                </li>
              </ul>
              <div className="flex gap-4">
                <a href="#" className="text-slate-text hover:text-white transition-colors border-b border-transparent hover:border-white text-xs">Privacy Policy</a>
                <a href="#" className="text-slate-text hover:text-white transition-colors border-b border-transparent hover:border-white text-xs">Terms of Service</a>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 text-center">
            <p className="text-xs text-slate-text">
              © 2026 D-CURE Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
