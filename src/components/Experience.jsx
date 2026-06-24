import { useReveal } from '../hooks/useReveal';
import { experience } from '../data';

function ExperienceItem({ exp, index }) {
  const cardRef = useReveal(0.1);

  return (
    <div
      ref={cardRef}
      className="reveal relative mb-10 last:mb-0"
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <div className="absolute -left-[31px] top-2 h-4 w-4 rounded-full border-[3px] border-cream bg-rose shadow-card" />

      <article className="soft-card card-hover ml-2 p-7">
        <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-2xl text-ink-900">{exp.role}</h3>
            <p className="text-rose-dark font-semibold text-sm mt-1">{exp.org}</p>
          </div>
          <div className="sm:text-right">
            <span className="font-mono text-xs px-3 py-1.5 bg-amber-soft border border-amber-light/70 rounded-full text-amber-dark">
              {exp.duration}
            </span>
            <p className="text-ink-500 text-xs mt-2 flex items-center sm:justify-end gap-1.5">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              {exp.location}
            </p>
          </div>
        </div>

        <ul className="space-y-3 mb-6">
          {exp.bullets.map((b) => (
            <li key={b} className="flex items-start gap-3 text-sm leading-relaxed text-ink-600">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-rose-light shrink-0" />
              {b}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5 pt-5 border-t border-ink-200/80">
          <span className="font-mono text-xs text-ink-500 self-center mr-1">Tools:</span>
          {exp.tools.map((tool) => (
            <span key={tool} className="font-mono text-xs px-2.5 py-1 rounded-full bg-cream border border-ink-200/80 text-ink-600">
              {tool}
            </span>
          ))}
        </div>
      </article>
    </div>
  );
}

export default function Experience() {
  const titleRef = useReveal();

  return (
    <section id="experience" className="section-padding alt-section relative overflow-hidden">
      <div className="section-divider" />
      <span className="butterfly animate-flutter bottom-20 right-[10%] hidden md:block text-rose/40" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div ref={titleRef} className="reveal mb-14">
          <span className="section-kicker">04 / Experience</span>
          <h2 className="section-title mt-3">Where I've interned</h2>
          <p className="section-subtitle">
            Real-world engineering challenges outside the classroom, documented through practical outcomes.
          </p>
        </div>

        <div className="relative pl-6 border-l border-ink-200/90">
          {experience.map((exp, index) => (
            <ExperienceItem key={`${exp.role}-${exp.org}`} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
