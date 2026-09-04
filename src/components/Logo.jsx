import React from 'react';
import { Link } from 'react-router-dom';
import logoIcon from '../assets/client-logo-icon.png';

export default function Logo({ 
  variant = 'light', 
  size = 'normal', 
  showTagline = true 
}) {
  const isLight = variant === 'light';

  const logoHeightClass = {
    small: 'h-11 sm:h-13',
    normal: 'h-15 sm:h-18 lg:h-[76px]',
    large: 'h-22 sm:h-26 lg:h-32'
  }[size] || 'h-15 sm:h-18 lg:h-[76px]';

  return (
    <Link 
      to="/" 
      className="inline-flex items-center gap-4 group focus:outline-none select-none" 
      aria-label="Shiren Bioenergy Homepage"
    >
      {/* Official Flame Emblem - 100% Full Uncropped Icon with Natural Brightness & Rich Contrast */}
      <div className="relative flex items-center justify-center shrink-0">
        <div className="absolute -inset-2 bg-[#E0C46B]/20 rounded-full blur-md group-hover:bg-[#E0C46B]/40 transition-all duration-300 pointer-events-none"></div>
        <img 
          src={logoIcon} 
          alt="Shiren Bioenergy Logo Emblem" 
          className={`${logoHeightClass} w-auto object-contain relative z-10 transition-transform duration-300 group-hover:scale-105`}
          style={{
            mixBlendMode: isLight ? 'screen' : 'normal',
            filter: isLight 
              ? 'brightness(1.05) contrast(1.18) drop-shadow(0 2px 8px rgba(0,0,0,0.5))' 
              : 'brightness(1.02) contrast(1.08)'
          }}
        />
      </div>

      {/* High-Contrast Clear & Larger Brand Typography */}
      <div className="flex flex-col text-left justify-center py-0.5">
        <span className={`font-serif-heading font-black tracking-[0.16em] leading-none transition-colors duration-300 ${
          size === 'small' ? 'text-xl sm:text-2xl' : size === 'large' ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl lg:text-[33px]'
        } ${
          isLight 
            ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#FFFDF7] via-[#F3D373] to-[#D4A836] group-hover:from-white group-hover:to-[#F3D373]' 
            : 'text-[#4D4428] group-hover:text-[#564D2D]'
        } drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]`}>
          SHIREN
        </span>
        
        {showTagline && (
          <span className={`font-extrabold tracking-[0.32em] uppercase mt-1 transition-colors duration-300 ${
            size === 'small' ? 'text-[10px] sm:text-[11px]' : size === 'large' ? 'text-[13px] sm:text-[15px]' : 'text-[12px] sm:text-[14px]'
          } ${
            isLight 
              ? 'text-[#F7F1E4] group-hover:text-[#E0C46B] opacity-95' 
              : 'text-[#564D2D] group-hover:text-[#4D4428]'
          }`}>
            BIOENERGY
          </span>
        )}
      </div>
    </Link>
  );
}
