import { useMemo } from 'react';
import { useReveal } from '../hooks/useReveal';
import { projects } from '../data';

const previewByTitle = {
  'Shelf - Book Discovery App': '/projects/shelf.png',
  'Deepfake Detection Web App': '/projects/deepfake.png',
};

const projectCopy = {
  'Shelf — Book Discovery App':
    'A React + Vite book discovery app for readers who remember fragments, moods, quotes, or visual cues instead of exact titles. Supports text search with Google Books API and OCR-assisted image search using Tesseract.js.',
  'Deepfake Detection Web App':
    'A multimodal deepfake detection platform that analyzes image, audio, and video inputs using a FastAPI backend and responsive frontend, combining image, audio, and lip-sync verification workflows.',
};

const toolStyles = {
  
};

const displayOrder = ['Shelf - Book Discovery App', 'Deepfake Detection Web App'];

function IconButton({ name, compact = false }) {
  const icon = toolStyles[name] || { short: name.slice(0, 2), label: name, tone: '#E9DCCA' };

  return (
    <div className={`retro-tool ${compact ? 'retro-tool-compact' : ''}`} title={icon.label}>
      <span className="retro-tool-icon" style={{ '--tool-tone': icon.tone }}>
        {icon.short}
      </span>
      {!compact && <span className="retro-tool-label">{icon.label}</span>}
    </div>
  );
}

function FolderShortcut({ label, badge }) {
  return (
    <div className="retro-folder">
      <span className="retro-folder-art" aria-hidden="true">
        <span className="retro-folder-tab" />
        <span className="retro-folder-body" />
      </span>
      <span className="retro-folder-badge">{badge}</span>
      <span className="retro-folder-label">{label}</span>
    </div>
  );
}

function ProjectWindow({ project, index }) {
  const ref = useReveal(0.12);
  const preview = previewByTitle[project.title];
  const description = projectCopy[project.title] || project.description;
  const tags = project.stack.filter((item) => item !== 'ResNet18' && item !== 'MFCC').slice(0, 6);
  const tools = useMemo(() => ['GitHub', ...project.stack].slice(0, 6), [project.stack]);
  const pathSlug = project.title.includes('Shelf') ? 'shelf' : 'deepfake-detection';

  return (
    <article ref={ref} className="reveal retro-project-window" style={{ transitionDelay: `${index * 0.12}s` }}>
      <div className="retro-window-bar">
        <span>C:\projects\{pathSlug}</span>
        <div className="retro-window-controls" aria-hidden="true">
          <span>−</span>
          <span>□</span>
          <span>×</span>
        </div>
      </div>

      <div className="retro-preview-frame">
        <img src={preview} alt={`${project.title} screenshot`} className="retro-project-preview" />
      </div>

      <div className="retro-project-content">
       <div className="retro-project-title-row">
  <h3>{project.title}</h3>
</div>

        <p>{description}</p>

        <div className="retro-tags" aria-label="Tech stack">
          {tags.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <div className="retro-project-actions">
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="retro-visit-btn">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M7 17L17 7" />
                <path d="M8 7h9v9" />
                <path d="M14 21H5a2 2 0 0 1-2-2V10" />
              </svg>
              Visit site
            </a>
          )}

          <a href={project.github} target="_blank" rel="noopener noreferrer" className="retro-code-btn">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.02c-3.2.7-3.88-1.37-3.88-1.37-.53-1.33-1.29-1.69-1.29-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.04 1.76 2.71 1.25 3.37.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.17 1.18.92-.26 1.9-.38 2.88-.39.98 0 1.96.13 2.88.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.8 1.18 1.83 1.18 3.08 0 4.42-2.69 5.39-5.25 5.67.42.36.79 1.06.79 2.14v3.17c0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
            </svg>
            Code
          </a>
          <span className="retro-spark-dots" aria-hidden="true">✦ ✦ ✦</span>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const titleRef = useReveal();
  const selectedProjects = displayOrder
    .map((title) => projects.find((project) => project.title === title))
    .filter(Boolean);

  return (
    <section id="projects" className="retro-projects-section">
      <div className="retro-os-shell">
        <div className="retro-shell-bar" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        {/* <div className="retro-left-icons" aria-hidden="true">
          {['GitHub', 'Python', 'FastAPI', 'React', 'MFCC', 'ResNet18', 'JavaScript'].map((tool) => (
            <IconButton key={tool} name={tool} />
          ))}
        </div> */}

        {/* <div className="retro-right-folders" aria-hidden="true">
          <FolderShortcut label="Projects" badge="☆" />
          <FolderShortcut label="Assets" badge="▧" />
          <FolderShortcut label="Case Studies" badge="▤" />
          <FolderShortcut label="Resume" badge="●" />
        </div> */}

        <div className="retro-projects-inner">
          <div ref={titleRef} className="reveal retro-projects-heading">
            <span>✦</span>
            <h2>Projects</h2>
            <span>✦</span>
            <p>Things I've built, shipped, and learned from.</p>
          </div>

          <div className="retro-project-grid">
            {selectedProjects.map((project, index) => (
              <ProjectWindow key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
