
import React from 'react';
import { CheckCircle2, Award, Target } from 'lucide-react';
import { WHY_CHOOSE_US } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/id/180/800/1000" 
                alt="WebStack Team" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent"></div>
            </div>
            
            {/* Stats Overlay */}
            <div className="absolute -bottom-10 -right-10 glass-card p-10 rounded-3xl hidden md:block z-20 border-white shadow-2xl">
              <div className="text-5xl font-bold font-poppins text-blue-600 mb-2">9+</div>
              <div className="text-slate-500 font-bold uppercase tracking-widest text-xs">Years of Excellence</div>
            </div>
            
            {/* Floating Element 2 */}
            <div className="absolute -top-10 -left-10 w-24 h-24 bg-blue-600 rounded-full blur-3xl opacity-10"></div>
          </div>

          <div className="w-full lg:w-1/2">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">About WebStack</h2>
            <h3 className="text-4xl md:text-5xl font-bold font-poppins mb-8 leading-tight text-slate-900">
              Pioneering the Digital <br />
              Frontier Since 2017
            </h3>
            
            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              At WebStack, we don't just build software; we architect experiences. Our 
              multidisciplinary team of developers, designers, and strategists are 
              obsessed with turning complex challenges into elegant digital solutions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-blue-100 flex items-center justify-center">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h5 className="font-bold text-lg mb-1 text-slate-900">Our Mission</h5>
                  <p className="text-sm text-slate-500">To empower businesses through disruptive technology.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-purple-100 flex items-center justify-center">
                  <Award className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h5 className="font-bold text-lg mb-1 text-slate-900">Our Vision</h5>
                  <p className="text-sm text-slate-500">To be the global benchmark for innovation and integrity.</p>
                </div>
              </div>
            </div>

            <h4 className="text-xl font-bold mb-6 font-poppins text-slate-900">Why Choose WebStack?</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {WHY_CHOOSE_US.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  </div>
                  <span className="text-slate-700 font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
