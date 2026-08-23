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
    { name: 'Our Solution', href: '#solution' },
    { name: 'Technology', href: '#pipeline' },
    { name: 'Impact', href: '#impact' },
    { name: 'About Us', href: '#team' },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-300 backdrop-blur-md ${isScrolled ? 'bg-white/90 shadow-lg py-1 border-b border-gray-200' : 'bg-white/70 py-2 border-b border-transparent'}`}
    >
      <div className="container mx-auto px-4 md:px-8 xl:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 shrink-0">
          <img src="/images/logo%20without%20words.png" alt="D-CURE Logo" className="h-10 w-auto object-contain" />
          <div className="flex flex-col justify-center">
            <span className="text-xl font-extrabold tracking-widest leading-none font-sans text-dcure-navy flex items-center gap-1">
              D <span className="text-dcure-red lowercase">cure</span>
            </span>
            <span className="text-[9px] font-medium text-dcure-navy mt-[2px]">
              Sense Wise. <span className="text-dcure-red">Save Lives.</span>
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-5 xl:space-x-6">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-[12px] font-bold uppercase tracking-widest text-black hover:text-[#168BFF] transition-colors whitespace-nowrap py-2">
              {link.name}
            </a>
          ))}
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
            className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-t border-gray-200 flex flex-col shadow-2xl overflow-hidden max-h-[80vh] overflow-y-auto"
          >
            <div className="p-4 flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-[13px] font-bold uppercase tracking-widest text-black hover:text-[#168BFF] p-3 rounded-lg hover:bg-gray-100 transition-colors">
                  {link.name}
                </a>
              ))}
              <div className="pt-4 pb-2 px-3">
                <a href="#demo" onClick={() => setIsOpen(false)} className="bg-[#D71920] text-white font-semibold px-[24px] py-[10px] rounded-full shadow-[0_0_20px_rgba(215,25,32,0.4)] block w-full text-center flex justify-center items-center gap-2 transition-all">
                  EXPLORE PLATFORM
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
