import { motion } from 'framer-motion';
import { Smartphone, Watch, Cloud, Zap } from 'lucide-react';

export const Solution = () => {
  return (
    <section id="solution" className="py-24 bg-transparent relative overflow-hidden">
      {/* Animated connecting lines background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <motion.path 
            d="M 100 200 C 300 200, 400 400, 800 300 S 1000 100, 1400 200" 
            fill="transparent" 
            stroke="#00F0FF" 
            strokeWidth="2"
            strokeDasharray="10 10"
            animate={{ strokeDashoffset: [0, -100] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-4 py-2 glass-card border-white/20 text-dcure-cyan text-sm font-semibold tracking-wider mb-6">
            04 — THE SOLUTION
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 text-white"
          >
            The Proactive Shift: <span className="text-dcure-cyan glow-text">Ear-Worn Contextual Intelligence</span>
          </motion.h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Moving beyond reactive tracking to an intelligent, predictive wearable system that understands the patient's context.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Central Hub */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-dcure-blue/20 rounded-full blur-[40px] animate-pulse"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Watch size={40} />, title: "D-CURE Wearable", desc: "Advanced sensors for continuous vitals, location, and motion tracking." },
              { icon: <Smartphone size={40} />, title: "Mobile Apps", desc: "Tailored interfaces for Patients, Families, and Professional Caregivers." },
              { icon: <Zap size={40} />, title: "AI Intelligence", desc: "Predictive pattern analysis to preempt emergencies and support routines." },
              { icon: <Cloud size={40} />, title: "Secure Cloud Platform", desc: "HIPAA-compliant data processing and seamless coordination." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="glass-card p-8 text-center flex flex-col items-center group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-20 h-20 rounded-full bg-[#001540] border border-white/10 flex items-center justify-center text-dcure-cyan mb-6 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(31,81,255,0.2)]">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
