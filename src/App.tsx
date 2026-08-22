import React from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './components/sections/Hero';
import { Features } from './components/sections/Features';
import { WhyChoose } from './components/sections/WhyChoose';

function App() {
  return (
    <div className="min-h-screen bg-white text-dcure-navy font-sans selection:bg-dcure-red selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <WhyChoose />
      </main>
      <Footer />
    </div>
  );
}

export default App;
