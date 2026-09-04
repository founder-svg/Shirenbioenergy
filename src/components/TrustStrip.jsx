import React from 'react';
import { Leaf, ShieldCheck, Handshake, Headphones } from 'lucide-react';

export default function TrustStrip() {
  const items = [
    {
      title: 'SUSTAINABLE FUEL SOLUTIONS',
      desc: 'Responsible energy for a better tomorrow.',
      icon: Leaf,
    },
    {
      title: 'RELIABLE SUPPLY',
      desc: 'Consistent quality you can depend on.',
      icon: ShieldCheck,
    },
    {
      title: 'BULK & RECURRING SUPPLY',
      desc: 'Planned deliveries for your business needs.',
      icon: Handshake,
    },
    {
      title: 'CUSTOMER FOCUSED',
      desc: 'Responsive support at every step.',
      icon: Headphones,
    },
  ];

  return (
    <section className="bg-[#F7F1E4] py-8 border-b border-[#E2DAC6] relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#FFFDF7] p-6 rounded-2xl border border-[#B78A2D]/30 shadow-sm hover:shadow-md transition-all duration-300 flex items-start space-x-4 text-left group"
              >
                <div className="p-3 bg-[#564D2D] rounded-xl text-[#E0C46B] group-hover:scale-105 transition-transform shrink-0 shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-extrabold text-[#564D2D] tracking-wider uppercase">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#68736C] mt-1 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
