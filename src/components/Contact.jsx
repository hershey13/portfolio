import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { personalInfo } from '../data';

function ContactLink({ href, label, children }) {
  return (
    <a
      href={href}
      target={href.startsWith('mailto:') ? undefined : '_blank'}
      rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
      className="group flex items-center gap-3 rounded-2xl border border-ink-200/80 bg-paper/70 p-3 text-sm text-ink-700 transition-all hover:-translate-y-0.5 hover:border-rose-light hover:bg-rose-soft hover:text-rose-dark hover:shadow-card"
    >
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-cream text-ink-600 transition-colors group-hover:text-rose-dark">
        {children}
      </span>
      {label}
    </a>
  );
}

export default function Contact() {
  const titleRef = useReveal();
  const formRef = useReveal(0.1);
  const infoRef = useReveal(0.1);

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('https://formspree.io/f/mnjkjjpw', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('sent');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section-padding alt-section relative overflow-hidden">
      <div className="section-divider" />
      <div className="absolute bottom-0 left-1/2 h-72 w-[34rem] -translate-x-1/2 rounded-full bg-rose-light/20 blur-3xl pointer-events-none" />
      <span className="butterfly animate-flutter top-24 left-[9%] hidden md:block text-sage/45" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div ref={titleRef} className="reveal mb-14">
          <span className="section-kicker">06 / Contact</span>
          <h2 className="section-title mt-3">Let's connect</h2>
          <p className="section-subtitle">
            Open to internship opportunities, collaborations, and interesting conversations.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 lg:gap-10 items-start">
          <div ref={infoRef} className="md:col-span-2 reveal space-y-6">
            <div className="soft-card p-7">
              <h3 className="font-display text-2xl text-ink-900 mb-3">Currently exploring</h3>
              <p className="text-ink-600 text-sm leading-relaxed">
                I'm seeking frontend, software engineering, and AI/ML internships. If you'd like to chat about an
                opportunity or a product idea, my inbox is open.
              </p>
            </div>

            <div className="space-y-3">
              <ContactLink href={`mailto:${personalInfo.email}`} label={personalInfo.email}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </ContactLink>

              <ContactLink href={personalInfo.linkedin} label="linkedin.com/in/harshita-bhasin">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </ContactLink>

              <ContactLink href={personalInfo.github} label="github.com/hershey13">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </ContactLink>
            </div>
          </div>

          <div ref={formRef} className="md:col-span-3 reveal">
            <form onSubmit={handleSubmit} className="soft-card space-y-4 p-7 md:p-8">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-mono text-xs text-ink-500 uppercase tracking-[0.2em] mb-2 block">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full rounded-2xl border border-ink-200 bg-cream/70 px-4 py-3 text-sm text-ink-900 placeholder-ink-400 transition-colors focus:border-rose-light focus:outline-none focus:ring-4 focus:ring-rose-soft"
                  />
                </div>
                <div>
                  <label className="font-mono text-xs text-ink-500 uppercase tracking-[0.2em] mb-2 block">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full rounded-2xl border border-ink-200 bg-cream/70 px-4 py-3 text-sm text-ink-900 placeholder-ink-400 transition-colors focus:border-rose-light focus:outline-none focus:ring-4 focus:ring-rose-soft"
                  />
                </div>
              </div>

              <div>
                <label className="font-mono text-xs text-ink-500 uppercase tracking-[0.2em] mb-2 block">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="What's on your mind?"
                  className="w-full resize-none rounded-2xl border border-ink-200 bg-cream/70 px-4 py-3 text-sm text-ink-900 placeholder-ink-400 transition-colors focus:border-rose-light focus:outline-none focus:ring-4 focus:ring-rose-soft"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  <>
                    <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                    </svg>
                    Sending…
                  </>
                ) : (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                    Send Message
                  </>
                )}
              </button>

              {status === 'sent' && (
                <p className="text-sage-dark text-sm text-center font-semibold">
                  Message sent! I'll get back to you soon.
                </p>
              )}
              {status === 'error' && (
                <p className="text-rose-dark text-sm text-center font-semibold">
                  Something went wrong. Try emailing me directly.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
