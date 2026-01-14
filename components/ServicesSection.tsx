
import React from 'react';
import { Shield, Flame, ClipboardCheck, GraduationCap, Settings, ArrowRight } from 'lucide-react';
import { SERVICES, WHATSAPP_NUMBER } from '../constants';

const iconMap: Record<string, any> = { Shield, Flame, ClipboardCheck, GraduationCap, Settings };

const ServicesSection: React.FC = () => {
  const handleQuote = (service: string) => {
    const text = `I am requesting a professional quote for RIFA ${service} services. Please contact me.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="services" className="py-24 md:py-32 bg-[#0B0B0B] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle,rgba(200,18,27,0.05)_0%,transparent_70%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-block px-4 py-1 bg-[#C8121B]/20 text-[#C8121B] rounded-full text-[8px] md:text-[10px] font-black tracking-[0.3em] md:tracking-[0.5em] uppercase mb-6 md:mb-8 border border-[#C8121B]/30">Expert Range</div>
          <h2 className="text-5xl md:text-8xl font-black text-white mb-6 md:mb-8 tracking-tighter">ELITE SERVICES</h2>
          <div className="w-24 md:w-32 h-1 md:h-2 bg-[#C8121B] mx-auto rounded-full mb-8 md:mb-10 shadow-[0_0_20px_#C8121B]"></div>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
            Engineering safety into the fabric of your infrastructure. Solapur's most trusted compliance partner.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <div 
                key={service.id}
                className="group relative bg-white/5 border border-white/10 p-8 md:p-12 rounded-[30px] md:rounded-[50px] hover:bg-white/[0.08] transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_40px_80px_rgba(0,0,0,0.5)] cursor-pointer"
                onClick={() => handleQuote(service.title)}
              >
                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#C8121B]/15 rounded-[20px] md:rounded-[30px] flex items-center justify-center text-[#C8121B] mb-8 md:mb-10 group-hover:bg-[#C8121B] group-hover:text-white transition-all duration-500 shadow-xl group-hover:shadow-[#C8121B]/40 group-hover:rotate-6">
                  {/* Fix: use className for responsive sizes on icons */}
                  <Icon className="w-8 h-8 md:w-10 md:h-10" />
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white mb-4 md:mb-6 uppercase tracking-tighter leading-none">{service.title}</h3>
                <p className="text-gray-400 mb-8 md:mb-10 leading-relaxed font-medium text-base md:text-lg italic">
                  "{service.description}"
                </p>
                <ul className="space-y-3 md:space-y-4 mb-10 md:mb-12">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="text-gray-500 text-[10px] md:text-sm font-bold uppercase tracking-widest flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#C8121B] rounded-full shadow-[0_0_5px_#C8121B]"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
                <button 
                  className="w-full bg-white/5 border border-white/10 text-white py-4 md:py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] md:text-xs group-hover:bg-[#C8121B] group-hover:border-[#C8121B] transition-all flex items-center justify-center gap-3"
                >
                  Request Quote <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
