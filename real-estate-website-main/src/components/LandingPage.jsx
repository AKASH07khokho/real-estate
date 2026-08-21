import { useEffect, useRef, useState } from 'react';
import './LandingPage.css';
import LogoImg from '../assets/images/logo.jpg';

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

    // 3D Land Plots data (flat, wider)
    const plots = [
      { x: 0.10, baseY: 1, w: 0.15, h: 0.05, depth: 0.08, color: '#2d4c1e', accent: '#4ade80' },
      { x: 0.30, baseY: 1, w: 0.12, h: 0.03, depth: 0.10, color: '#1a3311', accent: '#22c55e' },
      { x: 0.50, baseY: 1, w: 0.18, h: 0.06, depth: 0.07, color: '#3f6215', accent: '#84cc16' },
      { x: 0.75, baseY: 1, w: 0.14, h: 0.04, depth: 0.09, color: '#2d4c1e', accent: '#4ade80' },
    ];

    let t = 0;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // Background gradient
      const bg = ctx.createLinearGradient(0, 0, 0, H);
      bg.addColorStop(0, '#041006');
      bg.addColorStop(0.5, '#0b2611');
      bg.addColorStop(1, '#113516');
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

      // Draw 3D Land Plots
      plots.forEach((p) => {
        const bx = p.x * W;
        const bw = p.w * W;
        const bh = p.h * H;
        const bd = p.depth * W;
        const by = H * 0.78;
        const topY = by - bh;
        const sway = Math.sin(t * 0.005 + bx) * 0.5;

        // Side face (3D depth)
        ctx.beginPath();
        ctx.moveTo(bx + bw + sway, topY);
        ctx.lineTo(bx + bw + bd + sway, topY - bd * 0.4);
        ctx.lineTo(bx + bw + bd + sway, by - bd * 0.4);
        ctx.lineTo(bx + bw + sway, by);
        ctx.closePath();
        const sideGrd = ctx.createLinearGradient(bx + bw, 0, bx + bw + bd, 0);
        sideGrd.addColorStop(0, 'rgba(30, 80, 40, 0.9)');
        sideGrd.addColorStop(1, 'rgba(15, 50, 20, 0.6)');
        ctx.fillStyle = sideGrd;
        ctx.fill();

        // Front face
        const frontGrd = ctx.createLinearGradient(bx, topY, bx + bw, topY);
        frontGrd.addColorStop(0, '#1c3d14');
        frontGrd.addColorStop(0.5, '#2e5b22');
        frontGrd.addColorStop(1, '#1c3d14');
        ctx.fillStyle = frontGrd;
        ctx.fillRect(bx + sway, topY, bw, bh);

        // Top face (Grass)
        ctx.beginPath();
        ctx.moveTo(bx + sway, topY);
        ctx.lineTo(bx + bd + sway, topY - bd * 0.4);
        ctx.lineTo(bx + bw + bd + sway, topY - bd * 0.4);
        ctx.lineTo(bx + bw + sway, topY);
        ctx.closePath();
        ctx.fillStyle = p.color;
        ctx.fill();

        // Accent border (Plot boundaries)
        ctx.strokeStyle = p.accent;
        ctx.lineWidth = 2;
        ctx.stroke();

        // Draw simple trees/plants on the plot
        const numTrees = Math.floor(bw / 30);
        for(let i=0; i<numTrees; i++) {
            const tx = bx + sway + bd/2 + 10 + i * 25;
            const ty = topY - bd*0.2;
            
            // Trunk
            ctx.fillStyle = '#4a3018';
            ctx.fillRect(tx - 2, ty - 15, 4, 15);
            
            // Leaves
            ctx.beginPath();
            ctx.arc(tx, ty - 20, 8, 0, Math.PI * 2);
            ctx.fillStyle = '#22c55e';
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
        {/* Company Header */}
        <div className="landing-company-header">
          <img src={LogoImg} alt="NIMI HOUSING Logo" className="landing-logo" />
          <h2 className="company-name-title">Welcome to NIMI HOUSING</h2>
        </div>

        {/* Top badge */}
        <div className="landing-badge">
          <span className="badge-dot" />
          NEW LAND PROPERTIES
        </div>

        {/* Main heading */}
        <h1 className="landing-title">
          <span className="title-line1">NEW LAND</span>
          <span className="title-line2">Properties</span>
          <span className="title-line3">Available Now</span>
        </h1>

        {/* Subtitle */}
        <p className="landing-sub">
          Where luxury meets nature. Discover prime land properties<br />
          ready for your dream project.
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
        <button className="landing-cta" onClick={() => { 
          setAnimStage(2); 
          setTimeout(() => {
            onEnter();
            window.location.href = '/signup';
          }, 800); 
        }}>
          <span className="cta-text">Register Your Interest</span>
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
