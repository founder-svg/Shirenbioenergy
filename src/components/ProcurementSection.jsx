import React, { useState } from 'react';
import { ChevronDown, FileCheck2, HelpCircle } from 'lucide-react';

export default function ProcurementSection() {
  const [isOpen, setIsOpen] = useState(false);

  const pelletChecklist = [
    'Pellet diameter (mm)',
    'Pellet length (mm)',
    'Moisture content (%)',
    'Ash content (%)',
    'Calorific value (kcal/kg)',
    'Bulk density (kg/m³)',
    'Raw material source',
    'Packaging format (bags/bulk)',
    'Required quantity (tonnes)',
    'Delivery location & access',
  ];

  const briquetteChecklist = [
    'Briquette dimensions (mm)',
    'Moisture content (%)',
    'Ash content (%)',
    'Calorific value (kcal/kg)',
    'Density (g/cm³)',
    'Raw material composition',
    'Packaging format',
    'Required quantity (tonnes)',
    'Loading & unloading method',
    'Delivery location & schedule',
  ];

  return (
    <section className="bg-[#FFFDF7] py-14 border-b border-[#E2DAC6] relative" id="procurement">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        <div className="bg-[#F7F1E4] rounded-3xl border-2 border-[#B78A2D]/40 p-6 sm:p-8 shadow-sm">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between text-left focus:outline-none group"
          >
            <div className="flex items-center gap-3">
              <div className="p-3 bg-[#564D2D] text-[#E0C46B] rounded-2xl shrink-0">
                <FileCheck2 className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold text-[#B78A2D] uppercase tracking-widest block">
                  BUYER'S PROCUREMENT GUIDE
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#564D2D] font-serif-heading">
                  WHAT SHOULD BUYERS CONFIRM?
                </h3>
              </div>
            </div>
            <div className="p-2 rounded-full bg-[#FFFDF7] border border-[#B78A2D]/40 text-[#564D2D] group-hover:bg-[#564D2D] group-hover:text-[#FFFDF7] transition-all">
              <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </div>
          </button>

          {isOpen && (
            <div className="mt-8 pt-6 border-t border-[#E2DAC6] grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-top-2 duration-300">
              {/* Pellets Panel */}
              <div className="bg-[#FFFDF7] p-5 rounded-2xl border border-[#B78A2D]/30 space-y-3">
                <h4 className="text-sm font-extrabold text-[#564D2D] uppercase tracking-wider font-serif-heading flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#B78A2D]" />
                  Biomass Pellets Checklist:
                </h4>
                <ul className="space-y-2 text-xs text-[#302A1A]">
                  {pelletChecklist.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 bg-[#F7F1E4] p-2 rounded-lg border border-[#E2DAC6]">
                      <HelpCircle className="w-3.5 h-3.5 text-[#B78A2D] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Briquettes Panel */}
              <div className="bg-[#FFFDF7] p-5 rounded-2xl border border-[#B78A2D]/30 space-y-3">
                <h4 className="text-sm font-extrabold text-[#564D2D] uppercase tracking-wider font-serif-heading flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#B78A2D]" />
                  Biomass Briquettes Checklist:
                </h4>
                <ul className="space-y-2 text-xs text-[#302A1A]">
                  {briquetteChecklist.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 bg-[#F7F1E4] p-2 rounded-lg border border-[#E2DAC6]">
                      <HelpCircle className="w-3.5 h-3.5 text-[#B78A2D] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
