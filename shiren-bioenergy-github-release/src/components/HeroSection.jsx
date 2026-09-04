import React from 'react';
import { ArrowRight, Phone, Leaf } from 'lucide-react';
import HeroShader from './HeroShader';
import { logoGoldCutoutData } from '../assets/heroWatermarkData.js';

export default function HeroSection({ onOpenQuoteModal }) {
  const scrollToProducts = () => {
    const el = document.getElementById('products');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-[#4A4226] text-white pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden border-b border-[#B78A2D]/30">
      {/* Animated WebGL Shader Background */}
      <HeroShader />

      {/* Ultra-Premium Cutout Client Logo & Text Watermark Graphic on Right */}
      <div className="absolute -right-8 sm:right-4 lg:right-12 top-1/2 -translate-y-1/2 w-[420px] sm:w-[580px] lg:w-[720px] h-auto opacity-35 pointer-events-none z-0 transition-all duration-700">
        <img 
          src={logoGoldCutoutData} 
          alt="Shiren Bioenergy Official Cutout Graphic" 
          className="w-full h-auto object-contain transform rotate-2 hover:scale-105 transition-transform"
          style={{
            mixBlendMode: 'screen',
            maskImage: 'radial-gradient(circle at center, black 55%, transparent 92%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 55%, transparent 92%)',
            filter: 'brightness(1.25) contrast(1.2) drop-shadow(0 0 35px rgba(224,196,107,0.45))'
          }}
          onError={(e) => {
            e.currentTarget.src = logoGoldCutoutData;
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl text-left space-y-6">
          
          {/* Main Serif Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-serif-heading leading-[1.1] text-white">
            <span className="gold-gradient-text block mb-2">POWERING A GREENER</span>
            <span className="text-[#FFFDF7]">TOMORROW.</span>
          </h1>

          {/* Subheading & Product Line */}
          <div className="space-y-3 pt-2">
            <h2 className="text-xl sm:text-2xl font-bold text-[#E0C46B] tracking-wide uppercase">
              BIOMASS FUEL SUPPLY SOLUTIONS
            </h2>
            <p className="text-base sm:text-lg text-[#F7F1E4]/90 font-medium tracking-wide">
              Biomass Pellets &nbsp;|&nbsp; Biomass Briquettes &nbsp;|&nbsp; Bulk Supply
            </p>
            <p className="text-sm sm:text-base text-[#F7F1E4]/80 max-w-xl leading-relaxed pt-1">
              Reliable biomass fuel supply solutions for industrial and commercial requirements, coordinated from Gandhidham, Kutch, Gujarat.
            </p>
          </div>

          {/* Primary & Secondary Action CTAs */}
          <div className="pt-6 flex flex-wrap items-center gap-4">
            <button
              onClick={scrollToProducts}
              className="inline-flex items-center gap-2.5 bg-[#564D2D] hover:bg-[#6B5D38] text-[#FFFDF7] px-7 py-3.5 rounded-full font-bold text-sm tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 border border-[#B78A2D]/60 group"
            >
              <Leaf className="w-4 h-4 text-[#E0C46B]" />
              <span>OUR PRODUCTS</span>
              <ArrowRight className="w-4 h-4 text-[#E0C46B] group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenQuoteModal}
              className="inline-flex items-center gap-2.5 bg-transparent hover:bg-[#564D2D]/40 text-[#FFFDF7] px-7 py-3.5 rounded-full font-bold text-sm tracking-wider shadow-md hover:shadow-lg transition-all duration-300 border border-[#E0C46B]/50"
            >
              <Phone className="w-4 h-4 text-[#E0C46B]" />
              <span>CONTACT US</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
