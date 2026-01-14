
import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Phone } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Training', href: '#training' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        const offset = 80; // Account for sticky header
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const handleWhatsApp = (msg: string = "Hello RIFA Fire Safety! I am looking for expert fire safety consultancy.") => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white selection:bg-[#C8121B] selection:text-white">
      {/* Premium Navigation */}
      <nav className={`fixed w-full z-[100] transition-all duration-700 ${isScrolled ? 'bg-black/95 backdrop-blur-2xl py-2 md:py-3 shadow-[0_20px_60px_rgba(0,0,0,0.5)] border-b border-white/10' : 'bg-transparent py-4 md:py-8'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-3 md:gap-4 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
             <img src="https://res.cloudinary.com/dxw5mimqj/image/upload/v1768385901/WhatsApp_Image_2026-01-14_at_12.21.23_AM-removebg-preview_mlzgma.png" alt="RIFA Logo" className="h-16 md:h-24 w-auto drop-shadow-[0_0_15px_rgba(200,18,27,0.7)] group-hover:scale-110 transition-transform" />
             <div className="hidden sm:block text-left">
                <div className="text-white font-black tracking-tighter text-xl md:text-3xl leading-none italic">RIFA</div>
                <div className="text-[#C8121B] text-[8px] md:text-[10px] font-black tracking-[0.3em] uppercase">Fire Safety Expert</div>
             </div>
          </div>

          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-gray-300 hover:text-[#C8121B] text-xs font-black tracking-[0.2em] uppercase transition-all hover:scale-105 active:scale-95"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => handleWhatsApp()}
              className="bg-[#C8121B] text-white px-10 py-4 rounded-full font-black text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all shadow-[0_10px_30px_rgba(200,18,27,0.4)] hover:shadow-white/20 active:scale-95"
            >
              Direct Connect
            </button>
          </div>

          <button className="lg:hidden text-white p-2 md:p-3 bg-white/5 rounded-2xl" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {/* Fix: use className for responsive sizes on icons */}
            {isMobileMenuOpen ? <X className="w-6 h-6 md:w-7 md:h-7" /> : <Menu className="w-6 h-6 md:w-7 md:h-7" />}
          </button>
        </div>

        {/* Cinematic Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-black/98 backdrop-blur-3xl text-white p-8 md:p-12 fixed inset-0 z-[200] flex flex-col items-center justify-center animate-in fade-in zoom-in duration-500">
            {/* Fix: use className for responsive sizes on icons */}
            <button className="absolute top-8 right-8 md:top-12 md:right-12 text-[#C8121B]" onClick={() => setIsMobileMenuOpen(false)}><X className="w-10 h-10 md:w-12 md:h-12" /></button>
            <div className="flex flex-col gap-6 md:gap-10 text-center w-full">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-3xl md:text-5xl font-black uppercase tracking-tighter hover:text-[#C8121B] transition-colors" 
                  onClick={(e) => handleScrollTo(e, link.href)}
                >
                  {link.name}
                </a>
              ))}
              <button 
                onClick={() => { handleWhatsApp(); setIsMobileMenuOpen(false); }}
                className="bg-[#C8121B] px-8 md:px-12 py-5 md:py-8 rounded-3xl font-black text-lg md:text-2xl uppercase tracking-widest mt-8 md:mt-12 shadow-2xl"
              >
                Instant Expert
              </button>
            </div>
          </div>
        )}
      </nav>

      <main>{children}</main>

      {/* Heroic Floating WhatsApp (Moved to Right Side) */}
      <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100]">
         <button 
           onClick={() => handleWhatsApp("URGENT: I need fire safety support immediately.")}
           className="w-16 h-16 md:w-20 md:h-20 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_20px_50px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-90 transition-all group relative"
         >
           {/* Fix: use className for responsive sizes on icons */}
           <MessageCircle className="w-8 h-8 md:w-10 md:h-10" />
           <span className="absolute right-full mr-6 bg-black text-white px-6 py-3 rounded-2xl text-xs font-black tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap pointer-events-none shadow-2xl hidden md:block">
             Expert WhatsApp
           </span>
           <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20 -z-10"></div>
         </button>
      </div>

      {/* Professional Footer */}
      <footer className="bg-[#0B0B0B] text-white pt-16 md:pt-32 pb-12 md:pb-16 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C8121B] to-transparent opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-20 relative z-10">
          <div className="md:col-span-2">
            <img src="https://res.cloudinary.com/dxw5mimqj/image/upload/v1768385901/WhatsApp_Image_2026-01-14_at_12.21.23_AM-removebg-preview_mlzgma.png" alt="RIFA Logo" className="h-24 md:h-36 mb-6 md:mb-10 drop-shadow-[0_0_20px_rgba(200,18,27,0.5)]" />
            <p className="text-gray-400 text-lg md:text-xl mb-8 md:mb-12 max-w-lg leading-relaxed font-medium">
              RIFA Fire Safety Services is the engineering authority in Solapur. We deliver life-saving compliance, elite training, and world-class equipment.
            </p>
            <div className="flex gap-4 md:gap-6">
               <button onClick={() => handleWhatsApp()} className="w-14 h-14 md:w-16 md:h-16 bg-white/5 hover:bg-[#C8121B] rounded-2xl flex items-center justify-center transition-all shadow-lg active:scale-95">
                  {/* Fix: use className for responsive sizes on icons */}
                  <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
               </button>
               <button onClick={() => window.open(`tel:+${WHATSAPP_NUMBER}`)} className="w-14 h-14 md:w-16 md:h-16 bg-white/5 rounded-2xl flex items-center justify-center transition-all shadow-lg active:scale-95">
                  {/* Fix: use className for responsive sizes on icons */}
                  <Phone className="w-6 h-6 md:w-7 md:h-7" />
               </button>
            </div>
          </div>

          <div>
            <h4 className="text-xl md:text-2xl font-black mb-6 md:mb-10 tracking-tighter uppercase text-[#C8121B]">Navigation</h4>
            <ul className="space-y-4 md:space-y-6 text-gray-500 font-black uppercase text-[10px] md:text-xs tracking-[0.3em]">
              {navLinks.map(l => <li key={l.name}><a href={l.href} onClick={(e) => handleScrollTo(e, l.href)} className="hover:text-white transition-colors block py-1 cursor-pointer">{l.name}</a></li>)}
            </ul>
          </div>

          <div>
            <h4 className="text-xl md:text-2xl font-black mb-6 md:mb-10 tracking-tighter uppercase text-[#C8121B]">Direct Hub</h4>
            <div className="text-gray-400 text-base md:text-lg leading-relaxed mb-6 md:mb-10 font-medium italic">
              Solapur HQ, Maharashtra.<br />
              India - 413001
            </div>
            <button 
              onClick={() => handleWhatsApp("Emergency Command Hub Inquiry")} 
              className="w-full bg-white/5 border border-white/10 px-6 md:px-8 py-4 md:py-5 rounded-2xl font-black text-[10px] md:text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-all shadow-xl active:scale-95"
            >
               Emergency Support
            </button>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-32 pt-8 md:pt-16 border-t border-white/5 text-center text-gray-600 text-[8px] md:text-[10px] font-black tracking-[0.6em] uppercase">
          <p>© {new Date().getFullYear()} RIFA Fire Safety Services | Solapur | Engineering Excellence</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
