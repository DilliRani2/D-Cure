import React from 'react';
import { motion } from 'framer-motion';
import { Activity, ShieldCheck, Brain, HeartPulse } from 'lucide-react';

export const Hero = () => {
  const benefits = [
    { icon: <ShieldCheck className="text-dcure-red" size={20} />, title: 'DISCREET', text: 'Designed to blend in.' },
    { icon: <Brain className="text-dcure-red" size={20} />, title: 'INTELLIGENT', text: 'AI that understands each individual.' },
    { icon: <Activity className="text-dcure-red" size={20} />, title: 'PROACTIVE', text: 'Detects risk early, acts faster.' },
    { icon: <HeartPulse className="text-dcure-red" size={20} />, title: 'CARING', text: 'Technology with heart.' },
  ];

  return (
    <section id="home" className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20 bg-transparent">
      {/* Full Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/images/grand mother.png"
          alt="Elderly patient wearing D-CURE smart ear aid"
          className="w-full h-full object-cover object-center md:object-[5%_center]"
        />
        {/* Added a subtle gradient overlay to ensure text remains readable on mobile */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c2a5e]/80 via-transparent to-transparent md:bg-none"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[55%] space-y-6 pt-16 lg:pt-24 pb-20">

            <h1 className="text-4xl md:text-4xl lg:text-[44px] xl:text-[50px] font-extrabold leading-tight text-white tracking-tight flex flex-wrap gap-x-3">
              <span>D CURE</span> <span className="text-[#770e11ff]">SMART EAR AID.</span>
            </h1>

            <h2 className="text-xl md:text-2xl text-white font-semibold mt-4 drop-shadow-md md:drop-shadow-none">
              Proactive Dementia Care — Understand the patient before the emergency happens.
            </h2>

            <p className="text-base md:text-lg text-white/90 max-w-xl leading-relaxed drop-shadow-md md:drop-shadow-none">
              An AI-powered multimodal wearable designed for proactive dementia safety, continuous vital monitoring, early risk prediction, and context-aware caregiver support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">

              <a href="#solution" className="bg-[#6b0f12ff] hover:bg-[#8f1418ff] text-white font-bold px-8 py-3.5 rounded-full flex justify-center items-center gap-2 transition-all shadow-lg">
                See How It Works
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
