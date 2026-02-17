
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-100/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-bold font-poppins mb-6 text-slate-900">Comprehensive Tech Solutions</h3>
          <p className="text-slate-600 text-lg">
            We provide a full spectrum of digital services designed to help businesses 
            scale, innovate, and lead in an increasingly competitive market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group glass-card p-8 rounded-3xl hover:bg-white transition-all duration-500 border border-white hover:border-blue-200 hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Card Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-600/5 to-transparent rounded-bl-full group-hover:scale-150 transition-transform"></div>
              
              <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-colors duration-500">
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
              
              <button className="flex items-center gap-2 text-blue-600 font-bold group-hover:text-blue-800 transition-colors">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
