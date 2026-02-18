
import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle2, Award, Target } from 'lucide-react';
import { WHY_CHOOSE_US } from '../constants';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className={`w-full lg:w-1/2 relative group transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl transition-all duration-500 group-hover:shadow-blue-200/50">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200" 
                alt="WebStack Team in Silicon Valley" 
                className="w-full h-[500px] object-cover animate-slow-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent opacity-60"></div>
              
              {/* Glass Overlay on Image */}
              <div className="absolute bottom-8 left-8 right-8 p-6 glass-card rounded-2xl border-white/20 backdrop-blur-md">
                 <div className="flex items-center justify-between">
                    <div>
                       <div className="text-white font-bold text-lg mb-1 uppercase tracking-widest text-xs">Headquarters</div>
                       <div className="text-white/80 text-sm">Palo Alto, California</div>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                       <div className="w-3 h-3 bg-emerald-400 rounded-full animate-ping"></div>
                    </div>
                 </div>
              </div>
            </div>
            
            {/* Stats Overlay */}
            <div className="absolute -bottom-6 -right-6 glass-card p-8 rounded-3xl hidden md:block z-20 border-white shadow-2xl animate-float-subtle">
              <div className="text-5xl font-bold font-poppins text-blue-600 mb-2">9+</div>
              <div className="text-slate-500 font-bold uppercase tracking-widest text-xs">Years of Tech Mastery</div>
            </div>
            
            {/* Decorative Glow */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-10 animate-pulse"></div>
          </div>

          <div className={`w-full lg:w-1/2 transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">The WebStack Advantage</h2>
            <h3 className="text-4xl md:text-5xl font-bold font-poppins mb-8 leading-tight text-slate-900">
              Architecting Digital <br />
              Excellence Since 2017
            </h3>
            
            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              We are a team of visionaries and problem solvers. At WebStack, we believe that technology 
              is only as powerful as the human connection it enables. Our mission is to bridge the 
              gap between complex engineering and intuitive user experiences.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              <div className="flex gap-4 group cursor-default">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:rotate-6 transition-all duration-300">
                  <Target className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h5 className="font-bold text-lg mb-1 text-slate-900">Impactful Code</h5>
                  <p className="text-sm text-slate-500">Every line we write is designed for scalability and performance.</p>
                </div>
              </div>
              <div className="flex gap-4 group cursor-default">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-purple-100 flex items-center justify-center group-hover:bg-purple-600 group-hover:-rotate-6 transition-all duration-300">
                  <Award className="w-6 h-6 text-purple-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h5 className="font-bold text-lg mb-1 text-slate-900">Proven Success</h5>
                  <p className="text-sm text-slate-500">Awarded "IT Partner of the Year" three times in a row.</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {WHY_CHOOSE_US.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300">
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
