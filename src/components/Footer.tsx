import React from 'react';
import { Mail, Phone, MapPin, Shield } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="w-full font-sans text-sm text-gray-300">
      {/* Top Banner Area */}
      <div className="relative bg-gradient-to-r from-dcure-dark-blue to-dcure-navy overflow-hidden py-14">
        {/* Abstract graphics (simulating the brain/tech lines from mockup) */}
        <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none w-1/3 h-full mix-blend-screen bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="absolute right-[-10%] top-[-50%] w-[500px] h-[500px] bg-dcure-blue rounded-full blur-[120px] opacity-20 pointer-events-none"></div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center gap-8 lg:gap-16">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-xl border border-dcure-blue/30 flex items-center justify-center text-dcure-red bg-dcure-blue/10 shrink-0 shadow-[0_0_15px_rgba(31,81,255,0.2)]">
              <Shield size={32} strokeWidth={1.5} />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide text-white leading-tight">
                Sense Wise.<br/>
                <span className="text-dcure-red">Save Lives.</span>
              </h2>
            </div>
          </div>
          
          <div className="h-12 w-px bg-white/20 hidden md:block mx-2"></div>
          
          <p className="text-lg md:text-xl text-gray-300 font-medium max-w-sm">
            Proactive care today for<br/>a safer, independent tomorrow.
          </p>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-[#050B1C] pt-16 pb-6">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
            
            {/* Column 1: Brand & About (Span 4) */}
            <div className="lg:col-span-4 pr-4">
              <div className="mb-6">
                <img src="/images/logo%20without%20words.png" alt="D-CURE Logo" className="h-12 object-contain" />
              </div>
              <p className="text-gray-400 mb-8 leading-relaxed max-w-sm">
                D-CURE is a proactive dementia care platform that delivers real-time insights, early warnings, and smarter support for patients, caregivers and families.
              </p>
            </div>

            {/* Column 2: Quick Links (Span 3) */}
            <div className="lg:col-span-3">
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-[13px]">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#solution" className="text-gray-400 hover:text-white transition-colors">Our Solution</a></li>
                <li><a href="#patients" className="text-gray-400 hover:text-white transition-colors">For Patients</a></li>
                <li><a href="#caregivers" className="text-gray-400 hover:text-white transition-colors">For Caregivers</a></li>
                <li><a href="#technology" className="text-gray-400 hover:text-white transition-colors">Technology</a></li>
                <li><a href="#research" className="text-gray-400 hover:text-white transition-colors">Research</a></li>
                <li><a href="#impact" className="text-gray-400 hover:text-white transition-colors">Impact</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              </ul>
            </div>

            {/* Column 3: Resources (Span 2) */}
            <div className="lg:col-span-2">
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-[13px]">Resources</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQs</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Use</a></li>
              </ul>
            </div>

            {/* Column 4: Contact Us (Span 3) */}
            <div className="lg:col-span-3">
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-[13px]">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-gray-400 shrink-0" strokeWidth={1.5} />
                  <span className="text-gray-400">+91 98765 43210</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-gray-400 shrink-0" strokeWidth={1.5} />
                  <span className="text-gray-400">info@d-cure.com</span>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin size={18} className="text-gray-400 shrink-0" strokeWidth={1.5} />
                  <span className="text-gray-400">Chennai, India</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-800 text-center">
            <p className="text-xs text-gray-500">
              © 2024 D-CURE Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
