import "./Skills.css";

const skillCategories = [
  {
    title: "Programming Languages",
    description: "Core languages I work and learn with.",
    skills: [
      "C",
      "C++",
      "Java",
      "Python",
      "JavaScript",
      "HTML",
      "CSS",
      "SQL",
    ],
  },

  {
    title: "Frontend",
    description: "Building responsive and interactive interfaces.",
    skills: [
      "React.js",
      "React Router",
      "Tailwind CSS",
      "Bootstrap",
      "Vite",
      "Responsive Design",
      "REST API Integration",
    ],
  },

  {
    title: "Backend",
    description: "Developing APIs and server-side applications.",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "CRUD",
      "JWT",
      "Authentication",
      "Middleware",
      "MVC Architecture",
    ],
  },

  {
    title: "Database",
    description: "Working with structured and NoSQL data.",
    skills: [
      "MongoDB",
      "Mongoose",
      "MongoDB Atlas",
      "MySQL",
      "Database Design",
      "Queries",
      "Indexes",
    ],
  },

  {
    title: "Tools",
    description: "Tools I use throughout the development workflow.",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "MongoDB Compass",
      "Chrome DevTools",
      "npm",
    ],
  },

  {
    title: "Animation & Creative",
    description: "Creating engaging and polished interactions.",
    skills: [
      "CSS Animations",
      "CSS Transitions",
      "Framer Motion",
      "GSAP",
      "Scroll Animations",
      "Micro-interactions",
      "Three.js",
      "React Three Fiber",
    ],
  },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">

        {/* Section Heading */}
        <div className="skills-heading">
          <span className="section-label">
            02 — SKILLS
          </span>

          <h2>
            Technologies I use to
            <span> build things.</span>
          </h2>

          <p>
            A growing collection of programming languages,
            frameworks, tools and technologies across the full
            development stack.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">

          {skillCategories.map((category) => (
            <article
              className="skill-category"
              key={category.title}
            >
              <div className="skill-category-header">
                <div className="skill-category-number">
                  {String(
                    skillCategories.indexOf(category) + 1
                  ).padStart(2, "0")}
                </div>

                <div>
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                </div>
              </div>

              <div className="skill-list">
                {category.skills.map((skill) => (
                  <span
                    className="skill-pill"
                    key={skill}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}

        </div>

        {/* MERN Highlight */}
        <div className="mern-highlight">

          <div>
            <span className="mern-label">
              FULL STACK FOCUS
            </span>

            <h3>
              MERN Stack
            </h3>

            <p>
              MongoDB + Express.js + React.js + Node.js
            </p>
          </div>

          <div className="mern-stack">
            <span>MongoDB</span>
            <span>→</span>
            <span>Express</span>
            <span>→</span>
            <span>React</span>
            <span>→</span>
            <span>Node</span>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;