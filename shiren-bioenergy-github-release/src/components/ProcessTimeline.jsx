import React from 'react';
import { FileSearch, SlidersHorizontal, Truck, CheckCircle, RefreshCw } from 'lucide-react';

export default function ProcessTimeline() {
  const steps = [
    {
      num: '01',
      title: 'REQUIREMENT',
      desc: 'Understand product, quantity, application, location & delivery requirements.',
      icon: FileSearch,
    },
    {
      num: '02',
      title: 'PRODUCT MATCHING',
      desc: 'Coordinate the right biomass fuel as per your requirements.',
      icon: SlidersHorizontal,
    },
    {
      num: '03',
      title: 'SUPPLY PLANNING',
      desc: 'Confirm quantity, loading, transport & delivery schedule.',
      icon: Truck,
    },
    {
      num: '04',
      title: 'DELIVERY',
      desc: 'Dispatch and deliver to the agreed destination.',
      icon: CheckCircle,
    },
    {
      num: '05',
      title: 'RECURRING SUPPLY',
      desc: 'Support for regular and long-term supply needs.',
      icon: RefreshCw,
    },
  ];

  return (
    <section className="bg-[#F7F1E4] py-16 lg:py-24 border-b border-[#E2DAC6] relative" id="supply-process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#564D2D] font-serif-heading uppercase tracking-wide">
            OUR SUPPLY PROCESS
          </h2>
          <p className="text-base sm:text-lg text-[#68736C] font-medium">
            Requirement → Matching → Planning → Delivery → Partnership
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#564D2D] via-[#B78A2D] to-[#564D2D] mx-auto rounded-full mt-3" />
        </div>

        {/* Horizontal Steps (Desktop) */}
        <div className="hidden lg:block relative mb-8">
          <div className="absolute top-7 left-12 right-12 h-0.5 border-t-2 border-dashed border-[#B78A2D]/50 z-0" />

          <div className="grid grid-cols-5 gap-4 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="flex flex-col items-center text-center group">
                  <div className="w-14 h-14 rounded-full bg-[#564D2D] text-[#E0C46B] border-2 border-[#B78A2D] flex items-center justify-center font-extrabold text-sm mb-4 shadow-md group-hover:scale-110 transition-transform">
                    {step.num}
                  </div>

                  <div className="bg-[#FFFDF7] p-5 rounded-2xl border border-[#B78A2D]/30 shadow-sm group-hover:shadow-md transition-all duration-300 w-full min-h-[190px] flex flex-col justify-between">
                    <div>
                      <div className="w-8 h-8 bg-[#564D2D]/10 text-[#564D2D] rounded-lg flex items-center justify-center mx-auto mb-2.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-xs font-extrabold text-[#564D2D] mb-1.5 font-serif-heading uppercase tracking-wider">
                        {step.title}
                      </h3>
                      <p className="text-[11px] text-[#68736C] leading-relaxed font-medium">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Vertical Steps (Mobile) */}
        <div className="lg:hidden relative space-y-4 text-left">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="bg-[#FFFDF7] p-4 rounded-2xl border border-[#B78A2D]/30 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#564D2D] text-[#E0C46B] font-extrabold text-xs flex items-center justify-center shrink-0 border border-[#B78A2D]">
                  {step.num}
                </div>
                <div>
                  <div className="flex items-center gap-1.5 mb-1">
                    <Icon className="w-4 h-4 text-[#564D2D]" />
                    <h3 className="text-xs font-extrabold text-[#564D2D] font-serif-heading uppercase tracking-wider">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[#68736C] leading-relaxed font-medium">
                    {step.desc}
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
