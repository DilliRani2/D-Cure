import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, BrainCircuit, HeartPulse, Compass, Wifi, MapPin, Mic, Battery, Thermometer, Droplet } from 'lucide-react';

export const InsideDCure = () => {
  const specs = [
    {
      icon: <Cpu size={20} className="text-[#168BFF]" />,
      component: 'Processing',
      chip: 'ESP32-S3',
      desc: 'Main MCU with Wi-Fi + BLE.'
    },
    {
      icon: <HeartPulse size={20} className="text-[#168BFF]" />,
      component: 'Vitals',
      chip: 'MAX30102',
      desc: 'PPG + SpO2, Heart Rate.'
    },
    {
      icon: <Compass size={20} className="text-[#168BFF]" />,
      component: 'Inertial Tracking',
      chip: 'ICM-42688-P',
      desc: '6-Axis IMU (Accel + Gyro).'
    },
    {
      icon: <MapPin size={20} className="text-[#168BFF]" />,
      component: 'Location Tracking',
      chip: 'CXD5605',
      desc: 'GPS Module for Location Tracking.'
    },
    {
      icon: <Wifi size={20} className="text-[#168BFF]" />,
      component: 'Connectivity',
      chip: 'SIM7080G',
      desc: 'LTE-M / NB-IoT, eSIM Ready.'
    },
    {
      icon: <Mic size={20} className="text-[#168BFF]" />,
      component: 'Voice Capture',
      chip: 'MEMS Microphone',
      desc: 'Behind Acoustic Port (Waterproof Mesh).'
    },
    {
      icon: <BrainCircuit size={20} className="text-[#168BFF]" />,
      component: 'Brain Activity',
      chip: 'ADS1299 EEG',
      desc: '2-4 Channel EEG Sensing (Frontal/Temporal).'
    },
    {
      icon: <Battery size={20} className="text-[#168BFF]" />,
      component: 'Power',
      chip: 'Battery',
      desc: 'Li-Po 3.7V, 350mAh.'
    },
    {
      icon: <Thermometer size={20} className="text-[#168BFF]" />,
      component: 'Heat Spreading',
      chip: 'Thermal Material',
      desc: 'Graphite Sheet.'
    },
    {
      icon: <Droplet size={20} className="text-[#168BFF]" />,
      component: 'Durability',
      chip: 'Water Resistant',
      desc: 'Nano Coating + Sealed Enclosure (IP68 Rated).'
    }
  ];

  return (
    <section id="hardware" className="py-12 relative overflow-hidden bg-transparent">
      <div className="container mx-auto px-6 md:px-12 relative z-10">

        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-block px-4 py-2 bg-electric/10 border border-electric/30 text-ice-blue text-sm font-bold tracking-wider mb-6 rounded-full uppercase">
            Inside D-CURE
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-6 text-white tracking-tight"
          >
            Hardware <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#168BFF] to-[#D71920]">Architecture</span>
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-6 max-w-7xl mx-auto">

          {/* Left Specs */}
          <div className="w-full lg:w-[35%] flex flex-col gap-4">
            {specs.slice(0, 5).map((spec, idx) => (
              <motion.div
                key={spec.chip}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-panel p-4 xl:p-5 relative overflow-hidden group hover:border-electric transition-all"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  {spec.icon}
                </div>
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-midnight border border-electric/30 flex items-center justify-center shadow-[0_0_15px_rgba(22,139,255,0.2)]">
                    {spec.icon}
                  </div>
                  <div>
                    <h4 className="text-[9px] font-bold text-accent-red uppercase tracking-wider mb-0.5">{spec.component}</h4>
                    <h3 className="text-sm xl:text-base font-black text-white glow-text leading-tight">{spec.chip}</h3>
                  </div>
                </div>
                <p className="text-[11px] xl:text-xs text-slate-text leading-relaxed font-medium">{spec.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Center Device Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-[24%] xl:w-[20%] flex justify-center relative order-first lg:order-none mb-10 lg:mb-0 items-center"
          >
            <div className="absolute inset-0 bg-gradient-radial from-electric/30 to-transparent rounded-full blur-[100px] transform scale-150"></div>
            <img
              src="/images/device-internal-full.png"
              alt="D-CURE Internal Hardware Architecture"
              className="relative z-10 w-full max-w-[280px] lg:max-w-[380px] xl:max-w-[480px] h-auto drop-shadow-[0_0_30px_rgba(22,139,255,0.4)] object-contain"
            />
          </motion.div>

          {/* Right Specs */}
          <div className="w-full lg:w-[35%] flex flex-col gap-4">
            {specs.slice(5, 10).map((spec, idx) => (
              <motion.div
                key={spec.chip}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-panel p-4 xl:p-5 relative overflow-hidden group hover:border-electric transition-all"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  {spec.icon}
                </div>
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-midnight border border-electric/30 flex items-center justify-center shadow-[0_0_15px_rgba(22,139,255,0.2)]">
                    {spec.icon}
                  </div>
                  <div>
                    <h4 className="text-[9px] font-bold text-accent-red uppercase tracking-wider mb-0.5">{spec.component}</h4>
                    <h3 className="text-sm xl:text-base font-black text-white glow-text leading-tight">{spec.chip}</h3>
                  </div>
                </div>
                <p className="text-[11px] xl:text-xs text-slate-text leading-relaxed font-medium">{spec.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
