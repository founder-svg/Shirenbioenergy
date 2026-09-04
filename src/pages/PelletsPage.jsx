import React from 'react';
import { ArrowRight, Flame, Leaf, Layers, ShieldCheck, AlertCircle } from 'lucide-react';
import TestimonialsSection from '../components/TestimonialsSection';
import { logisticsData } from '../assets/imageData.js';
import { 
  woodPelletsData, 
  groundnutPelletsData, 
  agrowastePelletsData, 
  sawdustPelletsData,
  pelletTypesCardData 
} from '../assets/pelletTypesData.js';

export default function PelletsPage({ onOpenQuoteModal }) {
  const pelletTypes = [
    {
      id: 'wood',
      title: 'WOOD PELLETS',
      subtitle: 'Premium Hardwood & Softwood Densified Fuel',
      image: woodPelletsData,
      gcv: '4200 - 4500 kcal/kg',
      ash: '< 1.5% (Ultra-Low)',
      moisture: '< 8%',
      desc: 'High-density premium wood pellets manufactured from refined timber residues without binders. Offers max heat output and minimal ash buildup for automated industrial boilers.',
      applications: ['Automated Boiler Burners', 'Industrial Steam Plants', 'HVAC Thermal Heating']
    },
    {
      id: 'groundnut',
      title: 'GROUNDNUT SHELL PELLETS',
      subtitle: 'Sustainable Agricultural Biomass Fuel',
      image: groundnutPelletsData,
      gcv: '3900 - 4200 kcal/kg',
      ash: '< 4.5% (Low Ash)',
      moisture: '< 9%',
      desc: 'Eco-friendly biomass fuel produced from compressed groundnut (peanut) shells. Highly popular across Gujarat industrial belts for cost-effective steam generation.',
      applications: ['Textile Dyeing Boilers', 'Brick & Ceramic Kilns', 'Agro Dryer Plants']
    },
    {
      id: 'agrowaste',
      title: 'AGRO WASTE PELLETS',
      subtitle: 'Recycled Crop Residue Bio-Fuel',
      image: agrowastePelletsData,
      gcv: '3800 - 4100 kcal/kg',
      ash: '< 5.5% (Controlled)',
      moisture: '< 10%',
      desc: 'Renwable pellets manufactured from mustard husk, cotton stalk, and agricultural crop residues. Provides reliable, carbon-neutral thermal energy for commercial furnaces.',
      applications: ['Process Heating Systems', 'Co-Firing Power Boilers', 'Food Processing Units']
    },
    {
      id: 'sawdust',
      title: 'SAWDUST PELLETS',
      subtitle: 'Refined Sawdust & Wood Shavings Fuel',
      image: sawdustPelletsData,
      gcv: '4100 - 4400 kcal/kg',
      ash: '< 2.0% (Ultra-Clean)',
      moisture: '< 8%',
      desc: 'Smooth-burning, uniform pellets made from clean virgin sawdust. Highly valued for low maintenance, smooth pneumatic conveyability, and consistent calorific delivery.',
      applications: ['Commercial Steam Generators', 'Thermal Fluid Heaters', 'Laundry & Hotel Boilers']
    }
  ];

  return (
    <main className="bg-[#FFFDF7] pt-10 pb-20 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Top Banner */}
        <div className="bg-[#4A4226] text-white p-8 sm:p-12 rounded-3xl border-2 border-[#B78A2D] shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="text-xs font-extrabold text-[#E0C46B] uppercase tracking-widest bg-[#564D2D] px-3.5 py-1.5 rounded-full border border-[#B78A2D]">
              OFFICIAL PRODUCT RANGE
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-serif-heading leading-tight">
              Biomass Pellets Range
            </h1>
            <p className="text-base sm:text-lg text-[#F7F1E4]/90 leading-relaxed font-medium">
              High Calorific Value • Low Ash • Consistent Quality • Competitive Price • Reliable Supply
            </p>
          </div>
        </div>

        {/* Official Client Flyer Card Showcase */}
        {/* 3-Image Industrial Showcase Gallery Grid */}
        <div className="rounded-3xl overflow-hidden border border-[#B78A2D]/40 shadow-xl bg-[#FFFDF7] p-6 sm:p-8 text-center space-y-4">
          <div className="space-y-1">
            <span className="text-[10.5px] font-extrabold text-[#B78A2D] uppercase tracking-widest">
              OFFICIAL BIOMASS PORTFOLIO
            </span>
            <h3 className="text-2xl font-extrabold text-[#564D2D] font-serif-heading uppercase">
              Shiren Bioenergy Bulk Pellets & Packaging Gallery
            </h3>
            <p className="text-xs text-[#4C432A]">
              Certified Biomass Fuel • Premium Calorific Delivery • Scheduled Dispatch Across Gujarat
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 text-left">
            {/* Image 1: Bulk Sacks & Storage */}
            <div className="group relative rounded-2xl overflow-hidden border-2 border-[#B78A2D]/40 shadow-md bg-[#4A4226]">
              <div className="h-56 overflow-hidden">
                <img 
                  src={pelletTypesCardData} 
                  alt="Bulk Biomass Pellets 1000kg Jumbo Sacks & Briquettes" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#4A4226] via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-3.5 left-4 right-4">
                <span className="text-[10px] font-extrabold text-[#E0C46B] bg-[#564D2D]/90 px-2 py-0.5 rounded border border-[#B78A2D]/40 uppercase tracking-wider">
                  1000KG JUMBO SACKS
                </span>
                <h4 className="text-xs font-bold text-white mt-1.5">Bulk Storage & Packaging</h4>
                <p className="text-[10px] text-[#E6DFC7]">ENplus A1 certified moisture-proof bags</p>
              </div>
            </div>

            {/* Image 2: High Density Wood Pellets */}
            <div className="group relative rounded-2xl overflow-hidden border-2 border-[#B78A2D]/40 shadow-md bg-[#4A4226]">
              <div className="h-56 overflow-hidden">
                <img 
                  src={woodPelletsData} 
                  alt="High Density Wood Pellets 6mm to 12mm" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#4A4226] via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-3.5 left-4 right-4">
                <span className="text-[10px] font-extrabold text-[#E0C46B] bg-[#564D2D]/90 px-2 py-0.5 rounded border border-[#B78A2D]/40 uppercase tracking-wider">
                  4200+ KCAL/KG GCV
                </span>
                <h4 className="text-xs font-bold text-white mt-1.5">High Density Wood Pellets</h4>
                <p className="text-[10px] text-[#E6DFC7]">Uniform 6mm-12mm smooth pneumatic flow</p>
              </div>
            </div>

            {/* Image 3: Gandhidham Truck Logistics */}
            <div className="group relative rounded-2xl overflow-hidden border-2 border-[#B78A2D]/40 shadow-md bg-[#4A4226]">
              <div className="h-56 overflow-hidden">
                <img 
                  src={logisticsData} 
                  alt="Gandhidham Bulk Logistics & Freight Truck Supply" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#4A4226] via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-3.5 left-4 right-4">
                <span className="text-[10px] font-extrabold text-[#E0C46B] bg-[#564D2D]/90 px-2 py-0.5 rounded border border-[#B78A2D]/40 uppercase tracking-wider">
                  GANDHIDHAM HUB
                </span>
                <h4 className="text-xs font-bold text-white mt-1.5">Scheduled Bulk Transport</h4>
                <p className="text-[10px] text-[#E6DFC7]">On-time industrial boiler truck dispatch</p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Types of Pellets Detailed Grid */}
        <div className="space-y-6">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-[11px] font-extrabold text-[#B78A2D] uppercase tracking-widest bg-[#564D2D]/10 px-3 py-1 rounded">
              SELECT THE RIGHT PELLET FUEL
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#564D2D] font-serif-heading uppercase">
              4 TYPES OF BIOMASS PELLETS
            </h2>
            <p className="text-sm sm:text-base text-[#4C432A]">
              Detailed specifications and industrial applications for each pellet type supplied by Shiren Bioenergy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            {pelletTypes.map((item) => (
              <div 
                key={item.id} 
                className="bg-[#FFFDF7] rounded-3xl border border-[#B78A2D]/40 p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-5 group"
              >
                <div className="space-y-4">
                  {/* Image & Title Header */}
                  <div className="flex items-center gap-4 border-b border-[#E2DAC6] pb-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#B78A2D] shadow-md shrink-0 bg-[#4A4226]">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-extrabold text-[#564D2D] font-serif-heading">
                        {item.title}
                      </h3>
                      <p className="text-[11px] text-[#B78A2D] font-bold uppercase tracking-wider mt-0.5">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#4C432A] leading-relaxed font-medium">
                    {item.desc}
                  </p>

                  {/* Spec Badges */}
                  <div className="grid grid-cols-3 gap-2 bg-[#F7F1E4] p-3 rounded-2xl border border-[#B78A2D]/20 text-center text-[10.5px]">
                    <div>
                      <span className="block text-[#68736C] font-bold">GCV</span>
                      <span className="font-extrabold text-[#564D2D]">{item.gcv}</span>
                    </div>
                    <div>
                      <span className="block text-[#68736C] font-bold">ASH</span>
                      <span className="font-extrabold text-[#564D2D]">{item.ash}</span>
                    </div>
                    <div>
                      <span className="block text-[#68736C] font-bold">MOISTURE</span>
                      <span className="font-extrabold text-[#564D2D]">{item.moisture}</span>
                    </div>
                  </div>

                  {/* Applications List */}
                  <div>
                    <h4 className="text-[11px] font-extrabold text-[#564D2D] uppercase tracking-wider mb-2">
                      Suitable Applications:
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {item.applications.map((app, idx) => (
                        <span key={idx} className="bg-[#564D2D]/10 text-[#564D2D] text-[10.5px] font-bold px-2.5 py-1 rounded-md border border-[#564D2D]/20">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onOpenQuoteModal && onOpenQuoteModal(item.title)}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#564D2D] text-white hover:bg-[#6B5D38] py-3 rounded-xl font-bold text-xs uppercase tracking-wider border border-[#B78A2D] shadow-sm transition-all"
                  >
                    <span>ENQUIRE FOR {item.title}</span>
                    <ArrowRight className="w-4 h-4 text-[#E0C46B]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Core Value Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
          <div className="bg-[#F7F1E4] p-4.5 rounded-2xl border border-[#B78A2D]/30 text-center space-y-1.5">
            <ShieldCheck className="w-6 h-6 text-[#564D2D] mx-auto" />
            <h4 className="text-xs font-extrabold text-[#564D2D] uppercase">COST EFFECTIVE</h4>
            <p className="text-[10px] text-[#68736C]">Optimized fuel cost per million kcal</p>
          </div>

          <div className="bg-[#F7F1E4] p-4.5 rounded-2xl border border-[#B78A2D]/30 text-center space-y-1.5">
            <Flame className="w-6 h-6 text-[#B78A2D] mx-auto" />
            <h4 className="text-xs font-extrabold text-[#564D2D] uppercase">HIGH ENERGY VALUE</h4>
            <p className="text-[10px] text-[#68736C]">Max heat output for industrial boilers</p>
          </div>

          <div className="bg-[#F7F1E4] p-4.5 rounded-2xl border border-[#B78A2D]/30 text-center space-y-1.5">
            <Layers className="w-6 h-6 text-[#564D2D] mx-auto" />
            <h4 className="text-xs font-extrabold text-[#564D2D] uppercase">LOW EMISSION</h4>
            <p className="text-[10px] text-[#68736C]">Clean combustion with low particulate</p>
          </div>

          <div className="bg-[#F7F1E4] p-4.5 rounded-2xl border border-[#B78A2D]/30 text-center space-y-1.5">
            <Leaf className="w-6 h-6 text-[#564D2D] mx-auto" />
            <h4 className="text-xs font-extrabold text-[#564D2D] uppercase">ECO FRIENDLY</h4>
            <p className="text-[10px] text-[#68736C]">100% Sustainable organic feedstock</p>
          </div>
        </div>

        {/* Client Reviews Section */}
        <TestimonialsSection onOpenQuoteModal={onOpenQuoteModal} />

        {/* Disclaimer */}
        <div className="bg-[#4A4226] text-[#F7F1E4] p-5 rounded-2xl border border-[#B78A2D] flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-[#E0C46B] shrink-0 mt-0.5" />
          <p className="text-xs text-[#F7F1E4]/90 leading-relaxed">
            <strong>Application Note:</strong> Fuel calorific value, moisture tolerances, and ash content may vary slightly based on raw biomass batch origin. Detailed lab test reports provided upon bulk supply contract execution.
          </p>
        </div>

      </div>
    </main>
  );
}
