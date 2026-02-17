
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Testimonials</h2>
          <h3 className="text-4xl md:text-5xl font-bold font-poppins text-slate-900">What Our Clients Say</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="glass-card p-10 rounded-3xl relative hover:shadow-xl transition-shadow">
              <Quote className="absolute top-8 right-10 w-12 h-12 text-blue-600/5" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-slate-600 italic mb-8 leading-relaxed font-medium">
                "{t.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={t.avatar} 
                  alt={t.name}
                  className="w-14 h-14 rounded-full border-2 border-white object-cover shadow-sm" 
                />
                <div>
                  <h5 className="font-bold text-slate-900">{t.name}</h5>
                  <p className="text-sm text-slate-500 font-medium">{t.role}, {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Trust Logos */}
        <div className="mt-32 pt-16 border-t border-slate-200">
          <p className="text-center text-slate-400 text-sm font-bold uppercase tracking-[0.3em] mb-12">Trusted by Industry Leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-700 text-slate-900">
             <span className="text-2xl font-black italic">TECHFLOW</span>
             <span className="text-2xl font-black italic">GLOBALIO</span>
             <span className="text-2xl font-black italic">NEXTGEN</span>
             <span className="text-2xl font-black italic">SKYLINE</span>
             <span className="text-2xl font-black italic">CRYPTOX</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
