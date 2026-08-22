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
    <section id="home" className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-white via-[#f8fafc] to-[#e2e8f0]">

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 space-y-6"
          >

            <h1 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold leading-tight text-dcure-navy uppercase tracking-tight">
              Empowering Independence. <br />
              <span className="text-dcure-navy">Ensuring Safety.</span>
            </h1>

            <h2 className="text-lg md:text-xl text-dcure-navy font-semibold mt-2">
              Understands their needs before an emergency happens.
            </h2>

            <p className="text-sm md:text-base text-dcure-navy max-w-xl leading-relaxed">
              More than just a tracker, D-CURE is a comfortable, ear-worn device that learns personal patterns to predict and prevent wandering. It gives patients their dignity, and families their peace of mind.
            </p>

            <p className="text-xs text-dcure-navy max-w-xl leading-relaxed font-medium italic">
              Sense Wise. Save lives.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button className="px-8 py-3.5 bg-dcure-red text-white font-bold rounded-lg shadow-lg hover:shadow-xl hover:bg-red-800 transition-all hover:-translate-y-0.5">
                Explore D-CURE
              </button>
              <button className="px-8 py-3.5 bg-white border-2 border-dcure-navy text-dcure-navy font-bold rounded-lg shadow-sm hover:bg-gray-50 transition-all hover:-translate-y-0.5">
                See How It Works
              </button>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 border-t border-gray-200">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + (idx * 0.1) }}
                  className="flex flex-col space-y-2 items-start"
                >
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center border border-gray-100">
                    {benefit.icon}
                  </div>
                  <div>
                    <span className="block text-[11px] font-extrabold text-dcure-navy uppercase tracking-wider">{benefit.title}</span>
                    <span className="block text-[11px] font-medium text-dcure-navy leading-tight mt-0.5">{benefit.text}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block absolute right-0 top-0 bottom-0 w-[58%]"
          >
            <img
              src="/images/woman-bench.jpg"
              alt="Grandmother wearing D-CURE"
              className="w-full h-full object-cover object-[15%_center]"
              style={{
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 25%)',
                maskImage: 'linear-gradient(to right, transparent 0%, black 25%)'
              }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
