import React, { useState } from 'react';
import { X, Send, PhoneCall, MessageCircle, CheckCircle2, Zap } from 'lucide-react';

export default function QuickInquiryTab({ _onOpenQuoteModal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    product: 'Biomass Pellets (6mm-12mm)',
    quantity: '10-25 Tons',
    city: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsOpen(false);
      setFormData({ name: '', phone: '', product: 'Biomass Pellets (6mm-12mm)', quantity: '10-25 Tons', city: '' });
    }, 2500);
  };

  return (
    <>
      {/* Vertical Side Tab Fixed on Right Screen Edge */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-[#243A5E] hover:bg-[#4A4226] text-[#FFFDF7] font-extrabold text-xs tracking-widest uppercase py-3.5 px-3 rounded-l-2xl shadow-2xl border-l-2 border-y-2 border-[#E0C46B] transition-all transform hover:-translate-x-1 flex items-center gap-2 group select-none cursor-pointer"
        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        aria-label="Open Quick Inquiry Drawer"
      >
        <span className="rotate-180 flex items-center gap-1.5">
          <Zap className="w-4 h-4 text-[#E0C46B] animate-pulse" />
          <span className="group-hover:text-[#E0C46B] transition-colors">QUICK INQUIRY</span>
        </span>
      </button>

      {/* Backdrop Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity"
        />
      )}

      {/* Sliding Side Drawer Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-[#FFFDF7] shadow-2xl z-50 border-l-4 border-[#B78A2D] transition-transform duration-300 transform text-left flex flex-col justify-between ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="bg-[#4A4226] text-white p-6 border-b border-[#B78A2D]/40 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-extrabold text-[#E0C46B] uppercase tracking-widest block mb-0.5">
              SHIREN BIOENERGY GANDHIDHAM
            </span>
            <h3 className="text-xl font-extrabold font-serif-heading text-[#FFFDF7]">
              QUICK BULK INQUIRY
            </h3>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-9 h-9 rounded-full bg-[#564D2D] hover:bg-[#243A5E] text-[#E6DFC7] hover:text-white flex items-center justify-center transition-colors border border-[#B78A2D]/40"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Form & Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          
          {submitted ? (
            <div className="bg-[#564D2D] text-white p-6 rounded-2xl border border-[#E0C46B] text-center space-y-3 my-8">
              <CheckCircle2 className="w-12 h-12 text-[#25D366] mx-auto" />
              <h4 className="text-lg font-bold text-[#FFFDF7]">Inquiry Received!</h4>
              <p className="text-xs text-[#E6DFC7]">Our sales representative from Gandhidham will call you within 15 minutes with bulk price per MT.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#2C2718] mb-1">Your Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rajesh Patel"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#E2DAC6] rounded-xl text-xs text-[#2C2718] focus:outline-none focus:border-[#B78A2D]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#2C2718] mb-1">Phone Number (WhatsApp) *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#E2DAC6] rounded-xl text-xs text-[#2C2718] focus:outline-none focus:border-[#B78A2D]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#2C2718] mb-1">Product Requirement</label>
                <select
                  value={formData.product}
                  onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#E2DAC6] rounded-xl text-xs text-[#2C2718] focus:outline-none focus:border-[#B78A2D]"
                >
                  <option>Biomass Pellets (6mm-12mm)</option>
                  <option>Wood Pellets (High GCV)</option>
                  <option>Groundnut Shell Pellets</option>
                  <option>Biomass Briquettes (70mm-90mm)</option>
                  <option>Custom Industrial Mix</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#2C2718] mb-1">Quantity (MT)</label>
                  <select
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#E2DAC6] rounded-xl text-xs text-[#2C2718] focus:outline-none focus:border-[#B78A2D]"
                  >
                    <option>10 - 25 Tons</option>
                    <option>25 - 50 Tons</option>
                    <option>50 - 100 Tons</option>
                    <option>100+ Tons (Contract)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#2C2718] mb-1">Delivery City</label>
                  <input
                    type="text"
                    placeholder="e.g. Surat, Rajkot"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#E2DAC6] rounded-xl text-xs text-[#2C2718] focus:outline-none focus:border-[#B78A2D]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#243A5E] hover:bg-[#4A4226] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all border border-[#E0C46B]/40 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4 text-[#E0C46B]" />
                <span>SUBMIT INQUIRY FOR FAST PRICE</span>
              </button>
            </form>
          )}

          {/* Quick Direct Buttons */}
          <div className="pt-4 border-t border-[#E2DAC6] space-y-2.5">
            <span className="text-[10px] font-extrabold text-[#4C432A] uppercase tracking-wider block">OR CONNECT IMMEDIATELY</span>
            
            <a
              href="https://wa.me/919409396503?text=Hi%20Shiren%20Bioenergy,%20I%20saw%20your%20website%20and%20want%20bulk%20quote%20for%20Biomass%20Pellets/Briquettes."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>INSTANT CHAT ON WHATSAPP</span>
            </a>

            <a
              href="tel:+919409396503"
              className="w-full py-3 bg-[#4A4226] hover:bg-[#564D2D] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl border border-[#B78A2D]/40 transition-all flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-[#E0C46B]" />
              <span>CALL DISPATCH +91 94093 96503</span>
            </a>
          </div>

        </div>

        {/* Footer Guarantee */}
        <div className="p-4 bg-[#F7F1E4] border-t border-[#E2DAC6] text-center text-[10px] text-[#4C432A] font-semibold">
          🛡️ Gandhidham Port & Kutch Logistics Hub • Direct Truck Dispatch
        </div>
      </div>
    </>
  );
}
