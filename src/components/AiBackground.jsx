import React, { useEffect, useRef } from 'react';

export default function AiBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle nodes for subtle electric blue / teal neural effect
    const nodeCount = Math.min(Math.floor(width / 32), 40);
    const nodes = [];

    const colors = [
      'rgba(0, 240, 255, ',   // Electric cyan
      'rgba(56, 189, 248, ',  // Sky blue
      'rgba(52, 211, 153, ',  // Emerald/Teal green hint
      'rgba(96, 165, 250, '   // Soft blue
    ];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.5 + 1,
        colorPrefix: colors[i % colors.length],
        alpha: Math.random() * 0.45 + 0.2
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Connect nodes
      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i];
        
        n1.x += n1.vx;
        n1.y += n1.vy;

        if (n1.x < 0 || n1.x > width) n1.vx *= -1;
        if (n1.y < 0 || n1.y > height) n1.vy *= -1;

        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 240, 255, ${0.12 * (1 - dist / 140)})`;
            ctx.lineWidth = 0.75;
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.stroke();
          }
        }

        // Draw particle node
        ctx.beginPath();
        ctx.arc(n1.x, n1.y, n1.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${n1.colorPrefix}${n1.alpha})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Deep atmospheric glowing orbs (electric blue, cyan, subtle teal/green) */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* Top-center hero cyan aura */}
        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-cyan-500/[0.08] rounded-full blur-[140px]"></div>
        
        {/* Top-left subtle emerald/teal atmospheric glow */}
        <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-emerald-500/[0.05] rounded-full blur-[150px]"></div>
        
        {/* Right electric blue glow */}
        <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-blue-600/[0.08] rounded-full blur-[160px]"></div>
        
        {/* Center-bottom subtle indigo glow */}
        <div className="absolute bottom-1/4 left-1/3 w-[600px] h-[600px] bg-indigo-600/[0.06] rounded-full blur-[170px]"></div>
      </div>

      {/* Dynamic Canvas Particles */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0 opacity-45"
        aria-hidden="true"
      />
    </>
  );
}
