
import React, { useEffect } from 'react';
import { ArrowLeft, CheckCircle2, ChevronRight, Zap, Rocket, Shield, Star, Info } from 'lucide-react';
import { Service } from '../types';

interface ServiceDetailProps {
  service: Service;
  onBack: () => void;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, onBack }) => {
  const info = service.detailedInfo;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [service.id]);

  if (!info) return null;

  return (
    <div className="pt-32 pb-24 animate-in fade-in duration-700">
      <div className="container mx-auto px-6 md:px-12">
        {/* Navigation Back */}
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-500 hover:text-blue-600 font-bold mb-16 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Services
        </button>

        {/* Header Section */}
        <div className="mb-16 animate-fade-up">
          <div className="flex items-center gap-6 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white shadow-xl shadow-blue-500/20">
              {React.cloneElement(service.icon as React.ReactElement, { className: 'w-8 h-8' })}
            </div>
            <div>
              <h2 className="text-blue-600 font-bold uppercase tracking-widest text-xs">Service Excellence</h2>
              <h1 className="text-4xl md:text-6xl font-bold font-poppins text-slate-900">
                {service.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Features and Description Split Section */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-32">
          {/* Left Column: Features (Vertical Stack) */}
          <div className="w-full lg:w-2/5 space-y-4 order-2 lg:order-1">
            <h3 className="text-2xl font-bold font-poppins mb-6 flex items-center gap-2">
              <Star className="w-6 h-6 text-blue-600" />
              Key Features
            </h3>
            <div className="space-y-4">
              {info.features.map((feature, i) => (
                <div 
                  key={i} 
                  className={`p-6 rounded-2xl border border-white/60 bg-white/40 backdrop-blur-md shadow-sm hover:shadow-md hover:bg-white/60 transition-all duration-300 group animate-fade-up stagger-${i + 1} opacity-0 [animation-fill-mode:forwards]`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                      <Zap className="w-5 h-5 text-blue-600 group-hover:text-white" />
                    </div>
                    <span className="font-bold text-slate-800 leading-tight">{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Description and Benefits */}
          <div className="w-full lg:w-3/5 order-1 lg:order-2 animate-fade-up stagger-2 opacity-0 [animation-fill-mode:forwards]">
            <div className="relative">
              <div className="absolute -left-6 top-0 w-1 h-full bg-gradient-to-b from-blue-600/20 via-transparent to-transparent hidden lg:block"></div>
              
              <div className="flex items-center gap-2 text-blue-600 font-bold mb-6">
                <Info className="w-5 h-5" />
                <span className="uppercase tracking-widest text-sm">Strategic Overview</span>
              </div>
              
              <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-12 font-medium">
                {info.longDescription}
              </p>

              <div className="p-8 rounded-[2.5rem] bg-slate-900/5 border border-slate-200/50 mb-12">
                <h4 className="text-lg font-bold mb-6 text-slate-900 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-emerald-600" />
                  Primary Benefits
                </h4>
                <div className="flex flex-wrap gap-3">
                  {info.benefits.map((benefit, i) => (
                    <div key={i} className="px-6 py-3 rounded-full bg-white text-slate-700 border border-slate-200 text-sm font-bold flex items-center gap-2 shadow-sm hover:border-blue-200 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Development Process */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Our High-Impact Process</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">We follow a rigorous, industry-leading methodology to ensure your technical infrastructure is built for long-term scalability.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {info.process.map((p, i) => (
              <div key={i} className="relative group">
                <div className="glass-card p-8 rounded-3xl h-full border-white hover:border-blue-200 transition-all duration-500">
                  <div className="text-5xl font-black text-slate-100 mb-6 group-hover:text-blue-100 transition-colors">0{i+1}</div>
                  <h5 className="text-xl font-bold mb-3 text-slate-900">{p.step}</h5>
                  <p className="text-slate-500 text-sm leading-relaxed">{p.description}</p>
                </div>
                {i < info.process.length - 1 && (
                   <div className="hidden lg:block absolute top-1/2 -right-4 translate-y-[-50%] z-20">
                      <ChevronRight className="w-8 h-8 text-slate-200" />
                   </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="glass-card p-12 md:p-20 rounded-[3rem] bg-slate-900 border-none relative overflow-hidden text-center md:text-left">
           <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[120%] bg-blue-500 rounded-full blur-[150px]"></div>
           </div>
           
           <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
              <div className="max-w-2xl">
                 <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-poppins">Ready to scale with <br /><span className="text-blue-400">{service.title}?</span></h2>
                 <p className="text-slate-400 text-lg mb-0">Consult with our lead architects today to map out your technical roadmap.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 shrink-0">
                 <button className="px-10 py-5 rounded-full bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 active:scale-95 flex items-center gap-3">
                    Start Project <Rocket className="w-5 h-5" />
                 </button>
                 <button className="px-10 py-5 rounded-full bg-white/10 text-white font-bold text-lg hover:bg-white/20 transition-all backdrop-blur-md active:scale-95">
                    Schedule Audit
                 </button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
