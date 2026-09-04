import React from 'react';
import { Truck, Calendar, MapPin, SlidersHorizontal, ArrowRight, PhoneCall } from 'lucide-react';

export default function BulkSupplySection({ onOpenQuoteModal }) {
  const blocks = [
    {
      title: 'BULK ORDERS',
      desc: 'Large-volume biomass fuel requirements delivered seamlessly to plant sites.',
      icon: Truck,
    },
    {
      title: 'RECURRING SUPPLY',
      desc: 'Regular or monthly planned fuel schedules to ensure uninterrupted boiler operations.',
      icon: Calendar,
    },
    {
      title: 'DELIVERY PLANNING',
      desc: 'Coordination based on exact quantity, destination, schedule, and truck access.',
      icon: MapPin,
    },
    {
      title: 'REQUIREMENT-BASED SUPPLY',
      desc: 'Product and quantity planning tailored according to equipment specifications.',
      icon: SlidersHorizontal,
    },
  ];

  return (
    <section className="bg-[#4A4226] text-white py-16 lg:py-24 relative overflow-hidden border-b border-[#B38A2A]">
      {/* Background Decorative Element */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#B38A2A_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-[#D1A83A] font-extrabold text-xs uppercase tracking-widest bg-[#564D2D] px-3.5 py-1.5 rounded-md border border-[#B38A2A]/50">
              INDUSTRIAL BULK PROCUREMENT
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading leading-tight">
              NEED BIOMASS FUEL IN <span className="text-[#D1A83A]">BULK?</span>
            </h2>

            <p className="text-base sm:text-lg text-[#F4EFE3]/90 leading-relaxed font-medium">
              For businesses with regular biomass fuel consumption, consistent supply planning is an important part of procurement.
            </p>

            <div className="p-4 bg-[#564D2D]/80 rounded-xl border border-[#B38A2A]/50 text-sm text-[#F4EFE3] space-y-2">
              <div className="flex items-center gap-2 font-bold text-[#D1A83A]">
                <MapPin className="w-4 h-4" />
                Strategic Base: Gandhidham, Kutch, Gujarat
              </div>
              <p className="text-xs text-[#F4EFE3]/80">
                Direct coordination for industrial areas across Kutch, Morbi, Ahmedabad, Vadodara, Surat, and Gujarat industrial corridors.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onOpenQuoteModal('Bulk Order / Recurring Supply')}
                className="inline-flex items-center justify-center gap-3 bg-[#B38A2A] hover:bg-[#D1A83A] text-[#4A4226] px-7 py-4 rounded-xl font-extrabold text-base tracking-wider shadow-lg hover:shadow-xl transition-all border-2 border-white"
              >
                <span>DISCUSS YOUR REQUIREMENT</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="tel:+919409396503"
                className="inline-flex items-center justify-center gap-2 bg-[#564D2D] hover:bg-[#4A4226] text-white px-5 py-4 rounded-xl font-bold text-sm border border-[#B38A2A]/50"
              >
                <PhoneCall className="w-4 h-4 text-[#D1A83A]" />
                <span>Call +91 94093 96503</span>
              </a>
            </div>
          </div>

          {/* Right Column: 4 Feature Blocks */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {blocks.map((block, idx) => {
              const Icon = block.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#564D2D] p-6 rounded-2xl border border-[#B38A2A]/50 hover:border-[#D1A83A] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 bg-[#4A4226] text-[#D1A83A] rounded-xl flex items-center justify-center mb-4 border border-[#B38A2A]">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-base font-extrabold text-[#F4EFE3] mb-2 font-heading tracking-wide">
                      {block.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#F4EFE3]/80 leading-relaxed font-medium">
                      {block.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#4A4226] text-right">
                    <span className="text-[10px] font-bold text-[#D1A83A] uppercase tracking-widest">
                      Shiren Bioenergy
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
