export const personalInfo = {
  name: "Harshita Bhasin",
  title: "IT Undergraduate & Developer",
  headline: "I build things for the web and sometimes, for the future.",
  tagline: "React · FastAPI · AI/ML · Full-Stack",
  intro: "I'm a 3rd-year Information Technology student at BVCOE, New Delhi. I love crafting user-focused applications that sit at the intersection of clean frontend engineering and intelligent backends.",
  location: "New Delhi, India",
  email: "harshita3bhasin@gmail.com",
  phone: "+91 9971833259",
  github: "https://github.com/hershey13",
  linkedin: "https://www.linkedin.com/in/harshita-bhasin-7b7128277/",
  college: "Bharati Vidyapeeth's College of Engineering, New Delhi",
  degree: "B.Tech in Information Technology (Specialization: Data Science)",
  year: "2023 – 2027",
  cgpa: "9.23",
  resumeUrl: "/resume.pdf",
};

export const skills = {
  Frontend: [
    { name: "React.js", color: "border-lavender-light/70 text-lavender-dark bg-lavender-soft" },
    { name: "JavaScript", color: "border-amber-light/70 text-amber-dark bg-amber-soft" },
    { name: "HTML5", color: "border-peach/60 text-peach-dark bg-peach-soft" },
    { name: "CSS3", color: "border-sage-light/70 text-sage-dark bg-sage-soft" },
    { name: "Vite", color: "border-lavender-light/70 text-lavender-dark bg-lavender-soft" },
    { name: "Responsive Design", color: "border-rose-light/70 text-rose-dark bg-rose-soft" },
  ],
  Backend: [
    { name: "Flask", color: "border-sage-light/70 text-sage-dark bg-sage-soft" },
    { name: "FastAPI", color: "border-sage-light/70 text-sage-dark bg-sage-soft" },
    { name: "REST APIs", color: "border-lavender-light/70 text-lavender-dark bg-lavender-soft" },
    { name: "Python", color: "border-amber-light/70 text-amber-dark bg-amber-soft" },
  ],
  "AI / ML": [
    { name: "PyTorch", color: "border-rose-light/70 text-rose-dark bg-rose-soft" },
    { name: "TensorFlow", color: "border-amber-light/70 text-amber-dark bg-amber-soft" },
    { name: "OpenCV", color: "border-sage-light/70 text-sage-dark bg-sage-soft" },
    { name: "Librosa", color: "border-lavender-light/70 text-lavender-dark bg-lavender-soft" },
    { name: "NumPy", color: "border-lavender-light/70 text-lavender-dark bg-lavender-soft" },
    { name: "ResNet18", color: "border-rose-light/70 text-rose-dark bg-rose-soft" },
  ],
  Tools: [
    { name: "Git / GitHub", color: "border-ink-200 text-ink-700 bg-cream" },
    { name: "Docker", color: "border-lavender-light/70 text-lavender-dark bg-lavender-soft" },
    { name: "Vercel", color: "border-ink-200 text-ink-700 bg-cream" },
    { name: "Hugging Face", color: "border-amber-light/70 text-amber-dark bg-amber-soft" },
    { name: "VS Code", color: "border-sage-light/70 text-sage-dark bg-sage-soft" },
    { name: "Postman", color: "border-peach/60 text-peach-dark bg-peach-soft" },
  ],
};

export const projects = [
  {
    title: "Deepfake Detection Web App",
    tagline: "Upload. Detect. Verify.",
    description:
      "A multimodal deepfake detection platform that analyses image, audio, and video files for AI-generated artifacts. Built a FastAPI inference backend with a ResNet18 image classifier, MFCC-based audio classifier, and CNN+LSTM lip-sync model, all served through a clean responsive frontend.",
    highlights: [
      "85.6% validation accuracy on 800-sample audio test set",
      "Three inference pipelines: image, audio, and video (lip-sync)",
      "Dockerized FastAPI backend + Vercel-hosted frontend",
    ],
    stack: ["Python", "FastAPI", "PyTorch", "ResNet18", "MFCC", "Docker", "JavaScript"],
    github: "https://github.com/hershey13/Deepfake_detector",
    demo: "https://deepfake-detection-snowy.vercel.app/",
    accent: "#E8637A",
    featured: true,
  },
  {
    title: "Shelf - Book Discovery App",
    tagline: "Find your next read, even from a photo.",
    description:
      "A React + Vite book discovery app with two search workflows: a text-based search powered by the Google Books API, and an OCR-assisted image search using Tesseract.js that can extract titles from book cover photos or screenshots.",
    highlights: [
      "Dual search: text query + OCR image upload",
      "Tesseract.js OCR runs fully in-browser — no server needed",
      "Responsive UI with clean card layouts",
    ],
    stack: ["React", "Vite", "JavaScript", "CSS", "Google Books API", "Tesseract.js"],
    github: "https://github.com/hershey13/shelf",
    demo: "https://shelf-amber.vercel.app/",
    accent: "#74C69D",
    featured: true,
  },
  
];

export const experience = [
  {
    role: "Intern",
    org: "Airports Authority of India (AAI, IT CHQ)",
    duration: "July 2025 – August 2025",
    location: "New Delhi",
    bullets: [
      "Built a Flask-based HTTPS testbed to benchmark AES vs RSA encryption-decryption performance across 12 controlled sessions.",
      "Documented findings showing AES maintained sub-70,000 ms timing across all 6 runs (33K–59K ms range), while RSA saw 2 benchmark breaches.",
      "Reinforced best practices for bulk encryption algorithm selection in production-grade systems.",
    ],
    tools: ["Python", "Flask", "HTTPS", "AES", "RSA"],
  },
];

export const achievements = [
 
  {
    title: "Treasurer, IEEE BVCOE Student Branch",
    category: "Leadership",
    icon: "⚡",
    description: "Managed budgeting, financial coordination, and event-related expenditure tracking for the student branch.",
  },
  
];
