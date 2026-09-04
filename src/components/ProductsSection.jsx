import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Flame, Layers, CheckCircle2, Leaf } from 'lucide-react';
import { pelletsData, briquettesData, bannerData } from '../assets/imageData.js';
import { 
  woodPelletsData, 
  groundnutPelletsData, 
  agrowastePelletsData, 
  sawdustPelletsData
} from '../assets/pelletTypesData.js';
import briquettesImg from '../assets/images/briquettes.jpg';
import biomassSolutionsBanner from '../assets/images/biomass-solutions-banner.jpg';

export default function ProductsSection({ onOpenQuoteModal }) {
  const products = [
    {
      id: 'pellets',
      title: 'BIOMASS PELLETS',
      subtitle: 'Sustainable Fuel. Better Future.',
      image: pelletsData,
      fallbackImg: woodPelletsData,
      icon: Flame,
      description: 'Compact, high-density biomass fuel engineered for automated industrial boilers, thermal systems, and commercial heating.',
      specs: ['Diameter: 6mm – 12mm', 'GCV: 4000 – 4500 kcal/kg', 'Moisture: < 8%', 'Ash Content: < 4%'],
      detailLink: '/products/pellets',
    },
    {
      id: 'briquettes',
      title: 'BIOMASS BRIQUETTES',
      subtitle: 'Sustainable Fuel. Better Future.',
      image: briquettesData,
      fallbackImg: briquettesImg,
      icon: Layers,
      description: 'Compressed cylindrical solid biomass fuel blocks designed for high performance, long burn time, and efficient boiler combustion.',
      specs: ['Diameter: 70mm – 90mm', 'GCV: 4100 – 4500 kcal/kg', 'Moisture: < 10%', 'Ash Content: < 5%'],
      detailLink: '/products/briquettes',
    },
  ];

  const pelletTypesPreview = [
    { name: 'WOOD PELLETS', img: woodPelletsData, desc: 'High density hardwood & softwood fuel' },
    { name: 'GROUNDNUT SHELL PELLETS', img: groundnutPelletsData, desc: 'Eco agro-biomass fuel popular in Gujarat' },
    { name: 'AGRO WASTE PELLETS', img: agrowastePelletsData, desc: 'Recycled crop residue bio-fuel' },
    { name: 'SAWDUST PELLETS', img: sawdustPelletsData, desc: 'Refined sawdust & wood shavings fuel' },
  ];

  return (
    <section className="bg-[#F7F1E4] py-16 lg:py-24 border-b border-[#E2DAC6] relative" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 text-[#B78A2D] font-extrabold text-[11px] uppercase tracking-widest bg-[#564D2D]/10 px-3.5 py-1.5 rounded border border-[#B78A2D]/30">
            <Leaf className="w-3.5 h-3.5 text-[#B78A2D]" />
            <span>ECO-FRIENDLY RENEWABLE ENERGY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#564D2D] font-serif-heading uppercase tracking-wide">
            BIOMASS SOLUTIONS
          </h2>
          <p className="text-base sm:text-lg text-[#4C432A] font-medium">
            Sustainable Fuel. Better Future. High-quality pellets and briquettes for industrial thermal systems.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#564D2D] via-[#B78A2D] to-[#564D2D] mx-auto rounded-full mt-3" />
        </div>

        {/* Client Official Biomass Solutions Banner Showcase */}
        {bannerData && (
          <div className="rounded-3xl overflow-hidden border border-[#B78A2D]/40 shadow-xl bg-[#FFFDF7] p-2 sm:p-4">
            <div className="relative rounded-2xl overflow-hidden aspect-[16/7] sm:aspect-[21/8] bg-[#4A4226]">
              <img 
                src={bannerData} 
                alt="Shiren Bioenergy Biomass Solutions - Pellets & Briquettes" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = bannerData || biomassSolutionsBanner;
                }}
              />
            </div>
          </div>
        )}

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <div
                key={product.id}
                className="bg-[#FFFDF7] rounded-3xl border border-[#B78A2D]/35 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 grid grid-cols-1 sm:grid-cols-12 text-left group"
              >
                {/* Image Side */}
                <div className="sm:col-span-5 relative min-h-[240px] overflow-hidden bg-[#4A4226]">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95 contrast-105"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = product.fallbackImg;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4A4226]/70 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 bg-[#564D2D]/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-extrabold text-[#E0C46B] border border-[#B78A2D]/40 uppercase tracking-wider">
                    AUTHENTIC FUEL
                  </div>
                </div>

                {/* Content Side */}
                <div className="sm:col-span-7 p-6 sm:p-7 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#564D2D] text-[#E0C46B] flex items-center justify-center border-2 border-[#B78A2D] shadow-sm shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-extrabold text-[#564D2D] font-serif-heading">
                          {product.title}
                        </h3>
                        <p className="text-[11px] text-[#B78A2D] font-bold uppercase tracking-wider">
                          {product.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-[#4C432A] leading-relaxed font-medium">
                      {product.description}
                    </p>

                    {/* Specs Bullet Grid */}
                    <div className="grid grid-cols-2 gap-1.5 pt-1">
                      {product.specs.map((spec, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-[11px] font-semibold text-[#564D2D]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#B78A2D] shrink-0" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 flex items-center justify-between border-t border-[#E2DAC6]">
                    <Link
                      to={product.detailLink}
                      className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#564D2D] hover:text-[#B78A2D] uppercase tracking-wider transition-colors"
                    >
                      <span>VIEW SPECS</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#B78A2D]" />
                    </Link>

                    <button
                      onClick={() => onOpenQuoteModal(product.title)}
                      className="text-xs font-bold text-[#FFFDF7] bg-[#564D2D] hover:bg-[#6B5D38] px-4 py-2 rounded-full border border-[#B78A2D] shadow-sm transition-all"
                    >
                      Enquire Now
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pellet Types Sub-Grid */}
        <div className="mt-16 bg-[#4A4226] rounded-3xl p-6 sm:p-10 border border-[#B78A2D]/40 text-white shadow-2xl">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-extrabold tracking-widest text-[#E0C46B] uppercase">VARIETY & CUSTOMIZATION</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-serif-heading mt-1 text-[#FFFDF7]">
              EXPLORE OUR BIOMASS PELLET SELECTION
            </h3>
            <p className="text-xs text-[#E6DFC7] mt-2">
              We manufacture and supply custom biomass pellet formulations tailored to boiler specs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pelletTypesPreview.map((item, idx) => (
              <div key={idx} className="bg-[#564D2D] p-4 rounded-2xl border border-[#B78A2D]/30 flex flex-col justify-between hover:border-[#E0C46B] transition-all group">
                <div className="rounded-xl overflow-hidden aspect-[4/3] mb-3 bg-[#4A4226]">
                  <img 
                    src={item.img} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-[#FFFDF7] tracking-wider font-serif-heading">{item.name}</h4>
                  <p className="text-[11px] text-[#E6DFC7] mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
