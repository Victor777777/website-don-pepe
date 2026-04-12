'use client';

import { useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { paintings, series, getSeriesName, getSeriesColor } from '@/data/paintings';
import Lightbox from './Lightbox';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedPainting, setSelectedPainting] = useState(null);

  const filtered = activeFilter === 'all'
    ? paintings
    : paintings.filter((p) => p.series === activeFilter);

  const handleOpen = useCallback((painting) => {
    setSelectedPainting(painting);
    document.body.style.overflow = 'hidden';
  }, []);

  const handleClose = useCallback(() => {
    setSelectedPainting(null);
    document.body.style.overflow = '';
  }, []);

  return (
    <>
      <div className="gallery-filters">
        {series.map((s) => (
          <button
            key={s.id}
            className={`gallery-filter ${activeFilter === s.id ? 'gallery-filter--active' : ''}`}
            onClick={() => setActiveFilter(s.id)}
            style={activeFilter === s.id ? { borderColor: s.color, background: `${s.color}15` } : undefined}
          >
            {s.name}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        <AnimatePresence mode="popLayout">
          {filtered.map((painting) => (
            <motion.div
              key={painting.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <PaintingCard painting={painting} onOpen={handleOpen} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selectedPainting && (
          <Lightbox painting={selectedPainting} onClose={handleClose} />
        )}
      </AnimatePresence>
    </>
  );
}

function PaintingCard({ painting, onOpen }) {
  const isAtypical = painting.atypical;

  return (
    <div
      className={`gallery-card ${isAtypical ? 'gallery-card--atypical' : ''}`}
      onClick={() => onOpen(painting)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onOpen(painting)}
    >
      <img
        src={`/paintings/${painting.id}-${painting.slug}-thumb.jpg`}
        alt={painting.title}
        loading="lazy"
        width={800}
        height={800}
      />
      <div className="gallery-card__overlay">
        <span className="gallery-card__title">{painting.title}</span>
        <span className="gallery-card__year">{painting.year}</span>
      </div>
    </div>
  );
}

