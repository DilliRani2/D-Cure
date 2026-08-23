import React from 'react';
import { motion } from 'framer-motion';

export const Team = () => {
  const team = [
    { name: 'Afrin Fathima B', role: 'Team Member' },
    { name: 'Dilli Rani P', role: 'Team Member' },
    { name: 'Zeenath Nisha S', role: 'Team Member' },
    { name: 'Dwarak S', role: 'Team Member' },
    { name: 'Navadharshan K', role: 'Team Member' }
  ];

  return (
    <section id="team" className="py-6 relative overflow-hidden bg-transparent">
      <div className="container mx-auto px-6 md:px-12 relative z-10">

        <div className="text-center max-w-4xl mx-auto mb-8">
          <div className="inline-block px-4 py-2 bg-electric/10 border border-electric/30 text-ice-blue text-sm font-bold tracking-wider mb-6 rounded-full uppercase">
            Team D-CURE
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-6 text-white tracking-tight leading-tight"
          >
            The Minds Behind <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#168BFF] to-[#D71920]">The Innovation</span>
          </motion.h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel w-48 p-6 flex flex-col items-center text-center group hover:border-electric transition-colors"
            >
              <div className="w-20 h-20 rounded-full bg-midnight border-2 border-electric/40 mb-4 overflow-hidden shadow-[0_0_15px_rgba(22,139,255,0.2)] group-hover:border-electric transition-colors">
                {/* Placeholder for actual avatars */}
                <div className="w-full h-full bg-electric/10 flex items-center justify-center text-electric font-bold text-xl">
                  {member.name.charAt(0)}
                </div>
              </div>
              <h3 className="text-white font-bold text-sm mb-1">{member.name}</h3>
              {/* <p className="text-slate-text text-xs uppercase tracking-wider">{member.role}</p> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
