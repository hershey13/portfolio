import { useReveal } from '../hooks/useReveal';
import { skills } from '../data';

function SkillCategory({ category, items, index }) {
  const catRef = useReveal(0.1);

  return (
    <div
      ref={catRef}
      className="reveal soft-card card-hover p-6"
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <div className="mb-5 flex items-center justify-between border-b border-ink-200/80 pb-4">
        <h3 className="font-mono text-xs text-ink-600 uppercase tracking-[0.24em]">
          {category}
        </h3>
        <span className="grid h-8 w-8 place-items-center rounded-full bg-cream text-xs font-mono text-rose-dark">
          {items.length}
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((skill) => (
          <span
            key={skill.name}
            className={`pill ${skill.color} transition-all hover:-translate-y-0.5 hover:shadow-card`}
          >
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const titleRef = useReveal();

  return (
    <section id="skills" className="section-padding alt-section relative overflow-hidden">
      <div className="section-divider" />
      <span className="butterfly animate-flutter top-24 right-[8%] hidden md:block text-lavender/45" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div ref={titleRef} className="reveal mb-14">
          <span className="section-kicker">02 / Skills</span>
          <h2 className="section-title mt-3">Tech I work with</h2>
          <p className="section-subtitle">
            A snapshot of my current toolkit — clean frontend, practical backend, and AI/ML exploration.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skills).map(([category, items], index) => (
            <SkillCategory key={category} category={category} items={items} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
