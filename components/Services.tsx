
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '../constants';
import { Service } from '../types';

interface ServicesProps {
  onServiceClick?: (service: Service) => void;
}

const Services: React.FC<ServicesProps> = ({ onServiceClick }) => {
  return (
    <section id="services" className="py-24 bg-slate-100/50 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-up">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-bold font-poppins mb-6 text-slate-900">Comprehensive Tech Solutions</h3>
          <p className="text-slate-600 text-lg">
            We provide a full spectrum of digital services designed to help businesses 
            scale, innovate, and lead in an increasingly competitive market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={service.id} 
              onClick={() => onServiceClick?.(service)}
              className={`group glass-card p-8 rounded-3xl hover:bg-white cursor-pointer transition-all duration-500 border border-white hover:border-blue-200 hover:-translate-y-3 relative overflow-hidden animate-fade-down stagger-${(index % 6) + 1} opacity-0 [animation-fill-mode:forwards]`}
            >
              {/* Card Accent Animation */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-600/5 to-transparent rounded-bl-full group-hover:scale-[2] group-hover:opacity-20 transition-all duration-700"></div>
              
              <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                <div className="text-blue-600 group-hover:text-white transition-colors duration-500">
                  {service.icon}
                </div>
              </div>
              
              <h4 className="text-2xl font-bold mb-4 font-poppins text-slate-900">
                {service.title}
              </h4>
              <p className="text-slate-600 leading-relaxed mb-8">
                {service.description}
              </p>
              
              <button 
                className="flex items-center gap-2 text-blue-600 font-bold group-hover:text-blue-800 transition-colors"
              >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </button>

              {/* Progress-like decorative line */}
              <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 w-0 group-hover:w-full transition-all duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
