import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Cpu, Cloud, BellRing } from 'lucide-react';

export const Technology = () => {
  const steps = [
    {
      icon: <Activity size={32} className="text-[#168BFF]" />,
      title: 'Step 1: Sense',
      desc: 'Continuous capture across brain, cardiac, and motion channels.'
    },
    {
      icon: <Cpu size={32} className="text-[#168BFF]" />,
      title: 'Step 2: Edge Buffer',
      desc: '30–60 second rolling buffer on TinyML edge engine to filter noise.'
    },
    {
      icon: <Cloud size={32} className="text-[#168BFF]" />,
      title: 'Step 3: Selective Cloud Transfer',
      desc: 'Only anomalous, high-risk signature episodes are streamed to reduce bandwidth and maximize battery longevity.'
    },
    {
      icon: <BellRing size={32} className="text-[#168BFF]" />,
      title: 'Step 4: AI Analysis & Alert',
      desc: 'Multimodal risk engine classifies severity and notifies caregivers.'
    }
  ];

  return (
    <section id="pipeline" className="py-6 relative overflow-hidden bg-transparent">
      <div className="container mx-auto px-6 md:px-12 relative z-10">

        <div className="text-center max-w-4xl mx-auto mb-10">
          <div className="inline-block px-4 py-2 bg-electric/10 border border-electric/30 text-ice-blue text-sm font-bold tracking-wider mb-6 rounded-full uppercase">
            Device → Edge → Cloud Pipeline
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-6 text-white tracking-tight leading-tight"
          >
            Intelligent <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#168BFF] to-[#D71920]">Data Flow</span>
          </motion.h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-[#168BFF]/0 via-[#168BFF]/30 to-[#168BFF]/0 z-0"></div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="relative z-10 text-center flex flex-col items-center"
                >
                  <div className="w-32 h-32 rounded-full glass-panel border border-electric/30 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(22,139,255,0.15)] group hover:border-electric hover:shadow-[0_0_30px_rgba(22,139,255,0.3)] transition-all">
                    <div className="group-hover:scale-110 transition-transform">
                      {step.icon}
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3">{step.title}</h4>
                  <p className="text-sm font-medium text-slate-text leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
