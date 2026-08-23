import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Users, Store } from 'lucide-react';

export const Business = () => {
  return (
    <section id="market" className="py-6 relative overflow-hidden bg-transparent">
      <div className="container mx-auto px-6 md:px-12 relative z-10">

        <div className="text-center max-w-4xl mx-auto mb-10">
          <div className="inline-block px-4 py-2 bg-electric/10 border border-electric/30 text-ice-blue text-sm font-bold tracking-wider mb-6 rounded-full uppercase">
            Market Opportunity
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-6 text-white tracking-tight leading-tight"
          >
            Addressing an Unmet <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#168BFF] to-[#D71920]">Global & Regional Demand</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-10 relative overflow-hidden hover:border-electric transition-colors group"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Globe size={100} />
            </div>
            <div className="w-16 h-16 rounded-2xl bg-midnight border border-electric/30 shadow-[0_0_15px_rgba(22,139,255,0.2)] flex items-center justify-center mb-6 relative z-10">
              <Globe size={32} className="text-[#168BFF]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 relative z-10">Target Scope</h3>
            <p className="text-slate-text leading-relaxed font-medium relative z-10">
              Addressing the rapidly growing demand across India and international eldercare markets.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="glass-panel p-10 relative overflow-hidden hover:border-accent-red/50 transition-colors group"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity text-accent-red">
              <Users size={100} />
            </div>
            <div className="w-16 h-16 rounded-2xl bg-midnight border border-accent-red/30 shadow-[0_0_15px_rgba(215,25,32,0.2)] flex items-center justify-center mb-6 relative z-10">
              <Users size={32} className="text-accent-red" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 relative z-10">Ecosystem Scale</h3>
            <p className="text-slate-text leading-relaxed font-medium relative z-10">
              <span className="text-white font-bold">3.9M to 8.8M</span> individuals requiring proactive memory and dementia support in India.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="glass-panel p-10 relative overflow-hidden hover:border-electric transition-colors group"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Store size={100} />
            </div>
            <div className="w-16 h-16 rounded-2xl bg-midnight border border-electric/30 shadow-[0_0_15px_rgba(22,139,255,0.2)] flex items-center justify-center mb-6 relative z-10">
              <Store size={32} className="text-[#168BFF]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 relative z-10">Market Channels</h3>
            <ul className="space-y-3 relative z-10 text-slate-text font-medium">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-electric mt-2 shrink-0"></div>
                Direct-to-consumer family care
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-electric mt-2 shrink-0"></div>
                Specialized memory clinics
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-electric mt-2 shrink-0"></div>
                Assisted living facilities
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-electric mt-2 shrink-0"></div>
                Eldercare insurance partners
              </li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
