
import React, { useState, useEffect, useRef } from 'react';
import { ProjectCategory } from '../types';
import { PROJECTS } from '../constants';
import { ExternalLink, Search } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<ProjectCategory>(ProjectCategory.ALL);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const filteredProjects = filter === ProjectCategory.ALL 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  const categories = Object.values(ProjectCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio" ref={sectionRef} className="py-24 bg-slate-100/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className={`flex flex-col lg:flex-row justify-between items-end gap-8 mb-16 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="max-w-2xl">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Our Work</h2>
            <h3 className="text-4xl md:text-5xl font-bold font-poppins text-slate-900">Case Studies & Success Stories</h3>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  filter === cat 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25' 
                    : 'glass-card text-slate-600 hover:text-blue-600 hover:bg-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`group relative overflow-hidden rounded-3xl aspect-[4/3] shadow-lg transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'}`}
              style={{ transitionDelay: isVisible ? `${index * 150}ms` : '0ms' }}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-blue-300 text-xs font-bold uppercase tracking-widest mb-2">{project.category}</span>
                <h4 className="text-2xl font-bold text-white mb-2">{project.title}</h4>
                <p className="text-slate-300 text-sm mb-6 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex gap-4">
                  <button className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-blue-600 transition-colors">
                    <Search className="w-5 h-5" />
                  </button>
                  <button className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-purple-600 transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Simple title for non-hover state */}
              <div className="absolute bottom-6 left-6 group-hover:opacity-0 transition-opacity">
                 <div className="glass-card px-4 py-2 rounded-lg text-sm font-bold text-slate-900">
                   {project.title}
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
