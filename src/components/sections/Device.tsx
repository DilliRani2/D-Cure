import React from 'react';
import { motion } from 'framer-motion';
import { Ear, BrainCircuit, Feather } from 'lucide-react';

export const Device = () => {
  const highlights = [
    {
      icon: <Ear size={24} className="text-[#168BFF]" />,
      title: 'Discreet ear-level form factor',
      desc: 'Ensures all-day dignity and compliance without drawing unwanted attention.'
    },
    {
      icon: <BrainCircuit size={24} className="text-[#168BFF]" />,
      title: 'Optimized placement',
      desc: 'Positioned perfectly for high-fidelity brain (EEG) and vital signal acquisition.'
    },
    {
      icon: <Feather size={24} className="text-[#168BFF]" />,
      title: 'Featherweight, ergonomic contour',
      desc: 'Designed meticulously to avoid patient irritation, even during extended wear.'
    }
  ];

  return (
    <section id="device" className="py-6 bg-transparent relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10 xl:gap-12">

          {/* Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-[45%] xl:w-[40%] relative flex flex-col items-center justify-center min-h-[400px]"
          >
            <div className="absolute inset-0 bg-gradient-radial from-electric/20 to-transparent rounded-full blur-[80px]"></div>

            <motion.div
              className="relative z-10 w-full flex justify-center pb-8"
              animate={{
                rotate: [-3, 3, -3],
                y: [-8, 8, -8]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <img src="/images/device-external.png" alt="D-CURE Smart Ear Aid" className="max-w-[80%] h-auto drop-shadow-[0_0_30px_rgba(22,139,255,0.4)]" />
            </motion.div>

            {/* Elegant glowing stand */}
            <div className="absolute bottom-[15%] w-[60%] h-[12px] bg-gradient-to-r from-transparent via-[#168BFF]/40 to-transparent blur-sm rounded-[100%] shadow-[0_10px_30px_rgba(22,139,255,0.6)]"></div>
            <div className="absolute bottom-[15%] w-[40%] h-[4px] bg-gradient-to-r from-transparent via-white/40 to-transparent blur-sm rounded-[100%]"></div>

            {/* Hotspots */}
            <div className="absolute top-[30%] right-[25%] w-3 h-3 bg-accent-red rounded-full shadow-[0_0_15px_#D71920] animate-pulse"></div>
            <div className="absolute bottom-[40%] left-[25%] w-3 h-3 bg-accent-red rounded-full shadow-[0_0_15px_#D71920] animate-pulse"></div>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-[55%] xl:w-[60%]"
          >
            <div className="inline-block px-4 py-2 bg-electric/10 border border-electric/30 text-ice-blue text-sm font-bold tracking-wider mb-6 uppercase rounded-full">
              The Device
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-white leading-tight">
              Unobtrusive. <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#168BFF] to-[#D71920]">Elegant. Ergonomic.</span>
            </h2>

            <div className="space-y-6 mt-8">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-5 glass-panel hover:border-electric transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-midnight border border-electric/30 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(22,139,255,0.2)]">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-text leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
