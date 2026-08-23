import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Link2 } from 'lucide-react';

export const SafetyTether = () => {
  return (
    <section id="safety-tether" className="py-6 relative overflow-hidden bg-transparent">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto glass-panel p-10 md:p-16 border-accent-red/30 flex flex-col md:flex-row items-center gap-10"
        >
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-40 h-40 flex items-center justify-center">
              <div className="absolute inset-0 border-2 border-accent-red/30 rounded-full animate-ping"></div>
              <div className="w-24 h-24 bg-gradient-to-br from-accent-red to-red-700 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(215,25,32,0.5)]">
                <ShieldCheck size={40} className="text-white" />
              </div>
            </div>
          </div>

          <div className="w-full md:w-2/3 text-center md:text-left">
            <div className="inline-block px-3 py-1 bg-accent-red/10 border border-accent-red/30 text-accent-red text-xs font-bold tracking-widest mb-4 uppercase rounded-full">
              Optional Safety Tether
            </div>
            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
              Extra Safety. <span className="text-accent-red glow-text">Peace of Mind.</span>
            </h3>
            <p className="text-slate-text text-lg leading-relaxed flex items-start gap-3">
              <Link2 className="text-electric shrink-0 mt-1" />
              A low-profile, detachable magnetic safety tether and garment clip that prevents accidental loss, drop-off, or intentional removal without causing discomfort.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
