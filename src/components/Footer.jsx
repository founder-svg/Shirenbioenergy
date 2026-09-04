import React from 'react';
import Logo from './Logo';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';

export default function Footer({ onOpenQuoteModal }) {
  return (
    <footer className="bg-[#3D351E] text-[#FFFDF7] pt-16 pb-24 lg:pb-16 relative overflow-hidden border-t-2 border-[#B78A2D]/50" id="contact">
      {/* Background Subtle Mesh Glow */}
      <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-[#564D2D]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        
        {/* Main CTA Section (Matching User Screenshot Page 2 Bottom) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Let's Talk Biomass & Direct Contacts */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-serif-heading gold-gradient-text tracking-tight">
                LET'S TALK BIOMASS.
              </h2>
              <p className="text-xs sm:text-sm font-bold text-[#E0C46B] uppercase tracking-widest mt-2">
                CONTACT US FOR YOUR NEXT BIOMASS REQUIREMENT
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-xs sm:text-sm">
              <a
                href="tel:+919409396503"
                className="flex items-center gap-3 p-3.5 bg-[#564D2D]/40 rounded-xl border border-[#B78A2D]/40 hover:border-[#E0C46B] transition-colors"
              >
                <Phone className="w-5 h-5 text-[#E0C46B] shrink-0" />
                <div>
                  <span className="text-[10px] text-[#E0C46B] uppercase tracking-wider block font-bold">Call / WhatsApp</span>
                  <span className="font-bold text-white">+91 94093 96503</span>
                </div>
              </a>

              <a
                href="mailto:info@shirenbioenergy.com"
                className="flex items-center gap-3 p-3.5 bg-[#564D2D]/40 rounded-xl border border-[#B78A2D]/40 hover:border-[#E0C46B] transition-colors"
              >
                <Mail className="w-5 h-5 text-[#E0C46B] shrink-0" />
                <div>
                  <span className="text-[10px] text-[#E0C46B] uppercase tracking-wider block font-bold">Email Enquiry</span>
                  <span className="font-bold text-white">info@shirenbioenergy.com</span>
                </div>
              </a>

              <div className="flex items-center gap-3 p-3.5 bg-[#564D2D]/40 rounded-xl border border-[#B78A2D]/40">
                <MapPin className="w-5 h-5 text-[#E0C46B] shrink-0" />
                <div>
                  <span className="text-[10px] text-[#E0C46B] uppercase tracking-wider block font-bold">Location</span>
                  <span className="font-semibold text-[#F7F1E4]">Gandhidham, Kutch, Gujarat – 370201</span>
                </div>
              </div>

              <a
                href="https://www.shirenbioenergy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3.5 bg-[#564D2D]/40 rounded-xl border border-[#B78A2D]/40 hover:border-[#E0C46B] transition-colors"
              >
                <Globe className="w-5 h-5 text-[#E0C46B] shrink-0" />
                <div>
                  <span className="text-[10px] text-[#E0C46B] uppercase tracking-wider block font-bold">Official Website</span>
                  <span className="font-bold text-white">www.shirenbioenergy.com</span>
                </div>
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenQuoteModal}
                className="bg-[#564D2D] hover:bg-[#6B5D38] text-[#FFFDF7] px-8 py-3.5 rounded-full text-xs font-extrabold tracking-widest uppercase border border-[#B78A2D] shadow-lg hover:shadow-xl transition-all"
              >
                REQUEST BULK BIOMASS QUOTATION
              </button>
            </div>
          </div>

          {/* Right Column: Large Shiren Bioenergy Brand Logo (Matching Screenshot Page 2 Bottom Right) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="bg-[#564D2D]/20 p-8 rounded-3xl border border-[#B78A2D]/30 shadow-2xl backdrop-blur-md">
              <Logo variant="light" size="large" showTagline={true} />
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[#B78A2D]/50 to-transparent mb-8" />

        {/* Bottom Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-[#F7F1E4]/70 space-y-2 sm:space-y-0">
          <p>© {new Date().getFullYear()} Shiren Bioenergy. All rights reserved.</p>
          <p className="font-medium text-[#E0C46B]">
            Biomass Fuel Supply Solutions • Gandhidham, Kutch, Gujarat – 370201
          </p>
        </div>

      </div>
    </footer>
  );
}
