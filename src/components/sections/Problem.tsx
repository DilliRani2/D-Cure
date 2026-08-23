import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Users, MapPin, TrendingUp, Clock, AlertTriangle, Car, Droplets, Sun, Activity, TrendingDown, Users2 } from 'lucide-react';

export const Problem = () => {
  const stats = [
    {
      num: '57 MILLION',
      desc: 'people living with dementia globally in 2021',
      icon: <Globe size={40} className="text-[#1A56DB]" />,
      color: 'border-[#1A56DB]',
      numColor: 'text-[#1A56DB]'
    },
    {
      num: '~10 MILLION',
      desc: 'new cases every year',
      icon: <Users size={40} className="text-[#0E9F6E]" />,
      color: 'border-[#0E9F6E]',
      numColor: 'text-[#0E9F6E]'
    },
    {
      num: '6 IN 10',
      desc: 'people with dementia wander at least once',
      icon: <MapPin size={40} className="text-[#7E3AF2]" />,
      color: 'border-[#7E3AF2]',
      numColor: 'text-[#7E3AF2]'
    },
    {
      num: '$1.3 TRILLION',
      desc: 'estimated global economic cost of dementia in 2019',
      icon: <TrendingUp size={40} className="text-[#E02424]" />,
      color: 'border-[#E02424]',
      numColor: 'text-[#E02424]'
    },
  ];

  return (
    <section id="problem" className="pt-24 pb-4 bg-midnight relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:linear-gradient(to_top,white,transparent)] z-0"></div>

      <div className="container mx-auto px-4 md:px-8 xl:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <div className="inline-block px-6 py-2 border border-white text-white text-sm font-bold tracking-wider mb-6 rounded-full uppercase bg-midnight">
            THE PROBLEM: The Caregiver Gap
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-[56px] font-bold mb-6 text-white leading-tight tracking-tight"
          >
            Closing the Critical Dementia Caregiver Gap
          </motion.h2>
        </div>

        {/* 4 Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16 lg:gap-y-0 pb-12">
          {stats.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative bg-white rounded-3xl p-6 pt-16 pb-8 text-center shadow-xl border-b-4 flex flex-col justify-between"
              style={{ borderBottomColor: item.color.replace('border-[', '').replace(']', '') }}
            >
              {/* Avatar Icon */}
              <div className={`absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg border-[4px] ${item.color}`}>
                {item.icon}
              </div>

              {/* Content */}
              <div>
                <h3 className={`text-3xl lg:text-4xl font-black mb-3 leading-none tracking-tight ${item.numColor}`}>
                  {item.num}
                </h3>
                <p className="text-gray-800 text-sm md:text-base leading-snug font-medium px-2">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Evidence Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-3xl p-8 shadow-xl mt-8 flex flex-col items-center border border-gray-100"
        >
          <h3 className="text-3xl font-bold text-[#0c2a5e] mb-8">
            The Caregiver Gap - Evidence
          </h3>

          <div className="flex flex-col xl:flex-row items-center justify-between w-full gap-8">
            
            {/* Left: 60% */}
            <div className="flex items-center gap-4 xl:w-1/4">
              <Users2 size={64} className="text-[#C53535] opacity-80" />
              <div>
                <h4 className="text-3xl font-black text-[#C53535]">~60%</h4>
                <p className="text-sm font-bold text-gray-700 leading-tight">of people with<br/>dementia wander</p>
              </div>
            </div>

            <div className="hidden xl:block w-px h-24 bg-gray-200"></div>

            {/* Center-Left: 24 Hours */}
            <div className="flex items-center gap-4 xl:w-1/4">
              <div className="w-16 h-16 rounded-full border-4 border-[#C53535] flex items-center justify-center">
                <Clock size={32} className="text-[#C53535]" />
              </div>
              <div>
                <p className="text-xs text-gray-600 font-medium">Patients are found within</p>
                <h4 className="text-2xl font-black text-[#C53535] leading-tight">24 HOURS</h4>
                <p className="text-xs text-gray-600 font-medium mt-1">face serious risk of<br/>injury or death</p>
              </div>
            </div>

            {/* Center-Right: Icons & Threat */}
            <div className="flex flex-col items-center xl:w-1/4">
              <div className="flex gap-3 text-[#1A56DB] mb-3">
                <div className="flex flex-col items-center"><Car size={24}/><span className="text-[8px] font-bold mt-1">Traffic</span></div>
                <div className="flex flex-col items-center"><TrendingDown size={24}/><span className="text-[8px] font-bold mt-1">Fall</span></div>
                <div className="flex flex-col items-center"><AlertTriangle size={24}/><span className="text-[8px] font-bold mt-1">Danger</span></div>
                <div className="flex flex-col items-center"><Sun size={24}/><span className="text-[8px] font-bold mt-1">Exposure</span></div>
                <div className="flex flex-col items-center"><Droplets size={24}/><span className="text-[8px] font-bold mt-1">Dehydration</span></div>
                <div className="flex flex-col items-center"><Activity size={24}/><span className="text-[8px] font-bold mt-1">Time</span></div>
              </div>
              <p className="text-[#C53535] font-bold text-[10px] tracking-widest uppercase">
                MISSING INCIDENTS CAN BE: LIFE THREATENING
              </p>
            </div>

            <div className="hidden xl:block w-px h-24 bg-gray-200"></div>

            {/* Right: Outcomes chart */}
            <div className="flex items-center gap-4 xl:w-1/4">
              <TrendingUp size={64} className="text-[#FF9B9B]" />
              <p className="text-sm font-bold text-gray-800 leading-snug">
                Longer<br/>time-to-discovery<br/>linked to worse<br/>outcomes
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
