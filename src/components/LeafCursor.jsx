import React, { useEffect, useState, useRef } from 'react';

// Custom 3D Biomass Pellet Icon Component
const BiomassPelletIcon = ({ size = 28, className = '', colorVariant = 0 }) => {
  // Variations for particle palette (wood, groundnut shell, agro pellets)
  const gradients = [
    { body: ['#D4A747', '#A87B2A', '#6E4D17', '#4A330E'], cap: ['#E6C875', '#B88E36', '#7A5A1B'] }, // Premium Wood
    { body: ['#C98A3B', '#8C5A20', '#54340C', '#362005'], cap: ['#DF9D4C', '#A46B27', '#633F11'] }, // Groundnut Shell
    { body: ['#A09838', '#6F6A22', '#454212', '#2A2808'], cap: ['#BDB548', '#867F29', '#4E4A15'] }, // Agro-Waste
  ];
  const g = gradients[colorVariant % gradients.length];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id={`pBodyGrad-${colorVariant}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={g.body[0]} />
          <stop offset="40%" stopColor={g.body[1]} />
          <stop offset="85%" stopColor={g.body[2]} />
          <stop offset="100%" stopColor={g.body[3]} />
        </linearGradient>
        <linearGradient id={`pCapGrad-${colorVariant}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={g.cap[0]} />
          <stop offset="50%" stopColor={g.cap[1]} />
          <stop offset="100%" stopColor={g.cap[2]} />
        </linearGradient>
        <filter id={`pShadow-${colorVariant}`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="1" dy="3" stdDeviation="2" floodColor="#000" floodOpacity="0.4" />
        </filter>
      </defs>
      <g filter={`url(#pShadow-${colorVariant})`}>
        {/* Pellet Cylindrical Body */}
        <rect x="12" y="9" width="16" height="23" rx="7.5" fill={`url(#pBodyGrad-${colorVariant})`} stroke="#2B1A04" strokeWidth="0.8" />
        {/* Compressed Fiber Ridges */}
        <line x1="14.5" y1="13" x2="25.5" y2="13" stroke="#FFF" strokeWidth="0.7" strokeOpacity="0.45" strokeLinecap="round" />
        <line x1="13.5" y1="18.5" x2="26.5" y2="18.5" stroke="#1F1202" strokeWidth="0.8" strokeOpacity="0.6" strokeLinecap="round" />
        <line x1="14.5" y1="24" x2="25.5" y2="24" stroke="#FFF" strokeWidth="0.7" strokeOpacity="0.35" strokeLinecap="round" />
        {/* Top Burnished Cap Highlight */}
        <ellipse cx="20" cy="10" rx="7" ry="2.3" fill={`url(#pCapGrad-${colorVariant})`} />
      </g>
    </svg>
  );
};

export default function LeafCursor() {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [particles, setParticles] = useState([]);
  const [isDesktop, setIsDesktop] = useState(false);
  const nextParticleId = useRef(0);

  // Detect desktop fine pointer vs touch device
  useEffect(() => {
    const checkDevice = () => {
      const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
      setIsDesktop(hasFinePointer);
    };
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // Track cursor movement on PC
  useEffect(() => {
    if (!isDesktop) return;

    const onMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });

      // Detect if hovering over clickable/interactive element
      const target = e.target;
      if (target) {
        const isInteractive = !!target.closest('a, button, input, select, textarea, [role="button"], .interactive, [onClick]');
        setIsHovered(isInteractive);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, [isDesktop]);

  // Function to spawn Biomass Pellet Splash burst particles at (x, y)
  const triggerPelletSplash = (x, y) => {
    const particleCount = 10; // 10 pellets splash outward on tap/click
    const newParticles = [];
    const now = Date.now();

    for (let i = 0; i < particleCount; i++) {
      const angle = (Math.PI * 2 * i) / particleCount + (Math.random() * 0.4 - 0.2);
      const speed = 60 + Math.random() * 80; // Burst velocity speed
      const vx = Math.cos(angle) * speed;
      const vy = Math.sin(angle) * speed - 35; // Upward initial explosion force
      const rotation = Math.random() * 360;
      const rotationSpeed = (Math.random() - 0.5) * 480;
      const size = 18 + Math.random() * 16; // Pellet size: 18px to 34px
      const colorVariant = Math.floor(Math.random() * 3);

      newParticles.push({
        id: `${now}-${nextParticleId.current++}`,
        x,
        y,
        vx,
        vy,
        rotation,
        rotationSpeed,
        size,
        colorVariant,
        spawnTime: now
      });
    }

    setParticles((prev) => [...prev.slice(-40), ...newParticles]);
  };

  // Handle tap / click listener for both mobile touch and desktop click
  useEffect(() => {
    const handlePointerStart = (e) => {
      setIsMouseDown(true);
      let x = 0;
      let y = 0;

      if (e.touches && e.touches.length > 0) {
        x = e.touches[0].clientX;
        y = e.touches[0].clientY;
      } else if (e.clientX !== undefined) {
        x = e.clientX;
        y = e.clientY;
      }

      if (x > 0 || y > 0) {
        triggerPelletSplash(x, y);
      }
    };

    const handlePointerEnd = () => setIsMouseDown(false);

    window.addEventListener('touchstart', handlePointerStart, { passive: true });
    window.addEventListener('mousedown', handlePointerStart);
    window.addEventListener('touchend', handlePointerEnd);
    window.addEventListener('mouseup', handlePointerEnd);

    return () => {
      window.removeEventListener('touchstart', handlePointerStart);
      window.removeEventListener('mousedown', handlePointerStart);
      window.removeEventListener('touchend', handlePointerEnd);
      window.removeEventListener('mouseup', handlePointerEnd);
    };
  }, []);

  const [now, setNow] = useState(() => Date.now());

  // Particle lifecycle cleanup animation loop
  useEffect(() => {
    if (particles.length === 0) return;

    const interval = setInterval(() => {
      const current = Date.now();
      setNow(current);
      setParticles((prev) => prev.filter((p) => current - p.spawnTime < 900));
    }, 60);

    return () => clearInterval(interval);
  }, [particles]);

  return (
    <>
      {/* PC Custom Biomass Pellet Pointer */}
      {isDesktop && cursorPos.x >= 0 && (
        <div
          className="fixed top-0 left-0 pointer-events-none z-[99999] transition-transform duration-75 ease-out select-none"
          style={{
            transform: `translate3d(${cursorPos.x - 16}px, ${cursorPos.y - 16}px, 0) scale(${
              isMouseDown ? 0.8 : isHovered ? 1.3 : 1.0
            }) rotate(${isHovered ? '-15deg' : '0deg'})`,
          }}
        >
          <BiomassPelletIcon
            size={34}
            className="filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)]"
            colorVariant={0}
          />
        </div>
      )}

      {/* Interactive Biomass Pellet Splash Micro-particles */}
      <div className="fixed inset-0 pointer-events-none z-[99998] overflow-hidden">
        {particles.map((p) => {
          const age = (now - p.spawnTime) / 900; // 0 to 1 over 900ms
          if (age >= 1) return null;

          // Physics calculation: explosion outward drift + gravity drop + rotation
          const easeAge = Math.sin((age * Math.PI) / 2);
          const gravity = 70 * age * age; // Accelerating gravity drop
          const currentX = p.x + p.vx * easeAge * 0.8;
          const currentY = p.y + p.vy * easeAge * 0.8 + gravity;
          const opacity = Math.max(0, 1 - Math.pow(age, 1.4));
          const scale = (1 - age * 0.3) * (p.size / 24);
          const currentRotation = p.rotation + (p.rotationSpeed * age);

          return (
            <div
              key={p.id}
              className="absolute pointer-events-none select-none"
              style={{
                left: `${currentX}px`,
                top: `${currentY}px`,
                opacity: opacity,
                transform: `translate(-50%, -50%) scale(${scale}) rotate(${currentRotation}deg)`,
                willChange: 'transform, opacity',
              }}
            >
              <BiomassPelletIcon
                size={p.size}
                colorVariant={p.colorVariant}
                className="filter drop-shadow-[0_3px_6px_rgba(0,0,0,0.35)]"
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
