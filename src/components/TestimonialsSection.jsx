import React, { useState, useEffect } from 'react';
import { 
  Star, ChevronLeft, ChevronRight, Quote, ShieldCheck, CheckCircle2, Award, 
  MapPin, Grid, Layers, Search, Filter, X, Send, 
  Flame, TrendingDown, FileText, MessageSquarePlus,
  Play, Pause, MoveLeft, Gauge
} from 'lucide-react';

const testimonialsData = [
  {
    id: 1,
    name: "Ramesh Patel",
    title: "Managing Director",
    company: "Patel Ceramics Ltd.",
    location: "Morbi, Gujarat",
    industry: "Ceramic & Glass",
    category: "Briquettes",
    rating: 5.0,
    productUsed: "90mm Biomass Briquettes",
    gcv: "4200+ kcal/kg",
    savings: "28% Cost Reduction",
    boilerType: "Ceramic Tunnel Kiln (Continuous)",
    monthlyVolume: "350 MT / Month",
    review: "Shiren Bioenergy's 90mm biomass briquettes have reduced our ceramic kiln fuel costs by 28% compared to imported coal. Excellent calorific value (4000+ kcal/kg) and consistent low moisture delivery to Morbi.",
    caseStudy: "Transitioned 2 continuous tunnel kilns from imported Indonesian coal to 90mm biomass briquettes. Achieved zero clinker formation, reduced sulfur emissions by 92%, and lowered annual fuel expenditure by ₹42 Lakhs.",
    verified: true,
    initials: "RP",
    bgColor: "bg-emerald-900/60"
  },
  {
    id: 2,
    name: "Jayesh Shah",
    title: "Operations Head",
    company: "Shah Textile Mills",
    location: "Surat, Gujarat",
    industry: "Textile & Dyes",
    category: "Pellets",
    rating: 4.9,
    productUsed: "8mm Premium Wood Pellets",
    gcv: "4400+ kcal/kg",
    savings: "24% Steam Cost Savings",
    boilerType: "12 TPH Automatic Steam Boiler",
    monthlyVolume: "500 MT / Month",
    review: "We switched to Shiren's 8mm premium wood pellets for our thermal steam boilers. The ash content is consistently below 2%, requiring far less maintenance and blowdown cycles. Outstanding service from Gandhidham.",
    caseStudy: "Pneumatic pellet feeding system setup with 8mm premium wood pellets. Reduced boiler maintenance downtime from bi-weekly to bi-monthly, and maintained steady 14 bar steam pressure throughout dye cycle runs.",
    verified: true,
    initials: "JS",
    bgColor: "bg-amber-900/60"
  },
  {
    id: 3,
    name: "Nitin Vora",
    title: "Procurement Director",
    company: "Vora Chemical Industries",
    location: "Ankleshwar, Gujarat",
    industry: "Chemical & Pharma",
    category: "Pellets",
    rating: 4.8,
    productUsed: "Biomass Pellets (Bulk)",
    gcv: "4100 kcal/kg",
    savings: "Zero Delivery Delays",
    boilerType: "Fluidized Bed Combustion (FBC)",
    monthlyVolume: "600 MT / Month",
    review: "Reliable recurring supply is critical for our continuous chemical synthesis reactors. Shiren Bioenergy has never missed a delivery schedule in 14 months. Highly recommended biomass supply partner in Gujarat.",
    caseStudy: "Dedicated 14-month continuous supply agreement for 600 MT/month. Buffer storage managed at Gandhidham warehouse ensuring 24-hour emergency delivery turnaround during monsoon seasons.",
    verified: true,
    initials: "NV",
    bgColor: "bg-teal-900/60"
  },
  {
    id: 4,
    name: "Rajesh Savani",
    title: "Plant Manager",
    company: "Savani Foods & Agro",
    location: "Rajkot, Gujarat",
    industry: "Food Processing",
    category: "Briquettes",
    rating: 5.0,
    productUsed: "Groundnut Shell Briquettes",
    gcv: "4000 kcal/kg",
    savings: "31% Fuel Savings",
    boilerType: "Agro Dryer Thermal Fluid Heater",
    monthlyVolume: "200 MT / Month",
    review: "High GCV pellets with uniform compression density. Their lab test reports match every single dispatch batch from Gandhidham. Clean combustion with minimal smoke emission for our food processing unit.",
    caseStudy: "Replaced FO (Furnace Oil) with high-density groundnut shell briquettes for hot air generators in food dehydrators. Zero residual taint, 100% food safety compliance, and 31% direct fuel bill reduction.",
    verified: true,
    initials: "RS",
    bgColor: "bg-green-900/60"
  },
  {
    id: 5,
    name: "Pankaj Mehta",
    title: "General Manager",
    company: "Mehta Dyes & Intermediates",
    location: "Ahmedabad, Gujarat",
    industry: "Textile & Dyes",
    category: "Briquettes",
    rating: 4.7,
    productUsed: "Biomass Briquettes (70mm)",
    gcv: "3950 kcal/kg",
    savings: "30% Lower Expenditure",
    boilerType: "8 TPH Thermic Fluid Heater",
    monthlyVolume: "280 MT / Month",
    review: "Transitioning from furnace oil to biomass briquettes was seamless with Shiren Bioenergy's technical support. Our carbon footprint dropped significantly and fuel expenditure reduced by over 30%.",
    caseStudy: "Technical guidance provided for grate modification from FO burner to 70mm biomass briquette feeding. ROI on boiler retrofit achieved within 4.5 months of continuous operation.",
    verified: true,
    initials: "PM",
    bgColor: "bg-emerald-800/60"
  },
  {
    id: 6,
    name: "Harishbhai Thummar",
    title: "Owner & CEO",
    company: "Thummar Cotton Ginning",
    location: "Jamnagar, Gujarat",
    industry: "Textile & Dyes",
    category: "Pellets",
    rating: 4.9,
    productUsed: "Sawdust Bio Pellets",
    gcv: "4300 kcal/kg",
    savings: "100% Weighbridge Transparency",
    boilerType: "Steam Generator Unit",
    monthlyVolume: "150 MT / Month",
    review: "Honest pricing, full transparency on weighbridge scale slips, and top quality biomass briquettes. Truly the most dependable biomass fuel supplier in the Saurashtra region.",
    caseStudy: "Direct computerised weighbridge slip integration with dispatch trucks from Saurashtra hubs. Verified moisture tests under 7% upon truck arrival at plant gates.",
    verified: true,
    initials: "HT",
    bgColor: "bg-amber-800/60"
  },
  {
    id: 7,
    name: "Dharmesh Solanki",
    title: "Chief Utilities Engineer",
    company: "Solanki Power & Utilities",
    location: "Gandhidham, Kutch",
    industry: "Chemical & Pharma",
    category: "Pellets",
    rating: 4.8,
    productUsed: "Biomass Fuel Pellets",
    gcv: "4150 kcal/kg",
    savings: "24-hr Rapid Dispatch",
    boilerType: "Co-Firing Power Boiler",
    monthlyVolume: "450 MT / Month",
    review: "Being located in Kutch, we needed immediate bulk logistics for 200 Tons/month. Shiren Bioenergy dispatched our PO within 24 hours with certified moisture and GCV parameters.",
    caseStudy: "Implemented just-in-time (JIT) biomass supply model from Gandhidham facility, reducing plant warehouse inventory holding costs while maintaining uninterrupted 24/7 boiler firing.",
    verified: true,
    initials: "DS",
    bgColor: "bg-teal-800/60"
  },
  {
    id: 8,
    name: "Pravinbhai Patel",
    title: "Director of Supply Chain",
    company: "Patel Paper Products",
    location: "Vapi, Gujarat",
    industry: "Paper & Packaging",
    category: "Briquettes",
    rating: 4.9,
    productUsed: "90mm Premium Briquettes",
    gcv: "4200 kcal/kg",
    savings: "Sub-8% Moisture Guarantee",
    boilerType: "Paper Cylinder Drying Steam Plant",
    monthlyVolume: "400 MT / Month",
    review: "Great moisture control strictly under 8%. Their biomass briquettes burn evenly and maintain steady steam pressure in our paper drying cylinders without clinker formation.",
    caseStudy: "Prevented paper roll moisture defects by eliminating steam pressure drops during boiler firing. Maintained uniform GCV thermal output across 3 shift rotations.",
    verified: true,
    initials: "PP",
    bgColor: "bg-green-800/60"
  },
  {
    id: 9,
    name: "Bhavesh Joshi",
    title: "ESG & Utilities Head",
    company: "Joshi Pharmaceuticals",
    location: "Vadodara, Gujarat",
    industry: "Chemical & Pharma",
    category: "Pellets",
    rating: 5.0,
    productUsed: "Certified Wood Pellets",
    gcv: "4450 kcal/kg",
    savings: "100% ESG Audit Approved",
    boilerType: "Clean Steam Pharma Boiler",
    monthlyVolume: "180 MT / Month",
    review: "Compliance and eco-certifications are strict in pharma manufacturing. Shiren Bioenergy provides complete batch documentation and green energy verification for our annual ESG audits.",
    caseStudy: "Provided batch-wise lab test certificates for GCV, moisture, ash, and carbon neutrality. Enabled Joshi Pharma to achieve Gold rating in Scope 1 carbon emission reduction.",
    verified: true,
    initials: "BJ",
    bgColor: "bg-emerald-900/70"
  },
  {
    id: 10,
    name: "Arvindbhai Parikh",
    title: "Factory Owner",
    company: "Parikh Metal Processing",
    location: "Bhavnagar, Gujarat",
    industry: "Metal & Metallurgy",
    category: "Briquettes",
    rating: 4.6,
    productUsed: "Agro-Biomass Briquettes",
    gcv: "3900 kcal/kg",
    savings: "+15% Furnace Efficiency",
    boilerType: "Annealing & Forging Furnace",
    monthlyVolume: "220 MT / Month",
    review: "Prompt customer support and consistent briquette size. Our furnace efficiency improved by 15% with their agro-biomass briquettes. Very satisfied with their long-term supply contract.",
    caseStudy: "Replaced lignite coal in metal reheating furnace. Standardised 90mm briquette length allowed optimal air fuel ratio and increased throughput by 15%.",
    verified: true,
    initials: "AP",
    bgColor: "bg-amber-900/70"
  },
  {
    id: 11,
    name: "Sanjay Vaghela",
    title: "Lead Energy Officer",
    company: "Vaghela Infrastructure",
    location: "Kandla, Kutch",
    industry: "Ceramic & Glass",
    category: "Briquettes",
    rating: 4.9,
    productUsed: "Biomass Briquettes 90mm",
    gcv: "4150 kcal/kg",
    savings: "Lowest Freight Costs",
    boilerType: "Multi-Unit Boiler Complex",
    monthlyVolume: "550 MT / Month",
    review: "Local logistics advantage in Kutch coupled with extremely competitive pricing. Shiren Bioenergy is our primary green fuel partner for all multi-unit boiler installations.",
    caseStudy: "Optimised haulage routing from Gandhidham processing unit to Kandla port industrial area, cutting freight expenses by 18% compared to out-of-state biomass vendors.",
    verified: true,
    initials: "SV",
    bgColor: "bg-teal-900/70"
  }
];

export default function TestimonialsSection({ onOpenQuoteModal, initialFilter = 'All' }) {
  const [activeIndustry, setActiveIndustry] = useState(initialFilter);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState('slide-rtl'); // 'slide-rtl', 'carousel', or 'grid'
  
  // Right-to-Left Sliding Marquee Controls
  const [isPaused, setIsPaused] = useState(false);
  const [marqueeSpeed, setMarqueeSpeed] = useState('slow'); // 'slow' (75s - easy reading), 'normal' (55s), 'brisk' (40s)

  // Modals & Review Expand state
  const [expandedReviewIds, setExpandedReviewIds] = useState({});
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);

  const toggleReview = (id) => {
    setExpandedReviewIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    location: '',
    industry: 'Ceramic & Glass',
    productUsed: '90mm Biomass Briquettes',
    rating: 5,
    review: '',
    allowReferenceCall: true
  });

  const industries = ['All', 'Ceramic & Glass', 'Textile & Dyes', 'Chemical & Pharma', 'Food Processing', 'Paper & Packaging', 'Metal & Metallurgy'];
  const categories = ['All', 'Pellets', 'Briquettes'];

  // Multi-level filtering
  const filteredTestimonials = testimonialsData.filter(t => {
    const matchesIndustry = activeIndustry === 'All' || t.industry === activeIndustry;
    const matchesCategory = activeCategory === 'All' || t.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.productUsed.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.review.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesIndustry && matchesCategory && matchesSearch;
  });

  // Auto slide step carousel
  useEffect(() => {
    if (viewMode !== 'carousel' || filteredTestimonials.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [filteredTestimonials.length, viewMode]);

  const handlePrev = () => {
    if (filteredTestimonials.length <= 1) return;
    setCurrentIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  };

  const handleNext = () => {
    if (filteredTestimonials.length <= 1) return;
    setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitSuccess(true);
    setTimeout(() => {
      setIsSubmitModalOpen(false);
      setSubmitSuccess(false);
      setFormData({
        name: '',
        company: '',
        location: '',
        industry: 'Ceramic & Glass',
        productUsed: '90mm Biomass Briquettes',
        rating: 5,
        review: '',
        allowReferenceCall: true
      });
    }, 2500);
  };

  // Helper to safely slice visible cards for step carousel without duplication when length < 3
  const getVisibleCards = () => {
    const len = filteredTestimonials.length;
    if (len === 0) return [];
    const safeIndex = currentIndex % len;
    if (len === 1) return [{ item: filteredTestimonials[0] }];
    if (len === 2) {
      return [
        { item: filteredTestimonials[safeIndex] },
        { item: filteredTestimonials[(safeIndex + 1) % 2] }
      ];
    }
    return [0, 1, 2].map((offset) => {
      const idx = (safeIndex + offset) % len;
      return { item: filteredTestimonials[idx] };
    });
  };

  // Ensure marquee items array is sufficiently long for infinite right-to-left loop
  const getMarqueeItems = () => {
    if (filteredTestimonials.length === 0) return [];
    let items = [...filteredTestimonials];
    while (items.length < 8) {
      items = [...items, ...filteredTestimonials];
    }
    // Duplicate once more for smooth infinite 50% translation loop
    return [...items, ...items];
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#4A4226] via-[#564D2D] to-[#3D351E] text-white relative overflow-hidden text-left">
      {/* Decorative Subtle Background Patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(224,196,107,0.08),transparent_50%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(74,158,96,0.12),transparent_50%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E0C46B]/15 border border-[#E0C46B]/40 text-[#F3D373] text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
            <Award className="w-4 h-4 text-[#F3D373]" />
            Verified Industrial Client Reviews
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-heading font-black tracking-tight text-[#FFFDF7] mb-4 leading-tight">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F3D373] to-[#E0C46B]">120+ Boiler Plants</span> Across Gujarat
          </h2>
          
          <p className="text-base sm:text-lg text-[#E6DFC7] font-light leading-relaxed">
            Read authentic feedback from plant directors, boiler engineers, and supply heads who rely on Shiren Bioenergy for high-GCV biomass fuel.
          </p>
        </div>

        {/* Overall Rating & Trust Metrics Card */}
        <div className="bg-[#5E5431]/70 border border-[#E0C46B]/30 rounded-2xl p-6 sm:p-8 mb-10 backdrop-blur-md shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center divide-y md:divide-y-0 md:divide-x divide-[#E0C46B]/20">
            
            {/* 4.8 Rating Display */}
            <div className="flex items-center gap-4 justify-center md:justify-start pb-4 md:pb-0">
              <div className="text-5xl sm:text-6xl font-serif-heading font-black text-[#F3D373] tracking-tighter">
                4.8
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-[#F3D373] mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-[#F3D373] stroke-[#F3D373]" />
                  ))}
                </div>
                <span className="text-xs font-bold text-[#E0C46B] uppercase tracking-wider">
                  Average Client Rating
                </span>
                <span className="text-[11px] text-[#DDD5BC]">
                  100% Reviews Rated 4.6+ Stars
                </span>
              </div>
            </div>

            {/* Total Contracts */}
            <div className="flex flex-col items-center justify-center py-4 md:py-0 text-center">
              <span className="text-3xl font-extrabold text-white mb-1">120+ Industrial Plants</span>
              <span className="text-xs text-[#DDD5BC] uppercase tracking-wider font-medium">Active Bulk Supply Contracts</span>
            </div>

            {/* Average Savings Metric */}
            <div className="flex flex-col items-center justify-center py-4 md:py-0 text-center">
              <div className="flex items-center gap-1.5 text-2xl sm:text-3xl font-extrabold text-[#E6DFC7]">
                <TrendingDown className="w-6 h-6 text-[#E6DFC7]" />
                22% - 31%
              </div>
              <span className="text-xs text-[#DDD5BC] uppercase tracking-wider font-medium">Fuel Expenditure Savings</span>
            </div>

            {/* Action Button: Submit Review or Ask References */}
            <div className="flex flex-col items-center md:items-end justify-center pt-4 md:pt-0">
              <button
                onClick={() => setIsSubmitModalOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#E0C46B] to-[#C99C33] text-[#4A4226] font-bold text-xs uppercase tracking-wider shadow-lg hover:brightness-110 active:scale-95 transition-all"
              >
                <MessageSquarePlus className="w-4 h-4" />
                Submit Client Review
              </button>
              <span className="text-[11px] text-[#DDD5BC] mt-1.5 text-center md:text-right">
                Are you an existing client? Share your experience
              </span>
            </div>

          </div>
        </div>

        {/* Search Bar & Multi-Filter Controls */}
        <div className="bg-[#4A4226]/80 border border-[#E0C46B]/20 rounded-2xl p-4 sm:p-5 mb-8 backdrop-blur-sm space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-[#E0C46B] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search reviews by city (Morbi, Surat...), company, GCV, or boiler type..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-[#4A4226] border border-[#E0C46B]/30 text-white placeholder-[#D4C9A6] text-xs focus:outline-none focus:border-[#E0C46B] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#D4C9A6] hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Product Type Filter Pills */}
            <div className="flex items-center gap-1.5 bg-[#4A4226] p-1 rounded-xl border border-[#E0C46B]/20 shrink-0">
              <span className="text-[11px] font-bold text-[#E0C46B] px-2 uppercase tracking-wider hidden sm:inline">Product:</span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeCategory === cat
                      ? 'bg-[#E0C46B] text-[#4A4226]'
                      : 'text-[#E6DFC7] hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* View Mode Switcher & Add Review CTA */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => setIsSubmitModalOpen(true)}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-extrabold bg-gradient-to-r from-[#E0C46B] to-[#C99C33] text-[#4A4226] shadow-md hover:brightness-110 active:scale-95 transition-all"
                title="Write and submit a client review"
              >
                <MessageSquarePlus className="w-3.5 h-3.5" />
                + Add Review
              </button>
              
              <div className="flex items-center gap-1 bg-[#4A4226] border border-[#E0C46B]/20 p-1 rounded-xl">
                <button
                  onClick={() => setViewMode('slide-rtl')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    viewMode === 'slide-rtl'
                      ? 'bg-[#E0C46B] text-[#4A4226]'
                      : 'text-[#E6DFC7] hover:text-white'
                  }`}
                  title="Continuous Right-to-Left Auto Slider"
                >
                  <MoveLeft className="w-3.5 h-3.5" />
                  Auto Slide (R-L)
                </button>
                <button
                  onClick={() => setViewMode('carousel')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    viewMode === 'carousel'
                      ? 'bg-[#E0C46B] text-[#4A4226]'
                      : 'text-[#E6DFC7] hover:text-white'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  Carousel
                </button>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    viewMode === 'grid'
                      ? 'bg-[#E0C46B] text-[#4A4226]'
                      : 'text-[#E6DFC7] hover:text-white'
                  }`}
                >
                  <Grid className="w-3.5 h-3.5" />
                  Grid ({filteredTestimonials.length})
                </button>
              </div>
            </div>

          </div>

          {/* Industry Filter Badges */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-xs font-bold text-[#E0C46B] uppercase tracking-wider shrink-0 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Industry:
            </span>
            {industries.map((ind) => (
              <button
                key={ind}
                onClick={() => setActiveIndustry(ind)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-300 ${
                  activeIndustry === ind
                    ? 'bg-gradient-to-r from-[#E0C46B] to-[#C99C33] text-[#4A4226] shadow-md scale-105'
                    : 'bg-[#4A4226]/70 text-[#E6DFC7] border border-[#E0C46B]/20 hover:bg-[#4A4226] hover:text-white'
                }`}
              >
                {ind}
              </button>
            ))}
          </div>
        </div>

        {/* Empty State */}
        {filteredTestimonials.length === 0 && (
          <div className="bg-[#5E5431]/40 border border-[#E0C46B]/20 rounded-2xl p-12 text-center my-8">
            <Search className="w-10 h-10 text-[#E0C46B] mx-auto mb-3 opacity-60" />
            <h3 className="text-lg font-bold text-white mb-1">No matching client reviews found</h3>
            <p className="text-xs text-[#DDD5BC] mb-4">Try relaxing your search terms or filter selections.</p>
            <button
              onClick={() => {
                setActiveIndustry('All');
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-xl bg-[#E0C46B] text-[#4A4226] font-bold text-xs"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* VIEW MODE 1: CONTINUOUS RIGHT-TO-LEFT SLIDING MARQUEE TRACK */}
        {viewMode === 'slide-rtl' && filteredTestimonials.length > 0 && (
          <div className="space-y-4">
            
            {/* Speed & Play/Pause Controls Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 bg-[#4A4226]/80 border border-[#E0C46B]/20 px-4 py-2.5 rounded-xl text-xs">
              <div className="flex items-center gap-2 text-[#F3D373] font-bold">
                <MoveLeft className="w-4 h-4 animate-pulse text-[#E0C46B]" />
                <span>Continuous Right-to-Left Slide</span>
                <span className="text-[11px] text-[#DDD5BC] font-normal hidden sm:inline">
                  (Hover cursor over any review card to pause & read comfortably)
                </span>
              </div>

              <div className="flex items-center gap-3">
                {/* Play / Pause Toggle Button */}
                <button
                  onClick={() => setIsPaused(!isPaused)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg font-bold transition-colors ${
                    isPaused 
                      ? 'bg-[#E0C46B] text-[#4A4226]' 
                      : 'bg-[#5E5431] text-[#E0C46B] border border-[#E0C46B]/30 hover:bg-[#E0C46B] hover:text-[#4A4226]'
                  }`}
                >
                  {isPaused ? <Play className="w-3.5 h-3.5 fill-current" /> : <Pause className="w-3.5 h-3.5" />}
                  {isPaused ? 'Resume Sliding' : 'Pause'}
                </button>

                {/* Speed Selector */}
                <div className="flex items-center gap-1 bg-[#5E5431] p-1 rounded-lg border border-[#E0C46B]/20">
                  <Gauge className="w-3.5 h-3.5 text-[#E0C46B] ml-1" />
                  <button
                    onClick={() => setMarqueeSpeed('slow')}
                    className={`px-2.5 py-0.5 rounded text-[11px] font-bold transition-all ${
                      marqueeSpeed === 'slow' ? 'bg-[#E0C46B] text-[#4A4226]' : 'text-[#E6DFC7] hover:text-white'
                    }`}
                    title="75s full loop - Ultra relaxed reading speed"
                  >
                    Relaxed Reading
                  </button>
                  <button
                    onClick={() => setMarqueeSpeed('normal')}
                    className={`px-2.5 py-0.5 rounded text-[11px] font-bold transition-all ${
                      marqueeSpeed === 'normal' ? 'bg-[#E0C46B] text-[#4A4226]' : 'text-[#E6DFC7] hover:text-white'
                    }`}
                    title="55s full loop - Smooth flow speed"
                  >
                    Normal
                  </button>
                  <button
                    onClick={() => setMarqueeSpeed('brisk')}
                    className={`px-2.5 py-0.5 rounded text-[11px] font-bold transition-all ${
                      marqueeSpeed === 'brisk' ? 'bg-[#E0C46B] text-[#4A4226]' : 'text-[#E6DFC7] hover:text-white'
                    }`}
                    title="40s full loop"
                  >
                    Brisk
                  </button>
                </div>
              </div>
            </div>

            {/* Continuous Marquee Track Container */}
            <div className="relative overflow-hidden rounded-2xl py-3 group/track">
              {/* Left & Right Smooth Edge Fade Overlays */}
              <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-[#4A4226] via-[#4A4226]/80 to-transparent z-20" />
              <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-[#3D351E] via-[#3D351E]/80 to-transparent z-20" />

              {/* Marquee Track */}
              <div 
                className={`testimonials-marquee-track ${
                  marqueeSpeed === 'slow' 
                    ? 'animate-marquee-slow' 
                    : marqueeSpeed === 'brisk' 
                      ? 'animate-marquee-brisk' 
                      : 'animate-marquee-normal'
                } ${isPaused ? 'is-paused' : ''} flex gap-6`}
              >
                {getMarqueeItems().map((item, idx) => (
                  <div
                    key={`marquee-${item.id}-${idx}`}
                    className="w-[320px] sm:w-[380px] shrink-0 bg-gradient-to-b from-[#5E5431]/90 to-[#4A4226]/95 border border-[#E0C46B]/30 rounded-2xl p-5 flex flex-col justify-between shadow-xl hover:border-[#E0C46B] transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                  >
                    <div>
                      {/* Quote Icon & Rating Badge */}
                      <div className="flex items-center justify-between mb-3">
                        <Quote className="w-7 h-7 text-[#E0C46B]/40 group-hover:text-[#E0C46B] transition-colors" />
                        <div className="flex items-center gap-1.5 bg-[#4A4226] px-3 py-1 rounded-full border border-[#E0C46B]/40 shadow-sm">
                          <Star className="w-3.5 h-3.5 fill-[#F3D373] stroke-[#F3D373]" />
                          <span className="text-xs font-extrabold text-[#F3D373]">{item.rating.toFixed(1)} / 5.0</span>
                        </div>
                      </div>

                      {/* Key Metrics Badges */}
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        <div className="bg-[#4A4226]/80 border border-[#E0C46B]/20 rounded-lg p-1.5 text-left">
                          <span className="block text-[9px] text-[#DDD5BC] uppercase font-bold">Tested GCV</span>
                          <span className="text-xs font-extrabold text-[#F3D373]">{item.gcv}</span>
                        </div>
                        <div className="bg-[#4A4226]/80 border border-[#243A5E]/30 rounded-lg p-1.5 text-left">
                          <span className="block text-[9px] text-[#DDD5BC] uppercase font-bold">Verified Savings</span>
                          <span className="text-xs font-extrabold text-[#E6DFC7]">{item.savings}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      {/* Product Tag & Case Study Trigger */}
                      <div className="flex items-center justify-between gap-2 mb-3 pt-2.5 border-t border-[#E0C46B]/15">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            if (onOpenQuoteModal) onOpenQuoteModal(item.productUsed);
                          }}
                          className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#243A5E]/20 text-[#E6DFC7] border border-[#243A5E]/30 text-[10px] font-semibold hover:bg-[#243A5E]/30"
                        >
                          <Flame className="w-3 h-3 text-[#E6DFC7]" />
                          {item.productUsed}
                        </button>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedCaseStudy(item);
                          }}
                          className="inline-flex items-center gap-1 text-[10px] font-bold text-[#F3D373] hover:underline"
                        >
                          <FileText className="w-3 h-3" />
                          Case Study
                        </button>
                      </div>

                      {/* Client Profile */}
                      <div className="flex items-center gap-2.5 pt-2 border-t border-[#E0C46B]/15">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#E0C46B] to-[#C99C33] text-[#4A4226] font-serif-heading font-black text-xs flex items-center justify-center shrink-0 shadow-md">
                          {item.initials}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1">
                            <h4 className="text-xs font-bold text-white truncate">{item.name}</h4>
                            {item.verified && (
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#243A5E] shrink-0" title="Verified Client" />
                            )}
                          </div>
                          <p className="text-[11px] text-[#E0C46B] truncate">{item.title}, {item.company}</p>
                          <div className="flex items-center gap-1 text-[10px] text-[#DDD5BC]">
                            <MapPin className="w-3 h-3 text-[#E0C46B]" />
                            {item.location}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* VIEW MODE 2: STEP CAROUSEL VIEW */}
        {viewMode === 'carousel' && filteredTestimonials.length > 0 && (
          <div className="relative">
            
            {/* Testimonial Cards Grid */}
            <div className={`grid grid-cols-1 ${getVisibleCards().length === 2 ? 'md:grid-cols-2' : getVisibleCards().length >= 3 ? 'md:grid-cols-2 lg:grid-cols-3' : ''} gap-6`}>
              {getVisibleCards().map(({ item }, idx) => (
                <div
                  key={`${item.id}-${idx}`}
                  className="bg-gradient-to-b from-[#5E5431]/90 to-[#4A4226]/95 border border-[#E0C46B]/30 rounded-2xl p-6 flex flex-col justify-between shadow-xl hover:border-[#E0C46B] transition-all duration-300 group hover:-translate-y-1 relative"
                >
                  {/* Top Header: Quote Icon & Rating Badge */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <Quote className="w-8 h-8 text-[#E0C46B]/40 group-hover:text-[#E0C46B] transition-colors" />
                      <div className="flex items-center gap-1.5 bg-[#4A4226] px-3 py-1 rounded-full border border-[#E0C46B]/40 shadow-sm">
                        <Star className="w-3.5 h-3.5 fill-[#F3D373] stroke-[#F3D373]" />
                        <span className="text-xs font-extrabold text-[#F3D373]">{item.rating.toFixed(1)} / 5.0</span>
                      </div>
                    </div>

                    {/* Key Metrics Chips */}
                    <div className="grid grid-cols-2 gap-2 mb-5">
                      <div className="bg-[#4A4226]/80 border border-[#E0C46B]/20 rounded-lg p-2 text-left">
                        <span className="block text-[10px] text-[#DDD5BC] uppercase font-bold">Lab GCV</span>
                        <span className="text-xs font-extrabold text-[#F3D373]">{item.gcv}</span>
                      </div>
                      <div className="bg-[#4A4226]/80 border border-[#243A5E]/30 rounded-lg p-2 text-left">
                        <span className="block text-[10px] text-[#DDD5BC] uppercase font-bold">Verified Impact</span>
                        <span className="text-xs font-extrabold text-[#E6DFC7]">{item.savings}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    {/* Interactive Product & Case Study Action Tags */}
                    <div className="flex items-center justify-between gap-2 mb-4 pt-3 border-t border-[#E0C46B]/15">
                      <button
                        onClick={() => onOpenQuoteModal && onOpenQuoteModal(item.productUsed)}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#243A5E]/20 text-[#E6DFC7] border border-[#243A5E]/30 text-[11px] font-semibold hover:bg-[#243A5E]/30 transition-colors"
                        title="Click to request quote for this fuel type"
                      >
                        <Flame className="w-3 h-3 text-[#E6DFC7]" />
                        {item.productUsed}
                      </button>

                      <button
                        onClick={() => setSelectedCaseStudy(item)}
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-[#F3D373] hover:underline"
                      >
                        <FileText className="w-3 h-3" />
                        Case Study
                      </button>
                    </div>

                    {/* Client Profile */}
                    <div className="flex items-center gap-3 pt-3 border-t border-[#E0C46B]/15">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E0C46B] to-[#C99C33] text-[#4A4226] font-serif-heading font-black text-sm flex items-center justify-center shrink-0 shadow-md">
                        {item.initials}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5">
                          <h4 className="text-sm font-bold text-white truncate">{item.name}</h4>
                          {item.verified && (
                            <CheckCircle2 className="w-4 h-4 text-[#243A5E] shrink-0" title="Verified Client" />
                          )}
                        </div>
                        <p className="text-xs text-[#E0C46B] truncate">{item.title}, {item.company}</p>
                        <div className="flex items-center gap-1 text-[11px] text-[#DDD5BC] mt-0.5">
                          <MapPin className="w-3 h-3 text-[#E0C46B]" />
                          {item.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Controls */}
            {filteredTestimonials.length > 1 && (
              <div className="flex items-center justify-between mt-8">
                {/* Pagination Dots */}
                <div className="flex gap-2 max-w-[200px] overflow-x-auto py-1">
                  {filteredTestimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx === currentIndex ? 'w-8 bg-[#E0C46B]' : 'w-2 bg-[#E0C46B]/30 hover:bg-[#E0C46B]/60'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Arrow Controls */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={handlePrev}
                    className="p-3 rounded-full bg-[#5E5431] border border-[#E0C46B]/30 text-[#E0C46B] hover:bg-[#E0C46B] hover:text-[#4A4226] transition-all shadow-md active:scale-95"
                    aria-label="Previous Testimonial"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-3 rounded-full bg-[#5E5431] border border-[#E0C46B]/30 text-[#E0C46B] hover:bg-[#E0C46B] hover:text-[#4A4226] transition-all shadow-md active:scale-95"
                    aria-label="Next Testimonial"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}

          </div>
        )}

        {/* VIEW MODE 3: GRID VIEW (ALL FILTERED REVIEWS) */}
        {viewMode === 'grid' && filteredTestimonials.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTestimonials.map((item) => (
              <div
                key={item.id}
                className="bg-gradient-to-b from-[#5E5431]/90 to-[#4A4226]/95 border border-[#E0C46B]/30 rounded-2xl p-6 flex flex-col justify-between shadow-xl hover:border-[#E0C46B] transition-all duration-300 group hover:-translate-y-1"
              >
                <div>
                  {/* Quote Icon & Star Rating Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <Quote className="w-8 h-8 text-[#E0C46B]/40 group-hover:text-[#E0C46B] transition-colors" />
                    <div className="flex items-center gap-1.5 bg-[#4A4226] px-3 py-1 rounded-full border border-[#E0C46B]/40 shadow-sm">
                      <Star className="w-3.5 h-3.5 fill-[#F3D373] stroke-[#F3D373]" />
                      <span className="text-xs font-extrabold text-[#F3D373]">{item.rating.toFixed(1)} / 5.0</span>
                    </div>
                  </div>

                  {/* Key Metrics Chips */}
                  <div className="grid grid-cols-2 gap-2 mb-5">
                    <div className="bg-[#4A4226]/80 border border-[#E0C46B]/20 rounded-lg p-2 text-left">
                      <span className="block text-[10px] text-[#DDD5BC] uppercase font-bold">Lab GCV</span>
                      <span className="text-xs font-extrabold text-[#F3D373]">{item.gcv}</span>
                    </div>
                    <div className="bg-[#4A4226]/80 border border-[#243A5E]/30 rounded-lg p-2 text-left">
                      <span className="block text-[10px] text-[#DDD5BC] uppercase font-bold">Verified Impact</span>
                      <span className="text-xs font-extrabold text-[#E6DFC7]">{item.savings}</span>
                    </div>
                  </div>
                </div>

                <div>
                  {/* Product Tag & Case Study Action */}
                  <div className="flex items-center justify-between gap-2 mb-4 pt-3 border-t border-[#E0C46B]/15">
                    <button
                      onClick={() => onOpenQuoteModal && onOpenQuoteModal(item.productUsed)}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#243A5E]/20 text-[#E6DFC7] border border-[#243A5E]/30 text-[11px] font-semibold hover:bg-[#243A5E]/30 transition-colors"
                      title="Click to request quote for this fuel type"
                    >
                      <Flame className="w-3 h-3 text-[#E6DFC7]" />
                      {item.productUsed}
                    </button>

                    <button
                      onClick={() => setSelectedCaseStudy(item)}
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-[#F3D373] hover:underline"
                    >
                      <FileText className="w-3 h-3" />
                      Case Study
                    </button>
                  </div>

                  {/* Client Profile */}
                  <div className="flex items-center gap-3 pt-3 border-t border-[#E0C46B]/15">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E0C46B] to-[#C99C33] text-[#4A4226] font-serif-heading font-black text-sm flex items-center justify-center shrink-0 shadow-md">
                      {item.initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <h4 className="text-sm font-bold text-white truncate">{item.name}</h4>
                        {item.verified && (
                          <CheckCircle2 className="w-4 h-4 text-[#243A5E] shrink-0" title="Verified Client" />
                        )}
                      </div>
                      <p className="text-xs text-[#E0C46B] truncate">{item.title}, {item.company}</p>
                      <div className="flex items-center gap-1 text-[11px] text-[#DDD5BC] mt-0.5">
                        <MapPin className="w-3 h-3 text-[#E0C46B]" />
                        {item.location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* MODAL 1: DETAILED VERIFIED CASE STUDY MODAL */}
      {selectedCaseStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md text-left animate-fadeIn">
          <div className="bg-[#4A4226] border border-[#E0C46B]/40 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative text-white max-h-[90vh] overflow-y-auto">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedCaseStudy(null)}
              className="absolute right-4 top-4 p-2 rounded-full bg-[#4A4226] text-[#E6DFC7] hover:text-white border border-[#E0C46B]/30 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-start gap-4 mb-6 pr-8">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#E0C46B] to-[#C99C33] text-[#4A4226] font-serif-heading font-black text-xl flex items-center justify-center shrink-0 shadow-lg">
                {selectedCaseStudy.initials}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#243A5E]/20 text-[#E6DFC7] border border-[#243A5E]/40 text-[10px] font-bold uppercase tracking-wider">
                    Verified B2B Client Case Study
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-[#243A5E]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">{selectedCaseStudy.company}</h3>
                <p className="text-xs text-[#E0C46B]">{selectedCaseStudy.name} ({selectedCaseStudy.title}) — {selectedCaseStudy.location}</p>
              </div>
            </div>

            {/* Metrics Breakdown */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              <div className="bg-[#4A4226] p-3 rounded-xl border border-[#E0C46B]/20">
                <span className="block text-[10px] text-[#DDD5BC] uppercase font-bold">Tested GCV</span>
                <span className="text-sm font-extrabold text-[#F3D373]">{selectedCaseStudy.gcv}</span>
              </div>
              <div className="bg-[#4A4226] p-3 rounded-xl border border-[#243A5E]/30">
                <span className="block text-[10px] text-[#DDD5BC] uppercase font-bold">Verified Impact</span>
                <span className="text-sm font-extrabold text-[#E6DFC7]">{selectedCaseStudy.savings}</span>
              </div>
              <div className="bg-[#4A4226] p-3 rounded-xl border border-[#E0C46B]/20">
                <span className="block text-[10px] text-[#DDD5BC] uppercase font-bold">Monthly Supply</span>
                <span className="text-sm font-extrabold text-white">{selectedCaseStudy.monthlyVolume}</span>
              </div>
              <div className="bg-[#4A4226] p-3 rounded-xl border border-[#E0C46B]/20">
                <span className="block text-[10px] text-[#DDD5BC] uppercase font-bold">Boiler Setup</span>
                <span className="text-xs font-bold text-[#E0C46B] truncate">{selectedCaseStudy.boilerType}</span>
              </div>
            </div>

            {/* Full Review Quote */}
            <div className="bg-[#4A4226]/80 p-4 rounded-xl border border-[#E0C46B]/20 mb-6 italic text-sm text-[#F7F1E4] leading-relaxed">
              "{selectedCaseStudy.review}"
            </div>

            {/* Case Study Details */}
            <div className="mb-6">
              <h4 className="text-xs font-extrabold text-[#F3D373] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#243A5E]" />
                Technical Implementation & Impact Summary
              </h4>
              <p className="text-xs sm:text-sm text-[#E6DFC7] leading-relaxed font-light">
                {selectedCaseStudy.caseStudy}
              </p>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-[#E0C46B]/20">
              <span className="text-xs text-[#DDD5BC]">
                Product: <strong className="text-white">{selectedCaseStudy.productUsed}</strong>
              </span>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => setSelectedCaseStudy(null)}
                  className="px-4 py-2.5 rounded-xl bg-[#4A4226] text-[#E6DFC7] text-xs font-bold border border-[#E0C46B]/20 hover:text-white"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const prod = selectedCaseStudy.productUsed;
                    setSelectedCaseStudy(null);
                    if (onOpenQuoteModal) onOpenQuoteModal(prod);
                  }}
                  className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#E0C46B] to-[#C99C33] text-[#4A4226] text-xs font-bold uppercase tracking-wider shadow-lg hover:brightness-110"
                >
                  Request Quote for this Fuel
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* MODAL 2: SUBMIT CLIENT REVIEW FORM */}
      {isSubmitModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md text-left animate-fadeIn">
          <div className="bg-[#4A4226] border border-[#E0C46B]/40 rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative text-white max-h-[90vh] overflow-y-auto">
            
            {/* Close Button */}
            <button
              onClick={() => setIsSubmitModalOpen(false)}
              className="absolute right-4 top-4 p-2 rounded-full bg-[#4A4226] text-[#E6DFC7] hover:text-white border border-[#E0C46B]/30 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl sm:text-2xl font-bold font-serif-heading text-white mb-2">
              Share Your Client Experience
            </h3>
            <p className="text-xs text-[#DDD5BC] mb-6">
              Your feedback helps us continuously improve biomass fuel quality & bulk supply services across Gujarat.
            </p>

            {submitSuccess ? (
              <div className="bg-[#4A4226] border border-[#243A5E] rounded-xl p-8 text-center my-4 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#243A5E] mx-auto animate-bounce" />
                <h4 className="text-lg font-bold text-white">Thank You for Your Feedback!</h4>
                <p className="text-xs text-[#E6DFC7]">
                  Your review has been submitted to our Quality Assurance team and will be verified shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#E0C46B] mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Shah"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#4A4226] border border-[#E0C46B]/30 text-white placeholder-[#C2B899] text-xs focus:outline-none focus:border-[#E0C46B]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#E0C46B] mb-1">Company / Plant Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Shah Ceramics Ltd."
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#4A4226] border border-[#E0C46B]/30 text-white placeholder-[#C2B899] text-xs focus:outline-none focus:border-[#E0C46B]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#E0C46B] mb-1">Location (City, Gujarat) *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Morbi, Gujarat"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#4A4226] border border-[#E0C46B]/30 text-white placeholder-[#C2B899] text-xs focus:outline-none focus:border-[#E0C46B]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#E0C46B] mb-1">Industry Category</label>
                    <select
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#4A4226] border border-[#E0C46B]/30 text-white text-xs focus:outline-none focus:border-[#E0C46B]"
                    >
                      {industries.filter(i => i !== 'All').map((ind) => (
                        <option key={ind} value={ind} className="bg-[#4A4226] text-white">
                          {ind}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#E0C46B] mb-1">Product Supplied</label>
                  <select
                    value={formData.productUsed}
                    onChange={(e) => setFormData({ ...formData, productUsed: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#4A4226] border border-[#E0C46B]/30 text-white text-xs focus:outline-none focus:border-[#E0C46B]"
                  >
                    <option value="90mm Biomass Briquettes" className="bg-[#4A4226]">90mm Biomass Briquettes</option>
                    <option value="70mm Biomass Briquettes" className="bg-[#4A4226]">70mm Biomass Briquettes</option>
                    <option value="8mm Premium Wood Pellets" className="bg-[#4A4226]">8mm Premium Wood Pellets</option>
                    <option value="Groundnut Shell Briquettes" className="bg-[#4A4226]">Groundnut Shell Briquettes</option>
                    <option value="Sawdust Bio Pellets" className="bg-[#4A4226]">Sawdust Bio Pellets</option>
                    <option value="Agro Waste Pellets" className="bg-[#4A4226]">Agro Waste Pellets</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#E0C46B] mb-1">Overall Rating</label>
                  <div className="flex items-center gap-2 bg-[#4A4226] p-2.5 rounded-xl border border-[#E0C46B]/30">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setFormData({ ...formData, rating: star })}
                        className="p-1 focus:outline-none"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            star <= formData.rating
                              ? 'fill-[#F3D373] stroke-[#F3D373]'
                              : 'text-gray-500'
                          }`}
                        />
                      </button>
                    ))}
                    <span className="text-xs font-bold text-[#F3D373] ml-2">
                      {formData.rating}.0 / 5.0
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#E0C46B] mb-1">Your Review & Savings Feedback *</label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Share how Shiren Bioenergy fuel performed in your boilers, steam consistency, GCV, and delivery experience..."
                    value={formData.review}
                    onChange={(e) => setFormData({ ...formData, review: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#4A4226] border border-[#E0C46B]/30 text-white placeholder-[#C2B899] text-xs focus:outline-none focus:border-[#E0C46B]"
                  />
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="allowReference"
                    checked={formData.allowReferenceCall}
                    onChange={(e) => setFormData({ ...formData, allowReferenceCall: e.target.checked })}
                    className="rounded text-[#E0C46B] focus:ring-0"
                  />
                  <label htmlFor="allowReference" className="text-xs text-[#DDD5BC]">
                    I agree to be listed as a verified reference for prospective B2B clients
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#E0C46B] to-[#C99C33] text-[#4A4226] font-bold text-xs uppercase tracking-wider shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Submit Verified Review
                </button>
              </form>
            )}

          </div>
        </div>
      )}

    </section>
  );
}

