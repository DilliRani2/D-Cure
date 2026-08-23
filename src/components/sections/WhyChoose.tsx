import React from 'react';
import { motion } from 'framer-motion';
import { Network, Fingerprint, Headset } from 'lucide-react';

export const WhyChoose = () => {
  const differentiators = [
    {
      icon: <Network size={32} className="text-[#168BFF]" />,
      title: 'Multimodal Fusion',
      desc: 'Integrates brain, cardiac, and gait signals instead of relying solely on location.'
    },
    {
      icon: <Fingerprint size={32} className="text-[#168BFF]" />,
      title: 'Personalized Baseline',
      desc: 'Adapts to individual patient norms rather than fixed generic thresholds.'
    },
    {
      icon: <Headset size={32} className="text-[#168BFF]" />,
      title: 'Two-Way Intervention',
      desc: 'Combines discreet patient audio guidance with instant caregiver escalation.'
    }
  ];

  return (
    <section id="why-dcure" className="py-6 relative overflow-hidden bg-transparent">
      <div className="container mx-auto px-6 md:px-12 relative z-10">

        <div className="text-center max-w-4xl mx-auto mb-10">
          <div className="inline-block px-4 py-2 bg-electric/10 border border-electric/30 text-ice-blue text-sm font-bold tracking-wider mb-6 rounded-full uppercase">
            Why D-CURE is Different
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-6 text-white tracking-tight leading-tight"
          >
            Our Unfair <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#168BFF] to-[#D71920]">Advantage</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {differentiators.map((diff, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="glass-panel p-10 flex flex-col items-center text-center group hover:border-electric transition-all"
            >
              <div className="w-20 h-20 rounded-full bg-midnight shadow-[0_0_20px_rgba(22,139,255,0.2)] border border-electric/30 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                {diff.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{diff.title}</h3>
              <p className="text-slate-text leading-relaxed font-medium">
                {diff.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
