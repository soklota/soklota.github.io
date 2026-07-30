// App.jsx
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import TopArrow from './components/TopArrow';
import { useRef } from 'react';

import './App.css';


function App() {
    const introRef = useRef(null);

  return (
    <div className="app">
      <Navbar />
      <section id='intro' ref={introRef}><Intro /></section>
      <section id='about'><AboutMe /></section>
      <section id='projects'><Projects /></section>
      <section id='contact'><Contact /></section>
      <TopArrow introRef={introRef} />
    </div>
  );
}

export default App;