import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'What products do you supply?',
      a: 'Shiren Bioenergy specializes in sourcing and supplying Biomass Pellets and Biomass Briquettes for industrial boilers, furnaces, and commercial heating applications.',
    },
    {
      q: 'Do you handle bulk requirements?',
      a: 'Yes, we specialize in bulk supply coordination and planned recurring deliveries to plant sites, subject to order volume and delivery logistics.',
    },
    {
      q: 'Can biomass fuel be used for industrial applications?',
      a: 'Yes, where the boiler, kiln, furnace, or heating equipment and fuel feeding systems are compatible with densified biomass pellets or briquettes.',
    },
    {
      q: 'Can recurring monthly supply be arranged?',
      a: 'Yes, recurring monthly or periodic supply arrangements can be planned based on your plant consumption, storage capacity, and delivery schedules.',
    },
    {
      q: 'Can product specifications be provided?',
      a: 'Yes, relevant product specifications (such as calorific value, moisture, and ash content) can be confirmed for the offered batch or requirement.',
    },
  ];

  return (
    <section className="bg-[#F7F1E4] py-16 lg:py-24 border-b border-[#E2DAC6] relative" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#564D2D] font-serif-heading uppercase tracking-wide">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-base text-[#68736C] font-medium">
            Common questions regarding biomass fuel supply, bulk deliveries, and specifications.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#564D2D] via-[#B78A2D] to-[#564D2D] mx-auto rounded-full mt-3" />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#FFFDF7] rounded-2xl border border-[#B78A2D]/30 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between font-extrabold text-[#564D2D] font-serif-heading text-base sm:text-lg focus:outline-none"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#B78A2D] shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown className={`w-5 h-5 text-[#B78A2D] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-[#302A1A] leading-relaxed border-t border-[#E2DAC6]/60 bg-[#F7F1E4]/40 font-medium">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
