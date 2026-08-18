import { useEffect, useRef, useState } from 'react';
import './LandingPage.css';

const LandingPage = ({ onEnter }) => {
  const canvasRef = useRef(null);
  const [animStage, setAnimStage] = useState(0); // 0=intro, 1=full, 2=exiting
  const rafRef = useRef(null);

  /* ── Particle / 3D canvas ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);

    // Particles
    const PARTICLES = 120;
    const particles = Array.from({ length: PARTICLES }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 2.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.6 + 0.2,
      color: Math.random() > 0.5 ? '#d4af37' : '#ffffff',
    }));

    // 3D Buildings data
    const buildings = [
      { x: 0.08, baseY: 1, w: 0.07, h: 0.55, depth: 0.03, color: '#1a2340', accent: '#d4af37' },
      { x: 0.16, baseY: 1, w: 0.06, h: 0.70, depth: 0.025, color: '#0f1829', accent: '#c0a830' },
      { x: 0.23, baseY: 1, w: 0.08, h: 0.45, depth: 0.035, color: '#162035', accent: '#d4af37' },
      { x: 0.70, baseY: 1, w: 0.08, h: 0.50, depth: 0.03, color: '#1a2340', accent: '#d4af37' },
      { x: 0.79, baseY: 1, w: 0.06, h: 0.72, depth: 0.025, color: '#0f1829', accent: '#c0a830' },
      { x: 0.86, baseY: 1, w: 0.07, h: 0.42, depth: 0.03, color: '#162035', accent: '#d4af37' },
    ];

    let t = 0;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // Background gradient
      const bg = ctx.createLinearGradient(0, 0, 0, H);
      bg.addColorStop(0, '#020b18');
      bg.addColorStop(0.5, '#061428');
      bg.addColorStop(1, '#0a1f3a');
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, W, H);

      // Stars
      for (let s = 0; s < 60; s++) {
        const sx = ((s * 137.5 * W) % W);
        const sy = ((s * 97.3 * H * 0.6) % (H * 0.6));
        const pulse = Math.sin(t * 0.02 + s) * 0.3 + 0.7;
        ctx.beginPath();
        ctx.arc(sx, sy, 0.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${pulse * 0.7})`;
        ctx.fill();
      }

      // Ground glow
      const grd = ctx.createLinearGradient(0, H * 0.78, 0, H);
      grd.addColorStop(0, 'rgba(212,175,55,0.08)');
      grd.addColorStop(1, 'rgba(212,175,55,0)');
      ctx.fillStyle = grd;
      ctx.fillRect(0, H * 0.78, W, H * 0.22);

      // Ground line
      ctx.strokeStyle = 'rgba(212,175,55,0.3)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, H * 0.78);
      ctx.lineTo(W, H * 0.78);
      ctx.stroke();

      // Draw 3D buildings
      buildings.forEach((b) => {
        const bx = b.x * W;
        const bw = b.w * W;
        const bh = b.h * H;
        const bd = b.depth * W;
        const by = H * 0.78;
        const topY = by - bh;
        const sway = Math.sin(t * 0.008 + bx) * 1.5;

        // Side face (3D depth)
        ctx.beginPath();
        ctx.moveTo(bx + bw + sway, topY);
        ctx.lineTo(bx + bw + bd + sway, topY - bd * 0.5);
        ctx.lineTo(bx + bw + bd + sway, by - bd * 0.5);
        ctx.lineTo(bx + bw + sway, by);
        ctx.closePath();
        ctx.fillStyle = b.color.replace(')', ', 0.7)').replace('rgb', 'rgba');
        const sideGrd = ctx.createLinearGradient(bx + bw, 0, bx + bw + bd, 0);
        sideGrd.addColorStop(0, 'rgba(30,50,80,0.9)');
        sideGrd.addColorStop(1, 'rgba(10,25,50,0.6)');
        ctx.fillStyle = sideGrd;
        ctx.fill();

        // Front face
        const frontGrd = ctx.createLinearGradient(bx, topY, bx + bw, topY);
        frontGrd.addColorStop(0, '#0d1e35');
        frontGrd.addColorStop(0.5, '#162845');
        frontGrd.addColorStop(1, '#0d1e35');
        ctx.fillStyle = frontGrd;
        ctx.fillRect(bx + sway, topY, bw, bh);

        // Windows grid
        const cols = Math.floor(bw / 14);
        const rows = Math.floor(bh / 18);
        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            const wx = bx + sway + 6 + c * 14;
            const wy = topY + 8 + r * 18;
            const lit = Math.sin(t * 0.03 + r * 3 + c * 7 + bx) > 0.2;
            if (lit) {
              ctx.fillStyle = `rgba(255, 220, 100, ${Math.random() * 0.1 + 0.6})`;
            } else {
              ctx.fillStyle = 'rgba(10, 30, 60, 0.8)';
            }
            ctx.fillRect(wx, wy, 7, 10);
          }
        }

        // Rooftop accent
        ctx.strokeStyle = b.accent;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(bx + sway, topY);
        ctx.lineTo(bx + bw + sway, topY);
        ctx.stroke();

        // Antenna
        ctx.strokeStyle = 'rgba(212,175,55,0.6)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(bx + bw / 2 + sway, topY);
        ctx.lineTo(bx + bw / 2 + sway, topY - 20);
        ctx.stroke();
        // Blinking light
        if (Math.sin(t * 0.05 + bx) > 0) {
          ctx.beginPath();
          ctx.arc(bx + bw / 2 + sway, topY - 22, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(255,50,50,0.9)';
          ctx.fill();
        }
      });

      // Particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color.replace(')', `, ${p.alpha})`).replace('#', 'rgba(').replace('rgba(', 'rgba(').replace(/rgba\(([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2}), /, (_, r, g, b) => `rgba(${parseInt(r,16)},${parseInt(g,16)},${parseInt(b,16)}, `);
        ctx.fillStyle = p.color + Math.round(p.alpha * 255).toString(16).padStart(2, '0');
        ctx.fill();
      });

      // Golden light rays from center
      const cx = W / 2;
      const cy = H * 0.35;
      for (let ray = 0; ray < 8; ray++) {
        const angle = (ray / 8) * Math.PI * 2 + t * 0.003;
        const rayLen = W * 0.4;
        const rayGrd = ctx.createLinearGradient(cx, cy, cx + Math.cos(angle) * rayLen, cy + Math.sin(angle) * rayLen);
        rayGrd.addColorStop(0, 'rgba(212,175,55,0.04)');
        rayGrd.addColorStop(1, 'rgba(212,175,55,0)');
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + Math.cos(angle) * rayLen, cy + Math.sin(angle) * rayLen);
        ctx.lineWidth = 40;
        ctx.strokeStyle = rayGrd;
        ctx.stroke();
      }

      t++;
      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  // Auto-enter after 5s
  useEffect(() => {
    const t1 = setTimeout(() => setAnimStage(1), 300);
    const t2 = setTimeout(() => {
      setAnimStage(2);
      setTimeout(onEnter, 800);
    }, 5000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onEnter]);

  return (
    <div className={`landing-root ${animStage >= 1 ? 'stage-full' : ''} ${animStage === 2 ? 'stage-exit' : ''}`}>
      <canvas ref={canvasRef} className="landing-canvas" />

      <div className="landing-content">
        {/* Top badge */}
        <div className="landing-badge">
          <span className="badge-dot" />
          PREMIUM REAL ESTATE
        </div>

        {/* Main heading */}
        <h1 className="landing-title">
          <span className="title-line1">NIMI HOUSING</span>
          <span className="title-line2">&amp; Property</span>
          <span className="title-line3">Development</span>
        </h1>

        {/* Subtitle */}
        <p className="landing-sub">
          Where luxury meets vision. Discover your dream property<br />
          crafted for the life you deserve.
        </p>

        {/* Stats row */}
        <div className="landing-stats">
          <div className="stat-item">
            <span className="stat-num">500+</span>
            <span className="stat-label">Properties</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-num">12+</span>
            <span className="stat-label">Cities</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-num">98%</span>
            <span className="stat-label">Satisfied</span>
          </div>
        </div>

        {/* CTA Button */}
        <button className="landing-cta" onClick={() => { setAnimStage(2); setTimeout(onEnter, 800); }}>
          <span className="cta-text">Explore Properties</span>
          <span className="cta-arrow">→</span>
          <div className="cta-shine" />
        </button>

        <p className="landing-skip" onClick={() => { setAnimStage(2); setTimeout(onEnter, 600); }}>
          Skip intro
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="landing-scroll-hint">
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>Scroll to explore</span>
      </div>
    </div>
  );
};

export default LandingPage;
