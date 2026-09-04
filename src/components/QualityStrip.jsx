import React from 'react';
import { Award, Factory, Truck, Handshake } from 'lucide-react';

export default function QualityStrip() {
  const items = [
    {
      title: 'QUALITY PRODUCTS',
      desc: 'Carefully sourced and quality checked.',
      icon: Award,
    },
    {
      title: 'INDUSTRIAL EXPERTISE',
      desc: 'Understanding industry needs better.',
      icon: Factory,
    },
    {
      title: 'ON TIME DELIVERY',
      desc: 'Timely supply, every time.',
      icon: Truck,
    },
    {
      title: 'LONG TERM PARTNERSHIP',
      desc: 'Building relationships that grow.',
      icon: Handshake,
    },
  ];

  return (
    <section className="bg-[#4A4226] text-[#FFFDF7] py-10 border-y border-[#B78A2D]/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center space-x-4 text-left">
                <div className="p-3.5 bg-[#564D2D]/60 rounded-xl border border-[#B78A2D]/40 text-[#E0C46B] shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-[#E0C46B] uppercase tracking-wider">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#F7F1E4]/80 mt-1 font-medium leading-relaxed">
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
