
import React from 'react';
import { ArrowRight, Play, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-slate-200 text-blue-600 text-sm font-bold mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            <span>Leading the Next Wave of Digital Innovation</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-poppins leading-[1.1] mb-8 text-slate-900">
            Building <span className="gradient-text">Future-Ready</span> <br />
            Digital Solutions
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-12 leading-relaxed">
            WebStack delivers cutting-edge IT services from bespoke web development 
            to complex AI ecosystems and decentralized blockchain infrastructures.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg flex items-center justify-center gap-2 hover:shadow-2xl hover:shadow-purple-500/25 transition-all hover:-translate-y-1"
            >
              Get a Quote
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto px-8 py-4 rounded-full glass-card text-slate-900 font-bold text-lg flex items-center justify-center gap-2 hover:bg-white/80 transition-all"
            >
              View Services
            </a>
            
            <button className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-white transition-all bg-white/40">
                <Play className="w-4 h-4 text-blue-600 fill-blue-600" />
              </div>
              <span className="text-sm font-bold tracking-wider uppercase text-slate-500 group-hover:text-blue-600 transition-colors">
                Watch Demo
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-purple-400/10 rounded-full blur-[100px] -z-10 animate-pulse" style={{animationDelay: '1s'}}></div>
      
      {/* Floating UI Elements Simulation */}
      <div className="hidden lg:block absolute top-1/2 right-12 w-64 p-6 glass-card rounded-2xl animate-float border-white/40 shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-blue-600" />
          </div>
          <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Analytics</span>
        </div>
        <div className="space-y-3">
          <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-blue-500 w-[70%]"></div>
          </div>
          <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-purple-500 w-[45%]"></div>
          </div>
          <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-pink-500 w-[85%]"></div>
          </div>
        </div>
        <p className="mt-4 text-xs text-slate-400 text-center font-medium">Efficiency increased by 32% this month</p>
      </div>
    </section>
  );
};

export default Hero;
