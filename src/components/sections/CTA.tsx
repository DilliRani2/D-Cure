import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, UserCircle2 } from 'lucide-react';

export const CTA = () => {
  return (
    <div id="cta">
      {/* Team Section (Simplified) */}
      <section className="py-24 bg-dcure-navy">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-white"
          >
            Team <span className="text-dcure-cyan">D-CURE</span>
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-12">
            {[
              {name: 'AFRIN FATHIMA B'}, 
              {name: 'DILLI RANI P'}, 
              {name: 'ZEENATH NISHA S'}, 
              {name: 'DWARAK S'}, 
              {name: 'NAVADHARSHAN K'}
            ].map((member, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-[#001540] border-2 border-dcure-blue/30 flex items-center justify-center mb-4 text-dcure-cyan shadow-[0_0_15px_rgba(31,81,255,0.2)]">
                  <UserCircle2 size={40} />
                </div>
                <h4 className="text-white font-bold text-sm tracking-wide">{member.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-transparent relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-hero-glow opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold mb-8"
          >
            Care Should <span className="text-dcure-red glow-text">Never Feel Alone.</span>
          </motion.h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            D-CURE connects technology, people, and care to help create a safer, healthier everyday life for dementia patients and their loved ones.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#home" className="px-10 py-4 bg-dcure-red text-white font-bold text-lg rounded-full shadow-[0_0_20px_rgba(255,42,42,0.5)] transform transition-transform hover:scale-105 flex items-center gap-2">
              Explore D-CURE <ArrowRight size={20} />
            </a>
            <a href="#contact" className="px-10 py-4 glass-card text-white font-bold text-lg rounded-full border border-dcure-cyan/50 hover:bg-dcure-navy transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
