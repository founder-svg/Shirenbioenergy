import React, { useEffect, useState, useRef } from 'react';
import pelletCursorImg from '../assets/pellet-cursor.svg';

export default function PelletCursor() {
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
    const particleCount = 12; // 12 pellets splash outward on tap/click
    const newParticles = [];
    const now = Date.now();

    for (let i = 0; i < particleCount; i++) {
      const angle = (Math.PI * 2 * i) / particleCount + (Math.random() * 0.4 - 0.2);
      const speed = 70 + Math.random() * 90; // Burst velocity speed
      const vx = Math.cos(angle) * speed;
      const vy = Math.sin(angle) * speed - 40; // Upward initial explosion force
      const rotation = Math.random() * 360;
      const rotationSpeed = (Math.random() - 0.5) * 520;
      const size = 20 + Math.random() * 18; // Pellet size: 20px to 38px

      newParticles.push({
        id: `${now}-${nextParticleId.current++}`,
        x,
        y,
        vx,
        vy,
        rotation,
        rotationSpeed,
        size,
        spawnTime: now
      });
    }

    setParticles((prev) => [...prev.slice(-45), ...newParticles]);
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
      setParticles((prev) => prev.filter((p) => current - p.spawnTime < 950));
    }, 50);

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
              isMouseDown ? 0.8 : isHovered ? 1.35 : 1.0
            }) rotate(${isHovered ? '-15deg' : '0deg'})`,
          }}
        >
          <img
            src={pelletCursorImg}
            alt="Biomass Pellet Cursor"
            className="w-9 h-9 object-contain filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.45)]"
          />
        </div>
      )}

      {/* Interactive Biomass Pellet Splash Micro-particles */}
      <div className="fixed inset-0 pointer-events-none z-[99998] overflow-hidden">
        {particles.map((p) => {
          const age = (now - p.spawnTime) / 950; // 0 to 1 over 950ms
          if (age >= 1) return null;

          // Physics calculation: explosion outward drift + gravity drop + rotation
          const easeAge = Math.sin((age * Math.PI) / 2);
          const gravity = 80 * age * age; // Accelerating gravity drop
          const currentX = p.x + p.vx * easeAge * 0.85;
          const currentY = p.y + p.vy * easeAge * 0.85 + gravity;
          const opacity = Math.max(0, 1 - Math.pow(age, 1.4));
          const scale = (1 - age * 0.25) * (p.size / 28);
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
              <img
                src={pelletCursorImg}
                alt="Pellet Particle"
                style={{
                  width: `${p.size}px`,
                  height: `${p.size}px`,
                }}
                className="object-contain filter drop-shadow-[0_3px_6px_rgba(0,0,0,0.4)]"
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
