import React from 'react';
import { motion } from 'framer-motion';
import { Brain, HeartPulse, User, CloudUpload } from 'lucide-react';

export const Features = () => {
  const features = [
    { 
      title: 'CONTINUOUS SENSING', 
      desc: 'Advanced sensors monitor critical metrics.', 
      icon: <Brain size={22} className="text-dcure-text" strokeWidth={1.5} />,
      link: '#sensing'
    },
    { 
      title: 'EARLY DETECTION', 
      desc: 'Predictive algorithms identify potential behavioral changes.', 
      icon: <HeartPulse size={22} className="text-dcure-text" strokeWidth={1.5} />,
      link: '#detection'
    },
    { 
      title: 'PERSONALIZED BASELINE', 
      desc: 'System adapts to individual user patterns.', 
      icon: <User size={22} className="text-dcure-text" strokeWidth={1.5} />,
      link: '#baseline'
    },
    { 
      title: 'SECURE CLOUD SYNC', 
      desc: 'Encrypted data transmission to family app.', 
      icon: <CloudUpload size={22} className="text-dcure-text" strokeWidth={1.5} />,
      link: '#sync'
    }
  ];

  return (
    <section className="py-6 bg-transparent relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 text-white"
          >
            Core <span className="text-dcure-cyan glow-text">Features</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 group border border-white/10 hover:border-dcure-cyan/30 transition-colors"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#001540] flex items-center justify-center text-dcure-cyan mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 font-medium">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
