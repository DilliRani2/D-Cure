import React from 'react';
import { motion } from 'framer-motion';
import { Milestone } from 'lucide-react';

export const Roadmap = () => {
  const phases = [
    { phase: "Phase 1", title: "Functional Prototype Validation & Bench Testing", status: "completed" },
    { phase: "Phase 2", title: "Clinical Trials, Pilot Deployments & Data Partnerships", status: "active" },
    { phase: "Phase 3", title: "Hardware Optimization, Scaled Manufacturing & Indian Localization", status: "upcoming" },
    { phase: "Phase 4", title: "Multi-sensor Expansion & Global Regulatory Approvals", status: "future" }
  ];

  return (
    <section id="roadmap" className="py-24 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-block px-4 py-2 bg-electric/10 border border-electric/30 text-ice-blue text-sm font-bold tracking-wider mb-6 rounded-full uppercase">
            Future Roadmap
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-6 text-white tracking-tight leading-tight"
          >
            Our Vision: Future <br/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#168BFF] to-[#D71920]">Expansion and Advancements</span>
          </motion.h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Horizontal Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-electric/20 -translate-y-1/2 hidden md:block z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {phases.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative z-10 glass-panel p-8 rounded-2xl border-electric/30 text-center hover:border-electric transition-colors group"
              >
                <div className={`w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-6 shadow-lg transition-transform group-hover:-translate-y-1 ${
                  step.status === 'completed' ? 'bg-[#168BFF] text-white shadow-[0_0_20px_rgba(22,139,255,0.4)]' : 
                  step.status === 'active' ? 'bg-accent-red text-white animate-pulse shadow-[0_0_20px_rgba(215,25,32,0.4)]' : 
                  'bg-midnight border border-electric/40 text-electric'
                }`}>
                  <Milestone size={24} />
                </div>
                <span className={`text-xs font-bold uppercase tracking-wider mb-3 block ${
                   step.status === 'active' ? 'text-accent-red' : 'text-electric'
                }`}>{step.phase}</span>
                <h4 className="text-white font-bold leading-relaxed">{step.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
