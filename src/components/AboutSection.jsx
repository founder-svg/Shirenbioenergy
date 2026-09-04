import React from 'react';
import { MapPin, CheckCircle2, ArrowRight, ShieldCheck, Flame, Truck, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { boilerData } from '../assets/imageData.js';

export default function AboutSection() {
  return (
    <section className="bg-[#FFFDF7] py-16 lg:py-24 border-b border-[#E2DAC6] relative overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 text-[#B78A2D] font-extrabold text-xs uppercase tracking-widest bg-[#564D2D]/10 px-3.5 py-1.5 rounded-md border border-[#B78A2D]/30">
              <ShieldCheck className="w-4 h-4 text-[#B78A2D]" />
              <span>DEPENDABLE BIOMASS FUEL PARTNER</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#564D2D] font-serif-heading leading-tight">
              PROVEN BIOMASS FUEL SUPPLY SOLUTIONS
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#302A1A] leading-relaxed">
              <p className="font-medium text-[#564D2D] text-base sm:text-lg">
                Shiren Bioenergy is a supply-focused biomass fuel business based in <strong>Gandhidham, Kutch, Gujarat</strong>. We specialize in sourcing and supplying high-calorific <strong>Biomass Pellets</strong> and <strong>Biomass Briquettes</strong> to industries across Gujarat & neighboring belts.
              </p>
              <p className="text-[#4C432A]">
                Our focus is on reliable supply, customer satisfaction, and long-term partnerships. From understanding product requirements and calorific specifications to coordinating bulk logistics and delivery planning, our objective is to make biomass fuel procurement straightforward, efficient, and dependable.
              </p>
            </div>

            {/* Feature Badges Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-center gap-3 bg-[#F7F1E4] p-3.5 rounded-xl border border-[#B78A2D]/20 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-[#564D2D] shrink-0" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#564D2D]">Dependable Supply Coordination</h4>
                  <p className="text-[11px] text-[#4C432A]">Consistent batch-to-batch quality</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-[#F7F1E4] p-3.5 rounded-xl border border-[#B78A2D]/20 shadow-sm">
                <Flame className="w-5 h-5 text-[#B78A2D] shrink-0" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#564D2D]">High Calorific Value Fuel</h4>
                  <p className="text-[11px] text-[#4C432A]">4000 – 4500 kcal/kg GCV range</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-[#F7F1E4] p-3.5 rounded-xl border border-[#B78A2D]/20 shadow-sm">
                <Truck className="w-5 h-5 text-[#564D2D] shrink-0" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#564D2D]">Scheduled Bulk Logistics</h4>
                  <p className="text-[11px] text-[#4C432A]">On-time industrial dispatch</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-[#F7F1E4] p-3.5 rounded-xl border border-[#B78A2D]/20 shadow-sm">
                <Award className="w-5 h-5 text-[#B78A2D] shrink-0" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#564D2D]">Long-term Contracts</h4>
                  <p className="text-[11px] text-[#4C432A]">Stable annual pricing models</p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-[#564D2D] text-[#FFFDF7] hover:bg-[#6B5D38] px-7 py-3.5 rounded-full text-xs font-extrabold tracking-wider shadow-md hover:shadow-lg transition-all border border-[#B78A2D]"
              >
                <span>LEARN MORE ABOUT US</span>
                <ArrowRight className="w-4 h-4 text-[#E0C46B]" />
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Image Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl p-3 bg-gradient-to-b from-[#B78A2D] via-[#564D2D] to-[#4A4226] shadow-2xl">
              <div className="relative rounded-2xl overflow-hidden bg-[#4A4226] aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src={boilerData}
                  alt="Shiren Bioenergy Industrial Plant & Boiler Supply"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = boilerData;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4A4226] via-transparent to-transparent opacity-85" />
                
                {/* Embedded Stats Overlay Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#4A4226]/95 backdrop-blur-md p-4 rounded-xl border border-[#B78A2D]/60 text-left text-white shadow-xl">
                  <div className="flex items-center justify-between border-b border-[#B78A2D]/30 pb-2.5 mb-2.5">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#E0C46B] shrink-0" />
                      <div>
                        <h4 className="text-xs font-extrabold text-[#FFFDF7]">Gandhidham, Kutch, Gujarat</h4>
                        <p className="text-[10px] text-[#E0C46B]">Strategic Port & Industrial Corridor</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold bg-[#B78A2D]/30 text-[#E0C46B] px-2 py-0.5 rounded border border-[#B78A2D]/40">
                      BULK SUPPLY
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                    <div className="bg-[#564D2D]/40 p-1.5 rounded">
                      <span className="block font-extrabold text-[#E0C46B]">4200+</span>
                      <span className="text-gray-300 text-[9px]">kcal/kg GCV</span>
                    </div>
                    <div className="bg-[#564D2D]/40 p-1.5 rounded">
                      <span className="block font-extrabold text-[#E0C46B]">&lt; 8%</span>
                      <span className="text-gray-300 text-[9px]">Moisture</span>
                    </div>
                    <div className="bg-[#564D2D]/40 p-1.5 rounded">
                      <span className="block font-extrabold text-[#E0C46B]">&lt; 5%</span>
                      <span className="text-gray-300 text-[9px]">Ash Content</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
