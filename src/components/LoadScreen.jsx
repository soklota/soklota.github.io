import { useEffect, useMemo, useRef, useState } from 'react';
import '../css/LoadScreen.css';

const SIZE = 200;      // svg size in px
const TURNS = 5;       // how many loops the spiral has
const SEGMENTS = 400;  // more = smoother
const STROKE = 9;      // line thickness

export default function LoadScreen({ fading, progress }) {
  // build the spiral once: r grows with angle (Archimedean spiral)
  const segments = useMemo(() => {
    const c = SIZE / 2;
    const maxR = c - STROKE;
    const maxT = TURNS * 2 * Math.PI;
    const pt = i => {
      const t = (i / SEGMENTS) * maxT;
      const r = (t / maxT) * maxR;
      return [c + r * Math.cos(t), c + r * Math.sin(t)];
    };
    return Array.from({ length: SEGMENTS }, (_, i) => {
      const [x1, y1] = pt(i);
      const [x2, y2] = pt(i + 1);
      const hue = (i / SEGMENTS) * 360 * 2; // rainbow cycles twice from center to edge
      return { x1, y1, x2, y2, color: `hsl(${hue}, 90%, 60%)` };
    });
  }, []);

  // ease the displayed progress so it glides between real loading steps
  const [shown, setShown] = useState(0);
  const shownRef = useRef(0);
  useEffect(() => {
    let raf;
    const step = () => {
      const diff = progress - shownRef.current;
      if (Math.abs(diff) < 0.2) { shownRef.current = progress; setShown(progress); return; }
      shownRef.current += diff * 0.08;
      setShown(shownRef.current);
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [progress]);

  const visible = Math.round((shown / 100) * SEGMENTS);

  return (
    <div className={`loadScreen ${fading ? 'loadScreen--hide' : ''}`}>
      <svg className="lollipop" width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`}>
        {segments.slice(0, visible).map((s, i) => (
          <line key={i} x1={s.x1} y1={s.y1} x2={s.x2} y2={s.y2}
                stroke={s.color} strokeWidth={STROKE} strokeLinecap="round" />
        ))}
      </svg>
      <span className="loader__pct">{Math.round(shown)}%</span>
    </div>
  );
}