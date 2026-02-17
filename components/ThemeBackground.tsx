
import React from 'react';

const ThemeBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      {/* Mesh Gradients - Soft Pastel Tech Colors */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-200/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-200/20 rounded-full blur-[120px] animate-pulse" style={{animationDelay: '2s'}}></div>
      
      {/* Light Pastel Accents */}
      <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-emerald-100/30 rounded-full blur-[150px] animate-pulse" style={{animationDuration: '10s'}}></div>
      <div className="absolute bottom-[20%] left-[5%] w-[45%] h-[45%] bg-rose-100/30 rounded-full blur-[160px] animate-pulse" style={{animationDuration: '12s', animationDelay: '3s'}}></div>
      <div className="absolute top-[40%] left-[30%] w-[35%] h-[35%] bg-amber-100/30 rounded-full blur-[140px] animate-pulse" style={{animationDuration: '15s', animationDelay: '1s'}}></div>
      <div className="absolute bottom-[10%] left-[40%] w-[50%] h-[50%] bg-cyan-100/30 rounded-full blur-[180px] animate-pulse" style={{animationDuration: '8s', animationDelay: '4s'}}></div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.2]" 
        style={{
          backgroundImage: `radial-gradient(circle, #e2e8f0 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      ></div>

      {/* Animated Light Trails - Subtle */}
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-blue-500/5 to-transparent animate-pulse" style={{animationDuration: '4s'}}></div>
      <div className="absolute top-0 left-2/4 w-[1px] h-full bg-gradient-to-b from-transparent via-purple-500/5 to-transparent animate-pulse" style={{animationDuration: '7s'}}></div>
      <div className="absolute top-0 left-3/4 w-[1px] h-full bg-gradient-to-b from-transparent via-pink-500/5 to-transparent animate-pulse" style={{animationDuration: '5s'}}></div>
    </div>
  );
};

export default ThemeBackground;
