import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { Menu, X, Phone, MessageSquare, ArrowRight, ChevronDown } from 'lucide-react';

export default function Header({ onOpenQuoteModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // oxlint-disable-next-line react/set-state-in-effect
    setIsMobileMenuOpen(false);
    // oxlint-disable-next-line react/set-state-in-effect
    setIsProductsDropdownOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT US', path: '/about' },
    { 
      name: 'PRODUCTS', 
      path: '/products',
      dropdown: [
        { name: 'Biomass Pellets', path: '/products/pellets' },
        { name: 'Biomass Briquettes', path: '/products/briquettes' },
      ] 
    },
    { name: 'APPLICATIONS', path: '/industries' },
    { name: 'SUPPLY PROCESS', path: '/supply-process' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#4A4226]/95 backdrop-blur-md shadow-xl py-3 border-b border-[#B78A2D]/40' 
        : 'bg-[#4A4226] py-4 border-b border-[#B78A2D]/30'
    }`}>
      {/* Top micro-bar for quick contact info */}
      <div className="hidden lg:block bg-[#C4B78E] text-[#1C180E] py-2 text-xs font-semibold border-b border-[#A37B24]/40 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5">
              <span className="text-[#2C2718] font-black uppercase tracking-wider">Location:</span> 
              <span className="text-[#1C180E] font-bold">Gandhidham, Kutch, Gujarat – 370201</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#2C2718]" />
              <a href="tel:+919409396503" className="text-[#1C180E] hover:text-[#000000] transition-colors font-extrabold">+91 94093 96503</a>
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-[#1C180E] font-extrabold tracking-wide text-[12.5px] drop-shadow-[0_0_1px_rgba(255,255,255,0.4)]">
              Reliable Industrial Biomass Fuel Partner
            </span>
            <span className="text-[#4A4226] font-bold">|</span>
            <a 
              href="https://wa.me/919409396503?text=Hello%20Shiren%20Bioenergy%2C%20I%20am%20interested%20in%20biomass%20fuel%20supply.%20I%20would%20like%20to%20discuss%20my%20requirement."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#104D27] hover:bg-[#0A381C] text-white px-3 py-1 rounded-full text-xs font-extrabold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 border border-[#25D366]/40"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#25D366] fill-[#25D366]/30" /> 
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo with Soft Ambient Illumination */}
          <div className="relative group flex items-center">
            <div className="absolute -inset-3 bg-gradient-to-r from-[#B78A2D]/25 via-[#564D2D]/35 to-transparent rounded-full blur-lg opacity-80 group-hover:opacity-100 transition duration-500 pointer-events-none"></div>
            <Logo variant="light" size="normal" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-5">
            {navItems.map((item) => (
              item.dropdown ? (
                <div 
                  key={item.name} 
                  className="relative group"
                  onMouseEnter={() => setIsProductsDropdownOpen(true)}
                  onMouseLeave={() => setIsProductsDropdownOpen(false)}
                >
                  <button 
                    className={`flex items-center gap-1 text-xs font-bold tracking-widest uppercase px-3 py-2 rounded-md transition-colors ${
                      location.pathname.startsWith('/products')
                        ? 'text-[#E0C46B] bg-[#564D2D]/40 border-b-2 border-[#B78A2D]'
                        : 'text-[#F7F1E4] hover:text-[#E0C46B] hover:bg-[#564D2D]/20'
                    }`}
                  >
                    {item.name}
                    <ChevronDown className="w-3.5 h-3.5 text-[#E0C46B] group-hover:rotate-180 transition-transform" />
                  </button>
                  
                  {/* Dropdown Menu */}
                  <div className={`absolute top-full left-0 w-56 bg-[#4A4226] shadow-2xl rounded-xl border border-[#B78A2D]/40 py-2 transition-all duration-200 ${
                    isProductsDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                  }`}>
                    {item.dropdown.map((dropItem) => (
                      <NavLink
                        key={dropItem.name}
                        to={dropItem.path}
                        className={({ isActive }) =>
                          `block px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                            isActive
                              ? 'text-[#E0C46B] bg-[#564D2D] border-l-4 border-[#B78A2D]'
                              : 'text-[#F7F1E4] hover:text-[#E0C46B] hover:bg-[#564D2D]/50'
                          }`
                        }
                      >
                        {dropItem.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              ) : (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-xs font-bold tracking-widest uppercase px-3 py-2 rounded-md transition-colors ${
                      isActive
                        ? 'text-[#E0C46B] bg-[#564D2D]/40 border-b-2 border-[#B78A2D]'
                        : 'text-[#F7F1E4] hover:text-[#E0C46B] hover:bg-[#564D2D]/20'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              )
            ))}
          </nav>

          {/* Desktop Right CTA: GET IN TOUCH > */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={onOpenQuoteModal}
              className="inline-flex items-center gap-2 bg-[#564D2D] hover:bg-[#6B5D38] text-[#FFFDF7] px-5 py-2.5 rounded-full text-xs font-extrabold tracking-widest uppercase shadow-md hover:shadow-lg transition-all duration-200 border border-[#B78A2D]/60 group"
            >
              <span>GET IN TOUCH</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#E0C46B] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={onOpenQuoteModal}
              className="bg-[#564D2D] text-[#E0C46B] text-[11px] font-extrabold uppercase px-3 py-1.5 rounded-full border border-[#B78A2D]"
            >
              GET IN TOUCH
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#FFFDF7] hover:bg-[#564D2D]/50 rounded-md focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6 text-[#E0C46B]" /> : <Menu className="w-6 h-6 text-[#E0C46B]" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#4A4226] border-t border-[#B78A2D]/40 px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top-2 text-left">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              item.dropdown ? (
                <div key={item.name} className="py-1">
                  <div className="text-[10px] font-extrabold text-[#E0C46B] uppercase tracking-widest px-3 py-1">
                    {item.name}
                  </div>
                  {item.dropdown.map((dropItem) => (
                    <NavLink
                      key={dropItem.name}
                      to={dropItem.path}
                      className={({ isActive }) =>
                        `block px-6 py-2 rounded-md text-sm font-bold uppercase tracking-wider ${
                          isActive ? 'bg-[#564D2D] text-[#E0C46B]' : 'text-[#F7F1E4] hover:bg-[#564D2D]/40'
                        }`
                      }
                    >
                      {dropItem.name}
                    </NavLink>
                  ))}
                </div>
              ) : (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `block px-4 py-2.5 rounded-md text-sm font-bold uppercase tracking-wider transition-colors ${
                      isActive
                        ? 'bg-[#564D2D] text-[#E0C46B]'
                        : 'text-[#F7F1E4] hover:bg-[#564D2D]/40'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              )
            ))}
            
            <div className="pt-4 border-t border-[#B78A2D]/30 flex flex-col gap-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full bg-[#564D2D] text-[#FFFDF7] py-3 rounded-full font-extrabold text-xs uppercase tracking-widest text-center flex justify-center items-center gap-2 border border-[#B78A2D]"
              >
                GET IN TOUCH
                <ArrowRight className="w-4 h-4 text-[#E0C46B]" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
