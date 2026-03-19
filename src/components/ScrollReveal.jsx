'use client';

import { useEffect, useRef } from 'react';

export default function ScrollReveal({ children, className = '', stagger = false, delay = 0 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => {
              el.classList.add(stagger ? 'reveal-stagger--visible' : 'reveal--visible');
            }, delay);
          } else {
            el.classList.add(stagger ? 'reveal-stagger--visible' : 'reveal--visible');
          }
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [stagger, delay]);

  return (
    <div ref={ref} className={`${stagger ? 'reveal-stagger' : 'reveal'} ${className}`}>
      {children}
    </div>
  );
}
