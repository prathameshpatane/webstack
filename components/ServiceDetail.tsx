import React, { useEffect, useState } from 'react';
import { 
  ArrowLeft, CheckCircle2, ChevronRight, Zap, Rocket, 
  Shield, Star, Info, Cpu, Database, Layout, 
  Code2, Cloud, Lock, BarChart3, HelpCircle, 
  ChevronDown, ChevronUp, Globe2, Layers
} from 'lucide-react';
import { Service } from '../types';

interface ServiceDetailProps {
  service: Service;
  onBack: () => void;
}

const FAQ_ITEMS = [
  {
    q: "How long does a typical project take?",
    a: "Timelines vary depending on complexity, but most enterprise-grade solutions take between 3 to 6 months from discovery to launch."
  },
  {
    q: "Do you offer post-launch support?",
    a: "Absolutely. We provide dedicated 24/7 maintenance and support packages to ensure your software remains secure and up-to-date."
  },
  {
    q: "How do we handle intellectual property?",
    a: "Upon full payment, all custom code, assets, and intellectual property developed during the project are 100% owned by the client."
  }
];

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, onBack }) => {
  const info = service.detailedInfo;
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [service.id]);

  if (!info) return null;

  return (
    <div className="pt-32 pb-24 relative overflow-hidden">
      {/* Background Decorative Blobs */}
      <div className="absolute top-1/4 left-[-10%] w-[40%] h-[40%] bg-blue-400/10 rounded-full blur-[120px] animate-pulse-soft pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-[-10%] w-[40%] h-[40%] bg-purple-400/10 rounded-full blur-[120px] animate-pulse-soft pointer-events-none" style={{animationDelay: '3s'}}></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Navigation Back */}
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-500 hover:text-blue-600 font-bold mb-12 transition-colors group animate-fade-down"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Services
        </button>

        {/* Header Section */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
            <div className="relative group shrink-0">
               <div className="absolute inset-0 bg-blue-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity animate-pulse"></div>
               <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white shadow-xl relative animate-float-subtle">
                 {/* Fix: Added <any> to React.ReactElement cast to allow the className property to be merged during cloning */}
                 {React.cloneElement(service.icon as React.ReactElement<any>, { className: 'w-10 h-10 animate-spin-slow' })}
               </div>
            </div>
            <div className="overflow-hidden text-center md:text-left">
              <h2 className="text-blue-600 font-bold uppercase tracking-widest text-xs animate-reveal-text">Premium Technical Tier</h2>
              <h1 className="text-5xl md:text-7xl font-bold font-poppins text-slate-900 animate-reveal-text stagger-1 tracking-tight">
                {service.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Big Service Hero Image */}
        <div className="w-full h-[400px] md:h-[600px] rounded-[3rem] overflow-hidden mb-24 relative group shadow-2xl animate-fade-up stagger-1 opacity-0 [animation-fill-mode:forwards]">
           <img 
            src={info.heroImage} 
            alt={service.title} 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
           <div className="absolute bottom-12 left-12 right-12 flex flex-col md:flex-row items-end justify-between gap-6">
              <div className="max-w-xl">
                 <div className="px-4 py-2 bg-blue-600 text-white text-xs font-black uppercase tracking-[0.3em] rounded-lg mb-4 inline-block shadow-lg">Certified Solution</div>
                 <h3 className="text-3xl md:text-4xl font-bold text-white font-poppins drop-shadow-lg">Engineering at the edge of possibility.</h3>
              </div>
           </div>
        </div>

        {/* Feature & Description Grid */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 mb-40">
          {/* Left: Features */}
          <div className="w-full lg:w-2/5 space-y-6">
            <div className="overflow-hidden mb-8">
              <h3 className="text-2xl font-bold font-poppins flex items-center gap-2 animate-reveal-text stagger-2">
                <Star className="w-6 h-6 text-blue-600" />
                Key Capabilities
              </h3>
            </div>
            <div className="space-y-4">
              {info.features.map((feature, i) => (
                <div 
                  key={i} 
                  className={`p-6 rounded-3xl border border-white/60 bg-white/40 backdrop-blur-md shadow-sm hover:shadow-xl hover:bg-white/70 hover:border-blue-200 transition-all duration-500 group animate-fade-up stagger-${i + 1} opacity-0 [animation-fill-mode:forwards] overflow-hidden relative`}
                >
                  <div className="absolute bottom-0 right-0 w-16 h-16 bg-blue-500/5 rounded-tl-full group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="flex items-center gap-5 relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-all group-hover:rotate-6">
                      <Zap className="w-6 h-6 text-blue-600 group-hover:text-white" />
                    </div>
                    <span className="font-bold text-slate-800 text-lg">{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Detailed Insight */}
          <div className="w-full lg:w-3/5">
            <div className="relative p-1 animate-fade-up stagger-3 opacity-0 [animation-fill-mode:forwards]">
              <div className="flex items-center gap-3 text-blue-600 font-bold mb-8">
                <Info className="w-6 h-6 animate-pulse" />
                <span className="uppercase tracking-[0.2em] text-sm">Industrial Standard Strategy</span>
              </div>
              
              <p className="text-2xl md:text-3xl text-slate-600 leading-[1.6] mb-16 font-medium selection:bg-blue-600/10">
                {info.longDescription}
              </p>

              {/* Success Metrics Bar */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
                 {[
                   { label: 'Uptime Guarantee', val: '99.9%', icon: <Cloud /> },
                   { label: 'Security Score', val: 'A+', icon: <Lock /> },
                   { label: 'User Rating', val: '4.9/5', icon: <Star /> }
                 ].map((metric, idx) => (
                   <div key={idx} className="p-8 rounded-[2rem] bg-slate-900 text-white border-none shadow-2xl relative group overflow-hidden">
                      <div className="absolute top-0 right-0 w-full h-full bg-blue-600 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                      <div className="text-blue-400 mb-4">{metric.icon}</div>
                      <div className="text-3xl font-black mb-1">{metric.val}</div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{metric.label}</div>
                   </div>
                 ))}
              </div>

              {/* Benefits Pills */}
              <div className="flex flex-wrap gap-4">
                {info.benefits.map((benefit, i) => (
                  <div 
                    key={i} 
                    className="px-6 py-4 rounded-full bg-blue-50 text-blue-800 border border-blue-100 text-sm font-bold flex items-center gap-3 shadow-sm hover:scale-105 transition-transform cursor-default"
                  >
                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Marquee (Infinite) */}
        <div className="mb-40 py-20 bg-slate-100/50 rounded-[4rem] border border-white overflow-hidden relative">
           <h3 className="text-center text-slate-400 font-black uppercase tracking-[0.4em] text-xs mb-12">Built with the World's Best Stack</h3>
           <div className="flex animate-marquee gap-20 whitespace-nowrap min-w-max items-center">
              {[
                { icon: <Code2 />, name: 'Typescript' },
                { icon: <Database />, name: 'PostgreSQL' },
                { icon: <Layout />, name: 'Next.js' },
                { icon: <Cpu />, name: 'Nvidia H100' },
                { icon: <Cloud />, name: 'AWS Cloud' },
                { icon: <Lock />, name: 'ZeroTrust' },
                { icon: <Globe2 />, name: 'Vercel' },
                { icon: <Layers />, name: 'Kubernetes' },
                // Duplicate for smooth loop
                { icon: <Code2 />, name: 'Typescript' },
                { icon: <Database />, name: 'PostgreSQL' },
                { icon: <Layout />, name: 'Next.js' },
                { icon: <Cpu />, name: 'Nvidia H100' },
                { icon: <Cloud />, name: 'AWS Cloud' },
                { icon: <Lock />, name: 'ZeroTrust' },
                { icon: <Globe2 />, name: 'Vercel' },
                { icon: <Layers />, name: 'Kubernetes' },
              ].map((tech, i) => (
                <div key={i} className="flex items-center gap-4 group opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                   <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                      {/* Fix: Added <any> to React.ReactElement cast to allow the className property to be merged during cloning */}
                      {React.cloneElement(tech.icon as React.ReactElement<any>, { className: 'w-5 h-5 text-blue-600' })}
                   </div>
                   <span className="text-2xl font-black text-slate-900 font-poppins italic">{tech.name}</span>
                </div>
              ))}
           </div>
        </div>

        {/* Development Roadmap (Process) */}
        <div className="mb-40">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6 animate-reveal-text">The Production Pipeline</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">Our streamlined roadmap ensures transparency and peak efficiency at every development milestone.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {info.process.map((p, i) => (
              <div key={i} className={`relative group animate-fade-up stagger-${i + 1} opacity-0 [animation-fill-mode:forwards]`}>
                <div className="glass-card rounded-[3rem] h-full border-white hover:border-blue-400/30 transition-all duration-700 relative overflow-hidden flex flex-col group/card shadow-lg hover:shadow-2xl">
                  {/* Step Image */}
                  <div className="w-full h-56 overflow-hidden relative">
                    <img 
                      src={p.image} 
                      alt={p.step} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover/card:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-8 text-6xl font-black text-slate-900/10 group-hover/card:text-blue-600/20 transition-colors pointer-events-none italic">
                      0{i+1}
                    </div>
                  </div>
                  
                  <div className="p-10 pt-4 flex-grow relative">
                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-600/5 rounded-full blur-2xl group-hover/card:bg-blue-600/20 transition-all"></div>
                    <h5 className="text-2xl font-bold mb-4 text-slate-900 font-poppins">{p.step}</h5>
                    <p className="text-slate-500 leading-relaxed text-sm font-medium">{p.description}</p>
                  </div>
                </div>
                {i < info.process.length - 1 && (
                   <div className="hidden lg:block absolute top-1/2 -right-6 translate-y-[-50%] z-20 animate-float-subtle opacity-40">
                      <ChevronRight className="w-10 h-10 text-blue-600" />
                   </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Expert Insights (FAQ) */}
        <div className="mb-40 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-poppins mb-4 flex items-center justify-center gap-3">
              <HelpCircle className="w-8 h-8 text-blue-600" />
              Service Insights
            </h2>
          </div>
          <div className="space-y-4">
            {FAQ_ITEMS.map((item, i) => (
              <div key={i} className="glass-card rounded-3xl overflow-hidden border-white">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-8 flex items-center justify-between text-left hover:bg-white/50 transition-colors"
                >
                  <span className="text-lg font-bold text-slate-900">{item.q}</span>
                  {openFaq === i ? <ChevronUp className="text-blue-600" /> : <ChevronDown className="text-slate-400" />}
                </button>
                {openFaq === i && (
                  <div className="p-8 pt-0 text-slate-600 leading-relaxed animate-in fade-in slide-in-from-top-4 duration-300">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="p-12 md:p-24 rounded-[4rem] bg-slate-900 border-none relative overflow-hidden group shadow-3xl">
           {/* Animated Background Gradients for CTA */}
           <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
              <div className="absolute top-[-50%] right-[-20%] w-[100%] h-[150%] bg-blue-500 rounded-full blur-[200px] animate-pulse-soft"></div>
              <div className="absolute bottom-[-50%] left-[-20%] w-[80%] h-[120%] bg-purple-600 rounded-full blur-[180px] animate-pulse-soft" style={{animationDelay: '2s'}}></div>
           </div>
           
           <div className="flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
              <div className="max-w-2xl text-center lg:text-left">
                 <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 font-poppins leading-tight">
                    Ignite Your <br />
                    <span className="text-blue-400 underline decoration-blue-500/30 underline-offset-8 decoration-4">{service.title}</span>
                 </h2>
                 <p className="text-slate-400 text-xl leading-relaxed animate-fade-up stagger-1">
                   Bridge the technical gap with our world-class engineering team. 
                   We don't just build software; we build market leaders.
                 </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 shrink-0 w-full lg:w-auto">
                 <button className="px-12 py-6 rounded-full bg-blue-600 text-white font-bold text-xl hover:bg-blue-700 transition-all shadow-2xl shadow-blue-600/40 active:scale-95 flex items-center justify-center gap-4 group">
                    Start Exploration <Rocket className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                 </button>
                 <button className="px-12 py-6 rounded-full bg-white/10 text-white font-bold text-xl hover:bg-white/20 transition-all backdrop-blur-xl border border-white/10 active:scale-95 flex items-center justify-center gap-3">
                    Sales Consultation <BarChart3 className="w-6 h-6" />
                 </button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
