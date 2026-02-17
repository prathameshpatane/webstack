
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeBackground from './components/ThemeBackground';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-500/10 selection:text-blue-900">
      <ThemeBackground />
      
      <Navbar scrolled={scrolled} />
      
      <main>
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
