import React from 'react';
import { motion } from 'framer-motion';
import { Shield, BrainCircuit, Activity, Wifi } from 'lucide-react';

export const Device = () => {
  return (
    <section id="device" className="py-24 bg-transparent relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Visual Showcase */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="absolute inset-0 bg-gradient-radial from-dcure-blue/20 to-transparent rounded-full blur-[80px]"></div>
            <img 
              src="/images/dcure-device-worn.png" 
              alt="D-CURE Device" 
              className="relative z-10 w-full max-w-md mx-auto object-contain filter drop-shadow-[0_0_40px_rgba(0,240,255,0.2)]"
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1572569432702-86103328e19b?q=80&w=600&auto=format&fit=crop';
              }}
            />
            {/* Hotspots */}
            <div className="absolute top-[20%] right-[30%] w-3 h-3 bg-dcure-cyan rounded-full shadow-[0_0_15px_#00F0FF] animate-pulse"></div>
            <div className="absolute bottom-[30%] left-[20%] w-3 h-3 bg-dcure-cyan rounded-full shadow-[0_0_15px_#00F0FF] animate-pulse"></div>
          </motion.div>

          {/* Details */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-block px-4 py-2 glass-card border-dcure-cyan/30 text-dcure-cyan text-sm font-semibold tracking-wider mb-6">
              05 — THE DEVICE
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Unobtrusive. <span className="text-dcure-cyan glow-text">Elegant.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed font-semibold">
              Elegant physical design.
            </p>
            <p className="text-gray-400 text-lg mb-12 leading-relaxed">
              Ergonomic comfort. Engineered for comfort and built for safety. The D-CURE wearable provides continuous, unobtrusive monitoring to ensure peace of mind without compromising dignity.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: <Activity className="text-dcure-cyan" />, title: 'Advanced Sensors', desc: 'MAX30102 (HR/SpO2), ICM-42688 (IMU), & CXD5605 (GPS).' },
                { icon: <BrainCircuit className="text-dcure-cyan" />, title: 'EEG Front-End', desc: 'ADS1299 for direct insight into brain activity & subtle shifts.' },
                { icon: <Wifi className="text-dcure-cyan" />, title: 'Always Connected', desc: 'ESP32-S3 & SIM7080G (LTE-M/NB-IoT) for continuous sync.' },
                { icon: <Shield className="text-dcure-red" />, title: 'Belt Concept', desc: 'Detachable safety belt tether to prevent accidental removal.' }
              ].map((spec, i) => (
                <div key={i} className="flex items-start gap-4 p-4 glass-card border border-white/10 hover:border-dcure-cyan/30 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-[#001540] flex items-center justify-center shrink-0 border border-white/5">
                    {spec.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">{spec.title}</h4>
                    <p className="text-sm text-gray-400 font-medium">{spec.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12">
              <a href="#how-it-works" className="inline-flex items-center gap-2 text-dcure-cyan hover:text-white transition-colors font-bold uppercase tracking-wider text-sm border-b border-dcure-cyan hover:border-white pb-1">
                See How It Works →
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
