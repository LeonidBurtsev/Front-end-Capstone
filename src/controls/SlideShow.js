import React, { useState, useEffect, useRef } from 'react';
import '../styles/Slideshow.css';

const Slideshow = ({ slides, interval = 10000 }) => {
  const [current, setCurrent]     = useState(0);
  const timeoutRef                = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    // auto-advance
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, interval);

    return () => resetTimeout();
  }, [current, slides.length, interval]);

  const goTo    = idx => setCurrent(idx);
  const next    = ()  => setCurrent((current + 1) % slides.length);
  const prev    = ()  => setCurrent((current - 1 + slides.length) % slides.length);

  if (!slides || slides.length === 0) return null;

  return (
    <div className="slideshow">
      <div className="slideshow-slider">
        {slides.map((slide, idx) => (
          <div key={idx} className={`slide ${idx === current ? 'active' : ''}`}>
            <img src={slide.url} alt={slide.caption} />
            <div className="slide-caption">{slide.caption}</div>
          </div>
        ))}

        {/* arrows */}
        <button className="nav prev" onClick={prev}>&#10094;</button>
        <button className="nav next" onClick={next}>&#10095;</button>
      </div>

      {/* dots */}
      <div className="dots">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`dot ${idx === current ? 'active' : ''}`}
            onClick={() => goTo(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
