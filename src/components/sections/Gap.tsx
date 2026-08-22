import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle2 } from 'lucide-react';

export const Gap = () => {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      {/* Background effect reduced as requested */}

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 glass-card border-white/20 text-dcure-cyan text-sm font-semibold tracking-wider mb-4">
            03 — THE GAP
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 text-white"
          >
            Why Existing Tools Fail: <span className="text-dcure-cyan glow-text">A Shift in Approach</span>
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch justify-center max-w-5xl mx-auto">
          {/* Current Solutions */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 glass-card p-8 md:p-10 border border-white/10 opacity-80"
          >
            <h3 className="text-xl text-gray-400 font-semibold mb-8 uppercase tracking-wider text-center">Existing Tools</h3>
            <ul className="space-y-6">
              {[
                'Continuous Manual Supervision (Not sustainable)',
                'GPS Trackers (Show location, not why risk is rising)',
                'Fall Detectors (React after the incident)',
                'Bulky Wearables (Patients remove them)',
                'Reactive Tracking (Everything seems normal until patient goes missing)'
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-4">
                  <XCircle className="text-dcure-red shrink-0 mt-1" size={24} />
                  <span className="text-gray-400 font-medium">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* VS Divider */}
          <div className="hidden lg:flex items-center justify-center w-16">
            <div className="w-12 h-12 rounded-full glass-card border border-dcure-cyan/30 flex items-center justify-center text-dcure-cyan font-bold shadow-[0_0_15px_rgba(0,240,255,0.2)]">
              VS
            </div>
          </div>

          {/* D-CURE Approach */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex-1 glass-card p-8 md:p-10 border border-dcure-cyan/30 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-dcure-cyan/10 blur-[50px]"></div>
            <h3 className="text-xl text-white font-bold mb-8 uppercase tracking-wider text-center flex items-center justify-center gap-2">
              <img src="/images/dcure-logo.png" className="h-6" alt="" onError={(e) => e.currentTarget.style.display = 'none'} />
              D-CURE Ecosystem
            </h3>
            <ul className="space-y-6">
              {[
                'All-in-one connected ecosystem',
                'Continuous 24/7 intelligent monitoring',
                'Seamless multi-user coordination',
                'Highly personalized care plans',
                'AI-driven predictive analysis & insights'
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="text-dcure-cyan shrink-0 mt-1" size={24} />
                  <span className="text-white font-medium">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
