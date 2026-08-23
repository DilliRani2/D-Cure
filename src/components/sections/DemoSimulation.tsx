import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, MapPin, HeartPulse, BrainCircuit, Activity, PhoneCall, Navigation } from 'lucide-react';

export const DemoSimulation = () => {
  return (
    <section id="demo" className="py-24 relative overflow-hidden bg-transparent">
      <div className="container mx-auto px-6 md:px-12 relative z-10">

        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-block px-4 py-2 bg-electric/10 border border-electric/30 text-ice-blue text-sm font-bold tracking-wider mb-6 rounded-full uppercase">
            Live Demo Simulation
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-6 text-white tracking-tight leading-tight"
          >
            Interactive <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#168BFF] to-[#D71920]">Caregiver Alerts</span>
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 max-w-6xl mx-auto">

          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative w-[320px] h-[650px] rounded-[40px] border-[8px] border-slate-800 bg-[#030E21] shadow-2xl overflow-hidden shrink-0"
          >
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-slate-800 rounded-b-3xl z-30"></div>

            {/* UI Content */}
            <div className="absolute inset-0 bg-[#030E21] p-5 pt-12 flex flex-col gap-4 overflow-y-auto no-scrollbar z-20 relative">

              {/* Alert Header */}
              <div className="bg-accent-red/20 border border-accent-red/40 rounded-2xl p-4 flex items-center gap-3 animate-pulse shadow-[0_0_15px_rgba(215,25,32,0.3)]">
                <AlertTriangle className="text-accent-red shrink-0" size={28} />
                <div>
                  <p className="text-accent-red text-xs font-bold uppercase tracking-wider">Real-Time Risk Level</p>
                  <p className="text-white font-black">High Wandering Risk (82%)</p>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="h-40 rounded-2xl bg-midnight border border-electric/30 relative overflow-hidden flex items-center justify-center shadow-[inset_0_0_20px_rgba(22,139,255,0.1)]">
                {/* Fake map lines */}
                <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M10,90 Q30,50 50,40 T90,10" fill="none" stroke="#168BFF" strokeWidth="2" strokeDasharray="4 4" className="animate-[dash_5s_linear_infinite]" />
                </svg>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center flex flex-col items-center">
                  <MapPin className="text-electric mb-1" size={24} />
                  <span className="text-xs text-ice-blue font-bold uppercase tracking-wider">Live Trajectory</span>
                </div>
              </div>

              {/* Vitals Snapshot */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-midnight border border-electric/20 rounded-xl p-3 flex flex-col">
                  <HeartPulse className="text-accent-red mb-2" size={20} />
                  <p className="text-white font-bold text-lg leading-none mb-1">102 <span className="text-xs text-slate-text font-normal">bpm</span></p>
                  <p className="text-[10px] text-slate-text uppercase">Heart Rate</p>
                </div>
                <div className="bg-midnight border border-electric/20 rounded-xl p-3 flex flex-col">
                  <Activity className="text-electric mb-2" size={20} />
                  <p className="text-white font-bold text-[14px] leading-tight mb-1">Deviation</p>
                  <p className="text-[10px] text-slate-text uppercase">Gait Cadence</p>
                </div>
                <div className="bg-midnight border border-accent-red/30 rounded-xl p-3 flex flex-col col-span-2 shadow-[0_0_10px_rgba(215,25,32,0.1)]">
                  <BrainCircuit className="text-accent-red mb-2" size={20} />
                  <p className="text-white font-bold text-sm mb-1">EEG Stress Spike Detected</p>
                  <p className="text-[10px] text-slate-text uppercase">Neurological Context</p>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-auto space-y-3">
                <button className="w-full bg-electric text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(22,139,255,0.4)] transition-transform active:scale-95">
                  <PhoneCall size={18} /> Direct Call
                </button>
                <button className="w-full bg-slate-800 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-transform active:scale-95 border border-white/10 hover:border-white/30">
                  <Navigation size={18} /> Route to Patient
                </button>
              </div>

            </div>
          </motion.div>

          {/* Explanation Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-lg"
          >
            <h3 className="text-3xl font-bold text-white mb-6">Actionable Caregiver Context</h3>
            <p className="text-slate-text text-lg leading-relaxed mb-6">
              When a risk is detected, caregivers don't just receive a ping. They receive a comprehensive, real-time snapshot of the patient's state, enabling informed and immediate intervention.
            </p>
            <ul className="space-y-4">
              {[
                'Instant Risk Classification',
                'Live GPS Breadcrumbing',
                'Multimodal Vital Overviews',
                'One-Tap Intervention Tools'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-ice-blue font-medium">
                  <div className="w-2 h-2 rounded-full bg-electric glow-text shadow-[0_0_8px_#168BFF]"></div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
