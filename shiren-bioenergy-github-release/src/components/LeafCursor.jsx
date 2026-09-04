import React, { useEffect, useState, useRef } from 'react';
import userLeafCutout from '../assets/user-leaf-cutout.png';

export default function LeafCursor() {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [particles, setParticles] = useState([]);
  const [isDesktop, setIsDesktop] = useState(false);
  const nextParticleId = useRef(0);

  // Check device type
  useEffect(() => {
    const checkDevice = () => {
      // Desktop has fine pointer / mouse
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

  // Function to spawn leaf pop-up particles at coordinates (x, y)
  const triggerLeafPopups = (x, y) => {
    const particleCount = 6; // 6 leaves pop up per tap/click
    const newParticles = [];
    const now = Date.now();

    for (let i = 0; i < particleCount; i++) {
      const angle = (Math.PI * 2 * i) / particleCount + (Math.random() * 0.5 - 0.25);
      const distance = 40 + Math.random() * 55; // Distance spread
      const vx = Math.cos(angle) * distance;
      const vy = Math.sin(angle) * distance - 55; // Upward float lift
      const rotation = Math.random() * 360;
      const size = 24 + Math.random() * 18; // Leaf size: 24px to 42px

      newParticles.push({
        id: `${now}-${nextParticleId.current++}`,
        x,
        y,
        vx,
        vy,
        rotation,
        size,
        spawnTime: now
      });
    }

    setParticles((prev) => [...prev.slice(-30), ...newParticles]);
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
        triggerLeafPopups(x, y);
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
    }, 80);

    return () => clearInterval(interval);
  }, [particles]);

  return (
    <>
      {/* PC Custom Leaf Pointer - Only the pure transparent leaf moves as cursor */}
      {isDesktop && cursorPos.x >= 0 && (
        <div
          className="fixed top-0 left-0 pointer-events-none z-[99999] transition-transform duration-75 ease-out select-none"
          style={{
            transform: `translate3d(${cursorPos.x - 4}px, ${cursorPos.y - 2}px, 0) scale(${
              isMouseDown ? 0.85 : isHovered ? 1.3 : 1.0
            }) rotate(${isHovered ? '-15deg' : '0deg'})`,
          }}
        >
          <img
            src={userLeafCutout}
            alt="Leaf Cursor"
            className="w-8 h-8 object-contain relative z-10 filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.35)]"
          />
        </div>
      )}

      {/* Interactive Mobile Touch & Click Leaf Pop-up Micro-particles */}
      <div className="fixed inset-0 pointer-events-none z-[99998] overflow-hidden">
        {particles.map((p) => {
          const age = (now - p.spawnTime) / 950; // 0 to 1 over 950ms
          if (age >= 1) return null;

          // Physics calculation: ease-out upward drift and rotation
          const easeAge = Math.sin((age * Math.PI) / 2);
          const currentX = p.x + p.vx * easeAge;
          const currentY = p.y + p.vy * easeAge - 30 * age;
          const opacity = Math.max(0, 1 - Math.pow(age, 1.5));
          const scale = (1 - age * 0.35) * (p.size / 28);
          const currentRotation = p.rotation + age * 160;

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
                src={userLeafCutout}
                alt="Pop-up Leaf Particle"
                style={{
                  width: `${p.size}px`,
                  height: `${p.size}px`,
                }}
                className="object-contain filter drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]"
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
