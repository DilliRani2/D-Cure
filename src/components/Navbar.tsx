import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'The Problem', href: '#problem' },
    { name: 'The Solution', href: '#solution' },
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'Technology', href: '#technology' },
    { name: 'Market & Impact', href: '#impact' },
    { name: 'Team', href: '#team' },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-300 bg-white ${isScrolled ? 'shadow-[0_2px_15px_rgba(0,0,0,0.08)] py-1' : 'py-1.5 shadow-sm'}`}
    >
      <div className="container mx-auto px-4 md:px-8 xl:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-0 shrink-0">
          <img src="/images/logo%20without%20words.png" alt="D-CURE Logo" className="h-16 w-auto object-contain translate-y-1" />
          <div className="flex flex-col justify-center -ml-2">
            <span className="text-3xl font-extrabold tracking-wide leading-none font-sans">
              <span className="text-dcure-navy">D</span> <span className="text-dcure-red">cure</span>
            </span>
            <span className="text-[9px] sm:text-[10px] font-semibold text-dcure-navy mt-[4px] uppercase tracking-[0.1em]">
              Sense Wise. <span className="text-dcure-red">Save Lives.</span>
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-[13px] xl:text-[14px] font-semibold text-dcure-navy hover:text-dcure-red transition-colors whitespace-nowrap">
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block shrink-0">
          <a href="#demo" className="px-6 py-2.5 bg-dcure-red hover:bg-red-800 text-white text-[13px] font-bold rounded-lg transition-all hover:shadow-[0_4px_12px_rgba(217,31,38,0.3)] hover:-translate-y-0.5 inline-block">
            REQUEST DEMO
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-dcure-navy p-1" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 flex flex-col shadow-2xl overflow-hidden"
          >
            <div className="p-4 flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-base font-semibold text-dcure-navy hover:text-dcure-red p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  {link.name}
                </a>
              ))}
              <div className="pt-4 pb-2 px-3">
                <a href="#demo" onClick={() => setIsOpen(false)} className="block w-full text-center px-6 py-3.5 bg-dcure-red hover:bg-red-800 text-white font-bold rounded-xl shadow-md">
                  REQUEST DEMO
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
