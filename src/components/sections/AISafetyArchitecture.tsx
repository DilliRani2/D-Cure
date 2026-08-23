import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, AlertTriangle, Activity, Database, Smartphone, Lock } from 'lucide-react';

export const AISafetyArchitecture = () => {
  return (
    <div id="ai">
      {/* AI Section */}
      <section className="py-6 bg-transparent relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-dcure-blue/5 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <motion.h2 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold mb-6"
              >
                AI That Understands <span className="text-dcure-cyan glow-text">Patterns</span>
              </motion.h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                D-CURE's intelligent engine continuously learns the patient's habits. By establishing baselines, it can detect subtle deviations that might indicate confusion, wandering, or declining health.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {['Behavior Analysis', 'Routine Deviations', 'Wandering Risk', 'Emotion Insights'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 glass-card border border-dcure-blue/20">
                    <BrainCircuit className="text-dcure-cyan" size={18} />
                    <span className="text-sm font-semibold text-gray-200">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-dcure-red/10 border border-dcure-red/30 rounded-xl p-4 flex items-start gap-4">
                <AlertTriangle className="text-dcure-red shrink-0 mt-1" />
                <p className="text-sm text-gray-300">
                  <span className="text-white font-bold block mb-1">Important Note</span>
                  AI provides supportive insights and alerts. It does not replace professional medical diagnosis.
                </p>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 h-[400px] relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full border border-dcure-cyan/50 animate-[spin_10s_linear_infinite] flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-dcure-cyan/10 blur-xl"></div>
                </div>
                <BrainCircuit className="absolute text-dcure-cyan drop-shadow-[0_0_15px_#00F0FF]" size={80} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section id="safety" className="py-6 bg-dcure-navy border-y border-dcure-blue/20">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Designed Around <span className="text-dcure-red">Safety</span></h2>
          <div className="flex flex-wrap justify-center gap-6">
            {['Emergency SOS', 'Family Alerts', 'Caregiver Notifications', 'Safe-zone Breaches', 'Location Monitoring'].map((alert, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="px-6 py-4 glass-card border-dcure-red/30 flex items-center gap-3 text-white font-bold"
              >
                <div className="w-3 h-3 rounded-full bg-dcure-red shadow-[0_0_10px_#FF2A2A] animate-pulse"></div>
                {alert}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Flow */}
      <section className="py-6 bg-transparent relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-gray-400">Data Architecture Flow</h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full glass-card flex items-center justify-center text-dcure-cyan mb-4"><Activity size={32} /></div>
              <span className="text-white font-semibold">Device Sensors</span>
            </div>
            
            <div className="hidden md:block w-16 h-px bg-dcure-cyan/50 relative">
               <div className="absolute inset-0 bg-dcure-cyan shadow-[0_0_10px_#00F0FF] animate-pulse"></div>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full glass-card flex items-center justify-center text-dcure-blue mb-4"><Lock size={32} /></div>
              <span className="text-white font-semibold">Edge Processing</span>
            </div>

            <div className="hidden md:block w-16 h-px bg-dcure-cyan/50 relative">
               <div className="absolute inset-0 bg-dcure-cyan shadow-[0_0_10px_#00F0FF] animate-pulse" style={{animationDelay: '0.2s'}}></div>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full glass-card flex items-center justify-center text-white mb-4"><Database size={32} /></div>
              <span className="text-white font-semibold">Cloud AI</span>
            </div>

            <div className="hidden md:block w-16 h-px bg-dcure-cyan/50 relative">
               <div className="absolute inset-0 bg-dcure-cyan shadow-[0_0_10px_#00F0FF] animate-pulse" style={{animationDelay: '0.4s'}}></div>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full glass-card flex items-center justify-center text-dcure-cyan mb-4"><Smartphone size={32} /></div>
              <span className="text-white font-semibold">User Apps</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
