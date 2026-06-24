import { useState, useEffect } from 'react';
import { personalInfo } from '../data';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Responsibilities', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setActive(href);
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream/88 backdrop-blur-xl border-b border-ink-200/80 py-3 shadow-[0_10px_30px_rgba(66,55,72,0.06)]'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-16 flex items-center justify-between">
        <button
          type="button"
          className="group flex items-center gap-3"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Go to home"
        >
          <span className="grid h-10 w-10 place-items-center rounded-full border border-rose-light/50 bg-paper/80 text-sm font-display text-ink-900 shadow-card group-hover:border-rose transition-colors">
            HB
          </span>
          <span className="hidden sm:block text-left leading-tight">
            <span className="block font-display text-lg text-ink-900">Harshita</span>
            <span className="block font-mono text-[10px] tracking-[0.22em] uppercase text-ink-500">Portfolio</span>
          </span>
        </button>

        <ul className="hidden lg:flex items-center gap-7 rounded-full border border-ink-200/70 bg-paper/70 px-6 py-2.5 backdrop-blur-xl shadow-[0_12px_32px_rgba(66,55,72,0.05)]">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className={`nav-link font-body text-sm font-semibold transition-colors pb-1 ${
                  active === link.href ? 'text-rose-dark active' : 'text-ink-600 hover:text-ink-900'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <a
          href={personalInfo.resumeUrl}
          download
          className="hidden md:inline-flex btn-primary text-xs py-2.5 px-4"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Resume
        </a>

        <button
          className="lg:hidden grid h-10 w-10 place-items-center rounded-full border border-ink-200 bg-paper/80 text-ink-800 shadow-card transition-colors hover:border-rose-light hover:text-rose-dark"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </>
            )}
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div className="lg:hidden mx-6 mt-3 rounded-[1.5rem] border border-ink-200 bg-paper/95 px-5 py-5 shadow-soft backdrop-blur-xl">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className="w-full rounded-full px-4 py-2.5 text-left font-body text-sm font-semibold text-ink-700 transition-colors hover:bg-rose-soft hover:text-rose-dark"
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li className="pt-3">
              <a href={personalInfo.resumeUrl} download className="btn-primary w-full justify-center">
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
