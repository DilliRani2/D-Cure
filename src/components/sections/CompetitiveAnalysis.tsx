import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

export const CompetitiveAnalysis = () => {
  const features = [
    'Predictive Risk Modeling',
    'Multimodal EEG & Vitals',
    'Personal Baseline Modeling',
    'Patient Voice Guidance',
    'Context-Aware Alerts'
  ];

  return (
    <section id="competitive" className="py-6 relative overflow-hidden bg-transparent">
      <div className="container mx-auto px-6 md:px-12 relative z-10">

        <div className="text-center max-w-4xl mx-auto mb-10">
          <div className="inline-block px-4 py-2 bg-electric/10 border border-electric/30 text-ice-blue text-sm font-bold tracking-wider mb-6 rounded-full uppercase">
            Competitive Positioning
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-6 text-white tracking-tight leading-tight"
          >
            How We <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#168BFF] to-[#D71920]">Compare</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto overflow-x-auto pb-4"
        >
          <div className="min-w-[800px] glass-panel rounded-2xl overflow-hidden border-electric/30">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="p-6 text-white font-bold text-lg bg-midnight-dark/50 border-b border-electric/20 w-1/3">Feature / Capability</th>
                  <th className="p-6 text-slate-text font-bold text-sm uppercase tracking-wider text-center bg-midnight-dark/50 border-b border-electric/20">Traditional GPS Tracker</th>
                  <th className="p-6 text-slate-text font-bold text-sm uppercase tracking-wider text-center bg-midnight-dark/50 border-b border-electric/20">Fall Detector</th>
                  <th className="p-6 text-slate-text font-bold text-sm uppercase tracking-wider text-center bg-midnight-dark/50 border-b border-electric/20">Camera Monitoring</th>
                  <th className="p-6 text-white font-bold text-sm uppercase tracking-wider text-center bg-electric/20 border-b border-electric/40 border-l border-r rounded-t-lg">D-CURE System</th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, idx) => (
                  <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="p-6 text-ice-blue font-medium">{feature}</td>
                    <td className="p-6 text-center"><X className="mx-auto text-slate-500 opacity-50" size={20} /></td>
                    <td className="p-6 text-center"><X className="mx-auto text-slate-500 opacity-50" size={20} /></td>
                    <td className="p-6 text-center"><X className="mx-auto text-slate-500 opacity-50" size={20} /></td>
                    <td className="p-6 text-center bg-electric/10 border-l border-r border-electric/40 shadow-[inset_0_0_20px_rgba(22,139,255,0.05)]">
                      <Check className="mx-auto text-electric drop-shadow-[0_0_8px_#168BFF]" size={24} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
