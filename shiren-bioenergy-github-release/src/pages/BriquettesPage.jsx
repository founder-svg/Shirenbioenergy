import React from 'react';
import { CheckCircle2, ArrowRight, AlertCircle } from 'lucide-react';
import { briquettesData } from '../assets/imageData.js';
import briquettesImg from '../assets/images/briquettes.jpg';
import TestimonialsSection from '../components/TestimonialsSection';

export default function BriquettesPage({ onOpenQuoteModal }) {
  return (
    <main className="bg-[#FFFDF7] pt-10 pb-20 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Banner */}
        <div className="bg-[#4A4226] text-white p-8 sm:p-12 rounded-3xl border-2 border-[#B78A2D] shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="text-xs font-extrabold text-[#E0C46B] uppercase tracking-widest bg-[#564D2D] px-3.5 py-1 rounded-full border border-[#B78A2D]">
              PRODUCT SPECIFICATIONS
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-serif-heading leading-tight">
              Biomass Briquettes
            </h1>
            <p className="text-base sm:text-lg text-[#F7F1E4]/90 leading-relaxed font-medium">
              Compressed solid biomass fuels providing a convenient format for storage, transportation and industrial thermal heating.
            </p>
          </div>
        </div>

        {/* Product Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl font-extrabold text-[#564D2D] font-serif-heading">
              Overview & Characteristics
            </h2>
            
            <p className="text-base text-[#302A1A] leading-relaxed font-medium">
              Biomass briquettes are solid high-density blocks created by compressing agricultural or woody biomass residue under high pressure. They are ideal for large industrial boilers, kilns, and high-heat process furnaces.
            </p>

            <div className="space-y-3">
              <h3 className="text-xs font-extrabold text-[#564D2D] uppercase tracking-wider font-serif-heading">
                Key Industrial Applications:
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  'Industrial heating',
                  'Boiler applications',
                  'Process heating',
                  'Furnaces & kilns',
                  'Commercial heating systems',
                  'Bulk biomass fuel requirements',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-[#302A1A] bg-[#F7F1E4] p-2.5 rounded-xl border border-[#B78A2D]/30">
                    <CheckCircle2 className="w-4 h-4 text-[#564D2D] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4">
              <button
                onClick={() => onOpenQuoteModal && onOpenQuoteModal('Biomass Briquettes')}
                className="inline-flex items-center gap-3 bg-[#564D2D] text-white hover:bg-[#6B5D38] px-7 py-4 rounded-full font-extrabold text-xs uppercase tracking-wider border border-[#B78A2D] shadow-lg"
              >
                <span>ENQUIRE ABOUT BRIQUETTES</span>
                <ArrowRight className="w-4 h-4 text-[#E0C46B]" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-[#F7F1E4]">
              <img
                src={briquettesData || briquettesImg}
                alt="Shiren Bioenergy Biomass Briquettes Storage"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <TestimonialsSection onOpenQuoteModal={onOpenQuoteModal} />

        {/* Disclaimer */}
        <div className="bg-[#4A4226] text-[#F7F1E4] p-5 rounded-2xl border border-[#B78A2D] flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-[#E0C46B] shrink-0 mt-0.5" />
          <p className="text-xs text-[#F7F1E4]/90 leading-relaxed">
            <strong>Disclaimer:</strong> Actual fuel performance, cost benefits and environmental impact depend on product specifications, application, equipment, transportation and operating conditions.
          </p>
        </div>

      </div>
    </main>
  );
}
