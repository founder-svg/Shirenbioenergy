import React from 'react';
import { Leaf, Box, CalendarCheck, ShieldCheck, Layers, Wrench, AlertCircle, Flame } from 'lucide-react';

export default function WhyBiomassSection() {
  const benefits = [
    {
      num: '01',
      title: 'Resource Utilization',
      tag: 'ECO SOURCING',
      desc: 'Makes optimal use of agricultural biomass resources that otherwise have limited commercial value.',
      icon: Leaf,
    },
    {
      num: '02',
      title: 'Densified Fuel',
      tag: 'HIGH DENSITY',
      desc: 'Pellets and briquettes provide compact, manageable fuel formats for clean storage and feed.',
      icon: Box,
    },
    {
      num: '03',
      title: 'Supply Planning',
      tag: 'RECURRING LOGISTICS',
      desc: 'Bulk & recurring supply schedules for industrial stability and planned ongoing thermal requirements.',
      icon: CalendarCheck,
    },
    {
      num: '04',
      title: 'Sustainability Focus',
      tag: 'LOW CARBON',
      desc: 'Supports a cleaner, carbon-neutral thermal energy future when responsibly sourced and combusted.',
      icon: ShieldCheck,
    },
    {
      num: '05',
      title: 'Fuel Diversification',
      tag: 'COST OPTIMIZATION',
      desc: 'A practical, cost-effective alternative to conventional fossil fuels like coal, FO, or diesel.',
      icon: Layers,
    },
    {
      num: '06',
      title: 'Practical Handling',
      tag: 'EASY FEEDING',
      desc: 'Simplifies storage, pneumatic conveyability, and automated fuel feeding in compatible boilers.',
      icon: Wrench,
    },
  ];

  return (
    <section className="bg-[#F7F1E4] py-16 lg:py-24 border-b border-[#E2DAC6] relative" id="why-biomass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-[#B78A2D] font-extrabold text-[11px] uppercase tracking-widest bg-[#564D2D]/10 px-3 py-1 rounded border border-[#B78A2D]/30">
            <Flame className="w-3.5 h-3.5 text-[#B78A2D]" />
            <span>INDUSTRIAL ADVANTAGES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#564D2D] font-serif-heading uppercase tracking-wide">
            WHY BIOMASS FUEL?
          </h2>
          <p className="text-base sm:text-lg text-[#4C432A] font-medium">
            A practical, sustainable fuel option when responsibly sourced and appropriately used in thermal boilers.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#564D2D] via-[#B78A2D] to-[#564D2D] mx-auto rounded-full mt-3" />
        </div>

        {/* 6 Icons Horizontal/Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mb-12">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#FFFDF7] p-5 rounded-2xl border border-[#B78A2D]/35 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between items-center text-center group hover:-translate-y-1 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 bg-[#564D2D]/10 text-[#564D2D] font-mono text-[9px] font-extrabold px-2 py-0.5 rounded-bl">
                  {item.num}
                </div>

                {/* Circular Icon Badge */}
                <div className="w-13 h-13 rounded-full bg-[#564D2D] text-[#E0C46B] flex items-center justify-center mb-3 border-2 border-[#B78A2D] shadow-inner group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>

                <div>
                  <span className="text-[9px] font-extrabold tracking-widest text-[#B78A2D] uppercase block mb-1">
                    {item.tag}
                  </span>
                  <h3 className="text-xs sm:text-sm font-extrabold text-[#564D2D] mb-2 font-serif-heading">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-[#4C432A] leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Disclaimer Panel */}
        <div className="bg-[#4A4226] text-[#F7F1E4] p-5.5 rounded-2xl border border-[#B78A2D]/60 shadow-lg text-left flex items-start gap-4 max-w-4xl mx-auto">
          <AlertCircle className="w-5 h-5 text-[#E0C46B] shrink-0 mt-0.5" />
          <p className="text-xs text-[#F7F1E4]/90 leading-relaxed">
            <strong className="text-[#E0C46B]">Application Note:</strong> Biomass pellets and briquettes can be evaluated as solid-fuel options for compatible thermal and industrial systems. Final suitability depends on equipment specifications, boiler/furnace design, fuel feeding system, required calorific value, moisture tolerance, ash handling, and operating conditions.
          </p>
        </div>

      </div>
    </section>
  );
}
