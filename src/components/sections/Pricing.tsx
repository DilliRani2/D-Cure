import React from 'react';
import { motion } from 'framer-motion';

export const Pricing = () => {
  const tiers = [
    {
      title: 'Prototype',
      price: '~₹18,000',
      unit: 'INR / unit',
      desc: 'Current functional build for early testing.'
    },
    {
      title: 'Scaled Hardware',
      price: '~₹1,500 - ₹2,500',
      unit: 'INR / unit',
      desc: 'Target manufacturing cost at 1,000+ units.'
    },
    {
      title: 'Consumer Device',
      price: '₹3,000 - ₹5,000',
      unit: 'INR / unit',
      desc: 'Final projected retail price for end-users.',
      highlight: true
    },
    {
      title: 'Cloud Subscription',
      price: '₹199 - ₹499',
      unit: 'INR / month',
      desc: 'Continuous AI multimodal risk monitoring.'
    }
  ];

  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-transparent">
      <div className="container mx-auto px-6 md:px-12 relative z-10">

        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-block px-4 py-2 bg-electric/10 border border-electric/30 text-ice-blue text-sm font-bold tracking-wider mb-6 rounded-full uppercase">
            Proposed Pricing
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-6 text-white tracking-tight leading-tight"
          >
            Transparent <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#168BFF] to-[#D71920]">Pricing Tiers</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {tiers.map((tier, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`glass-panel p-8 flex flex-col relative overflow-hidden transition-all ${tier.highlight
                  ? 'border-accent-red shadow-[0_0_30px_rgba(215,25,32,0.15)] scale-105 z-10'
                  : 'hover:border-electric'
                }`}
            >
              {tier.highlight && (
                <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-accent-red to-red-700"></div>
              )}
              <h3 className="text-xl font-bold text-white mb-2">{tier.title}</h3>
              <p className="text-slate-text text-sm mb-6">{tier.desc}</p>

              <div className="mt-auto">
                <span className={`text-2xl font-black block mb-1 ${tier.highlight ? 'text-accent-red glow-text' : 'text-ice-blue'}`}>
                  {tier.price}
                </span>
                <span className="text-slate-text font-medium text-sm block">
                  {tier.unit}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
