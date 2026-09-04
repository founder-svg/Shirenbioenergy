import React, { useState } from 'react';
import { Send, CheckCircle, MessageSquare, PhoneCall, Mail, MapPin } from 'lucide-react';

export default function QuoteSection({ initialProduct = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    product: initialProduct || 'Biomass Pellets',
    quantity: '',
    frequency: 'Monthly',
    application: 'Boiler',
    location: '',
    requirements: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission validation and trigger success message
    setIsSubmitted(true);
  };

  const generateWhatsAppMessage = () => {
    const text = `Hello Shiren Bioenergy, I would like to request a quote:
- *Name:* ${formData.name || 'Not provided'}
- *Company:* ${formData.company || 'Not provided'}
- *Phone:* ${formData.phone || 'Not provided'}
- *Product:* ${formData.product}
- *Quantity:* ${formData.quantity || 'Not specified'}
- *Frequency:* ${formData.frequency}
- *Application:* ${formData.application}
- *Delivery Location:* ${formData.location || 'Gandhidham / Gujarat'}
- *Details:* ${formData.requirements || 'None'}`;

    return `https://wa.me/919409396503?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className="bg-[#F4EFE3] py-16 lg:py-24 border-b border-[#E2DAC6] relative" id="quote-form">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-extrabold text-[#B38A2A] tracking-widest uppercase bg-[#564D2D]/10 px-3.5 py-1 rounded-md border border-[#B38A2A]/30">
            B2B INQUIRY & QUOTATION
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4A4226] font-heading">
            LET'S TALK BIOMASS.
          </h2>
          <p className="text-base sm:text-lg text-[#2C2718]">
            Tell us what you need. We'll help coordinate the right biomass fuel supply solution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Details */}
          <div className="lg:col-span-5 bg-[#4A4226] text-white p-8 rounded-2xl border-2 border-[#B38A2A] shadow-xl text-left space-y-6">
            <div>
              <span className="text-xs font-bold text-[#D1A83A] uppercase tracking-wider">
                Direct Contact
              </span>
              <h3 className="text-2xl font-extrabold text-white font-heading mt-1">
                Shiren Bioenergy
              </h3>
              <p className="text-xs text-[#F4EFE3]/80 mt-1">
                Gandhidham, Kutch, Gujarat – 370201
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-[#564D2D]">
              <a
                href="tel:+919409396503"
                className="flex items-center gap-4 p-3 bg-[#564D2D] rounded-xl border border-[#B38A2A]/40 hover:border-[#D1A83A] transition-colors group"
              >
                <div className="p-2.5 bg-[#4A4226] text-[#D1A83A] rounded-lg">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-[#D1A83A]">Phone / Call</span>
                  <span className="text-sm font-bold text-white group-hover:underline">+91 94093 96503</span>
                </div>
              </a>

              <a
                href="https://wa.me/919409396503?text=Hello%20Shiren%20Bioenergy%2C%20I%20am%20interested%20in%20biomass%20fuel%20supply.%20I%20would%20like%20to%20discuss%20my%20requirement."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3 bg-[#564D2D] rounded-xl border border-[#B38A2A]/40 hover:border-[#D1A83A] transition-colors group"
              >
                <div className="p-2.5 bg-[#4A4226] text-[#D1A83A] rounded-lg">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-[#D1A83A]">WhatsApp</span>
                  <span className="text-sm font-bold text-white group-hover:underline">+91 94093 96503</span>
                </div>
              </a>

              <a
                href="mailto:info@shirenbioenergy.com"
                className="flex items-center gap-4 p-3 bg-[#564D2D] rounded-xl border border-[#B38A2A]/40 hover:border-[#D1A83A] transition-colors group"
              >
                <div className="p-2.5 bg-[#4A4226] text-[#D1A83A] rounded-lg">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-[#D1A83A]">Email</span>
                  <span className="text-sm font-bold text-white group-hover:underline">info@shirenbioenergy.com</span>
                </div>
              </a>

              <div className="flex items-start gap-4 p-3 bg-[#564D2D] rounded-xl border border-[#B38A2A]/40">
                <div className="p-2.5 bg-[#4A4226] text-[#D1A83A] rounded-lg mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-[#D1A83A]">Headquarters</span>
                  <span className="text-xs font-medium text-[#F4EFE3]">Gandhidham, Kutch, Gujarat – 370201</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#564D2D] rounded-xl border border-[#B38A2A]/50">
              <span className="text-xs font-bold text-[#D1A83A] block">Response Time Commitment</span>
              <p className="text-xs text-[#F4EFE3]/90 mt-0.5">
                Our supply coordination team responds to all bulk quote enquiries within 24 hours.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-[#FBF8F0] p-8 rounded-2xl border-2 border-[#B38A2A] shadow-xl text-left">
            {isSubmitted ? (
              <div className="py-12 px-6 text-center space-y-6 animate-in fade-in">
                <div className="w-20 h-20 bg-[#564D2D] text-[#D1A83A] rounded-full flex items-center justify-center mx-auto shadow-lg border-2 border-[#B38A2A]">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-extrabold text-[#4A4226] font-heading">
                    Thank You for Contacting Shiren Bioenergy!
                  </h3>
                  <p className="text-sm sm:text-base text-[#2C2718] max-w-lg mx-auto">
                    Thank you for contacting Shiren Bioenergy. Our team will review your requirement and get in touch with you.
                  </p>
                </div>

                {/* Option to send via WhatsApp */}
                <div className="pt-4 border-t border-[#E2DAC6]">
                  <p className="text-xs font-bold text-[#B38A2A] mb-3 uppercase">Want an instant response on WhatsApp?</p>
                  <a
                    href={generateWhatsAppMessage()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#564D2D] text-white hover:bg-[#4A4226] px-6 py-3 rounded-xl font-bold text-sm border border-[#B38A2A]"
                  >
                    <MessageSquare className="w-4 h-4 text-[#D1A83A]" />
                    <span>Send details to WhatsApp (+91 94093 96503)</span>
                  </a>
                </div>

                <button
                  onClick={() => setIsSubmitted(false)}
                  className="block text-xs font-bold text-[#564D2D] hover:underline mx-auto pt-2"
                >
                  Submit another requirement
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-extrabold text-[#4A4226] uppercase mb-1">
                      Full Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rajesh Kumar"
                      className="w-full bg-white border-2 border-[#B38A2A]/50 focus:border-[#564D2D] rounded-lg px-3.5 py-2.5 text-sm text-[#2C2718] focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-xs font-extrabold text-[#4A4226] uppercase mb-1">
                      Company Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Kutch Industries Pvt Ltd"
                      className="w-full bg-white border-2 border-[#B38A2A]/50 focus:border-[#564D2D] rounded-lg px-3.5 py-2.5 text-sm text-[#2C2718] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-extrabold text-[#4A4226] uppercase mb-1">
                      Phone / WhatsApp Number <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 94093 96503"
                      className="w-full bg-white border-2 border-[#B38A2A]/50 focus:border-[#564D2D] rounded-lg px-3.5 py-2.5 text-sm text-[#2C2718] focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-extrabold text-[#4A4226] uppercase mb-1">
                      Email Address <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="info@company.com"
                      className="w-full bg-white border-2 border-[#B38A2A]/50 focus:border-[#564D2D] rounded-lg px-3.5 py-2.5 text-sm text-[#2C2718] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Product */}
                  <div>
                    <label className="block text-xs font-extrabold text-[#4A4226] uppercase mb-1">
                      Product Format
                    </label>
                    <select
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      className="w-full bg-white border-2 border-[#B38A2A]/50 focus:border-[#564D2D] rounded-lg px-3 py-2.5 text-sm text-[#2C2718] focus:outline-none transition-colors font-semibold"
                    >
                      <option value="Biomass Pellets">Biomass Pellets</option>
                      <option value="Biomass Briquettes">Biomass Briquettes</option>
                      <option value="Both">Both Pellets & Briquettes</option>
                      <option value="Not Sure">Not Sure / Recommend</option>
                    </select>
                  </div>

                  {/* Supply Frequency */}
                  <div>
                    <label className="block text-xs font-extrabold text-[#4A4226] uppercase mb-1">
                      Supply Frequency
                    </label>
                    <select
                      name="frequency"
                      value={formData.frequency}
                      onChange={handleChange}
                      className="w-full bg-white border-2 border-[#B38A2A]/50 focus:border-[#564D2D] rounded-lg px-3 py-2.5 text-sm text-[#2C2718] focus:outline-none transition-colors font-semibold"
                    >
                      <option value="One-time">One-time Order</option>
                      <option value="Weekly">Weekly Supply</option>
                      <option value="Monthly">Monthly Requirement</option>
                      <option value="Recurring">Recurring Contract</option>
                      <option value="Not Sure">Not Sure</option>
                    </select>
                  </div>

                  {/* Application */}
                  <div>
                    <label className="block text-xs font-extrabold text-[#4A4226] uppercase mb-1">
                      Application / Sector
                    </label>
                    <select
                      name="application"
                      value={formData.application}
                      onChange={handleChange}
                      className="w-full bg-white border-2 border-[#B38A2A]/50 focus:border-[#564D2D] rounded-lg px-3 py-2.5 text-sm text-[#2C2718] focus:outline-none transition-colors font-semibold"
                    >
                      <option value="Boiler">Industrial Boiler</option>
                      <option value="Industrial Heating">Industrial Heating</option>
                      <option value="Process Heating">Process Heating</option>
                      <option value="Furnace">Furnace</option>
                      <option value="Manufacturing">Manufacturing</option>
                      <option value="Food Processing">Food Processing</option>
                      <option value="Textile">Textile</option>
                      <option value="Agro Processing">Agro Processing</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Quantity */}
                  <div>
                    <label className="block text-xs font-extrabold text-[#4A4226] uppercase mb-1">
                      Required Quantity
                    </label>
                    <input
                      type="text"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      placeholder="Example: 20 MT / 100 MT / Monthly requirement"
                      className="w-full bg-white border-2 border-[#B38A2A]/50 focus:border-[#564D2D] rounded-lg px-3.5 py-2.5 text-sm text-[#2C2718] focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Delivery Location */}
                  <div>
                    <label className="block text-xs font-extrabold text-[#4A4226] uppercase mb-1">
                      Delivery Destination <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      name="location"
                      required
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="e.g. Gandhidham / Morbi / Ahmedabad"
                      className="w-full bg-white border-2 border-[#B38A2A]/50 focus:border-[#564D2D] rounded-lg px-3.5 py-2.5 text-sm text-[#2C2718] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Additional Requirements */}
                <div>
                  <label className="block text-xs font-extrabold text-[#4A4226] uppercase mb-1">
                    Additional Requirement Details
                  </label>
                  <textarea
                    name="requirements"
                    rows="3"
                    value={formData.requirements}
                    onChange={handleChange}
                    placeholder="Specify moisture limits, ash content preferences, delivery schedules or plant access..."
                    className="w-full bg-white border-2 border-[#B38A2A]/50 focus:border-[#564D2D] rounded-lg px-3.5 py-2.5 text-sm text-[#2C2718] focus:outline-none transition-colors"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#564D2D] hover:bg-[#4A4226] text-white py-4 rounded-xl font-extrabold text-base tracking-wider shadow-lg transition-all border border-[#B38A2A] flex items-center justify-center gap-2 group"
                >
                  <span>REQUEST A QUOTE</span>
                  <Send className="w-5 h-5 text-[#D1A83A] group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
