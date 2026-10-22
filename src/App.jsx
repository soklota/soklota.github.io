// App.jsx
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import TopArrow from './components/TopArrow';
import LoadScreen from './components/LoadScreen';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import './App.css';


function App() {
  const introRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
  const imgs = Array.from(document.images);
  const total = imgs.length + 1; // +1 for fonts
  let loaded = 0;
  const tick = () => {
    loaded++;
    setProgress(Math.round((loaded / total) * 100));
  };
  imgs.forEach(img => {
    if (img.complete) tick();
    else {
      img.addEventListener('load', tick, { once: true });
      img.addEventListener('error', tick, { once: true }); // don't get stuck on a broken image
    }
  });
  document.fonts.ready.then(tick);
}, []);

useEffect(() => {
  if (progress < 100) return;
  const t1 = setTimeout(() => setFading(true), 300);   // let it sit at 100% briefly
  const t2 = setTimeout(() => setLoading(false), 800);
  return () => { clearTimeout(t1); clearTimeout(t2); };
}, [progress]);

  return (
    <>
    {loading && <LoadScreen fading={fading} progress={progress} />}
    
    <div className="app">
      <Navbar />
      <section id='intro' ref={introRef}><Intro /></section>
      <section id='about'><AboutMe /></section>
      <section id='projects'><Projects /></section>
      <section id='contact'><Contact /></section>
      <TopArrow introRef={introRef} />
    </div>
    </>
  );
}

export default App;