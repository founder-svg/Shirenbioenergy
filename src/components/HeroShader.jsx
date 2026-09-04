import React, { useEffect, useRef } from 'react';

export default function HeroShader() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle nodes for fluid energy simulation
    const particles = Array.from({ length: 45 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2.5 + 1,
      color: Math.random() > 0.5 ? '#B78A2D' : '#C4B78E',
      alpha: Math.random() * 0.6 + 0.2,
    }));

    let time = 0;

    const render = () => {
      time += 0.008;
      ctx.clearRect(0, 0, width, height);

      // Gradient background
      const bgGradient = ctx.createRadialGradient(
        width * 0.6,
        height * 0.4,
        50,
        width / 2,
        height / 2,
        Math.max(width, height)
      );
      bgGradient.addColorStop(0, '#4F4729');
      bgGradient.addColorStop(0.5, '#4A4226');
      bgGradient.addColorStop(1, '#38311B');
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, width, height);

      // Flowing Energy Wave Lines (Green & Gold)
      const waveCount = 5;
      for (let i = 0; i < waveCount; i++) {
        ctx.beginPath();
        const isGold = i % 2 === 1;
        ctx.strokeStyle = isGold
          ? `rgba(183, 138, 45, ${0.15 + i * 0.05})`
          : `rgba(108, 155, 80, ${0.15 + i * 0.05})`;
        ctx.lineWidth = isGold ? 2.5 : 3.5;

        for (let x = 0; x < width; x += 15) {
          const y =
            height * 0.45 +
            Math.sin(x * 0.003 + time + i * 0.8) * 80 +
            Math.cos(x * 0.0015 - time * 0.5) * 40 +
            i * 35;
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      // Biomass Particles Floating
      particles.forEach((p) => {
        p.x += p.vx + Math.sin(time + p.y * 0.01) * 0.3;
        p.y += p.vy + Math.cos(time + p.x * 0.01) * 0.3;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowBlur = 12;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
