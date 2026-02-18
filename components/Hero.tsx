
import React from 'react';
import { ArrowRight, Play, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="w-full lg:w-3/5">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-slate-200 text-blue-600 text-sm font-bold mb-6 animate-fade-up">
              <Sparkles className="w-4 h-4" />
              <span>Leading the Next Wave of Digital Innovation</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-poppins leading-[1.1] mb-8 text-slate-900 overflow-hidden">
              <span className="block animate-reveal-text">Building <span className="gradient-text">Future-Ready</span></span>
              <span className="block animate-reveal-text stagger-2">Digital Solutions</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-12 leading-relaxed animate-fade-up stagger-3 opacity-0 [animation-fill-mode:forwards]">
              WebStack delivers cutting-edge IT services from bespoke web development 
              to complex AI ecosystems and decentralized blockchain infrastructures.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 animate-fade-up stagger-4 opacity-0 [animation-fill-mode:forwards]">
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg flex items-center justify-center gap-2 hover:shadow-2xl hover:shadow-purple-500/25 transition-all hover:-translate-y-1 active:scale-95"
              >
                Get a Quote
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#services"
                className="w-full sm:w-auto px-8 py-4 rounded-full glass-card text-slate-900 font-bold text-lg flex items-center justify-center gap-2 hover:bg-white transition-all active:scale-95"
              >
                View Services
              </a>
              
              <button className="flex items-center gap-3 group">
                <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-blue-600 transition-all bg-white/40 group-hover:scale-110 shadow-lg group-hover:shadow-blue-200">
                  <Play className="w-4 h-4 text-blue-600 fill-blue-600 group-hover:text-white group-hover:fill-white transition-all" />
                </div>
                <span className="text-sm font-bold tracking-wider uppercase text-slate-500 group-hover:text-blue-600 transition-colors">
                  Watch Demo
                </span>
              </button>
            </div>
          </div>

          {/* Hero Image / Visual Side */}
          <div className="w-full lg:w-2/5 relative animate-fade-up stagger-2">
            <div className="relative z-10 animate-float-subtle">
              <img 
                src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1200" 
                alt="Digital Innovation"
                className="w-full h-auto rounded-[3rem] shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700"
              />
              {/* Floating Element 1 */}
              <div className="absolute -top-10 -right-10 glass-card p-6 rounded-2xl shadow-2xl animate-bounce hover:animate-none transition-all duration-500 delay-700">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Efficiency</div>
                    <div className="text-xl font-bold text-slate-900">+98%</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background Glows for Image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-400/20 rounded-full blur-[120px] -z-10 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-purple-400/10 rounded-full blur-[100px] -z-10 animate-pulse" style={{animationDelay: '1s'}}></div>
    </section>
  );
};

export default Hero;
