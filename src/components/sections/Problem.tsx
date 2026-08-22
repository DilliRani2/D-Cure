import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Clock, Map, Activity, PhoneCall, Users } from 'lucide-react';

export const Problem = () => {
  const challenges = [
    { icon: <Clock size={32} />, title: 'Memory & Routines', desc: 'Missed medicines and disrupted daily routines cause health deterioration.' },
    { icon: <Map size={32} />, title: 'Wandering Risks', desc: 'Patients getting lost or wandering outside safe zones poses severe danger.' },
    { icon: <Activity size={32} />, title: 'Limited Monitoring', desc: 'Difficulty in continuously monitoring daily activities and vitals.' },
    { icon: <AlertCircle size={32} />, title: 'Delayed Emergencies', desc: 'Critical situations often go unnoticed until it is too late.' },
    { icon: <PhoneCall size={32} />, title: 'Poor Coordination', desc: 'Fragmented communication between family and professional caregivers.' },
    { icon: <Users size={32} />, title: 'Caregiver Stress', desc: 'Immense emotional and physical burnout for families and caregivers.' },
  ];

  const stats = [
    { num: '57M', desc: 'People living with dementia globally in 2021 (WHO)' },
    { num: '~10M', desc: 'New cases occur every year (WHO)' },
    { num: '6 in 10', desc: 'People with dementia may wander at least once (Alzheimer\'s Assoc.)' },
    { num: '$1.3T', desc: 'Estimated global economic cost of dementia in 2019 (WHO)' },
  ];

  return (
    <section id="problem" className="py-24 bg-transparent relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-dcure-red/50 to-transparent"></div>
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 glass-card border-dcure-blue/30 text-dcure-cyan text-sm font-semibold tracking-wider mb-4">
            02 — THE PROBLEM
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 text-white"
          >
            A Growing Demand for <span className="text-dcure-red">Dignified, Independent Care</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-6 text-center border-t-2 border-t-dcure-red/50"
            >
              <h3 className="text-4xl font-bold text-white mb-2">{item.num}</h3>
              <p className="text-sm font-medium text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {challenges.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 group border-t-2 border-t-transparent hover:border-t-dcure-red transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#001540] flex items-center justify-center text-dcure-red mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(255,42,42,0.1)] group-hover:shadow-[0_0_20px_rgba(255,42,42,0.3)]">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 font-medium leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
