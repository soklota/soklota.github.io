import { useEffect, useRef } from 'react';

export default function NightSky() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let w, h, stars = [], shooters = [], raf;
    const mouse = { x: 0, y: 0 };    // target offset (-1 to 1)
    const offset = { x: 0, y: 0 };   // eased offset actually used
    const STRENGTH = 25;             // max drift in px for the closest stars

    const onMove = e => {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
    };

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      w = canvas.offsetWidth; h = canvas.offsetHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // star count scales with screen size
      stars = Array.from({ length: Math.floor((w * h) / 2500) }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.4 + 0.2,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.02 + 0.005,
      }));
    };

    const spawnShooter = () => {
      const angle = Math.PI / 4 + (Math.random() - 0.5) * 0.4; // roughly diagonal, down-right
      const speed = Math.random() * 6 + 8;
      shooters.push({
        x: Math.random() * w * 0.7,
        y: Math.random() * h * 0.4,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 0,
        maxLife: 50 + Math.random() * 30,
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
        offset.x += (mouse.x - offset.x) * 0.05;
        offset.y += (mouse.y - offset.y) * 0.05;
      // twinkling stars
      for (const s of stars) {
        s.phase += s.speed;
        ctx.globalAlpha = 0.5 + Math.sin(s.phase) * 0.5;
        ctx.fillStyle = '#fff';
        ctx.beginPath();
        const depth = s.r / 1.6; // bigger star = closer = moves more
        const px = s.x - offset.x * STRENGTH * depth;
        const py = s.y - offset.y * STRENGTH * depth;
        ctx.arc(px, py, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      // shooting stars (about one every few seconds)
      if (Math.random() < 0.006) spawnShooter();
      shooters = shooters.filter(s => s.life < s.maxLife);
      for (const s of shooters) {
        s.x += s.vx; s.y += s.vy; s.life++;
        const fade = 1 - s.life / s.maxLife;
        const tailX = s.x - s.vx * 10, tailY = s.y - s.vy * 10;
        const grad = ctx.createLinearGradient(s.x, s.y, tailX, tailY);
        grad.addColorStop(0, `rgba(255,255,255,${fade})`);
        grad.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMove);
    return () => {
    cancelAnimationFrame(raf);
    window.removeEventListener('resize', resize);
    window.removeEventListener('mousemove', onMove);
    };
    }, []);

  return <canvas ref={canvasRef} className="night-sky" />;
}