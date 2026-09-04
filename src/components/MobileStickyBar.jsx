import React from 'react';
import { Phone, MessageSquare, Send } from 'lucide-react';

export default function MobileStickyBar({ onOpenQuoteModal }) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#564D2D] border-t-2 border-[#B38A2A] text-white shadow-2xl">
      <div className="grid grid-cols-3 divide-x-2 divide-[#B38A2A]/50 text-center py-2.5">
        
        {/* CALL */}
        <a
          href="tel:+919409396503"
          className="flex flex-col items-center justify-center py-1 active:bg-[#4A4226] transition-colors"
        >
          <Phone className="w-4 h-4 text-[#D1A83A] mb-0.5" />
          <span className="text-[11px] font-extrabold tracking-wider">CALL</span>
        </a>

        {/* WHATSAPP */}
        <a
          href="https://wa.me/919409396503?text=Hello%20Shiren%20Bioenergy%2C%20I%20am%20interested%20in%20biomass%20fuel%20supply.%20I%20would%20like%20to%20discuss%20my%20requirement."
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1 active:bg-[#4A4226] transition-colors"
        >
          <MessageSquare className="w-4 h-4 text-[#D1A83A] mb-0.5" />
          <span className="text-[11px] font-extrabold tracking-wider">WHATSAPP</span>
        </a>

        {/* GET QUOTE */}
        <button
          onClick={onOpenQuoteModal}
          className="flex flex-col items-center justify-center py-1 active:bg-[#4A4226] transition-colors"
        >
          <Send className="w-4 h-4 text-[#D1A83A] mb-0.5" />
          <span className="text-[11px] font-extrabold tracking-wider">GET QUOTE</span>
        </button>

      </div>
    </div>
  );
}
