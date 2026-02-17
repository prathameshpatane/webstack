
import React from 'react';
import { Terminal, Github, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="pt-24 pb-12 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <a href="#home" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center">
                <Terminal className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold font-poppins text-slate-900">WebStack<span className="text-purple-600">.</span></span>
            </a>
            <p className="text-slate-600 leading-relaxed font-medium">
              We specialize in creating robust, scalable, and high-performing digital 
              products that drive business success in the modern era.
            </p>
            <div className="flex gap-4">
              {[Twitter, Github, Linkedin, Instagram].map((Icon, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-500 hover:text-blue-600 hover:shadow-md transition-all border border-slate-100"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h5 className="text-lg font-bold mb-8 font-poppins text-slate-900">Quick Links</h5>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Portfolio', 'Case Studies', 'Careers', 'Contact'].map(link => (
                <li key={link}>
                  <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-bold mb-8 font-poppins text-slate-900">Our Services</h5>
            <ul className="space-y-4">
              {['Web Development', 'Mobile Apps', 'AI & Machine Learning', 'Blockchain', 'Cloud Computing', 'Data Analytics'].map(link => (
                <li key={link}>
                  <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-bold mb-8 font-poppins text-slate-900">Newsletter</h5>
            <p className="text-slate-600 mb-6 font-medium">Subscribe to our newsletter for latest tech insights.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address"
                className="bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none w-full text-sm text-slate-900 shadow-sm"
              />
              <button className="px-4 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition-colors font-bold text-sm">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-slate-200 gap-6">
          <p className="text-slate-500 text-sm font-medium">
            © 2026 WebStack. All rights reserved.
          </p>
          
          <div className="flex gap-8">
            <a href="#" className="text-slate-500 text-sm hover:text-slate-900 font-medium">Privacy Policy</a>
            <a href="#" className="text-slate-500 text-sm hover:text-slate-900 font-medium">Terms of Service</a>
          </div>

          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center group border border-slate-100"
          >
            <ArrowUp className="w-5 h-5 text-slate-500 group-hover:text-blue-600 transition-all group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
