import React from 'react';
import { ShieldCheck, UserCheck, Leaf, Handshake, CheckCircle } from 'lucide-react';

export default function WhyChooseSection() {
  const cards = [
    {
      title: 'RELIABLE SUPPLY',
      desc: 'Focused on dependable coordination and timely dispatch schedules for ongoing fuel needs.',
      icon: ShieldCheck,
    },
    {
      title: 'CUSTOMER-FOCUSED SERVICE',
      desc: 'Understanding exact boiler specifications and customer requirements before supply execution.',
      icon: UserCheck,
    },
    {
      title: 'SUSTAINABILITY DIRECTION',
      desc: 'Focused on biomass fuels and resource-conscious energy solutions for modern industries.',
      icon: Leaf,
    },
    {
      title: 'LONG-TERM RELATIONSHIPS',
      desc: 'Building lasting partnerships through transparent communication and dependable service.',
      icon: Handshake,
    },
  ];

  return (
    <section className="bg-[#F4EFE3] py-16 lg:py-24 border-b border-[#E2DAC6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-extrabold text-[#B38A2A] tracking-widest uppercase bg-[#564D2D]/10 px-3.5 py-1 rounded-md border border-[#B38A2A]/30">
            OUR COMMITMENT
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4A4226] font-heading">
            WHY CHOOSE SHIREN BIOENERGY?
          </h2>
          <p className="text-base sm:text-lg text-[#2C2718]">
            Positioning your enterprise with a dependable biomass fuel partner committed to quality coordination and long-term service.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#564D2D] via-[#B38A2A] to-[#564D2D] mx-auto rounded-full mt-4" />
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#FBF8F0] p-6 rounded-2xl border-2 border-[#B38A2A]/30 hover:border-[#564D2D] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 bg-[#564D2D] text-[#D1A83A] rounded-xl flex items-center justify-center mb-5 border border-[#B38A2A] shadow-inner">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-lg font-extrabold text-[#4A4226] mb-3 font-heading tracking-wide">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#2C2718]/90 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E2DAC6] flex items-center gap-2 text-xs font-bold text-[#564D2D]">
                  <CheckCircle className="w-4 h-4 text-[#B38A2A]" />
                  <span>Verified Standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
