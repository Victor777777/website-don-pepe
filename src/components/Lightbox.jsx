'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getSeriesName, getSeriesColor } from '@/data/paintings';

export default function Lightbox({ painting, onClose }) {
  const [slide, setSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const totalSlides = 2;

  const goNext = useCallback(() => {
    if (slide < totalSlides - 1) {
      setDirection(1);
      setSlide((s) => s + 1);
    }
  }, [slide]);

  const goPrev = useCallback(() => {
    if (slide > 0) {
      setDirection(-1);
      setSlide((s) => s - 1);
    }
  }, [slide]);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    },
    [onClose, goNext, goPrev]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Touch/swipe support
  const [touchStart, setTouchStart] = useState(null);

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goNext();
      else goPrev();
    }
    setTouchStart(null);
  };

  const seriesColor = getSeriesColor(painting.series);

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
  };

  return (
    <motion.div
      className="lightbox"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      onClick={onClose}
    >
      {/* Close button */}
      <button className="lightbox__close" onClick={onClose} aria-label="Fermer">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {/* Slideshow container */}
      <div
        className="lightbox__slideshow"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Slide area */}
        <div className="lightbox__slide-area">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={slide}
              className="lightbox__slide"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              {slide === 0 && (
                <img
                  src={`/paintings/${painting.id}-${painting.slug}.jpg`}
                  alt={painting.title}
                  className="lightbox__slide-img"
                />
              )}
              {slide === 1 && (
                <img
                  src={`/paintings/${painting.id}-${painting.slug}-context.jpg`}
                  alt={`${painting.title}, mise en situation`}
                  className="lightbox__slide-img"
                />
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          {slide > 0 && (
            <button className="lightbox__arrow lightbox__arrow--left" onClick={goPrev} aria-label="Image precedente">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                <polyline points="12,4 6,10 12,16" />
              </svg>
            </button>
          )}
          {slide < totalSlides - 1 && (
            <button className="lightbox__arrow lightbox__arrow--right" onClick={goNext} aria-label="Image suivante">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                <polyline points="8,4 14,10 8,16" />
              </svg>
            </button>
          )}
        </div>

        {/* Info overlay at bottom */}
        <div className="lightbox__info-bar">
          <span className="lightbox__info-number">N&deg;{painting.id}</span>
          <span className="lightbox__info-title">{painting.title}</span>
          <span className="lightbox__info-sep">&middot;</span>
          <span className="lightbox__info-series" style={{ color: seriesColor }}>
            {getSeriesName(painting.series)}
          </span>
          <span className="lightbox__info-sep">&middot;</span>
          <span className="lightbox__info-medium">Huile sur toile</span>
          <span className="lightbox__info-dots">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <span
                key={i}
                className={`lightbox__dot ${i === slide ? 'lightbox__dot--active' : ''}`}
                onClick={() => { setDirection(i > slide ? 1 : -1); setSlide(i); }}
              />
            ))}
          </span>
        </div>

        {/* Slide label */}
        <div className="lightbox__slide-label">
          {slide === 0 ? 'Vue principale' : 'Mise en situation'}
        </div>
      </div>
    </motion.div>
  );
}
