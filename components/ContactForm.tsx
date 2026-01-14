
import React, { useState } from 'react';
import { ChevronRight, MessageCircle, Phone, Mail, User, Building } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Fire NOC Acquisition',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waText = `*RIFA FIRE SAFETY LEAD*\n\n*Client:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Inquiry:* ${formData.service}\n*Message:* ${formData.message}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waText)}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <div>
            <div className="inline-block px-4 py-1 bg-[#C8121B]/15 text-[#C8121B] rounded-full text-[8px] md:text-[10px] font-black tracking-[0.4em] md:tracking-[0.5em] uppercase mb-8 md:mb-10">One-Click Lead</div>
            <h2 className="text-5xl md:text-8xl font-black text-[#0B0B0B] mb-8 md:mb-12 leading-[1.1] md:leading-[0.9] tracking-tighter uppercase">
              SECURE YOUR<br /><span className="text-[#C8121B]">FUTURE NOW.</span>
            </h2>
            <p className="text-lg md:text-2xl text-gray-500 mb-12 md:mb-20 leading-relaxed font-medium">
              Immediate connection to our command center. Submit the form below and you will be redirected to WhatsApp instantly with your full dossier.
            </p>
            
            <div className="space-y-8 md:space-y-12">
              <div className="flex items-center gap-6 md:gap-10 group cursor-pointer" onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=I%20need%20urgent%20safety%20assistance`, '_blank')}>
                <div className="w-16 h-16 md:w-24 md:h-24 bg-black rounded-[25px] md:rounded-[40px] flex items-center justify-center text-[#C8121B] group-hover:bg-[#C8121B] group-hover:text-white transition-all shadow-2xl">
                  {/* Fix: use className for responsive sizes on icons */}
                  <Phone className="w-7 h-7 md:w-10 md:h-10" />
                </div>
                <div>
                  <div className="text-[10px] md:text-sm font-black text-gray-400 uppercase tracking-widest mb-1 md:mb-2">Emergency Hub</div>
                  <div className="text-2xl md:text-4xl font-black text-black tracking-tighter">Direct Connect</div>
                </div>
              </div>
              <div className="flex items-center gap-6 md:gap-10 group cursor-pointer" onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Emergency%20Refilling%20Inquiry`, '_blank')}>
                <div className="w-16 h-16 md:w-24 md:h-24 bg-gray-50 rounded-[25px] md:rounded-[40px] flex items-center justify-center text-[#C8121B] group-hover:bg-black group-hover:text-white transition-all shadow-xl">
                  {/* Fix: use className for responsive sizes on icons */}
                  <MessageCircle className="w-7 h-7 md:w-10 md:h-10" />
                </div>
                <div>
                  <div className="text-[10px] md:text-sm font-black text-gray-400 uppercase tracking-widest mb-1 md:mb-2">Technical Support</div>
                  <div className="text-2xl md:text-4xl font-black text-black tracking-tighter">Instant WhatsApp</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#0B0B0B] p-8 md:p-20 rounded-[40px] md:rounded-[80px] shadow-[0_60px_120px_rgba(0,0,0,0.5)] relative border border-white/5">
            <div className="absolute -top-6 -right-6 md:-top-12 md:-right-12 w-32 md:w-48 h-32 md:h-48 bg-[#C8121B] rounded-full blur-[60px] md:blur-[100px] opacity-25"></div>
            <h3 className="text-3xl md:text-5xl font-black text-white mb-8 md:mb-12 tracking-tighter uppercase">Mission Briefing</h3>
            
            <form onSubmit={handleWhatsAppSubmit} className="space-y-5 md:space-y-8">
              <div className="relative">
                {/* Fix: use className for responsive sizes on icons */}
                <User className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-600 w-5 h-5 md:w-6 md:h-6" />
                <input 
                  name="name" required placeholder="Full Name / Organization" 
                  value={formData.name} onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl py-5 md:py-7 pl-14 md:pl-16 pr-6 md:pr-8 text-white focus:border-[#C8121B] transition-all outline-none text-base md:text-lg font-medium" 
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
                 <div className="relative">
                    {/* Fix: use className for responsive sizes on icons */}
                    <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-600 w-5 h-5 md:w-6 md:h-6" />
                    <input 
                      name="email" required type="email" placeholder="Official Email" 
                      value={formData.email} onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl py-5 md:py-7 pl-14 md:pl-16 pr-6 md:pr-8 text-white focus:border-[#C8121B] transition-all outline-none text-base md:text-lg font-medium" 
                    />
                 </div>
                 <div className="relative">
                    {/* Fix: use className for responsive sizes on icons */}
                    <Phone className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-600 w-5 h-5 md:w-6 md:h-6" />
                    <input 
                      name="phone" required placeholder="Phone Number" 
                      value={formData.phone} onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl py-5 md:py-7 pl-14 md:pl-16 pr-6 md:pr-8 text-white focus:border-[#C8121B] transition-all outline-none text-base md:text-lg font-medium" 
                    />
                 </div>
              </div>
              <div className="relative">
                {/* Fix: use className for responsive sizes on icons */}
                <Building className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-600 w-5 h-5 md:w-6 md:h-6" />
                <select 
                  name="service" value={formData.service} onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl py-5 md:py-7 pl-14 md:pl-16 pr-6 md:pr-8 text-white focus:border-[#C8121B] transition-all outline-none appearance-none text-base md:text-lg font-medium"
                >
                  <option className="bg-black">Fire NOC Acquisition</option>
                  <option className="bg-black">Industrial Fire Audit</option>
                  <option className="bg-black">Tactical Safety Training</option>
                  <option className="bg-black">Equipment / Refilling</option>
                  <option className="bg-black">Full Facility AMC</option>
                </select>
              </div>
              <textarea 
                name="message" required placeholder="Describe your safety requirements in detail..." 
                value={formData.message} onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-8 text-white focus:border-[#C8121B] transition-all min-h-[140px] md:min-h-[180px] outline-none text-base md:text-lg font-medium" 
              />

              <button type="submit" className="w-full bg-[#C8121B] text-white py-6 md:py-8 rounded-2xl md:rounded-3xl font-black text-xl md:text-2xl hover:bg-white hover:text-black transition-all flex items-center justify-center gap-4 group shadow-2xl">
                Submit & Connect
                {/* Fix: use className for responsive sizes on icons */}
                <ChevronRight className="w-6 h-6 md:w-7 md:h-7 group-hover:translate-x-3 transition-transform" />
              </button>
            </form>
            <p className="text-center text-gray-600 text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] mt-8 md:mt-10">Encrypted Submission | WhatsApp Redirect</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
