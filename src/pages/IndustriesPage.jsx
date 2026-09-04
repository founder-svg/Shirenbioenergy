import React from 'react';
import IndustriesGrid from '../components/IndustriesGrid';

export default function IndustriesPage({ onOpenQuoteModal }) {
  return (
    <main className="bg-[#FFFDF7] pt-10 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-left">
        <div className="bg-[#4A4226] text-white p-8 sm:p-12 rounded-3xl border-2 border-[#B78A2D] shadow-xl">
          <span className="text-xs font-extrabold text-[#E0C46B] uppercase tracking-widest bg-[#564D2D] px-3.5 py-1 rounded-full border border-[#B78A2D]">
            APPLICATIONS & SECTORS
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-serif-heading leading-tight mt-3">
            Industries We Serve
          </h1>
          <p className="text-base sm:text-lg text-[#F7F1E4]/90 max-w-2xl mt-2 font-medium">
            Providing tailored biomass fuel supply coordination across key industrial and thermal energy sectors in Gujarat and beyond.
          </p>
        </div>
      </div>

      <IndustriesGrid onOpenQuoteModal={onOpenQuoteModal} />
    </main>
  );
}
