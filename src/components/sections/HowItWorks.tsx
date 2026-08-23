import React from 'react';
import { motion } from 'framer-motion';
import { ActivitySquare, BrainCircuit, ScanSearch, BellRing } from 'lucide-react';

export const HowItWorks = () => {
  const steps = [
    { num: "01", title: "Capture", desc: "Device and app continuously collect relevant health and environmental signals.", icon: <ActivitySquare size={32} /> },
    { num: "02", title: "Analyze", desc: "Cloud AI processes the collected information securely in real-time.", icon: <BrainCircuit size={32} /> },
    { num: "03", title: "Detect", desc: "System identifies important patterns, abnormal situations, or risks.", icon: <ScanSearch size={32} /> },
    { num: "04", title: "Alert & Support", desc: "Family or caregivers receive appropriate alerts and can respond immediately.", icon: <BellRing size={32} /> }
  ];

  return (
    <section id="how-it-works" className="py-6 bg-transparent relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            How D-CURE <span className="text-dcure-cyan glow-text">Works</span>
          </motion.h2>
          <p className="text-gray-400 text-lg">A seamless 4-step process operating invisibly to keep patients safe.</p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-1 bg-dcure-blue/20 rounded-full">
            <motion.div 
              className="h-full bg-dcure-cyan shadow-[0_0_15px_#00F0FF]"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            ></motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="w-32 h-32 mb-6 relative">
                  <div className="absolute inset-0 bg-dcure-dark rounded-full border-2 border-dcure-blue/30 flex items-center justify-center text-dcure-cyan shadow-[0_0_20px_rgba(31,81,255,0.2)]">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-dcure-cyan text-dcure-navy font-bold rounded-full flex items-center justify-center text-sm shadow-[0_0_10px_#00F0FF]">
                    {step.num}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
