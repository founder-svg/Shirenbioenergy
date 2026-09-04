import React from 'react';
import { ArrowRight, Building2, Flame, Utensils, Sprout, Cog, Factory } from 'lucide-react';
import { 
  textileData, 
  foodData, 
  agroData, 
  mfgData, 
  heatingData, 
  boilerOpsData 
} from '../assets/imageData.js';

export default function IndustriesGrid({ onOpenQuoteModal }) {
  const industries = [
    {
      title: 'TEXTILE',
      subtitle: 'Process Steam Boilers & Dyeing Mills',
      image: textileData,
      icon: Factory,
      fallback: textileData
    },
    {
      title: 'FOOD PROCESSING',
      subtitle: 'Food-Grade Clean Thermal Energy',
      image: foodData,
      icon: Utensils,
      fallback: foodData
    },
    {
      title: 'AGRO PROCESSING',
      subtitle: 'Agricultural Residue & Grain Drying',
      image: agroData,
      icon: Sprout,
      fallback: agroData
    },
    {
      title: 'MANUFACTURING',
      subtitle: 'Heavy Industrial Furnaces & Foundries',
      image: mfgData,
      icon: Cog,
      fallback: mfgData
    },
    {
      title: 'INDUSTRIAL HEATING',
      subtitle: 'Thermal Fluid Heaters & Radiant Heat',
      image: heatingData,
      icon: Flame,
      fallback: heatingData
    },
    {
      title: 'BOILER OPERATIONS',
      subtitle: 'Continuous Steam & Power Generation',
      image: boilerOpsData,
      icon: Building2,
      fallback: boilerOpsData
    },
  ];

  return (
    <section className="bg-[#FFFDF7] py-16 lg:py-24 border-b border-[#E2DAC6] relative" id="industries">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-block text-[#B78A2D] font-extrabold text-[11px] uppercase tracking-widest bg-[#564D2D]/10 px-3.5 py-1.5 rounded border border-[#B78A2D]/30">
            COMPATIBLE THERMAL APPLICATIONS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#564D2D] font-serif-heading uppercase tracking-wide">
            INDUSTRIES WE SERVE
          </h2>
          <p className="text-base sm:text-lg text-[#4C432A] font-medium">
            Biomass pellets & briquettes supplied for industrial thermal systems across Gujarat & India.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#564D2D] via-[#B78A2D] to-[#564D2D] mx-auto rounded-full mt-3" />
        </div>

        {/* 6 Industry Image Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                onClick={() => onOpenQuoteModal && onOpenQuoteModal(item.title)}
                className="group cursor-pointer bg-[#F7F1E4] rounded-3xl overflow-hidden border border-[#B78A2D]/40 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col text-left hover:-translate-y-1.5 relative"
              >
                <div className="relative h-48 sm:h-56 overflow-hidden bg-[#4A4226]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-95 contrast-105"
                    onError={(e) => {
                      e.currentTarget.src = item.fallback;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4A4226] via-[#4A4226]/40 to-transparent" />
                  
                  <div className="absolute top-3 left-3 bg-[#564D2D]/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-extrabold text-[#E0C46B] border border-[#B78A2D]/40 uppercase tracking-wider flex items-center gap-1.5">
                    <IconComponent className="w-3.5 h-3.5 text-[#E0C46B]" />
                    <span>SECTOR {idx + 1}</span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="text-xl font-extrabold text-[#FFFDF7] font-serif-heading tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#E0C46B] font-medium tracking-wide mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
                
                <div className="p-4 bg-[#FFFDF7] border-t border-[#E2DAC6] flex items-center justify-between">
                  <span className="text-xs font-bold text-[#564D2D] tracking-wider uppercase">
                    BIOMASS FUEL COMPATIBLE
                  </span>
                  <div className="inline-flex items-center gap-1 text-xs font-extrabold text-[#B78A2D] group-hover:translate-x-1 transition-transform">
                    <span>ENQUIRE</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
