
import { useState, useEffect, useRef } from 'react';
import '../css/TopArrow.css';

function TopArrow({ introRef }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (introRef.current) {
        const introBottom = introRef.current.getBoundingClientRect().bottom;
        setIsVisible(introBottom < 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [introRef]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
      ↑
    </button>
  );
}

export default TopArrow;