import React from 'react';

export default function BrandWaveMotif({ _position = 'bottom', className = '' }) {
  // Renders the signature Green + Gold wave motif from the visiting card
  return (
    <div className={`w-full overflow-hidden leading-none z-10 ${className}`}>
      <svg
        viewBox="0 0 1440 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-8 sm:h-12 md:h-16 object-cover"
        preserveAspectRatio="none"
      >
        {/* Deep Green Wave */}
        <path
          d="M0 100 C 400 30, 900 120, 1440 40 L 1440 100 L 0 100 Z"
          fill="#4A4226"
        />
        {/* Premium Gold Accent Curve */}
        <path
          d="M0 90 C 400 20, 900 110, 1440 30 C 1200 65, 600 25, 0 75 Z"
          fill="#B38A2A"
          opacity="0.95"
        />
        {/* Forest Green Base Layer */}
        <path
          d="M0 100 C 350 45, 950 100, 1440 60 L 1440 100 L 0 100 Z"
          fill="#564D2D"
        />
      </svg>
    </div>
  );
}
