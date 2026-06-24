import { personalInfo } from '../data';

export default function Footer() {
  return (
    <footer className="border-t border-ink-200/80 bg-cream px-6 md:px-16 py-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-ink-500">
          © {new Date().getFullYear()} Harshita Bhasin. Built with React + Tailwind.
        </p>
        <div className="flex items-center gap-5">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-ink-500 hover:text-rose-dark transition-colors text-xs font-mono">
            GitHub
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-ink-500 hover:text-rose-dark transition-colors text-xs font-mono">
            LinkedIn
          </a>
          <a href={`mailto:${personalInfo.email}`} className="text-ink-500 hover:text-rose-dark transition-colors text-xs font-mono">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
