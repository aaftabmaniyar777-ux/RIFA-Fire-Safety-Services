
import React, { useState } from 'react';
import { Info, ArrowRight, Zap } from 'lucide-react';
import { PRICING, WHATSAPP_NUMBER } from '../constants';

const PricingCalculator: React.FC = () => {
  const [size, setSize] = useState(1000); // sq ft

  const calculateEstimate = () => {
    if (size < 1500) return "₹15,000 - ₹25,000";
    if (size < 5000) return "₹25,000 - ₹50,000";
    return "₹50,000+ (Custom Quote)";
  };

  const handleQuote = (pkg: string = "Custom Audit") => {
    const text = `I am looking for a quote for ${pkg}. My building size is approximately ${size} sq. ft.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="pricing" className="py-24 md:py-32 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-block px-4 py-1 bg-black text-white rounded-full text-[8px] md:text-[10px] font-black tracking-[0.3em] md:tracking-[0.5em] uppercase mb-6 md:mb-8">Investment</div>
          <h2 className="text-4xl md:text-8xl font-black text-[#0B0B0B] mb-6 md:mb-8 tracking-tighter uppercase">SAFETY BUDGETING</h2>
          <p className="text-lg md:text-2xl text-gray-500 max-w-2xl mx-auto font-medium italic">Transparent estimations for world-class protection.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-start">
          <div className="bg-white p-8 md:p-16 rounded-[40px] md:rounded-[60px] shadow-[0_40px_100px_rgba(0,0,0,0.05)] border border-gray-100">
            <h3 className="text-3xl md:text-4xl font-black mb-6 md:mb-10 uppercase tracking-tighter">Audit Estimator</h3>
            <p className="text-lg md:text-xl text-gray-500 mb-8 md:mb-12 font-medium">Slide to specify your building size for an instant range.</p>
            
            <div className="mb-10 md:mb-16">
              <div className="flex justify-between items-end font-black mb-4 md:mb-6">
                <span className="text-[10px] md:text-sm uppercase tracking-widest text-gray-400">Total Area</span>
                <span className="text-2xl md:text-4xl text-[#C8121B] tracking-tighter italic">{size.toLocaleString()} <span className="text-base md:text-lg">SQ. FT.</span></span>
              </div>
              <div className="relative h-3 md:h-4 bg-gray-100 rounded-full">
                <input 
                  type="range" 
                  min="500" 
                  max="20000" 
                  step="500"
                  value={size}
                  onChange={(e) => setSize(parseInt(e.target.value))}
                  className="absolute inset-0 w-full h-full bg-transparent appearance-none cursor-pointer accent-[#C8121B] z-20"
                />
                <div 
                  className="absolute left-0 top-0 h-full bg-[#C8121B] rounded-full z-10" 
                  style={{ width: `${((size - 500) / 19500) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="bg-[#0B0B0B] text-white p-8 md:p-12 rounded-[30px] md:rounded-[40px] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 md:p-8 text-[#C8121B] opacity-20">
                {/* Fix: use className for responsive sizes on icons */}
                <Zap fill="currentColor" className="w-20 h-20 md:w-[100px] md:h-[100px]" />
              </div>
              <div className="relative z-10">
                <div className="text-[10px] md:text-xs font-black text-[#C8121B] mb-2 md:mb-4 uppercase tracking-[0.4em]">Expert Estimate</div>
                <div className="text-3xl md:text-5xl font-black mb-6 md:mb-8 tracking-tighter italic">{calculateEstimate()}</div>
                <div className="flex items-center gap-2 md:gap-3 text-gray-500 text-[10px] md:text-sm font-bold uppercase tracking-widest">
                  {/* Fix: use className for responsive sizes on icons */}
                  <Info className="w-4 h-4 md:w-[18px] md:h-[18px] text-[#C8121B]" /> Adjusted by hazard type.
                </div>
              </div>
            </div>
            
            <button 
              onClick={() => handleQuote()}
              className="w-full mt-8 md:mt-10 bg-black text-white py-6 md:py-8 rounded-2xl md:rounded-3xl font-black text-xl md:text-2xl uppercase tracking-widest hover:bg-[#C8121B] transition-all shadow-xl active:scale-95 flex items-center justify-center gap-3 md:gap-4 group"
            >
              Get Expert Quote 
              {/* Fix: use className for responsive sizes on icons */}
              <ArrowRight className="w-6 h-6 md:w-7 md:h-7 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          <div className="space-y-6 md:space-y-10">
            {PRICING.map((pkg, idx) => (
              <div 
                key={idx} 
                className="bg-white p-8 md:p-12 rounded-[30px] md:rounded-[50px] shadow-sm border-2 border-transparent hover:border-[#C8121B] transition-all duration-500 group cursor-pointer"
                onClick={() => handleQuote(pkg.name)}
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-8">
                  <div className="flex-1">
                    <h4 className="text-2xl md:text-4xl font-black mb-1 md:mb-2 uppercase tracking-tighter">{pkg.name}</h4>
                    <p className="text-[#C8121B] font-black uppercase text-[10px] tracking-widest mb-6 md:mb-8">Segment: {pkg.recommendedFor}</p>
                    <ul className="space-y-3 md:space-y-4">
                      {pkg.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-3 md:gap-4 text-gray-600 font-bold uppercase text-[8px] md:text-[10px] tracking-widest">
                          <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-green-500 rounded-full"></div>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-left md:text-right shrink-0 w-full md:w-auto">
                    <div className="text-2xl md:text-3xl font-black text-black mb-4 md:mb-4 tracking-tighter italic">{pkg.range}</div>
                    <button className="bg-gray-50 px-6 md:px-8 py-2 md:py-3 rounded-xl text-black font-black uppercase tracking-widest text-[8px] md:text-[10px] group-hover:bg-[#C8121B] group-hover:text-white transition-all active:scale-90 shadow-sm">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCalculator;
