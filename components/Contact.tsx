import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: ""
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const subject = encodeURIComponent("New Contact Form Message");

    const body = encodeURIComponent(
      `Name: ${formData.name}
Email: ${formData.email}
Service: ${formData.service}
Message: ${formData.message}`
    );

    setTimeout(() => {
      window.location.href =
        `mailto:webstackmanager@gmail.com?subject=${subject}&body=${body}`;
      setLoading(false);
    }, 500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-white/50">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* LEFT SIDE */}
          <div className="w-full lg:w-5/12">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">
              Contact Us
            </h2>

            <h3 className="text-4xl md:text-5xl font-bold font-poppins mb-8 text-slate-900">
              Let's Build Something <span className="gradient-text">Great</span>
            </h3>

            <p className="text-slate-600 text-lg mb-12 leading-relaxed">
              Have a project in mind or need expert technical consulting? Reach out to us,
              and our team will get back to you within 24 hours.
            </p>

            <div className="space-y-8">

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h5 className="font-bold text-lg">Email Us</h5>
                  <p>webstackmanager@gmail.com</p>
                </div>
              </div>

        

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-pink-100 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h5 className="font-bold text-lg">Our Location</h5>
                  <p>123 Innovation Drive, Silicon Valley</p>
                  <p>California, CA 94025</p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="w-full lg:w-7/12">
            <div className="glass-card p-10 rounded-[2rem] shadow-2xl">

              <form onSubmit={handleSubmit} className="space-y-6">

                {/* NAME + EMAIL */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  <div>
                    <label className="text-sm font-bold text-slate-600 ml-1">
                      Full Name
                    </label>
                    <input
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-white border border-slate-200 rounded-xl px-6 py-4"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-bold text-slate-600 ml-1">
                      Email Address
                    </label>
                    <input
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email"
                      placeholder="john@example.com"
                      className="w-full bg-white border border-slate-200 rounded-xl px-6 py-4"
                    />
                  </div>

                </div>

                {/* SERVICE */}
                <div>
                  <label className="text-sm font-bold text-slate-600 ml-1">
                    Service Required
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-white border border-slate-200 rounded-xl px-6 py-4"
                  >
                    <option value="">Select a Service</option>
                    <option>Web Development</option>
                    <option>AI & Machine Learning</option>
                    <option>Blockchain Solutions</option>
                    <option>Mobile App Development</option>
                    <option>Other</option>
                  </select>
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="text-sm font-bold text-slate-600 ml-1">
                    Your Message
                  </label>
                  <textarea
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="w-full bg-white border border-slate-200 rounded-xl px-6 py-4"
                  />
                </div>

                {/* BUTTON */}
                <button
                  disabled={loading}
                  type="submit"
                  className="w-full py-5 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  {loading ? (
                    <Loader2 className="w-6 h-6 animate-spin" />
                  ) : (
                    <>
                      Send Message <Send className="w-5 h-5" />
                    </>
                  )}
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
