import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Target, DollarSign, Milestone } from 'lucide-react';

export const Business = () => {
  return (
    <div id="business">
      {/* Market & Impact */}
      <section className="py-24 bg-dcure-navy">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-6 text-white"
            >
              Market & <span className="text-dcure-cyan">Impact</span>
            </motion.h2>
            <p className="text-gray-400 text-lg">Positioning D-CURE for sustainable growth and profound social good.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="glass-card p-8 border-t-2 border-t-dcure-cyan">
              <div className="flex items-center gap-3 mb-6">
                <Target className="text-dcure-cyan" size={28} />
                <h3 className="text-2xl font-bold text-white">Target Market</h3>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                India needs affordable, proactive dementia care. Recent national estimates range from <strong className="text-white">3.9 to 8.8 Million</strong> people, demonstrating the scale of the unmet need.
              </p>
              <h4 className="text-white font-bold mb-3">Beneficiary Segments:</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-gray-300"><div className="w-1.5 h-1.5 rounded-full bg-dcure-cyan"></div> Families caring for dementia patients at home</li>
                <li className="flex items-center gap-2 text-sm text-gray-300"><div className="w-1.5 h-1.5 rounded-full bg-dcure-cyan"></div> Memory clinics & hospitals</li>
                <li className="flex items-center gap-2 text-sm text-gray-300"><div className="w-1.5 h-1.5 rounded-full bg-dcure-cyan"></div> Insurance / Eldercare platforms</li>
              </ul>
            </div>

            <div className="glass-card p-8 border-t-2 border-t-dcure-blue">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="text-dcure-blue" size={28} />
                <h3 className="text-2xl font-bold text-white">Cost Structure</h3>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                India-first low-cost architecture designed for scale and accessibility.
              </p>
              <div className="bg-dcure-dark rounded-xl p-4 flex items-center justify-between border border-dcure-blue/20">
                <span className="text-white font-semibold">Prototype</span>
                <span className="text-dcure-cyan font-bold">~₹18,000 / unit</span>
              </div>
              <div className="bg-dcure-dark rounded-xl p-4 flex items-center justify-between border border-dcure-blue/20 mt-3">
                <span className="text-white font-semibold">Scaled Hardware (1000+ Units)</span>
                <span className="text-dcure-cyan font-bold">~₹1,500 - 2,500 / unit</span>
              </div>
              <div className="bg-dcure-dark rounded-xl p-4 flex items-center justify-between border border-dcure-blue/20 mt-3">
                <span className="text-white font-semibold">Future Device Price</span>
                <span className="text-dcure-cyan font-bold">₹3,000 - 5,000 / unit</span>
              </div>
              <div className="bg-dcure-dark rounded-xl p-4 flex items-center justify-between border border-dcure-blue/20 mt-3">
                <span className="text-white font-semibold">Cloud Subscription</span>
                <span className="text-dcure-cyan font-bold">₹199 - 499 / month</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="py-24 bg-transparent relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-6 text-white"
            >
              Future <span className="text-dcure-blue">Roadmap</span>
            </motion.h2>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Horizontal Line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-dcure-navy -translate-y-1/2 hidden md:block"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { phase: "Phase 1", title: "Prototype & Testing", status: "completed" },
                { phase: "Phase 2", title: "Pilot & User Feedback", status: "active" },
                { phase: "Phase 3", title: "Manufacturing & Launch", status: "upcoming" },
                { phase: "Phase 4", title: "AI & Sensor Expansion", status: "future" }
              ].map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="relative z-10 bg-dcure-navy p-6 rounded-2xl border border-dcure-blue/20 text-center"
                >
                  <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4 ${
                    step.status === 'completed' ? 'bg-dcure-cyan text-dcure-dark' : 
                    step.status === 'active' ? 'bg-dcure-blue text-white animate-pulse' : 
                    'bg-dcure-dark text-gray-500 border border-gray-700'
                  }`}>
                    <Milestone size={20} />
                  </div>
                  <span className="text-xs font-bold text-dcure-cyan uppercase tracking-wider mb-2 block">{step.phase}</span>
                  <h4 className="text-white font-bold">{step.title}</h4>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
