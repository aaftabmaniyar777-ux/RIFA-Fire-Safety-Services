
import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import TeamSection from './components/TeamSection';
import PricingCalculator from './components/PricingCalculator';
import ContactForm from './components/ContactForm';
import { CLIENTS, GALLERY, CERTIFICATES, WHATSAPP_NUMBER } from './constants';
import { Award, Camera, Target, ArrowRight, Zap, CheckCircle2, ShieldCheck, Globe } from 'lucide-react';

function App() {
  const handleWA = (tag: string) => {
    const text = `I am interested in ${encodeURIComponent(tag)} from RIFA Fire Safety. Please provide professional details and compliance steps.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <Layout>
      <Hero />
      
      {/* UNIFIED COMMAND DASHBOARD - Metrics + Industrial Alliance */}
      <section className="bg-[#0B0B0B] border-y border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#C8121B]/5 to-transparent"></div>
        
        {/* Top Part: Operational Stats */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 border-b border-white/5">
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              <button 
                onClick={() => handleWA("Project Certification Log")}
                className="flex items-center gap-6 md:gap-8 group text-left border-b sm:border-b-0 sm:border-r border-white/5 pb-8 sm:pb-0 md:pr-12 last:border-0"
              >
                 <div className="text-6xl md:text-8xl font-black text-white group-hover:text-[#C8121B] transition-all tracking-tighter italic">500+</div>
                 <div className="shrink-0">
                    <div className="text-[#C8121B] font-black text-[10px] tracking-widest uppercase mb-1 flex items-center gap-2">
                      <Globe size={14} /> Project Success
                    </div>
                    <div className="text-gray-500 font-bold text-[10px] uppercase tracking-[0.2em] leading-tight">Total Certified<br />Implementations</div>
                 </div>
              </button>

              <button 
                onClick={() => handleWA("Act Compliance Consultation")}
                className="flex items-center gap-6 md:gap-8 group text-left border-b sm:border-b-0 lg:border-r border-white/5 pb-8 sm:pb-0 md:pr-12 last:border-0"
              >
                 <div className="text-6xl md:text-8xl font-black text-white group-hover:text-[#C8121B] transition-all tracking-tighter italic">100%</div>
                 <div className="shrink-0">
                    <div className="text-[#C8121B] font-black text-[10px] tracking-widest uppercase mb-1 flex items-center gap-2">
                      <ShieldCheck size={14} /> Act Adherence
                    </div>
                    <div className="text-gray-500 font-bold text-[10px] uppercase tracking-[0.2em] leading-tight">Zero Failure<br />Compliance Rate</div>
                 </div>
              </button>

              <button 
                onClick={() => handleWA("Emergency Response Activation")}
                className="flex items-center gap-6 md:gap-8 group text-left last:border-0"
              >
                 <div className="text-6xl md:text-8xl font-black text-white group-hover:text-[#C8121B] transition-all tracking-tighter italic">24/7</div>
                 <div className="shrink-0">
                    <div className="text-[#C8121B] font-black text-[10px] tracking-widest uppercase mb-1 flex items-center gap-2">
                      <Zap size={14} /> Instant Link
                    </div>
                    <div className="text-gray-500 font-bold text-[10px] uppercase tracking-[0.2em] leading-tight">Critical Ops<br />Direct Response</div>
                 </div>
              </button>
           </div>
        </div>

        {/* Bottom Part: Strategic Partners */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="text-center mb-10 md:mb-16">
             <h4 className="text-[#C8121B] font-black text-[11px] tracking-[0.4em] md:tracking-[0.6em] uppercase mb-4 opacity-80">Strategic Industrial Alliance</h4>
             <div className="w-20 md:w-24 h-1 bg-[#C8121B] mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center">
            {CLIENTS.map((client, i) => (
              <button 
                key={i} 
                onClick={() => handleWA(`Compliance Inquiry for ${client.name} sector`)}
                className="flex flex-col items-center gap-4 md:gap-6 group/item transition-all duration-500 hover:scale-110"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 bg-white/5 rounded-[30px] md:rounded-[40px] flex items-center justify-center text-[#C8121B] group-hover/item:bg-[#C8121B] group-hover/item:text-white transition-all shadow-[0_20px_40px_rgba(0,0,0,0.3)] border border-white/10 group-hover/item:border-[#C8121B]/50 group-hover/item:-rotate-6">
                   {/* Fix: use className for responsive sizes on icons */}
                   <client.icon className="w-9 h-9 md:w-11 md:h-11" />
                </div>
                <span className="text-white font-black uppercase tracking-[0.2em] md:tracking-[0.25em] text-[10px] md:text-[12px] group-hover/item:text-[#C8121B] transition-colors">{client.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 md:py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-28 items-center">
             <div className="relative group">
                <div className="absolute -inset-4 md:-inset-8 bg-[#C8121B]/5 rounded-[40px] md:rounded-[80px] group-hover:scale-105 transition-all duration-700"></div>
                <div className="relative z-10 aspect-[4/5] rounded-[30px] md:rounded-[70px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)] md:shadow-[0_40px_100px_rgba(0,0,0,0.15)] border-[8px] md:border-[15px] border-white">
                   <img 
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200" 
                    alt="RIFA Strategic Fire Hub" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0" 
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                   <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
                      <div className="text-6xl md:text-8xl font-black text-white mb-2 leading-none italic">10+</div>
                      <div className="text-[#C8121B] font-black uppercase tracking-[0.4em] text-xs md:text-sm">Years of Engineering</div>
                   </div>
                </div>
                <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-black text-white p-6 md:p-10 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.3)] z-20 border-2 md:border-4 border-[#C8121B] group-hover:scale-110 transition-transform cursor-pointer" onClick={() => handleWA("Instant Safety Audit Request")}>
                  {/* Fix: use className for responsive sizes on icons */}
                  <ShieldCheck className="w-8 h-8 md:w-10 md:h-10 text-[#C8121B]" />
                </div>
             </div>
             <div>
                <div className="inline-block px-4 md:px-6 py-2 bg-[#C8121B]/10 rounded-full text-[#C8121B] text-[8px] md:text-[10px] font-black tracking-[0.3em] md:tracking-[0.5em] uppercase mb-6 md:mb-10 border border-[#C8121B]/20">The Command center</div>
                <h2 className="text-5xl md:text-8xl font-black text-black mb-6 md:mb-12 leading-[1] md:leading-[0.9] tracking-tighter uppercase italic">SHIELD OF<br /><span className="text-[#C8121B] not-italic">SOLAPUR.</span></h2>
                <p className="text-xl md:text-2xl text-gray-500 mb-8 md:mb-14 leading-relaxed font-medium">
                  Led by Aftab Maniyar, RIFA is more than a consultancy; it is an institution of technical authority. We engineer absolute protection for Maharashtra's high-hazard zones.
                </p>
                <div className="grid gap-6 md:gap-8 mb-10 md:mb-16">
                   {[
                     { title: "Zero Compromise", text: "Strictest adherence to Maharashtra Fire Prevention Act, 2006." },
                     { title: "Elite Certification", text: "Approved agency for high-stakes Fire NOC & industrial audits." },
                     { title: "Direct Command", text: "24/7 technical hotline for immediate safety equipment refilling." }
                   ].map((item, i) => (
                     <div key={i} className="flex gap-4 md:gap-8 items-start group cursor-pointer" onClick={() => handleWA(`Elite Service: ${item.title}`)}>
                        <div className="w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-[15px] md:rounded-[20px] bg-black flex items-center justify-center text-[#C8121B] group-hover:bg-[#C8121B] group-hover:text-white transition-all shadow-xl group-hover:-rotate-6">
                          {/* Fix: use className for responsive sizes on icons */}
                          <CheckCircle2 className="w-6 h-6 md:w-7 md:h-7" />
                        </div>
                        <div>
                          <h4 className="text-xl md:text-2xl font-black uppercase tracking-tighter group-hover:text-[#C8121B] transition-colors">{item.title}</h4>
                          <p className="text-sm md:text-base text-gray-500 font-medium leading-relaxed">{item.text}</p>
                        </div>
                     </div>
                   ))}
                </div>
                <button 
                  onClick={() => handleWA("Request RIFA Executive Portfolio")} 
                  className="w-full md:w-auto bg-black text-white px-8 md:px-16 py-6 md:py-8 rounded-[25px] md:rounded-[35px] font-black uppercase tracking-[0.2em] text-lg md:text-xl hover:bg-[#C8121B] transition-all flex items-center justify-center gap-4 md:gap-6 shadow-[0_25px_50px_rgba(0,0,0,0.3)] active:scale-95"
                >
                  Connect with CEO <ArrowRight className="group-hover:translate-x-4 transition-transform" size={24} />
                </button>
             </div>
          </div>
        </div>
      </section>

      <ServicesSection />

      {/* Heroic Training - Industrial Drills */}
      <section id="training" className="py-24 md:py-40 bg-[#0B0B0B] text-white overflow-hidden relative">
         <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,#C8121B,transparent)] opacity-20"></div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 md:gap-28 items-center">
               <div className="flex-1 order-2 lg:order-1">
                  <div className="inline-block px-4 py-1 bg-[#C8121B] rounded-full text-white text-[8px] md:text-[10px] font-black tracking-[0.3em] md:tracking-[0.5em] uppercase mb-6 md:mb-10">Operations Command</div>
                  <h2 className="text-5xl md:text-9xl font-black mb-8 md:mb-12 tracking-tighter leading-none uppercase italic">TACTICAL<br /><span className="text-[#C8121B] not-italic">FORCE.</span></h2>
                  <p className="text-xl md:text-3xl text-gray-400 mb-10 md:mb-16 leading-relaxed font-medium italic opacity-80">
                    Seconds define survival. We train your team for the absolute limit.
                  </p>
                  <div className="grid gap-6 md:gap-10 mb-12 md:mb-20">
                    {['On-Site Tactical Simulations', 'Advanced Search & Rescue Drills', 'Hazardous Material Handling'].map((t, i) => (
                      <div key={i} className="flex items-center gap-6 md:gap-10 group cursor-pointer" onClick={() => handleWA(`Training Workshop: ${t}`)}>
                        <div className="w-3 h-3 md:w-5 md:h-5 bg-[#C8121B] rounded-full group-hover:scale-[2] shadow-[0_0_20px_#C8121B] transition-all duration-500"></div>
                        <span className="text-2xl md:text-4xl font-black text-white/90 group-hover:text-[#C8121B] transition-colors uppercase tracking-tighter">{t}</span>
                      </div>
                    ))}
                  </div>
                  <button 
                    onClick={() => handleWA("Book Tactical Drill Session")} 
                    className="w-full md:w-auto bg-[#C8121B] text-white px-8 md:px-16 py-6 md:py-9 rounded-[30px] md:rounded-[40px] font-black text-xl md:text-3xl hover:bg-white hover:text-black transition-all shadow-[0_40px_80px_rgba(200,18,27,0.4)] active:scale-95 uppercase tracking-widest"
                  >
                    Deploy Training
                  </button>
               </div>
               <div className="flex-1 relative order-1 lg:order-2 w-full">
                  <div className="grid grid-cols-2 gap-4 md:gap-12 relative z-10">
                     <div className="space-y-4 md:space-y-12 pt-12 md:pt-32">
                        <img src="https://res.cloudinary.com/dxw5mimqj/image/upload/v1768392884/male-female-firefighters-station-working-together_j4equi.jpg" className="rounded-[30px] md:rounded-[60px] grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl scale-105" alt="Drill Ops" />
                        <img src="https://res.cloudinary.com/dxw5mimqj/image/upload/v1768392883/firefighter-ready-his-mission_mpsq5v.jpg" className="rounded-[30px] md:rounded-[60px] border-[6px] md:border-[12px] border-[#C8121B] shadow-3xl" alt="Drill Certification" />
                     </div>
                     <div className="space-y-4 md:space-y-12">
                        <img src="https://res.cloudinary.com/dxw5mimqj/image/upload/v1768392882/firefighters-ready-his-mission_tqnsf2.jpg" className="rounded-[30px] md:rounded-[60px] shadow-2xl" alt="Command Post" />
                        <img src="https://res.cloudinary.com/dxw5mimqj/image/upload/v1768392042/fire-safety-training-stockcake_ruurrn.webp" className="rounded-[30px] md:rounded-[60px] grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl scale-105" alt="Ops Ready" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Certifications - Global Standards */}
      <section className="py-16 md:py-32 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h3 className="text-4xl md:text-6xl font-black mb-12 md:mb-24 tracking-tighter text-center uppercase italic">THE <span className="text-[#C8121B]">GOLD</span> STANDARD.</h3>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {CERTIFICATES.map((cert, i) => (
                <div key={i} className="bg-white p-10 md:p-14 rounded-[40px] md:rounded-[70px] shadow-[0_30px_60px_rgba(0,0,0,0.08)] flex flex-col items-center text-center group hover:border-[#C8121B] border-4 border-transparent transition-all duration-700">
                   {/* Fix: use className for responsive sizes on icons */}
                   <Award className="w-16 h-16 md:w-24 md:h-24 text-[#C8121B] mb-6 md:mb-10 group-hover:rotate-12 group-hover:scale-110 transition-all" />
                   <div>
                      <div className="text-xl md:text-3xl font-black uppercase tracking-tighter mb-2 md:mb-4 italic">{cert.title}</div>
                      <div className="text-gray-400 font-black uppercase text-[8px] md:text-[10px] tracking-[0.4em]">{cert.issuer}</div>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Gallery - Operational Action Logs */}
      <section id="gallery" className="py-16 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-24 gap-8 md:gap-12">
            <div className="max-w-2xl">
               <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6 md:mb-8 leading-none italic">FIELD <span className="text-[#C8121B]">INTELLIGENCE.</span></h2>
               <p className="text-lg md:text-2xl text-gray-500 font-bold italic border-l-[6px] md:border-l-[10px] border-[#C8121B] pl-6 md:pl-10">Photographic proof of absolute industrial protection.</p>
            </div>
            <button 
              onClick={() => handleWA("Operational Portfolio Request")} 
              className="flex items-center gap-4 bg-black text-white px-10 md:px-14 py-5 md:py-7 rounded-[20px] md:rounded-[30px] font-black uppercase tracking-[0.2em] text-[10px] md:text-sm hover:bg-[#C8121B] transition-all shadow-2xl active:scale-95"
            >
              {/* Fix: use className for responsive sizes on icons */}
              <Camera className="w-7 h-7 md:w-9 md:h-9" /> Full Intelligence
            </button>
          </div>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 md:gap-12 space-y-6 md:space-y-12">
             {GALLERY.map((img, i) => (
               <div key={i} className="break-inside-avoid rounded-[30px] md:rounded-[80px] overflow-hidden group relative shadow-xl border-[6px] md:border-[10px] border-white transition-all hover:scale-[1.02] hover:-rotate-1">
                  <img src={img} className="w-full grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 group-hover:scale-110" alt={`RIFA Mission ${i}`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#C8121B]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all flex items-end p-8 md:p-16">
                     <div className="text-white">
                        <div className="font-black text-2xl md:text-3xl mb-2 md:mb-4 uppercase tracking-tighter italic">Operational Success</div>
                        <div className="text-[8px] md:text-xs uppercase font-black tracking-[0.3em] text-white/80">Solapur Command, MH</div>
                     </div>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      <TeamSection />
      <PricingCalculator />
      <ContactForm />
    </Layout>
  );
}

export default App;
