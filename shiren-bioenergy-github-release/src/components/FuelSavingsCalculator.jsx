import React, { useState } from 'react';
import { Calculator, Leaf, ArrowRight, Zap } from 'lucide-react';

export default function FuelSavingsCalculator({ onOpenQuoteModal }) {
  const [fuelType, setFuelType] = useState('coal');
  const [consumption, setConsumption] = useState(100); // Tons or Liters per month

  const fuelRates = {
    coal: { name: 'Indian Coal / Lignite', unit: 'Tons', costPerUnit: 8500, biomassFactor: 0.85, co2SavedPerUnit: 1.6 },
    furnaceOil: { name: 'Furnace Oil / LDO', unit: 'Liters', costPerUnit: 58, biomassFactor: 0.0075, co2SavedPerUnit: 0.0028 },
    diesel: { name: 'Industrial Diesel (HSD)', unit: 'Liters', costPerUnit: 90, biomassFactor: 0.008, co2SavedPerUnit: 0.0027 },
    gas: { name: 'Natural Gas (PNG)', unit: 'SCM', costPerUnit: 48, biomassFactor: 0.0055, co2SavedPerUnit: 0.0022 },
  };

  const selected = fuelRates[fuelType];
  const currentMonthlyExpense = consumption * selected.costPerUnit;
  // Estimated biomass pellet cost savings (approx 20% to 38% cost reduction)
  const savingsPercentage = fuelType === 'coal' ? 22 : fuelType === 'furnaceOil' ? 36 : fuelType === 'diesel' ? 42 : 28;
  
  const monthlySavings = Math.round(currentMonthlyExpense * (savingsPercentage / 100));
  const yearlySavings = monthlySavings * 12;
  const yearlyCo2Reduction = Math.round(consumption * selected.co2SavedPerUnit * 12);
  const requiredBiomassTons = Math.round(consumption * selected.biomassFactor * (fuelType === 'coal' ? 1 : 1000));

  return (
    <section className="py-20 bg-[#FFFDF7] border-b border-[#E2DAC6] relative" id="savings-calculator">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-extrabold tracking-widest text-[#E0C46B] uppercase bg-[#4A4226] px-4 py-1.5 rounded-full border border-[#B78A2D]/50 inline-flex items-center gap-1.5 mb-3 shadow">
            <Calculator className="w-4 h-4 text-[#E0C46B]" />
            <span>INTERACTIVE B2B ROI CALCULATOR</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif-heading text-[#2C2718] tracking-tight">
            CALCULATE YOUR FACTORY'S FUEL COST SAVINGS
          </h2>
          <p className="text-xs sm:text-sm text-[#4C432A] mt-3">
            See how much your industrial boiler or furnace can save monthly by transitioning to high-GCV Biomass Pellets & Briquettes.
          </p>
        </div>

        {/* Calculator Widget Main Card */}
        <div className="bg-[#4A4226] text-white rounded-3xl p-6 sm:p-10 border-2 border-[#B78A2D]/50 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
          
          {/* Left Inputs Column */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <label className="block text-xs font-extrabold text-[#E0C46B] uppercase tracking-wider mb-2">
                1. SELECT YOUR CURRENT BOILER FUEL
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                {Object.entries(fuelRates).map(([key, val]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setFuelType(key)}
                    className={`p-3 rounded-xl border text-xs font-extrabold text-left transition-all flex items-center justify-between ${
                      fuelType === key
                        ? 'bg-[#243A5E] text-white border-[#E0C46B] shadow-md scale-[1.02]'
                        : 'bg-[#564D2D] text-[#E6DFC7] border-[#B78A2D]/40 hover:bg-[#564D2D]/90'
                    }`}
                  >
                    <span>{val.name}</span>
                    {fuelType === key && <Zap className="w-4 h-4 text-[#E0C46B]" />}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-extrabold text-[#E0C46B] uppercase tracking-wider">
                  2. MONTHLY FUEL CONSUMPTION ({selected.unit.toUpperCase()})
                </label>
                <span className="text-sm font-extrabold text-white bg-[#564D2D] px-3 py-0.5 rounded-lg border border-[#B78A2D]/40">
                  {consumption.toLocaleString()} {selected.unit} / Month
                </span>
              </div>
              
              <input
                type="range"
                min={fuelType === 'coal' ? '10' : '1000'}
                max={fuelType === 'coal' ? '2000' : '200000'}
                step={fuelType === 'coal' ? '10' : '1000'}
                value={consumption}
                onChange={(e) => setConsumption(Number(e.target.value))}
                className="w-full h-3 bg-[#564D2D] rounded-lg appearance-none cursor-pointer accent-[#E0C46B]"
              />
              <div className="flex justify-between text-[10px] text-[#E6DFC7] font-semibold mt-1">
                <span>Min ({fuelType === 'coal' ? '10 Tons' : '1,000 Ltr'})</span>
                <span>Max ({fuelType === 'coal' ? '2,000 Tons' : '200,000 Ltr'})</span>
              </div>
            </div>

            <div className="bg-[#564D2D] p-4 rounded-2xl border border-[#B78A2D]/40 space-y-2 text-xs">
              <div className="flex justify-between text-[#E6DFC7]">
                <span>Estimated Current Monthly Expense:</span>
                <span className="font-bold text-white">₹ {currentMonthlyExpense.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-[#E6DFC7]">
                <span>Est. Monthly Biomass Fuel Needed:</span>
                <span className="font-bold text-[#E0C46B]">~ {requiredBiomassTons.toLocaleString()} MT / Month</span>
              </div>
            </div>
          </div>

          {/* Right Results Column */}
          <div className="lg:col-span-6 bg-[#3D351E] p-6 sm:p-8 rounded-2xl border border-[#B78A2D]/60 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-[11px] font-extrabold text-[#E0C46B] uppercase tracking-widest block mb-1">
                PROJECTED SAVINGS SUMMARY
              </span>
              <h3 className="text-2xl font-extrabold font-serif-heading text-white">
                YOUR POTENTIAL COST REDUCTION
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div className="bg-[#4A4226] p-4 rounded-xl border border-[#B78A2D]/50 shadow-inner">
                  <span className="text-[10px] font-bold text-[#E6DFC7] uppercase block">Est. Monthly Savings</span>
                  <div className="text-2xl font-black text-[#E0C46B] mt-1">
                    ₹ {monthlySavings.toLocaleString('en-IN')}
                  </div>
                  <span className="text-[10px] text-[#25D366] font-bold mt-1 inline-block bg-[#25D366]/10 px-2 py-0.5 rounded">
                    ↓ {savingsPercentage}% Cost Reduction
                  </span>
                </div>

                <div className="bg-[#4A4226] p-4 rounded-xl border border-[#B78A2D]/50 shadow-inner">
                  <span className="text-[10px] font-bold text-[#E6DFC7] uppercase block">Est. Annual Savings</span>
                  <div className="text-2xl font-black text-[#FFFDF7] mt-1">
                    ₹ {yearlySavings.toLocaleString('en-IN')}
                  </div>
                  <span className="text-[10px] text-[#E0C46B] font-semibold block mt-1">
                    Per 12-Month Operating Cycle
                  </span>
                </div>
              </div>

              <div className="mt-4 bg-[#243A5E] p-4 rounded-xl border border-[#E0C46B]/40 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Leaf className="w-6 h-6 text-[#25D366] shrink-0" />
                  <div>
                    <span className="text-[10px] font-extrabold text-[#E0C46B] uppercase tracking-wider block">CO2 Carbon Emission Reduction</span>
                    <span className="text-sm font-bold text-white">~ {yearlyCo2Reduction.toLocaleString()} Tons CO2 / Year Offset</span>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => onOpenQuoteModal(`Fuel Savings Calculation: ${selected.name} (${monthlySavings.toLocaleString()} ₹/mo savings)`)}
              className="w-full py-4 bg-[#E0C46B] hover:bg-[#F3D373] text-[#2C2718] font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 border border-[#B78A2D]"
            >
              <span>CLAIM YOUR SAVINGS — GET OFFICIAL BULK QUOTE</span>
              <ArrowRight className="w-4 h-4 text-[#2C2718]" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
