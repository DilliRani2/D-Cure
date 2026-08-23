import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Activity, UserX } from 'lucide-react';

export const Gap = () => {
  const tools = [
    {
      icon: <MapPin className="text-accent-red w-10 h-10 mb-6" />,
      title: 'GPS Trackers',
      desc: 'Reactive only; tells where the patient is after wandering, not why risk escalated.'
    },
    {
      icon: <Activity className="text-accent-red w-10 h-10 mb-6" />,
      title: 'Fall Detectors',
      desc: 'Triggered post-incident with zero predictive behavioral warning.'
    },
    {
      icon: <UserX className="text-accent-red w-10 h-10 mb-6" />,
      title: 'Manual Supervision & Bulky Bands',
      desc: 'High caregiver strain, easily removed by agitated patients.'
    }
  ];

  return (
    <section id="gap" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 glass-panel text-ice-blue text-sm font-bold tracking-wider mb-4 uppercase rounded-full">
            The Gap
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-6 text-white leading-tight"
          >
            Why Existing Tools Fail: <br/><span className="bg-clip-text text-transparent bg-gradient-to-r from-[#168BFF] to-[#D71920]">A Shift in Approach</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tools.map((tool, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel p-8 text-center border-t-4 hover:border-t-accent-red flex flex-col items-center"
            >
              {tool.icon}
              <h3 className="text-xl font-bold text-white mb-4">{tool.title}</h3>
              <p className="text-slate-text leading-relaxed font-medium">{tool.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
