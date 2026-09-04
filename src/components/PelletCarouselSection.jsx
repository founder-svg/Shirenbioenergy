import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Flame, ChevronRight, Play, Pause, Eye } from 'lucide-react';

import woodPellets from '../assets/images/wood_pellets.jpg';
import groundnutPellets from '../assets/images/groundnut_pellets.jpg';
import agrowastePellets from '../assets/images/agrowaste_pellets.jpg';
import sawdustPellets from '../assets/images/sawdust_pellets.jpg';
import briquettesImg from '../assets/images/briquettes.jpg';
import briquettesClientImg from '../assets/images/briquettes-client.jpg';
import biomassFuelProducts from '../assets/images/biomass_fuel_products.jpg';

export default function PelletCarouselSection({ onOpenQuoteModal }) {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [isPaused, setIsPaused] = useState(false);
  const [speed, setSpeed] = useState(55); // 55s slow & readable right-to-left continuous slide

  const productsList = [
    {
      id: 'wood-8mm',
      category: 'WOOD PELLETS',
      name: 'Eucalyptus & Hardwood Pellets',
      size: '6mm – 8mm',
      gcv: '4250 – 4550 kcal/kg',
      ash: '< 2.2%',
      moisture: '< 7.5%',
      image: woodPellets,
      desc: 'Premium high-density wood bio-pellets engineered for automatic stoker boilers & dyeing units.',
      link: '/products/pellets',
      badge: 'POPULAR CHOICE'
    },
    {
      id: 'groundnut-10mm',
      category: 'AGRO PELLETS',
      name: 'Groundnut Shell Bio Pellets',
      size: '8mm – 10mm',
      gcv: '4100 – 4350 kcal/kg',
      ash: '< 4.5%',
      moisture: '< 8.5%',
      image: groundnutPellets,
      desc: 'High calorific agro-biomass fuel widely utilized in ceramic kilns & chemical plants in Gujarat.',
      link: '/products/pellets',
      badge: 'GUJARAT FAVORITE'
    },
    {
      id: 'agrowaste-8mm',
      category: 'AGRO PELLETS',
      name: 'Agro Waste & Crop Husk Pellets',
      size: '8mm – 12mm',
      gcv: '3950 – 4200 kcal/kg',
      ash: '< 5.8%',
      moisture: '< 9.5%',
      image: agrowastePellets,
      desc: 'Cost-effective sustainable fuel derived from agricultural residue for industrial boilers & kilns.',
      link: '/products/pellets',
      badge: 'ECO SAVER'
    },
    {
      id: 'sawdust-premium',
      category: 'WOOD PELLETS',
      name: 'Pine & Sawdust Clean Pellets',
      size: '6mm',
      gcv: '4350 – 4600 kcal/kg',
      ash: '< 1.5%',
      moisture: '< 6.0%',
      image: sawdustPellets,
      desc: 'Ultra-low ash sawdust pellets suitable for food-grade thermal processing & pharma plants.',
      link: '/products/pellets',
      badge: 'ULTRA LOW ASH'
    },
    {
      id: 'briquettes-70mm',
      category: 'BRIQUETTES',
      name: 'Commercial Biomass Briquettes',
      size: '70mm Diameter',
      gcv: '4150 – 4450 kcal/kg',
      ash: '< 4.8%',
      moisture: '< 8.0%',
      image: briquettesImg,
      desc: 'Cylindrical solid biofuel blocks designed for high thermal efficiency & long burn retention in boilers.',
      link: '/products/briquettes',
      badge: 'LONG BURN'
    },
    {
      id: 'briquettes-90mm',
      category: 'BRIQUETTES',
      name: 'Industrial Heavy Briquettes',
      size: '90mm Diameter',
      gcv: '4000 – 4300 kcal/kg',
      ash: '< 5.2%',
      moisture: '< 9.0%',
      image: briquettesClientImg,
      desc: 'Heavy-duty biomass fuel blocks ideal for manual grate furnaces, foundries & power plants.',
      link: '/products/briquettes',
      badge: 'HEAVY DUTY'
    },
    {
      id: 'jumbo-sacks',
      category: 'BULK PACKAGING',
      name: '1000KG Jumbo Sack Bulk Pellets',
      size: 'Custom Formulations',
      gcv: '4200+ kcal/kg Grade',
      ash: '< 3.0%',
      moisture: '< 8.0%',
      image: biomassFuelProducts,
      desc: 'Moisture-sealed industrial 1-Ton bulk bags ready for immediate truck dispatch from Gandhidham.',
      link: '/products/pellets',
      badge: 'BULK LOGISTICS'
    }
  ];

  const baseFiltered = activeCategory === 'ALL' 
    ? productsList 
    : productsList.filter(p => p.category === activeCategory);

  // Duplicate items array to ensure 100% continuous seamless loop
  const displayItems = [...baseFiltered, ...baseFiltered];

  return (
    <section className="py-20 lg:py-28 bg-[#4A4226] text-white relative overflow-hidden border-y border-[#B78A2D]/40" id="product-slider">
      {/* Background Lighting Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#C4B78E]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#243A5E]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title & Nav Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6 text-left">
          <div className="max-w-2xl">
            <span className="text-xs font-extrabold tracking-widest text-[#E0C46B] uppercase bg-[#564D2D] px-3.5 py-1 rounded-full border border-[#B78A2D]/50 inline-flex items-center gap-2 mb-3 shadow-sm">
              <Flame className="w-3.5 h-3.5 text-[#E0C46B] animate-pulse" />
              <span>CONTINUOUS CAROUSEL SLIDER (RTL)</span>
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif-heading text-[#FFFDF7] tracking-tight leading-tight">
              EXPLORE OUR BIOMASS FUELS IN MOTION
            </h2>
            <p className="text-xs sm:text-sm text-[#E6DFC7] mt-3 leading-relaxed">
              Hover over any card to pause sliding and inspect detailed GCV, ash content, and moisture parameters.
            </p>
          </div>

          {/* Interactive Play/Pause & Speed Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className={`px-4 py-2.5 rounded-full text-xs font-extrabold tracking-wider border transition-all flex items-center gap-2 shadow-md ${
                isPaused 
                  ? 'bg-[#243A5E] text-[#E0C46B] border-[#E0C46B]' 
                  : 'bg-[#564D2D] text-[#FFFDF7] border-[#B78A2D]/60 hover:bg-[#243A5E]'
              }`}
            >
              {isPaused ? <Play className="w-3.5 h-3.5 fill-current" /> : <Pause className="w-3.5 h-3.5 fill-current" />}
              <span>{isPaused ? 'RESUME SLIDE' : 'PAUSE ON READ'}</span>
            </button>

            {/* Speed Toggles */}
            <div className="hidden sm:flex items-center bg-[#564D2D] rounded-full p-1 border border-[#B78A2D]/40 text-[11px] font-bold">
              <button
                onClick={() => setSpeed(70)}
                className={`px-3 py-1 rounded-full transition-all ${speed === 70 ? 'bg-[#243A5E] text-white shadow' : 'text-[#E6DFC7] hover:text-white'}`}
              >
                Slow
              </button>
              <button
                onClick={() => setSpeed(50)}
                className={`px-3 py-1 rounded-full transition-all ${speed === 50 ? 'bg-[#243A5E] text-white shadow' : 'text-[#E6DFC7] hover:text-white'}`}
              >
                Normal
              </button>
            </div>
          </div>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 scrollbar-none text-left">
          {['ALL', 'WOOD PELLETS', 'AGRO PELLETS', 'BRIQUETTES', 'BULK PACKAGING'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-extrabold tracking-wider transition-all whitespace-nowrap border ${
                activeCategory === cat
                  ? 'bg-[#243A5E] text-[#FFFDF7] border-[#E0C46B] shadow-lg scale-105'
                  : 'bg-[#564D2D]/80 text-[#E6DFC7] border-[#B78A2D]/40 hover:bg-[#564D2D] hover:text-white'
              }`}
            >
              {cat === 'ALL' ? 'ALL PRODUCTS' : cat}
            </button>
          ))}
        </div>

        {/* CONTINUOUS AUTO-SLIDING MARQUEE CONTAINER (RIGHT TO LEFT) */}
        <div 
          className="relative overflow-hidden rounded-3xl p-2 bg-[#3D351E]/50 border border-[#B78A2D]/30 shadow-2xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Edge Blur Gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#4A4226] to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#4A4226] to-transparent z-20 pointer-events-none" />

          {/* Marquee Track Container */}
          <div 
            className={`product-marquee-track py-4 text-left ${isPaused ? 'is-paused' : ''}`}
            style={{ animationDuration: `${speed}s` }}
          >
            {displayItems.map((product, idx) => (
              <div
                key={`${product.id}-${idx}`}
                className="w-[300px] sm:w-[340px] lg:w-[360px] shrink-0 mx-3 bg-[#FFFDF7] rounded-3xl overflow-hidden border-2 border-[#B78A2D]/50 hover:border-[#E0C46B] shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Image Box with Badge */}
                  <div className="relative h-56 bg-[#3D351E] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-95"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#3D351E] via-transparent to-transparent opacity-85" />
                    
                    {/* Top Badge */}
                    <div className="absolute top-3 left-3 bg-[#243A5E]/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-extrabold text-[#E0C46B] border border-[#E0C46B]/40 uppercase tracking-wider shadow">
                      {product.badge}
                    </div>
                    
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                      <span className="text-[11px] font-bold text-[#E0C46B] bg-[#4A4226]/90 px-2.5 py-0.5 rounded border border-[#B78A2D]/40">
                        Size: {product.size}
                      </span>
                      <span className="text-[11px] font-bold text-white bg-[#564D2D]/90 px-2.5 py-0.5 rounded border border-[#B78A2D]/40">
                        GCV: {product.gcv}
                      </span>
                    </div>
                  </div>

                  {/* Card Info Content */}
                  <div className="p-6 space-y-3.5">
                    <h3 className="text-xl font-extrabold font-serif-heading text-[#2C2718] group-hover:text-[#243A5E] transition-colors leading-snug">
                      {product.name}
                    </h3>
                    
                    <p className="text-xs text-[#4C432A] leading-relaxed font-medium">
                      {product.desc}
                    </p>

                    {/* Specs Bullet Grid */}
                    <div className="grid grid-cols-2 gap-2 bg-[#F7F1E4] p-3 rounded-2xl border border-[#E2DAC6]">
                      <div className="text-[11px]">
                        <span className="text-[#4C432A] block text-[10px] font-bold uppercase">Ash Content</span>
                        <span className="font-extrabold text-[#2C2718]">{product.ash}</span>
                      </div>
                      <div className="text-[11px]">
                        <span className="text-[#4C432A] block text-[10px] font-bold uppercase">Moisture Level</span>
                        <span className="font-extrabold text-[#2C2718]">{product.moisture}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons Footer */}
                <div className="p-6 pt-0 flex items-center justify-between gap-3">
                  <Link
                    to={product.link}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#4A4226] text-[#FFFDF7] hover:bg-[#243A5E] px-4 py-3 rounded-xl text-xs font-extrabold tracking-wider transition-all border border-[#B78A2D]/40"
                  >
                    <span>VIEW DETAILS</span>
                    <ChevronRight className="w-4 h-4 text-[#E0C46B]" />
                  </Link>

                  <button
                    onClick={() => onOpenQuoteModal(product.name)}
                    className="inline-flex items-center justify-center gap-1 bg-[#243A5E] hover:bg-[#564D2D] text-white px-4 py-3 rounded-xl text-xs font-extrabold tracking-wider transition-all shadow-md border border-[#E0C46B]/40"
                  >
                    <span>GET PRICE</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Hint Banner */}
        <div className="mt-8 text-center text-xs text-[#E6DFC7] font-semibold flex items-center justify-center gap-2">
          <Eye className="w-4 h-4 text-[#E0C46B]" />
          <span>Tip: Move cursor over any card to freeze sliding and read full specs.</span>
        </div>

      </div>
    </section>
  );
}
