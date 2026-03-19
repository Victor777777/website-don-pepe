'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const links = [
    { href: '/galerie/', label: 'Oeuvres' },
    { href: '/a-propos/', label: 'A propos' },
    { href: '/contact/', label: 'Contact' },
  ];

  const isActive = (href) => pathname === href || pathname === href.replace(/\/$/, '');

  return (
    <nav className={`nav ${scrolled || mobileOpen ? 'nav--solid' : ''}`}>
      <div className="nav__inner">
        <Link href="/" className="nav__logo">
          Robert Platania
        </Link>

        <ul className="nav__links">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`nav__link ${isActive(link.href) ? 'nav__link--active' : ''}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className={`nav__hamburger ${mobileOpen ? 'nav__hamburger--open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`nav__mobile ${mobileOpen ? 'nav__mobile--open' : ''}`}>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="nav__mobile-link"
            onClick={() => setMobileOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
