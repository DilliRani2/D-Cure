import React from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Sections 1-8
import { Hero } from './components/sections/Hero';
import { Problem } from './components/sections/Problem';
import { Gap } from './components/sections/Gap';
import { Solution } from './components/sections/Solution';
import { Device } from './components/sections/Device';
import { InsideDCure } from './components/sections/InsideDCure';
import { WhyEEG } from './components/sections/WhyEEG';
import { SafetyTether } from './components/sections/SafetyTether';

// Sections 10-15
import { Technology } from './components/sections/Technology';
import { Scenarios } from './components/sections/Scenarios';
import { DemoSimulation } from './components/sections/DemoSimulation';
import { WhyChoose } from './components/sections/WhyChoose';

// Sections 16-22
import { Impact } from './components/sections/Impact';
import { Business } from './components/sections/Business';
import { Pricing } from './components/sections/Pricing';
import { CompetitiveAnalysis } from './components/sections/CompetitiveAnalysis';
import { Roadmap } from './components/sections/Roadmap';
import { Team } from './components/sections/Team';

function App() {
  return (
    <div className="min-h-screen bg-midnight text-white font-sans selection:bg-accent-red selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Device />
        <InsideDCure />
        <WhyEEG />
        <SafetyTether />

        <Technology />
        <Scenarios />
        <DemoSimulation />
        <WhyChoose />

        <Impact />
        <Business />
        <Pricing />
        <CompetitiveAnalysis />
        <Roadmap />
        <Team />
      </main>
      <Footer />
    </div>
  );
}

export default App;
