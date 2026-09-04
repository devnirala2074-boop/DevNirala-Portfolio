import "./Experience.css";

const experiences = [
  {
    year: "2026",
    type: "CURRENT",
    title: "Full Stack Development",
    organization: "Full Stack Training & Project Development",
    description:
      "Developing modern full-stack web applications using frontend, backend and database technologies while building real-world projects.",
    technologies: [
      "React.js",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
  },
  {
    year: "2025 — 2026",
    type: "PROJECTS",
    title: "Web Development Journey",
    organization: "Personal & Academic Projects",
    description:
      "Designed and developed interactive websites and full-stack applications while strengthening practical development and problem-solving skills.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
    ],
  },
  {
    year: "2025",
    type: "FOUNDATION",
    title: "Programming & Web Fundamentals",
    organization: "Learning & Practice",
    description:
      "Built a strong foundation in programming, web technologies, databases and software development concepts through continuous practice.",
    technologies: [
      "C",
      "C++",
      "Java",
      "Python",
      "SQL",
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