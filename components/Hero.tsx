
import React from 'react';
import { ArrowRight, MessageCircle, Activity, Zap } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const Hero: React.FC = () => {
  const handleWhatsApp = (topic: string = "Fire NOC and Compliance") => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hello RIFA Command! I am inquiring about: ${topic}. Please provide immediate technical guidance.`)}`, '_blank');
  };

  return (
    <div className="relative min-h-screen flex items-center pt-24 md:pt-32 pb-16 md:pb-20 overflow-hidden bg-black">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=2000" 
          alt="Safety Background" 
          className="w-full h-full object-cover scale-105 animate-[pulse_15s_infinite]"
        />
        <div className="absolute top-1/4 -left-20 w-64 md:w-96 h-64 md:h-96 bg-[#C8121B]/20 rounded-full blur-[80px] md:blur-[120px] animate-pulse"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center gap-12 md:gap-16">
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-3 bg-[#C8121B]/10 backdrop-blur-2xl px-4 md:px-6 py-2 md:py-3 rounded-full text-[#C8121B] text-[10px] md:text-xs font-black tracking-[0.2em] md:tracking-[0.3em] uppercase mb-6 md:mb-8 border border-[#C8121B]/30 animate-in slide-in-from-left duration-700 shadow-[0_0_30px_rgba(200,18,27,0.2)]">
            {/* Fix: use className for responsive sizes on icons */}
            <Activity className="w-3.5 h-3.5 md:w-4 md:h-4 animate-pulse" />
            LIVE OPS: MH ACT 2006 COMPLIANT
          </div>
          
          <h1 className="text-4xl md:text-7xl lg:text-9xl font-black text-white leading-[1] md:leading-[0.85] mb-6 md:mb-10 tracking-tighter animate-in slide-in-from-bottom duration-1000">
            THE FORCE OF<br />
            <span className="text-[#C8121B] drop-shadow-[0_0_40px_rgba(200,18,27,0.8)] italic"> SAFETY.</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-400 mb-10 md:mb-14 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-in fade-in duration-1000 delay-300">
            Solapur's elite fire engineering institution. We deliver absolute compliance, tactical training, and life-saving technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center lg:justify-start animate-in fade-in duration-1000 delay-500">
            <button 
              onClick={() => handleWhatsApp("Urgent Fire NOC Certification")}
              className="bg-[#C8121B] text-white px-8 md:px-14 py-5 md:py-7 rounded-[20px] md:rounded-[30px] font-black text-xl md:text-2xl flex items-center justify-center gap-4 hover:bg-white hover:text-black transition-all shadow-[0_25px_60px_rgba(200,18,27,0.5)] group active:scale-95"
            >
              Get Fire NOC
              {/* Fix: use className for responsive sizes on icons */}
              <Zap className="w-6 h-6 md:w-7 md:h-7 group-hover:scale-125 transition-transform" fill="currentColor" />
            </button>
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({behavior:'smooth'})}
              className="bg-white/5 border border-white/10 backdrop-blur-xl text-white px-8 md:px-14 py-5 md:py-7 rounded-[20px] md:rounded-[30px] font-black text-xl md:text-2xl hover:bg-white hover:text-black transition-all flex items-center justify-center gap-4 group active:scale-95"
            >
              Our Arsenal
              {/* Fix: use className for responsive sizes on icons */}
              <ArrowRight className="w-6 h-6 md:w-7 md:h-7 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="flex-1 relative hidden lg:block animate-in zoom-in duration-1000">
          <div className="relative z-10 w-full aspect-[4/5] bg-gradient-to-br from-[#C8121B]/40 to-transparent rounded-[80px] p-2 overflow-hidden group shadow-[0_0_80px_rgba(200,18,27,0.3)] border border-white/10">
             <div className="absolute inset-0 bg-black z-0"></div>
             <img 
               src="https://res.cloudinary.com/dxw5mimqj/image/upload/v1768387056/Gemini_Generated_Image_15pqsi15pqsi15pq_1_mxqsaa.png" 
               alt="RIFA Command" 
               className="relative z-10 w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-1000" 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-20"></div>
             <div className="absolute bottom-16 left-16 z-30">
                <div className="text-6xl font-black text-white mb-2 leading-none italic tracking-tighter uppercase">Aftab Maniyar</div>
                <div className="text-[#C8121B] font-black text-sm tracking-[0.5em] uppercase">Founder & Chief Engineer</div>
             </div>
          </div>
          <div className="absolute -bottom-12 -left-12 w-48 h-48 border-4 border-[#C8121B]/20 rounded-[60px] rotate-12 -z-10 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
