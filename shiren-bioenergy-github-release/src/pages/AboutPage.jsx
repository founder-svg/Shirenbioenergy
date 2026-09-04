import React from 'react';
import { MapPin, ShieldCheck, Truck, Factory, ArrowRight } from 'lucide-react';
import { logisticsData } from '../assets/imageData.js';

import TestimonialsSection from '../components/TestimonialsSection';

export default function AboutPage({ onOpenQuoteModal }) {
  return (
    <main className="bg-[#FFFDF7] pt-10 pb-20 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Banner */}
        <div className="bg-[#4A4226] text-[#FFFDF7] p-8 sm:p-14 rounded-3xl border-2 border-[#B78A2D] shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="text-xs font-extrabold text-[#E0C46B] uppercase tracking-widest bg-[#564D2D] px-3.5 py-1 rounded-full border border-[#B78A2D]">
              ABOUT SHIREN BIOENERGY
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-serif-heading leading-tight">
              Biomass Fuel Supply, Made Simple.
            </h1>
            <p className="text-base sm:text-lg text-[#F7F1E4]/90 leading-relaxed font-medium">
              Connecting industrial and commercial enterprises in Gujarat with dependable biomass fuel solutions.
            </p>
          </div>
        </div>

        {/* Story & Operations */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6 text-[#302A1A]">
            <h2 className="text-3xl font-extrabold text-[#564D2D] font-serif-heading">
              Our Supply Coordination Focus
            </h2>

            <p className="text-base leading-relaxed text-[#564D2D] font-medium">
              Shiren Bioenergy is a supply-focused biomass fuel business based in <strong>Gandhidham, Kutch, Gujarat</strong>, specializing in Biomass Pellets and Biomass Briquettes for industrial and commercial requirements.
            </p>

            <p className="text-base leading-relaxed text-[#68736C]">
              We focus on connecting businesses with dependable biomass fuel solutions for their ongoing energy and thermal-fuel requirements.
            </p>

            <p className="text-base leading-relaxed bg-[#F7F1E4] p-4 rounded-xl border-l-4 border-[#B78A2D]">
              From understanding product requirements and quantities to coordinating supply and delivery planning, our objective is to make biomass fuel procurement straightforward and dependable.
            </p>

            <div className="pt-2">
              <button
                onClick={() => onOpenQuoteModal && onOpenQuoteModal('General Supply Inquiry')}
                className="inline-flex items-center gap-2 bg-[#564D2D] text-white hover:bg-[#6B5D38] px-6 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider border border-[#B78A2D] shadow-md"
              >
                <span>REQUEST A QUOTE</span>
                <ArrowRight className="w-4 h-4 text-[#E0C46B]" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#F7F1E4]">
              <img
                src={logisticsData}
                alt="Shiren Bioenergy Gandhidham Logistics Hub"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4A4226] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 bg-[#4A4226]/95 p-4 rounded-xl border border-[#B78A2D] text-white">
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-[#E0C46B]" />
                  <div>
                    <h3 className="text-sm font-bold text-white font-serif-heading">Gandhidham, Kutch Hub</h3>
                    <p className="text-xs text-[#E0C46B]">Primary Biomass Logistics & Supply Dispatch Region</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#F7F1E4] p-6 rounded-2xl border border-[#B78A2D]/30 space-y-3">
            <ShieldCheck className="w-8 h-8 text-[#564D2D]" />
            <h3 className="text-lg font-bold text-[#564D2D] font-serif-heading">Quality Specification</h3>
            <p className="text-xs text-[#68736C] leading-relaxed">
              We ensure supplied biomass pellets and briquettes conform to agreed calorific, moisture, and density standards.
            </p>
          </div>

          <div className="bg-[#F7F1E4] p-6 rounded-2xl border border-[#B78A2D]/30 space-y-3">
            <Truck className="w-8 h-8 text-[#564D2D]" />
            <h3 className="text-lg font-bold text-[#564D2D] font-serif-heading">Logistics Planning</h3>
            <p className="text-xs text-[#68736C] leading-relaxed">
              Strategic transport coordination ensuring steady supply flow for continuous plant boiler operation.
            </p>
          </div>

          <div className="bg-[#F7F1E4] p-6 rounded-2xl border border-[#B78A2D]/30 space-y-3">
            <Factory className="w-8 h-8 text-[#564D2D]" />
            <h3 className="text-lg font-bold text-[#564D2D] font-serif-heading">Industrial Focus</h3>
            <p className="text-xs text-[#68736C] leading-relaxed">
              Dedicated B2B services serving manufacturing, textiles, agro-processing, and thermal energy plants.
            </p>
          </div>
        </div>

        {/* Verified Client Testimonials */}
        <TestimonialsSection onOpenQuoteModal={onOpenQuoteModal} />

      </div>
    </main>
  );
}
