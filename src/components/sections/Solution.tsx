import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Cpu, Cloud, HeartHandshake, AlertTriangle, User, MapPin, Heart, Shield, Smartphone, FileText, CheckCircle2 } from 'lucide-react';

export const Solution = () => {
  return (
    <section id="solution" className="pt-12 scroll-mt-20 bg-[#06102b] relative overflow-hidden flex flex-col">

      <div className="container mx-auto px-4 md:px-8 xl:px-12 relative z-10 pb-16">

        {/* Top Header Row */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 xl:gap-12 relative z-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-[55%] xl:w-[60%]"
          >
            <div className="inline-block px-4 py-1.5 border border-white/20 rounded-full mb-6 mt-4">
              <span className="text-xs md:text-sm font-bold tracking-widest uppercase text-white">OUR SOLUTION</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-white tracking-tight leading-tight">
              The Proactive Shift: <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-[#D71920]">Ear-Worn Contextual Intelligence</span>
            </h2>
            <p className="text-gray-300 text-lg md:text-xl font-medium leading-relaxed mt-6">
              D-CURE transforms dementia care from reactive tracking into a proactive, multimodal caregiver-alert ecosystem.
            </p>

            <div className="mt-8 pt-6">
              <div className="flex flex-wrap lg:flex-nowrap items-center gap-1.5 lg:gap-2 text-[#168BFF] font-semibold text-xs lg:text-[13px] xl:text-sm whitespace-nowrap">
                <span className="bg-[#168BFF]/10 px-2 lg:px-3 py-1.5 rounded-lg border border-[#168BFF]/20 shadow-sm">Wearable Sensors</span>
                <span className="text-white/40">→</span>
                <span className="bg-[#168BFF]/10 px-2 lg:px-3 py-1.5 rounded-lg border border-[#168BFF]/20 shadow-sm">Edge AI</span>
                <span className="text-white/40">→</span>
                <span className="bg-[#168BFF]/10 px-2 lg:px-3 py-1.5 rounded-lg border border-[#168BFF]/20 shadow-sm">Multimodal Cloud</span>
                <span className="text-white/40">→</span>
                <span className="bg-gradient-to-r from-[#D71920]/90 to-[#C53535]/90 px-2 lg:px-3 py-1.5 rounded-lg border border-[#D71920]/50 text-white shadow-md">Actionable Caregiver Guidance</span>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-[45%] xl:w-[40%] relative flex justify-center"
          >
            <div className="relative rounded-2xl overflow-hidden bg-white/5 p-2 shadow-2xl border border-white/10 backdrop-blur-sm">
              <img
                src="/images/pipeline-diagram-new.png"
                alt="Contextual Intelligence Pipeline"
                className="w-full max-w-[600px] object-contain rounded-xl shadow-inner bg-white"
              />
            </div>
          </motion.div>
        </div>
      </div>


    </section>
  );
};
