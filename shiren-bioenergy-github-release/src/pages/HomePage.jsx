import React from 'react';
import HeroSection from '../components/HeroSection';
import TrustStrip from '../components/TrustStrip';
import PelletCarouselSection from '../components/PelletCarouselSection';
import AboutSection from '../components/AboutSection';
import ProductsSection from '../components/ProductsSection';
import FuelSavingsCalculator from '../components/FuelSavingsCalculator';
import LabCertificatesSection from '../components/LabCertificatesSection';
import QualityStrip from '../components/QualityStrip';
import WhyBiomassSection from '../components/WhyBiomassSection';
import IndustriesGrid from '../components/IndustriesGrid';
import ProcessTimeline from '../components/ProcessTimeline';
import ProcurementSection from '../components/ProcurementSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import QuoteSection from '../components/QuoteSection';

export default function HomePage({ onOpenQuoteModal }) {
  return (
    <main className="bg-[#FFFDF7]">
      {/* 1. Hero with WebGL Shader & Gold Watermark */}
      <HeroSection onOpenQuoteModal={onOpenQuoteModal} />
      
      {/* 2. Trust / Value Strip */}
      <TrustStrip />

      {/* 3. Interactive Product Carousel Slider (Matching globalbiomasspellet.com effect & way better!) */}
      <PelletCarouselSection onOpenQuoteModal={onOpenQuoteModal} />

      {/* 4. Interactive B2B Fuel Cost & Savings Calculator */}
      <FuelSavingsCalculator onOpenQuoteModal={onOpenQuoteModal} />
      
      {/* 5. Who We Are & Facility Specs */}
      <AboutSection />
      
      {/* 6. Detailed Products Specs (Biomass Pellets & Briquettes) */}
      <ProductsSection onOpenQuoteModal={onOpenQuoteModal} />

      {/* 7. Certified Lab Test Parameters & NABL Quality Guarantee */}
      <LabCertificatesSection onOpenQuoteModal={onOpenQuoteModal} />

      {/* 8. Quality & Reliability Strip */}
      <QualityStrip />
      
      {/* 9. Why Biomass? (6 Circular Badges) */}
      <WhyBiomassSection />
      
      {/* 10. Industries We Serve (6 Image Grid Cards) */}
      <IndustriesGrid onOpenQuoteModal={onOpenQuoteModal} />
      
      {/* 11. Our Supply Process (5-Step Timeline) */}
      <ProcessTimeline />

      {/* 12. Buyer's Procurement Checklist */}
      <ProcurementSection />

      {/* 13. Client Testimonials (11 Verified Reviews, 4.8 Rating) */}
      <TestimonialsSection onOpenQuoteModal={onOpenQuoteModal} />

      {/* 14. Frequently Asked Questions */}
      <FAQSection />

      {/* 15. B2B Quote & Direct Contact Form */}
      <QuoteSection />
    </main>
  );
}
