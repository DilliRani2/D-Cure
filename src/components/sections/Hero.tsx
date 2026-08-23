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
          alt="Hero Background"
          className="w-full h-50% object-cover object-[5%_center]"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[55%] space-y-6 pt-16 lg:pt-24 pb-20">

            <h1 className="text-3xl md:text-4xl lg:text-[44px] xl:text-[50px] font-extrabold leading-tight text-white tracking-tight whitespace-nowrap">
              D CURE <span className="text-[#770e11ff]">SMART EAR AID.</span>
            </h1>

            <h2 className="text-xl md:text-2xl text-white font-semibold mt-4">
              Proactive Dementia Care — Understand the patient before the emergency happens.
            </h2>

            <p className="text-base md:text-lg text-white/90 max-w-xl leading-relaxed">
              An AI-powered multimodal wearable designed for proactive dementia safety, continuous vital monitoring, early risk prediction, and context-aware caregiver support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#demo" className="bg-[#D71920] text-white font-bold px-8 py-3.5 rounded-full shadow-[0_0_20px_rgba(215,25,32,0.4)] flex justify-center items-center gap-2 transition-all hover:shadow-[0_0_25px_rgba(215,25,32,0.6)] hover:-translate-y-0.5">
                Explore Platform
              </a>
              <a href="#solution" className="glass-panel text-white font-bold px-8 py-3.5 rounded-full flex justify-center items-center gap-2 transition-all hover:border-electric">
                See How It Works
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
