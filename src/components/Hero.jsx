import { useEffect, useState } from 'react';
import { personalInfo } from '../data';
const TYPED_WORDS = [
  'Frontend Developer',
  'React Enthusiast',
  'AI/ML Explorer',
  'Problem Solver',
  'IT Undergraduate',
];

function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      target={href.startsWith('mailto:') ? undefined : '_blank'}
      rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
      className="grid h-10 w-10 place-items-center rounded-full border border-ink-200 bg-paper/70 text-ink-600 transition-all hover:-translate-y-0.5 hover:border-rose-light hover:text-rose-dark hover:shadow-card"
      aria-label={label}
    >
      {children}
    </a>
  );
}

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const word = TYPED_WORDS[wordIndex];

    if (typing) {
      if (charIndex < word.length) {
        const t = setTimeout(() => {
          setDisplayed(word.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, 65);

        return () => clearTimeout(t);
      }

      const t = setTimeout(() => setTyping(false), 1700);
      return () => clearTimeout(t);
    }

    if (charIndex > 0) {
      const t = setTimeout(() => {
        setDisplayed(word.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 38);

      return () => clearTimeout(t);
    }

    setWordIndex((wordIndex + 1) % TYPED_WORDS.length);
    setTyping(true);
  }, [charIndex, typing, wordIndex]);

  return (
    <section
      id="home"
      className="mesh-bg noise-bg relative min-h-screen overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 right-[-5rem] h-96 w-96 rounded-full bg-sage-light/35 blur-3xl" />
        <div className="absolute bottom-8 left-[-6rem] h-80 w-80 rounded-full bg-rose-light/25 blur-3xl" />

        <span className="sparkle animate-twinkle text-amber top-32 left-[8%]" />
        <span className="sparkle animate-twinkle text-lavender delay-500 top-48 right-[18%] scale-75" />
        <span className="sparkle animate-twinkle text-rose-light bottom-28 right-[12%] scale-90" />

        <span className="butterfly animate-flutter top-36 right-[9%] hidden md:block" />
        <span className="butterfly animate-flutter bottom-28 left-[7%] hidden md:block text-sage/50 [animation-delay:1.2s]" />
      </div>

      <div className="max-w-7xl mx-auto section-padding relative z-10 flex min-h-screen items-center justify-center pt-36">
        <div className="max-w-5xl text-center">
          

          <h1
            className="font-display text-5xl md:text-7xl lg:text-8xl text-ink-900 leading-[1.02] tracking-tight mb-6 reveal visible"
            style={{ animationDelay: '0.1s' }}
          >
            Hi, I'm <span className="gradient-text italic">Harshita.</span>
          </h1>

          <div
            className="font-mono text-base md:text-xl text-ink-700 mb-8 h-9 flex items-center justify-center gap-1 reveal visible"
            style={{ animationDelay: '0.2s' }}
          >
            <span className="text-sage-dark">&gt;</span>
            <span className="ml-2">{displayed}</span>
            <span className="w-0.5 h-6 bg-rose inline-block animate-pulse ml-0.5" />
          </div>

          <p
            className="text-ink-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10 reveal visible"
            style={{ animationDelay: '0.3s' }}
          >
            {personalInfo.intro}
          </p>

          <div
            className="flex flex-wrap justify-center items-center gap-4 mb-12 reveal visible"
            style={{ animationDelay: '0.4s' }}
          >
            <a href="#projects" className="btn-primary">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
              View Projects
            </a>

            <a
  href={personalInfo.resumeUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="btn-outline"
>
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
  Download Resume
</a>
             

            <a href="#contact" className="btn-outline">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Contact Me
            </a>
          </div>

          <div
            className="flex items-center justify-center gap-4 reveal visible"
            style={{ animationDelay: '0.5s' }}
          >
            <span className="text-ink-500 text-xs font-mono uppercase tracking-[0.22em]">
              Find me on
            </span>

            <SocialLink href={personalInfo.github} label="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921z" />
              </svg>
            </SocialLink>

           <SocialLink href={personalInfo.linkedin} label="LinkedIn">
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/>
  </svg>
</SocialLink>

<SocialLink href={`mailto:${personalInfo.email}`} label="Email">
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
</SocialLink>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-ink-400 md:flex">
        <span className="text-xs font-mono uppercase tracking-[0.25em]">
          scroll
        </span>
        <div className="h-12 w-px bg-gradient-to-b from-ink-300 to-transparent" />
      </div>
    </section>
  );
}