import React from 'react';
import { motion } from 'framer-motion';
import { User, Map, Database, Stethoscope, Combine } from 'lucide-react';

export const AboutUs = () => {
  const team = [
    "Afrin Fathima B",
    "Dilli Rani P",
    "Zeenath Nisha S",
    "Dwarak S",
    "Navadharshan K"
  ];

  const roadmap = [
    { icon: <Map size={24} />, text: "Indian localization" },
    { icon: <Database size={24} />, text: "Data partnerships" },
    { icon: <Stethoscope size={24} />, text: "Clinical validation and extensions" },
    { icon: <Combine size={24} />, text: "Future sensor expansion" }
  ];

  return (
    <section id="about" className="py-24 bg-transparent relative overflow-hidden">
      {/* Ambient Radial Glow Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-electric/5 rounded-full blur-[150px] pointer-events-none z-0"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-4 py-2 bg-electric/10 border border-electric/30 text-ice-blue text-sm font-bold tracking-wider mb-6 rounded-full uppercase">
            About D-CURE
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-6 text-white tracking-tight"
          >
            Connecting <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#168BFF] to-[#D71920]">technology, people, and care.</span>
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Team D-CURE */}
          <div className="w-full lg:w-1/2">
            <div className="glass-panel p-8 md:p-12 h-full">
              <h3 className="text-2xl font-bold text-white mb-8 border-b border-electric/20 pb-4">Team D-CURE</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {team.map((member, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-midnight-dark/60 border border-electric/10 hover:border-electric/40 hover:bg-electric/10 transition-colors group cursor-default"
                  >
                    <div className="w-10 h-10 rounded-full bg-electric/10 text-electric border border-electric/30 group-hover:bg-electric group-hover:text-white transition-colors flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(22,139,255,0.2)] group-hover:shadow-[0_0_15px_rgba(22,139,255,0.6)]">
                      <User size={18} />
                    </div>
                    <span className="font-bold text-slate-text group-hover:text-white transition-colors">{member}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Future Roadmap */}
          <div className="w-full lg:w-1/2">
            <div className="glass-panel p-8 md:p-12 h-full relative overflow-hidden">
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-electric/20 blur-[80px] rounded-full pointer-events-none"></div>
              
              <h3 className="text-2xl font-bold text-white mb-8 border-b border-electric/20 pb-4 relative z-10">Future Roadmap</h3>
              <div className="relative z-10 pl-4 border-l-2 border-electric/30 space-y-8">
                {roadmap.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="relative flex items-center gap-6"
                  >
                    {/* Timeline Node */}
                    <div className="absolute -left-[25px] w-4 h-4 rounded-full bg-midnight-dark border-2 border-electric shadow-[0_0_10px_rgba(22,139,255,0.8)]"></div>
                    
                    <div className="w-12 h-12 rounded-full bg-midnight-dark border border-electric/30 text-electric flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(22,139,255,0.3)]">
                      {item.icon}
                    </div>
                    <span className="text-white font-semibold text-lg">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
