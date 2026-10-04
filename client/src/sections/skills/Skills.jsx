import "./Skills.css";

const skillCategories = [
  {
    title: "Frontend Development",
    description: "Building responsive, modern, and accessible user interfaces.",
    skills: [
      "React.js",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Vite",
      "Responsive UI",
      "REST API Integration",
    ],
  },

  {
    title: "Backend Development",
    description: "Architecting server-side systems and RESTful API endpoints.",
    skills: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "CRUD Operations",
      "JWT Authentication",
      "Middleware",
      "MVC Architecture",
      "Nodemailer",
    ],
  },

  {
    title: "Database & Storage",
    description: "Managing structured relational and NoSQL document data.",
    skills: [
      "MongoDB",
      "Mongoose ODM",
      "MongoDB Atlas",
      "MySQL",
      "Schema Design",
      "Data Modeling",
      "Queries & Aggregations",
    ],
  },

  {
    title: "Programming Languages",
    description: "Core programming languages for algorithmic problem solving.",
    skills: [
      "JavaScript",
      "Python",
      "C",
      "C++",
      "Java",
      "SQL",
    ],
  },

  {
    title: "Tools & Platforms",
    description: "Tools and workflows utilized throughout the software lifecycle.",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "MongoDB Compass",
      "npm",
      "Chrome DevTools",
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