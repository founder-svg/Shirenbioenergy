import React from 'react';
import { ShieldCheck, Download, Award, CheckCircle2, Flame } from 'lucide-react';
import boilerOpsReal from '../assets/images/boiler_ops_real.jpg';

export default function LabCertificatesSection({ onOpenQuoteModal }) {
  const labParameters = [
    { label: 'Gross Calorific Value (GCV)', value: '4250 – 4550 Kcal/Kg', spec: 'ENplus A1 Standard' },
    { label: 'Ash Content', value: '< 2.5% (Low Residual)', spec: 'Minimal Boiler Cleaning' },
    { label: 'Moisture Percentage', value: '< 7.8% (Sun & Kiln Dried)', spec: 'Pneumatic Smooth Flow' },
    { label: 'Sulfur & Chlorine', value: 'Near 0% (< 0.02%)', spec: 'Zero Boiler Corrosion' },
    { label: 'Bulk Density', value: '650 – 720 kg/m³', spec: 'Optimized Storage Space' },
    { label: 'Fines & Dust Ratio', value: '< 1.0%', spec: 'Clean Factory Environment' },
  ];

  return (
    <section className="py-20 bg-[#4A4226] text-white relative overflow-hidden border-b border-[#B78A2D]/40" id="lab-certificates">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
          
          {/* Left Column: Certification Specs */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-extrabold tracking-widest text-[#E0C46B] uppercase bg-[#564D2D] px-3.5 py-1 rounded-full border border-[#B78A2D]/50 inline-flex items-center gap-1.5 mb-3 shadow-sm">
                <Award className="w-3.5 h-3.5 text-[#E0C46B]" />
                <span>NABL ACCREDITED LAB VERIFIED</span>
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif-heading text-[#FFFDF7] tracking-tight">
                CERTIFIED HIGH-GCV BIOMASS FUEL PARAMETERS
              </h2>
              <p className="text-xs sm:text-sm text-[#E6DFC7] mt-3 leading-relaxed">
                Every batch of biomass pellets and briquettes dispatched from our Gandhidham facility comes with batch-specific lab test reports confirming strict calorific and moisture parameters.
              </p>
            </div>

            {/* Parameters Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {labParameters.map((param, idx) => (
                <div key={idx} className="bg-[#564D2D] p-4 rounded-2xl border border-[#B78A2D]/40 space-y-1">
                  <span className="text-[10px] font-bold text-[#E0C46B] uppercase tracking-wider block">{param.label}</span>
                  <div className="text-base font-black text-white">{param.value}</div>
                  <span className="text-[10px] text-[#E6DFC7] font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-[#25D366]" />
                    {param.spec}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onOpenQuoteModal('Lab Test Reports & PDF')}
                className="inline-flex items-center justify-center gap-2 bg-[#243A5E] hover:bg-[#564D2D] text-white px-6 py-3.5 rounded-xl text-xs font-extrabold tracking-wider transition-all border border-[#E0C46B]/50 shadow-lg"
              >
                <Download className="w-4 h-4 text-[#E0C46B]" />
                <span>DOWNLOAD LAB TEST REPORTS (PDF)</span>
              </button>
              
              <div className="flex items-center gap-2 text-xs font-bold text-[#E0C46B] px-2 py-1">
                <ShieldCheck className="w-5 h-5 text-[#25D366] shrink-0" />
                <span>100% Quality Replacement Guarantee</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Industrial Inspection Card */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl p-3 bg-gradient-to-b from-[#E0C46B] via-[#564D2D] to-[#3D351E] shadow-2xl">
              <div className="relative rounded-2xl overflow-hidden bg-[#3D351E] aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src={boilerOpsReal}
                  alt="Industrial Boiler Inspection & Biomass Combustion Test"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3D351E] via-transparent to-transparent opacity-85" />
                
                <div className="absolute bottom-4 left-4 right-4 bg-[#4A4226]/95 backdrop-blur-md p-4 rounded-xl border border-[#B78A2D]/60 text-white shadow-xl">
                  <div className="flex items-center gap-3">
                    <Flame className="w-6 h-6 text-[#E0C46B] shrink-0" />
                    <div>
                      <h4 className="text-xs font-extrabold text-[#FFFDF7]">Optimal Boiler Flame & Combustion</h4>
                      <p className="text-[10px] text-[#E6DFC7]">Tested across Textile, Chemical, Food & Ceramic Thermal Boilers.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
