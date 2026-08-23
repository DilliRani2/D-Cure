import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Activity, LineChart } from 'lucide-react';

export const WhyEEG = () => {
  const capabilities = [
    {
      icon: <Brain size={24} className="text-[#168BFF]" />,
      desc: 'Direct insight into neurological fluctuations and cognitive load.'
    },
    {
      icon: <Activity size={24} className="text-[#168BFF]" />,
      desc: 'Detects subtle agitation, confusion, and distress before behavioral changes manifest.'
    },
    {
      icon: <LineChart size={24} className="text-[#168BFF]" />,
      desc: 'Enables longitudinal baseline modeling tailored to the individual patient.'
    }
  ];

  return (
    <section id="why-eeg" className="py-12 relative overflow-hidden bg-transparent">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-block px-4 py-2 bg-electric/10 border border-electric/30 text-ice-blue text-sm font-bold tracking-wider mb-6 rounded-full uppercase">
              Why EEG?
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-white leading-tight">
              Leveraging EEG for <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#168BFF] to-[#D71920]">Brain-Signal Context</span>
            </h2>

            <div className="space-y-6 mt-8">
              {capabilities.map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-5 glass-panel hover:border-electric transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-midnight border border-electric/30 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(22,139,255,0.2)]">
                    {item.icon}
                  </div>
                  <div className="flex items-center">
                    <p className="text-base text-white leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative flex items-center justify-center min-h-[400px]"
          >
            <div className="absolute inset-0 bg-gradient-radial from-electric/20 to-transparent rounded-full blur-[80px]"></div>

            {/* EEG Sensor Visualization */}
            <div className="relative z-10 w-full flex justify-center">
              <img
                src="/images/device-internal-eeg.png"
                alt="ADS1299 EEG Brain-Signal Sensor"
                className="max-w-[70%] h-auto drop-shadow-[0_0_20px_rgba(22,139,255,0.4)] object-contain"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
