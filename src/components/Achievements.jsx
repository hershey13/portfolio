import { useReveal } from '../hooks/useReveal';
import { achievements } from '../data';

const CATEGORY_COLORS = {
  Competition: 'border-amber-light/70 text-amber-dark bg-amber-soft',
  Leadership: 'border-sage-light/70 text-sage-dark bg-sage-soft',
  Academic: 'border-rose-light/70 text-rose-dark bg-rose-soft',
};

function AchievementCard({ item, index }) {
  const ref = useReveal(0.1);

  return (
    <article
      ref={ref}
      className="reveal soft-card card-hover p-6"
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-cream text-3xl shadow-[inset_0_0_0_1px_rgba(233,220,202,0.9)]">
        {item.icon}
      </div>
      <span className={`pill mb-4 ${CATEGORY_COLORS[item.category] || 'border-ink-200 text-ink-600 bg-cream'}`}>
        {item.category}
      </span>
      <h3 className="font-display text-xl text-ink-900 leading-snug mb-3">
        {item.title}
      </h3>
      <p className="text-ink-600 text-sm leading-relaxed">
        {item.description}
      </p>
    </article>
  );
}

export default function Achievements() {
  const titleRef = useReveal();

  return (
    <section id="achievements" className="section-padding soft-section relative overflow-hidden">
      <div className="section-divider" />
      <span className="sparkle animate-twinkle text-lavender right-[18%] top-24 hidden md:block" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div ref={titleRef} className="reveal mb-14">
          <span className="section-kicker">05 / Responsibilites</span>
          <h2 className="section-title mt-3">Roles</h2>
          <p className="section-subtitle">
            Competitions, leadership, and academic milestones that shaped my confidence and execution.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {achievements.map((item, index) => (
            <AchievementCard key={`${item.title}-${index}`} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
