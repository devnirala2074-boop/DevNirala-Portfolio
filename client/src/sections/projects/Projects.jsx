// =========================================
// DEVNIRALA PORTFOLIO
// PROJECTS SECTION — PROFESSIONAL SHOWCASE
// =========================================

import { useMemo, useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";
import "./Projects.css";

// =========================================
// AUTHENTIC PROJECT DATA
// =========================================

const projects = [
  {
    id: "task-management",
    number: "01",
    title: "Task Management System (TaskFlow)",
    description:
      "Production-structured full-stack task management platform featuring dual-role access control, task delegation, lifecycle status tracking, and protected RESTful API routes.",
    category: "Full Stack",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Mongoose", "Vite"],
    features: [
      "Role-Based Access Control (Admin & Member)",
      "JWT Authentication & Protected Routes",
      "Admin Analytics Dashboard & User Management",
      "Personalized 'My Tasks' Status Lifecycle",
      "Modular MVC Backend Architecture",
    ],
    status: "Completed Build",
    statusType: "completed",
    availability: "Local Full-Stack Workspace",
    image: "/projects/task-management.png",
    githubUrl: null,
    liveUrl: null,
  },

  {
    id: "college-portal",
    number: "02",
    title: "Campus Management System (College Portal)",
    description:
      "Comprehensive academic administration platform with dedicated portals for administrators, faculty members, and students, integrating attendance monitoring and automated notifications.",
    category: "Full Stack",
    technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "Nodemailer", "JavaScript", "HTML5/CSS3"],
    features: [
      "Multi-Role Portal Access (Admin, Faculty, Student)",
      "Student Attendance Tracking System",
      "Automated Email Inquiries with Nodemailer",
      "Academic Department, Course & Placement Catalogs",
      "Secure Password Hashing with bcryptjs",
    ],
    status: "Completed Build",
    statusType: "completed",
    availability: "Local Full-Stack Workspace",
    image: "/projects/college-portal.png",
    githubUrl: null,
    liveUrl: null,
  },

  {
    id: "expense-tracker",
    number: "03",
    title: "Flat Expense Tracker (Roommate Accounting)",
    description:
      "Financial ledger application designed for shared apartments to automate roommate expense splitting, monthly cycle balancing, settlement calculations, and financial audit trails.",
    category: "Full Stack",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT"],
    features: [
      "Shared Flat vs Personal Expense Segregation",
      "Automated Balances & Settlement Suggestions",
      "Monthly Accounting Cycle Locking",
      "Receipt Ledger & Audit History Tracking",
      "Role-Based Flat Membership & Admin Controls",
    ],
    status: "In Active Development",
    statusType: "building",
    availability: "SRS & Architecture Complete",
    image: "/projects/expense-tracker.png",
    githubUrl: null,
    liveUrl: null,
  },

  {
    id: "resume-builder",
    number: "04",
    title: "ResumePro Interactive Builder",
    description:
      "Interactive client-side resume builder enabling real-time live preview rendering, dynamic section configuration, local draft auto-saving, and direct document generation.",
    category: "Frontend",
    technologies: ["JavaScript", "HTML5", "CSS3", "LocalStorage", "Client-Side Export"],
    features: [
      "Real-Time Reactive Live Preview",
      "Multi-Step Modular Section Navigation",
      "LocalStorage Session Persistence",
      "Custom Template Typography & Color Accents",
      "Client-Side Document Export Workflow",
    ],
    status: "Completed Web App",
    statusType: "completed",
    availability: "Local Workspace Application",
    image: "/projects/resume-builder.png",
    githubUrl: null,
    liveUrl: null,
  },

  {
    id: "rakhi-verse",
    number: "05",
    title: "RakhiVerse Interactive Celebration Experience",
    description:
      "Engaging cultural web experience built with responsive canvas animations, Web Audio API synthesis, dynamic gesture interactions, and personalized card messaging.",
    category: "Frontend",
    technologies: ["HTML5", "CSS3", "Modern JavaScript", "Web Audio API", "CSS Animations"],
    features: [
      "Interactive Touch & Click Micro-Animations",
      "Procedural Visual Effects & Particle Systems",
      "Web Audio Sound Integration",
      "Custom Digital Card Generator",
      "Responsive Cross-Device Layout",
    ],
    status: "Live on GitHub",
    statusType: "live",
    availability: "Open Source Repository",
    image: null,
    githubUrl: "https://github.com/devnirala2074-boop/rakhi-verse",
    liveUrl: null,
  },

  {
    id: "gym-platform",
    number: "06",
    title: "IronFit Gym & Inquiry Platform",
    description:
      "Modern fitness studio web application featuring service package catalogs, trainer profiles, responsive schedules, and an Express backend for automated email inquiry delivery.",
    category: "Full Stack",
    technologies: ["Node.js", "Express.js", "Nodemailer", "HTML5", "CSS3", "JavaScript"],
    features: [
      "Membership Package & Facility Showcase",
      "Express REST Endpoint for Inquiry Processing",
      "Nodemailer Automated Email Notifications",
      "Server-Side Form Sanitization & Validation",
      "High-Performance Responsive Layout",
    ],
    status: "Completed Web App",
    statusType: "completed",
    availability: "Local Full-Stack Workspace",
    image: null,
    githubUrl: null,
    liveUrl: null,
  },

  {
    id: "ai-resume-analyzer",
    number: "07",
    title: "AI Resume Analyzer",
    description:
      "AI-driven resume parsing tool designed to evaluate document structure, assess ATS keyword alignment, and provide structured, actionable improvement insights.",
    category: "AI/ML",
    technologies: ["React.js", "Node.js", "Python", "REST API", "AI Model APIs"],
    features: [
      "Document Structure & Section Parsing",
      "ATS Keyword Matching & Score Calculation",
      "Actionable Feedback for Bullet Points",
      "Structured Technical Recommendations",
      "Exportable Analysis Summary",
    ],
    status: "In Development",
    statusType: "building",
    availability: "Pipeline & Prototype Phase",
    image: null,
    githubUrl: null,
    liveUrl: null,
  },

  {
    id: "devnirala-portfolio",
    number: "08",
    title: "DevNirala Full-Stack Portfolio",
    description:
      "Production developer portfolio engineered with React 19 and Vite, featuring custom design tokens, theme management, responsive glassmorphic cards, and zero external UI bloat.",
    category: "Frontend",
    technologies: ["React 19", "Vite", "CSS Custom Properties", "React Icons", "SEO Optimization"],
    features: [
      "Modular Component Architecture",
      "CSS Design Tokens with Dark/Light Support",
      "Semantic Accessible Structure & SEO Meta",
      "Multi-Device Fluid Responsive Grid",
      "Zero Heavy Third-Party UI Library Overhead",
    ],
    status: "Live on GitHub",
    statusType: "live",
    availability: "Active Repository",
    image: null,
    githubUrl: "https://github.com/devnirala2074-boop/DevNirala-Portfolio",
    liveUrl: null,
  },
];

const categories = ["All", "Full Stack", "Frontend", "AI/ML"];

// =========================================
// PROJECTS COMPONENT
// =========================================

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === "All" || project.category === activeCategory;

      const query = searchTerm.toLowerCase().trim();
      const matchesSearch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(query)) ||
        project.features.some((feat) => feat.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  return (
    <section className="projects" id="projects">
      <div className="projects-container">

        {/* =====================================
            SECTION HEADER
        ===================================== */}
        <div className="projects-heading">
          <span className="section-label">03 — FEATURED PROJECTS</span>

          <h2>
            Engineering solutions,
            <span> built with purpose.</span>
          </h2>

          <p>
            A curated showcase of real-world full-stack systems, architectural
            implementations, and interactive web applications developed across
            the MERN stack.
          </p>
        </div>

        {/* =====================================
            CONTROLS
        ===================================== */}
        <div className="projects-controls">
          <div className="projects-filters">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={activeCategory === category ? "active" : ""}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="projects-search">
            <input
              type="search"
              placeholder="Filter by tech or keyword (e.g. MERN, JWT, React)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search projects"
            />
          </div>
        </div>

        {/* =====================================
            COUNT BAR
        ===================================== */}
        <div className="projects-count">
          Showing <strong>{filteredProjects.length}</strong> of{" "}
          <strong>{projects.length}</strong> verified projects
        </div>

        {/* =====================================
            PROJECTS GRID
        ===================================== */}
        {filteredProjects.length > 0 ? (
          <div className="projects-list">
            {filteredProjects.map((project) => (
              <article className="project-card" key={project.id}>

                {/* VISUAL / PREVIEW */}
                <div className="project-visual-wrapper">
                  {project.image ? (
                    <div className="project-screenshot-container">
                      <div className="project-browser-bar">
                        <span className="browser-dot red"></span>
                        <span className="browser-dot yellow"></span>
                        <span className="browser-dot green"></span>
                        <span className="browser-url-text">devnirala.local/{project.id}</span>
                      </div>
                      <img
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        className="project-screenshot-img"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="project-code-preview">
                      <div className="project-browser-bar">
                        <span className="browser-dot red"></span>
                        <span className="browser-dot yellow"></span>
                        <span className="browser-dot green"></span>
                        <span className="browser-url-text">{project.category.toLowerCase().replace(/\s+/g, "-")}.config</span>
                      </div>
                      <div className="code-preview-body">
                        <div className="code-line">
                          <span className="code-keyword">const</span> stack = [
                          {project.technologies.slice(0, 3).map((t, idx) => (
                            <span key={t} className="code-string">"{t}"{idx < 2 ? ", " : ""}</span>
                          ))}];
                        </div>
                        <div className="code-line">
                          <span className="code-keyword">export default</span> {project.title.split(" ")[0]}Service;
                        </div>
                        <div className="code-badge-overlay">
                          <FaCode />
                          <span>{project.category} Architecture</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Badges Overlay */}
                  <div className="project-badge-bar">
                    <span className="project-category-badge">{project.category}</span>
                    <span className={`project-status-badge status-${project.statusType}`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* CARD BODY */}
                <div className="project-body">
                  <div className="project-header-row">
                    <span className="project-number">{project.number}</span>
                    <h3 className="project-title">{project.title}</h3>
                  </div>

                  <p className="project-desc">{project.description}</p>

                  {/* KEY FEATURES */}
                  <div className="project-features-block">
                    <h4 className="features-heading">Key Engineering Highlights:</h4>
                    <ul className="features-list">
                      {project.features.map((feature) => (
                        <li key={feature}>
                          <span className="feature-check">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* TECH PILLS */}
                  <div className="project-tech-block">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CARD FOOTER / ACTIONS */}
                  <div className="project-footer">
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-btn project-btn-github"
                        aria-label={`View ${project.title} source on GitHub`}
                      >
                        <FaGithub />
                        <span>Source Code</span>
                        <span className="arrow">↗</span>
                      </a>
                    ) : null}

                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-btn project-btn-primary"
                        aria-label={`Open live demo of ${project.title}`}
                      >
                        <FaExternalLinkAlt />
                        <span>Live Demo</span>
                        <span className="arrow">↗</span>
                      </a>
                    ) : null}

                    {/* Transparent availability note */}
                    <div className="project-status-note">
                      <span className="note-indicator"></span>
                      <span>{project.availability}</span>
                    </div>
                  </div>
                </div>

              </article>
            ))}
          </div>
        ) : (
          <div className="projects-empty">
            <h3>No projects found</h3>
            <p>Try searching for another keyword or selecting a different category.</p>
          </div>
        )}

      </div>
    </section>
  );
}

export default Projects;