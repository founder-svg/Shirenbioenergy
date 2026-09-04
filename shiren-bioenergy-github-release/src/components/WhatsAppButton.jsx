import React, { useState, useEffect } from 'react';
import { X, PhoneCall, ChevronRight } from 'lucide-react';
import logoImg from '../assets/images/logo.png';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    // Show teaser popup notification after 2.5 seconds
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const phoneNumber = '919409396503';

  const quickMessages = [
    {
      label: 'Biomass Pellets Quote',
      text: 'Hello Shiren Bioenergy, I would like to enquire about Biomass Pellets pricing and bulk supply availability.'
    },
    {
      label: 'Biomass Briquettes Quote',
      text: 'Hello Shiren Bioenergy, I am interested in purchasing Biomass Briquettes for industrial boiler operations.'
    },
    {
      label: 'Industrial Fuel Advisory',
      text: 'Hello Shiren Bioenergy, I would like to consult regarding fuel conversion and calorific specifications for our plant.'
    }
  ];

  const getWhatsAppUrl = (customText) => {
    const text = encodeURIComponent(
      customText || 'Hello Shiren Bioenergy, I am interested in biomass fuel supply. Please provide more information.'
    );
    return `https://wa.me/${phoneNumber}?text=${text}`;
  };

  return (
    <div className="fixed bottom-20 right-5 sm:bottom-8 sm:right-8 z-50 flex flex-col items-end">
      
      {/* Pop-up Chat Card Box */}
      {isOpen && (
        <div className="mb-4 w-[310px] sm:w-[360px] bg-[#FFFDF7] rounded-3xl shadow-2xl border-2 border-[#B78A2D]/60 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-[#075E54] to-[#128C7E] p-4 text-white flex items-center justify-between shadow-md">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white p-1 shadow border border-[#E0C46B]">
                  <img 
                    src={logoImg} 
                    alt="Shiren Bioenergy" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#25D366] border-2 border-white rounded-full" />
              </div>
              <div>
                <h4 className="font-extrabold text-sm tracking-wide text-white leading-tight">
                  Shiren Bioenergy
                </h4>
                <p className="text-[10.5px] text-[#E0C46B] font-semibold flex items-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                  Typically replies in minutes
                </p>
              </div>
            </div>
            
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white hover:bg-white/10 p-1.5 rounded-full transition-colors"
              aria-label="Close Chat Window"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-[#E5DDD5]/40 space-y-3 text-left max-h-[380px] overflow-y-auto">
            <div className="text-[10px] text-center font-bold text-[#68736C] uppercase tracking-wider my-1">
              OFFICIAL INDUSTRIAL WhatsApp ADVISORY
            </div>

            {/* Welcome Bubble */}
            <div className="bg-white p-3.5 rounded-2xl rounded-tl-none shadow-sm border border-gray-200/80 max-w-[90%] space-y-2">
              <p className="text-xs text-[#564D2D] font-semibold leading-relaxed">
                Hello! 👋 Welcome to <strong className="text-[#564D2D]">Shiren Bioenergy</strong>.
              </p>
              <p className="text-xs text-[#4C432A] leading-relaxed font-medium">
                We specialize in bulk supply of high-calorific <strong className="text-[#564D2D]">Biomass Pellets & Briquettes</strong> across Gujarat and India.
              </p>
              <p className="text-[11px] text-[#B78A2D] font-extrabold pt-1">
                How can our fuel advisory team assist you today?
              </p>
              <span className="text-[9px] text-gray-400 block text-right">Just now</span>
            </div>

            {/* Quick Action Options */}
            <div className="space-y-2 pt-2">
              <span className="text-[10.5px] font-extrabold text-[#564D2D] uppercase tracking-wider block px-1">
                Popular Inquiries:
              </span>

              {quickMessages.map((msg, index) => (
                <a
                  key={index}
                  href={getWhatsAppUrl(msg.text)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-2.5 bg-white hover:bg-[#25D366]/10 rounded-xl border border-[#B78A2D]/30 hover:border-[#25D366] transition-all text-left group shadow-xs"
                >
                  <span className="text-xs font-bold text-[#564D2D] group-hover:text-[#075E54]">
                    {msg.label}
                  </span>
                  <ChevronRight className="w-4 h-4 text-[#B78A2D] group-hover:text-[#25D366] group-hover:translate-x-1 transition-transform" />
                </a>
              ))}
            </div>

            {/* Phone Call Alternative */}
            <div className="pt-2">
              <a
                href="tel:+919409396503"
                className="w-full flex items-center justify-center gap-2 p-2.5 bg-[#564D2D] hover:bg-[#6B5D38] text-white rounded-xl text-xs font-extrabold border border-[#B78A2D] shadow-sm transition-all"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#E0C46B]" />
                <span>Call Directly: +91 94093 96503</span>
              </a>
            </div>
          </div>

          {/* Footer Action */}
          <div className="p-3 bg-[#FFFDF7] border-t border-[#E2DAC6] text-center">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white py-3 px-4 rounded-xl font-extrabold text-xs uppercase tracking-wider shadow-md transition-all"
            >
              {/* Official WhatsApp Logo SVG */}
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>Start Live Chat on WhatsApp</span>
            </a>
          </div>

        </div>
      )}

      {/* Floating Teaser Notification Badge */}
      {!isOpen && showNotification && (
        <div 
          onClick={() => {
            setIsOpen(true);
            setShowNotification(false);
          }}
          className="mb-3 cursor-pointer bg-[#FFFDF7] hover:bg-white text-[#564D2D] px-4 py-2.5 rounded-2xl shadow-xl border-2 border-[#25D366] flex items-center gap-2.5 animate-bounce transition-all duration-300 max-w-[280px]"
        >
          <div className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-sm">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
            </svg>
          </div>
          <div className="text-left">
            <span className="text-[11px] font-extrabold text-[#564D2D] block leading-tight">
              Contact for More Information!
            </span>
            <span className="text-[9.5px] text-[#B78A2D] font-bold block">
              Click to chat with Shiren Bioenergy
            </span>
          </div>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setShowNotification(false);
            }}
            className="text-gray-400 hover:text-gray-600 p-0.5"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main Floating WhatsApp Button */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setShowNotification(false);
        }}
        className="bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 sm:p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white flex items-center justify-center group relative"
        aria-label="Chat on WhatsApp"
        title="Contact Shiren Bioenergy on WhatsApp"
      >
        {/* Official WhatsApp Logo SVG (Replaced generic speech bubble) */}
        {isOpen ? (
          <X className="w-7 h-7 text-white" />
        ) : (
          <svg className="w-7 h-7 fill-current text-white" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
        )}

        {/* Pulse Ring */}
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white animate-ping" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white" />

        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-extrabold tracking-wider pl-0 group-hover:pl-2">
          WHATSAPP US
        </span>
      </button>

    </div>
  );
}
