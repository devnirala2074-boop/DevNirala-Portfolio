import "./Experience.css";

const experiences = [
  {
    year: "2026 — Present",
    type: "FULL STACK",
    title: "Full Stack Web Development & System Projects",
    organization: "Technical Training & Applied Engineering",
    description:
      "Engineering full-stack web applications across the MERN stack (React, Node.js, Express, MongoDB). Designing modular MVC backends, role-based authentication flows with JWT, and responsive frontend architectures for real-world applications.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "RESTful APIs",
    ],
  },
  {
    year: "2024 — Present",
    type: "EDUCATION",
    title: "B.Tech in Computer Science & Engineering",
    organization: "CSVTU (Pursuing)",
    description:
      "Pursuing bachelor's degree in Computer Science & Engineering. Building strong theoretical and applied foundations in Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks.",
    technologies: [
      "Data Structures",
      "Algorithms",
      "Java",
      "C++",
      "SQL",
      "DBMS",
    ],
  },
  {
    year: "2024 — 2025",
    type: "FOUNDATION",
    title: "Programming Foundations & Technical Learning",
    organization: "Practical Certification & Algorithmic Practice",
    description:
      "Solidified core software engineering disciplines, logical problem solving, backend scripting with Python, and web standards through hands-on practice, version control with Git, and database modeling.",
    technologies: [
      "Python",
      "JavaScript",
      "C",
      "SQL",
      "Git & GitHub",
    ],
  },
];

function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="experience-container">

        {/* Section Header */}
        <div className="experience-heading">
          <span className="section-label">
            04 — EXPERIENCE
          </span>

          <h2>
            My development
            <span> journey.</span>
          </h2>

          <p>
            A timeline of my learning, projects and continuous
            growth as a developer.
          </p>
        </div>

        {/* Timeline */}
        <div className="experience-timeline">

          <div className="timeline-line"></div>

          {experiences.map((experience, index) => (
            <article
              className="experience-item"
              key={experience.year + experience.title}
            >

              {/* Timeline Marker */}
              <div className="timeline-marker">
                <span></span>
              </div>

              {/* Year */}
              <div className="experience-year">
                {experience.year}
              </div>

              {/* Content */}
              <div className="experience-card">

                <div className="experience-top">
                  <span className="experience-type">
                    {experience.type}
                  </span>

                  <span className="experience-index">
                    0{index + 1}
                  </span>
                </div>

                <h3>
                  {experience.title}
                </h3>

                <h4>
                  {experience.organization}
                </h4>

                <p>
                  {experience.description}
                </p>

                {/* Technologies */}
                <div className="experience-tech">
                  {experience.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

              </div>

            </article>
          ))}

        </div>

        {/* Current Focus */}
        <div className="experience-focus">

          <div className="focus-indicator">
            <span></span>
            CURRENT FOCUS
          </div>

          <h3>
            Building. Learning. Improving.
          </h3>

          <p>
            Continuously learning new technologies and turning
            ideas into useful digital products.
          </p>

        </div>

      </div>
    </section>
  );
}

export default Experience;