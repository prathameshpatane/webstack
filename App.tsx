
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
import ServiceDetail from './components/ServiceDetail';
import { Service } from './types';
import Founder from './components/Founder';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleServiceSelect = (service: Service) => {
    setSelectedService(service);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setSelectedService(null);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-500/10 selection:text-blue-900">
      <ThemeBackground />
      
      <Navbar scrolled={scrolled} />
      
      <main className="transition-opacity duration-500">
        {selectedService ? (
          <ServiceDetail service={selectedService} onBack={handleBackToHome} />
        ) : (
          <>
            <Hero />
            <Services onServiceClick={handleServiceSelect} />
            <About />
            <Portfolio />
            <Founder/>
            <Testimonials />
            <Contact />
          </>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
