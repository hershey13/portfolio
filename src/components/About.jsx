import { useReveal } from '../hooks/useReveal';
import { personalInfo } from '../data';

const roles = ['Frontend Intern', 'React Dev', 'AI/ML Intern',];

export default function About() {
  const titleRef = useReveal();
  const textRef = useReveal(0.1);
  const cardRef = useReveal(0.1);

  return (
    <section id="about" className="section-padding soft-section relative overflow-hidden">
      <div className="section-divider" />
      <span className="sparkle animate-twinkle text-amber right-[12%] top-28 hidden md:block" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div ref={titleRef} className="reveal mb-14">
          <span className="section-kicker">01 / About</span>
          <h2 className="section-title mt-3">Who I am</h2>
          <p className="section-subtitle">
            A quick look at the person behind the code - curious, hands-on, and learning by building.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-10 lg:gap-14 items-start">
          <div ref={textRef} className="md:col-span-3 reveal">
            <div className="soft-card p-7 md:p-9 space-y-5 text-ink-600 leading-relaxed">
              <p>
                I'm <strong className="text-ink-900 font-semibold">Harshita Bhasin</strong>, a 3rd-year Information Technology student
                at Bharati Vidyapeeth's College of Engineering, New Delhi, specialising in Data Science. I maintain a{' '}
                <strong className="text-rose-dark font-semibold">9.23 CGPA</strong> and genuinely enjoy building things from scratch.
              </p>
              <p>
                My work lives at the intersection of <strong className="text-ink-900 font-semibold">clean frontend engineering</strong>{' '}
                and <strong className="text-ink-900 font-semibold">intelligent backends</strong>. Whether it's a book discovery app
                with in-browser OCR or a multimodal deepfake detector, I gravitate toward projects that combine usability,
                creativity, and real technical depth.
              </p>
              <p>
                During my internship at the{' '}
                <strong className="text-ink-900 font-semibold">Airports Authority of India</strong>, I designed and benchmarked
                session-wise cryptographic encryption and decryption workflow, that taught me how to approach engineering decisions with rigour and data.
              </p>
              <p>
                Outside of code, I served as <strong className="text-ink-900 font-semibold">Treasurer for IEEE BVCOE</strong>, manage
                event finances, and regularly participate in tech and design competitions. I care about growing fast,
                collaborating well, and shipping things that actually work.
              </p>

              <div className="pt-4 flex flex-wrap gap-3">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="btn-outline text-xs py-2.5 px-4">
                  GitHub Profile
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn-outline text-xs py-2.5 px-4">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div ref={cardRef} className="md:col-span-2 reveal">
            <div className="soft-card p-6 md:p-7 space-y-6 sticky top-28">
              <div>
                <p className="font-mono text-xs text-ink-500 uppercase tracking-[0.22em] mb-2">Education</p>
                <p className="text-ink-900 font-semibold text-sm leading-relaxed">{personalInfo.college}</p>
                <p className="text-ink-600 text-xs mt-2 leading-relaxed">{personalInfo.degree}</p>
                <p className="text-ink-500 text-xs mt-1">{personalInfo.year}</p>
              </div>

              <div className="h-px bg-ink-200/80" />

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-rose-soft p-4">
                  <p className="font-mono text-[10px] text-rose-dark uppercase tracking-[0.2em] mb-1">CGPA</p>
                  <p className="text-3xl font-display text-ink-900">{personalInfo.cgpa}</p>
                  {/* <p className="text-ink-500 text-xs">out of 10</p> */}
                </div>
                <div className="rounded-2xl bg-sage-soft p-4">
                  <p className="font-mono text-[10px] text-sage-dark uppercase tracking-[0.2em] mb-1">Year</p>
                  <p className="text-3xl font-display text-ink-900">3rd</p>
                  <p className="text-ink-500 text-xs">of B.Tech</p>
                </div>
              </div>

              <div className="h-px bg-ink-200/80" />

              <div>
                <p className="font-mono text-xs text-ink-500 uppercase tracking-[0.22em] mb-2">Location</p>
                <p className="text-ink-700 text-sm flex items-center gap-2">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-lavender-soft text-lavender-dark">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                  </span>
                  {personalInfo.location}
                </p>
              </div>

              <div className="h-px bg-ink-200/80" />

              <div>
                <p className="font-mono text-xs text-ink-500 uppercase tracking-[0.22em] mb-3">Looking for</p>
                <div className="flex flex-wrap gap-2">
                  {roles.map((role) => (
                    <span key={role} className="pill border-rose-light/50 text-rose-dark bg-rose-soft">
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
