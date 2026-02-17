
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-white/50">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="w-full lg:w-5/12">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Contact Us</h2>
            <h3 className="text-4xl md:text-5xl font-bold font-poppins mb-8 text-slate-900">Let's Build Something <span className="gradient-text">Great</span></h3>
            
            <p className="text-slate-600 text-lg mb-12 leading-relaxed">
              Have a project in mind or need expert technical consulting? Reach out to us, and 
              our team will get back to you within 24 hours.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors shadow-sm">
                  <Mail className="w-6 h-6 text-blue-600 group-hover:text-white" />
                </div>
                <div>
                  <h5 className="font-bold text-lg mb-1 text-slate-900">Email Us</h5>
                  <p className="text-slate-500 font-medium">hello@webstack.tech</p>
                  <p className="text-slate-500 font-medium">support@webstack.tech</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center shrink-0 group-hover:bg-purple-600 transition-colors shadow-sm">
                  <Phone className="w-6 h-6 text-purple-600 group-hover:text-white" />
                </div>
                <div>
                  <h5 className="font-bold text-lg mb-1 text-slate-900">Call Us</h5>
                  <p className="text-slate-500 font-medium">+1 (555) 123-4567</p>
                  <p className="text-slate-500 font-medium">Mon - Fri, 9am - 6pm EST</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-pink-100 flex items-center justify-center shrink-0 group-hover:bg-pink-600 transition-colors shadow-sm">
                  <MapPin className="w-6 h-6 text-pink-600 group-hover:text-white" />
                </div>
                <div>
                  <h5 className="font-bold text-lg mb-1 text-slate-900">Our Location</h5>
                  <p className="text-slate-500 font-medium">123 Innovation Drive, Silicon Valley</p>
                  <p className="text-slate-500 font-medium">California, CA 94025</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-7/12">
            <div className="glass-card p-10 rounded-[2rem] border-white shadow-2xl">
              {submitted ? (
                <div className="py-20 text-center animate-in zoom-in duration-500">
                  <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
                    <Send className="text-emerald-600 w-10 h-10" />
                  </div>
                  <h4 className="text-3xl font-bold mb-4 text-slate-900">Message Sent!</h4>
                  <p className="text-slate-600 mb-8 font-medium">Thank you for reaching out. Our team will contact you shortly.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="px-8 py-3 rounded-xl bg-slate-900 text-white font-bold"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-600 ml-1">Full Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="John Doe" 
                        className="w-full bg-white border border-slate-200 rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-slate-900 placeholder:text-slate-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-600 ml-1">Email Address</label>
                      <input 
                        required
                        type="email" 
                        placeholder="john@example.com" 
                        className="w-full bg-white border border-slate-200 rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-slate-900 placeholder:text-slate-400"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-600 ml-1">Service Required</label>
                    <select className="w-full bg-white border border-slate-200 rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-slate-900 appearance-none cursor-pointer">
                      <option className="bg-white">Select a Service</option>
                      <option className="bg-white">Web Development</option>
                      <option className="bg-white">AI & Machine Learning</option>
                      <option className="bg-white">Blockchain Solutions</option>
                      <option className="bg-white">Mobile App Development</option>
                      <option className="bg-white">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-600 ml-1">Your Message</label>
                    <textarea 
                      required
                      rows={5}
                      placeholder="Tell us about your project..." 
                      className="w-full bg-white border border-slate-200 rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-slate-900 placeholder:text-slate-400"
                    ></textarea>
                  </div>

                  <button 
                    disabled={loading}
                    type="submit" 
                    className="w-full py-5 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-purple-500/25 transition-all disabled:opacity-50"
                  >
                    {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : <>Send Message <Send className="w-5 h-5" /></>}
                  </button>
                </form>
              )}
            </div>
            
            {/* Google Map Placeholder */}
            <div className="mt-8 rounded-[2rem] overflow-hidden relative group shadow-xl">
               <div className="absolute inset-0 bg-blue-900/10 z-10 pointer-events-none group-hover:bg-transparent transition-colors duration-500"></div>
               <img 
                 src="https://picsum.photos/id/188/1200/400" 
                 alt="Map Placeholder" 
                 className="w-full h-64 object-cover filter saturate-50 group-hover:saturate-100 transition-all duration-700"
               />
               <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="glass-card px-6 py-3 rounded-full flex items-center gap-2 border-white shadow-xl">
                     <MapPin className="text-red-500" />
                     <span className="font-bold text-sm text-slate-900">View Location on Maps</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
