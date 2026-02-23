import React, { useState, useEffect, useRef } from "react";

const Founder: React.FC = () => {
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="founder"
      ref={sectionRef}
      className="py-24 bg-slate-100/30 relative overflow-hidden"
    >
      {/* Background blobs matching portfolio's soft slate palette */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-slate-200/50 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Section label + heading — matches Portfolio style */}
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">
            Meet our
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold font-poppins text-slate-900">
            Founder &amp; CEO
          </h3>
        </div>

        {/* Card */}
        <div
          className={`flex flex-col items-center transition-all duration-1000 delay-200 transform ${
            isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
          }`}
        >
          <div className="flex flex-col items-center max-w-md w-full">
            {/* Photo circle */}
            <div
              className={`relative mb-8 transition-all duration-1000 delay-300 transform ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
            >
              {/* Gradient ring */}
              <div
                className="rounded-full p-[3px] shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #2563eb 0%, #7c3aed 50%, #93c5fd 100%)",
                  boxShadow: "0 0 40px rgba(37,99,235,0.2), 0 20px 40px rgba(0,0,0,0.08)",
                }}
              >
                <div className="w-72 h-72 rounded-full overflow-hidden bg-slate-100">
                  <img
                    src="/logo_ceo.jpeg"
                    alt="Founder & CEO"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Blue accent dot */}
              <div
                className="absolute bottom-3 right-3 w-5 h-5 rounded-full bg-blue-600 border-2 border-white shadow-md shadow-blue-600/30"
              />
            </div>

            {/* Name & title */}
            <div
              className={`text-center mb-8 transition-all duration-700 delay-500 transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <h4 className="text-2xl font-bold font-poppins text-slate-900 mb-1">
                Miss Mansi Sirsat
              </h4>
              <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">
                Founder & Chief Executive Officer
              </span>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4 mb-8 w-full">
              <div className="flex-1 h-px bg-slate-200" />
              <div className="w-2 h-2 rounded-full bg-blue-600/40" />
              <div className="flex-1 h-px bg-slate-200" />
            </div>

            {/* Quote */}
            <div
              className={`text-center transition-all duration-700 delay-700 transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <span className="text-6xl leading-none text-blue-600/20 font-serif block mb-[-12px]">
                "
              </span>
              <p className="text-slate-600 text-lg leading-relaxed italic mb-5">
                We didn't build a company — we built a conviction. Every decision
                we make is grounded in the belief that great work changes
                people's lives.
              </p>
              <cite className="text-blue-600 font-bold uppercase tracking-widest text-xs not-italic">
                — Mansi Sirsat, Founder & CEO of WebStack
              </cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;