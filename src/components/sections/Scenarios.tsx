import React from 'react';
import { motion } from 'framer-motion';
import { Home, Compass, Map, MessageSquare } from 'lucide-react';

export const Scenarios = () => {
  const phases = [
    {
      icon: <Home size={32} className="text-[#168BFF]" />,
      title: 'Phase 1: Normal State',
      desc: 'Patient at home; vitals match personal baseline.'
    },
    {
      icon: <Compass size={32} className="text-[#168BFF]" />,
      title: 'Phase 2: Early Behavioral Change',
      desc: 'Onset of disorientation, elevated heart rate, and gait asymmetry detected.'
    },
    {
      icon: <Map size={32} className="text-[#168BFF]" />,
      title: 'Phase 3: Wandering Risk',
      desc: 'Patient approaches geofence boundary with agitated vital patterns.'
    },
    {
      icon: <MessageSquare size={32} className="text-[#168BFF]" />,
      title: 'Phase 4: Risk Detected & Guided',
      desc: 'D-CURE issues calm voice prompt to the patient while dispatching high-priority alerts to the caregiver app.'
    }
  ];

  return (
    <section id="scenarios" className="py-24 relative overflow-hidden bg-transparent">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-block px-4 py-2 bg-electric/10 border border-electric/30 text-ice-blue text-sm font-bold tracking-wider mb-6 rounded-full uppercase">
            Real-World Scenarios
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-6 text-white tracking-tight leading-tight"
          >
            Your Companion through <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#168BFF] to-[#D71920]">Every Transition</span>
          </motion.h2>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((phase, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel p-8 relative overflow-hidden group hover:border-electric transition-colors"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-electric/10 rounded-full blur-[40px] pointer-events-none group-hover:bg-electric/20 transition-colors"></div>
              <div className="w-16 h-16 rounded-2xl bg-midnight border border-electric/30 shadow-[0_0_15px_rgba(22,139,255,0.2)] flex items-center justify-center mb-6 relative z-10">
                {phase.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-3 relative z-10">{phase.title}</h4>
              <p className="text-sm font-medium text-slate-text leading-relaxed relative z-10">
                {phase.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
