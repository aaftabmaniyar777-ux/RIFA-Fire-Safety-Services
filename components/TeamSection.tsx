
import React, { useState } from 'react';
import { TEAM, WHATSAPP_NUMBER } from '../constants';
import { MessageCircle, X, ChevronRight } from 'lucide-react';
import { TeamMember } from '../types';

const TeamSection: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const handleWhatsApp = (member: TeamMember) => {
    const msg = `Hello! I would like to connect with ${member.name} (${member.role}) regarding a safety project.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="team" className="py-32 bg-[#0B0B0B] relative overflow-hidden">
      {/* Cinematic Overlays */}
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-[#C8121B]/5 rounded-full blur-[180px]"></div>
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#C8121B]/5 rounded-full blur-[150px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-block px-4 py-1 border border-[#C8121B] rounded-full text-[#C8121B] text-[10px] font-black tracking-[0.5em] uppercase mb-8">
            The Elite Guard
          </div>
          <h2 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter">LEADERSHIP FORCE</h2>
          <p className="text-2xl text-gray-500 max-w-3xl mx-auto font-medium italic">
            Commanded by the industry's most specialized safety engineers and strategic directors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {TEAM.map((member, index) => (
            <div 
              key={member.id} 
              className={`group relative h-[650px] rounded-[50px] overflow-hidden cursor-pointer transition-all duration-700 hover:-translate-y-6 shadow-[0_30px_60px_rgba(0,0,0,0.5)] ${index === 3 || index === 4 ? 'lg:translate-x-1/2' : ''}`}
              onClick={() => setSelectedMember(member)}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/90 z-10 group-hover:via-black/5 transition-all duration-700"></div>
              <img 
                src={member.image} 
                alt={member.name} 
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" 
              />
              
              <div className="absolute bottom-0 left-0 w-full p-12 z-20 transition-all duration-500 group-hover:pb-16">
                <div className="text-sm font-black text-[#C8121B] uppercase tracking-[0.4em] mb-4">{member.role}</div>
                <h3 className="text-5xl font-black text-white mb-6 leading-none group-hover:text-white transition-colors">{member.name}</h3>
                <div className="h-1 w-16 bg-[#C8121B] group-hover:w-full transition-all duration-700 rounded-full"></div>
                <div className="mt-10 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-all transform translate-y-10 group-hover:translate-y-0 duration-500">
                  <button className="flex items-center gap-3 text-white font-black text-sm uppercase tracking-widest border-b border-white/20 pb-2">
                    Heroic Dossier <ChevronRight size={18} className="text-[#C8121B]" />
                  </button>
                </div>
              </div>

              {/* Floating Stat Badge */}
              <div className="absolute top-10 right-10 z-20 flex flex-col gap-4 transform translate-x-20 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-700">
                <div className="bg-black/40 backdrop-blur-2xl p-5 rounded-3xl border border-[#C8121B]/40 text-center shadow-2xl">
                   <div className="text-2xl font-black text-white leading-none">{member.stats.exp}</div>
                   <div className="text-[10px] font-bold text-[#C8121B] uppercase tracking-widest mt-1">Exp</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Heroic Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/98 backdrop-blur-3xl" onClick={() => setSelectedMember(null)}></div>
          <div className="relative bg-[#0B0B0B] w-full max-w-6xl h-[90vh] rounded-[70px] overflow-hidden shadow-[0_0_150px_rgba(200,18,27,0.4)] animate-in zoom-in slide-in-from-bottom duration-500 border border-white/10">
            <button className="absolute top-12 right-12 text-gray-500 hover:text-[#C8121B] z-50 p-4 transition-colors" onClick={() => setSelectedMember(null)}>
              <X size={45} />
            </button>
            <div className="grid lg:grid-cols-2 h-full">
              <div className="relative h-full bg-black overflow-hidden">
                <img src={selectedMember.image} alt={selectedMember.name} className="w-full h-full object-cover grayscale opacity-50 scale-105" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0B0B0B]/40 to-[#0B0B0B]"></div>
                <div className="absolute bottom-24 left-20">
                   <h2 className="text-8xl font-black text-white mb-6 leading-none tracking-tighter">{selectedMember.name}</h2>
                   <div className="inline-block px-6 py-2 bg-[#C8121B] text-white font-black text-xl uppercase tracking-widest rounded-full">{selectedMember.role}</div>
                </div>
              </div>
              <div className="p-24 flex flex-col justify-center overflow-y-auto bg-[#0B0B0B]/50 backdrop-blur-sm">
                <div className="inline-block px-4 py-1 bg-[#C8121B]/15 text-[#C8121B] rounded-full text-[12px] font-black tracking-[0.5em] mb-12 self-start border border-[#C8121B]/30">EXECUTIVE DOSSIER</div>
                <h4 className="text-3xl font-black text-white mb-10 uppercase tracking-tighter border-b border-white/10 pb-6">Leadership Background</h4>
                <p className="text-gray-400 text-2xl leading-relaxed mb-16 font-medium italic">
                  "{selectedMember.fullBio}"
                </p>
                
                <div className="grid grid-cols-2 gap-10 mb-20">
                   <div className="p-10 bg-white/5 rounded-[40px] border border-white/10 group hover:border-[#C8121B]/40 transition-all">
                      <div className="text-6xl font-black text-white mb-3 group-hover:text-[#C8121B] transition-colors">{selectedMember.stats.exp}</div>
                      <div className="text-sm font-black text-gray-500 uppercase tracking-widest">Industry Service</div>
                   </div>
                   <div className="p-10 bg-white/5 rounded-[40px] border border-white/10 group hover:border-[#C8121B]/40 transition-all">
                      <div className="text-6xl font-black text-white mb-3 group-hover:text-[#C8121B] transition-colors">{selectedMember.stats.audits}</div>
                      <div className="text-sm font-black text-gray-500 uppercase tracking-widest">Verified Audits</div>
                   </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-8">
                  <button 
                    onClick={() => handleWhatsApp(selectedMember)}
                    className="flex-1 bg-[#C8121B] text-white py-8 rounded-[30px] font-black text-2xl hover:scale-105 transition-all flex items-center justify-center gap-4 shadow-2xl"
                  >
                    <MessageCircle size={32} /> Command Center
                  </button>
                  <button onClick={() => setSelectedMember(null)} className="flex-1 bg-white/5 border border-white/10 text-white py-8 rounded-[30px] font-black text-2xl hover:bg-white hover:text-black transition-all uppercase tracking-widest">
                    Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TeamSection;
