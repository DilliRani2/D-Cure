import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Users, ShieldCheck } from 'lucide-react';

export const AppEcosystem = () => {
  const [activeTab, setActiveTab] = useState('patient');

  const apps = {
    patient: {
      title: "Patient App",
      desc: "Simple, high-contrast interface designed specifically for elderly users.",
      icon: <User size={24} />,
      features: ["Daily schedule & reminders", "Medication reminders", "Memory center", "Music & relaxation", "Brain games", "Emergency SOS"]
    },
    family: {
      title: "Family Member App",
      desc: "Full access and control over the ecosystem and care plans.",
      icon: <Users size={24} />,
      features: ["Patient profile management", "Schedule & medication management", "Live location & safe zones", "Reports & analytics", "Access & permission control"]
    },
    caregiver: {
      title: "Caregiver App",
      desc: "Limited, read-only access tailored to assigned permissions.",
      icon: <ShieldCheck size={24} />,
      features: ["Patient overview", "Today's schedule & medications", "Assigned tasks", "Emergency support", "Alerts & reports"]
    }
  };

  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Connected <span className="text-dcure-blue">App Ecosystem</span>
          </motion.h2>
          <p className="text-gray-400 text-lg">Three tailored experiences perfectly synchronized in real-time.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* App Selector */}
          <div className="w-full lg:w-1/3 flex flex-col gap-4">
            {Object.entries(apps).map(([key, app]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`text-left p-6 rounded-2xl border transition-all duration-300 ${
                  activeTab === key 
                  ? 'bg-dcure-blue/20 border-dcure-cyan shadow-[0_0_20px_rgba(0,240,255,0.15)]' 
                  : 'bg-dcure-dark border-gray-800 hover:border-dcure-blue/50'
                }`}
              >
                <div className={`flex items-center gap-4 mb-2 ${activeTab === key ? 'text-dcure-cyan' : 'text-gray-400'}`}>
                  {app.icon}
                  <h3 className="text-xl font-bold text-white">{app.title}</h3>
                </div>
                <p className="text-sm text-gray-400 pl-10">{app.desc}</p>
              </button>
            ))}
          </div>

          {/* App Display */}
          <div className="w-full lg:w-2/3 relative h-[500px] glass-card flex items-center justify-center overflow-hidden p-8">
            <div className="absolute inset-0 bg-gradient-radial from-dcure-blue/10 to-transparent"></div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 w-full max-w-md bg-dcure-dark rounded-3xl border border-gray-700 shadow-2xl p-6"
              >
                <div className="w-full h-8 flex justify-center mb-6">
                  <div className="w-16 h-1.5 bg-gray-700 rounded-full"></div>
                </div>
                
                <h4 className="text-2xl font-bold text-white mb-2 text-center">{apps[activeTab as keyof typeof apps].title}</h4>
                <div className="h-px w-full bg-gradient-to-r from-transparent via-dcure-blue/50 to-transparent mb-6"></div>
                
                <ul className="space-y-4">
                  {apps[activeTab as keyof typeof apps].features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 bg-dcure-navy p-4 rounded-xl border border-dcure-blue/10">
                      <div className="w-2 h-2 rounded-full bg-dcure-cyan shadow-[0_0_5px_#00F0FF]"></div>
                      <span className="text-gray-300 text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};
