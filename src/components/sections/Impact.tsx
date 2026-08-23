import React from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, Stethoscope } from 'lucide-react';

export const Impact = () => {
  const impacts = [
    {
      icon: <Users size={32} className="text-[#168BFF]" />,
      title: 'For Patients',
      desc: 'Extended independent living, dignity-preserving design, reduced anxiety.'
    },
    {
      icon: <Heart size={32} className="text-[#168BFF]" />,
      title: 'For Caregivers',
      desc: 'Proactive early warning windows, reduced stress, actionable emergency context.'
    },
    {
      icon: <Stethoscope size={32} className="text-[#168BFF]" />,
      title: 'For Clinicians & Healthcare',
      desc: 'Longitudinal data logs and objective episode histories for personalized therapy.'
    }
  ];

  return (
    <section id="impact" className="py-24 relative overflow-hidden bg-transparent">
      <div className="container mx-auto px-6 md:px-12 relative z-10">

        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-block px-4 py-2 bg-electric/10 border border-electric/30 text-ice-blue text-sm font-bold tracking-wider mb-6 rounded-full uppercase">
            Premium Impact Vision
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-6 text-white tracking-tight leading-tight"
          >
            Creating a Future of <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#168BFF] to-[#D71920]">Informed Care.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {impacts.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="glass-panel p-10 flex flex-col items-start border-electric/20 hover:border-electric transition-all"
            >
              <div className="w-16 h-16 rounded-2xl bg-midnight border border-electric/30 shadow-[0_0_15px_rgba(22,139,255,0.2)] flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-slate-text leading-relaxed font-medium">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
