import React from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, Users as UsersAlt } from 'lucide-react';

export const WhyChoose = () => {
  return (
    <section className="py-24 bg-[#f8fafc]">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-[32px] font-extrabold text-dcure-navy tracking-wide uppercase">
            WHY CHOOSE D-CURE?
          </h2>
          <div className="w-16 h-1 bg-dcure-red mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* For Patients */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-dcure-navy flex items-center justify-center text-white shrink-0 shadow-md">
                <Users size={22} />
              </div>
              <h3 className="text-[17px] font-bold text-dcure-navy tracking-wide uppercase">FOR PATIENTS</h3>
            </div>
            <ul className="space-y-3 text-[15px] font-medium text-dcure-text">
              <li className="flex items-start gap-2">
                <span className="text-dcure-navy mt-1.5 text-xs">•</span> 
                <span>Enhanced safety and security.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-dcure-navy mt-1.5 text-xs">•</span> 
                <span>Promotes independence.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-dcure-navy mt-1.5 text-xs">•</span> 
                <span>Reduced anxiety and disorientation.</span>
              </li>
            </ul>
          </motion.div>

          {/* For Caregivers */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-dcure-red flex items-center justify-center text-white shrink-0 shadow-md">
                <Heart size={22} />
              </div>
              <h3 className="text-[17px] font-bold text-dcure-navy tracking-wide uppercase">FOR CAREGIVERS</h3>
            </div>
            <ul className="space-y-3 text-[15px] font-medium text-dcure-text">
              <li className="flex items-start gap-2">
                <span className="text-dcure-navy mt-1.5 text-xs">•</span> 
                <span>Real-time remote monitoring.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-dcure-navy mt-1.5 text-xs">•</span> 
                <span>Reduced stress and burnout.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-dcure-navy mt-1.5 text-xs">•</span> 
                <span>Improved communication with care team.</span>
              </li>
            </ul>
          </motion.div>

          {/* For Families */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-dcure-navy flex items-center justify-center text-white shrink-0 shadow-md">
                <UsersAlt size={22} />
              </div>
              <h3 className="text-[17px] font-bold text-dcure-navy tracking-wide uppercase">FOR FAMILIES</h3>
            </div>
            <ul className="space-y-3 text-[15px] font-medium text-dcure-text">
              <li className="flex items-start gap-2">
                <span className="text-dcure-navy mt-1.5 text-xs">•</span> 
                <span>Greater peace of mind.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-dcure-navy mt-1.5 text-xs">•</span> 
                <span>Facilitates quality family time.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-dcure-navy mt-1.5 text-xs">•</span> 
                <span>Supports a connected care network.</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
