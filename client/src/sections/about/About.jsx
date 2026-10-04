import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        {/* Section Heading */}
        <div className="about-heading">
          <span className="section-label">ABOUT ME</span>

          <h2>
            Building digital experiences
            <span> with code & creativity.</span>
          </h2>

          <p>
            A little about who I am, what I do and what drives me
            to build meaningful digital experiences.
          </p>
        </div>

        {/* Main About Content */}
        <div className="about-content">

          {/* Left Visual */}
          <div className="about-visual">
            <div className="about-glow"></div>

            <div className="about-card">
              <div className="about-card-top">
                <span className="about-dot"></span>
                <span>engineer.config.js</span>
              </div>

              <div className="about-code">
                <p>
                  <span className="code-purple">const</span>{" "}
                  developer = {"{"}
                </p>

                <p className="code-indent">
                  name: <span>"Chandr Dev Nirala"</span>,
                </p>

                <p className="code-indent">
                  role: <span>"Full Stack Developer"</span>,
                </p>

                <p className="code-indent">
                  coreStack: [<span>"React"</span>, <span>"Node.js"</span>, <span>"MongoDB"</span>],
                </p>

                <p className="code-indent">
                  focus: <span>"MERN & REST API Architecture"</span>,
                </p>

                <p className="code-indent">
                  status: <span>"Open to Engineering Roles"</span>
                </p>

                <p>
                  {"}"};
                </p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="about-info">

            <span className="about-small-title">
              BACKGROUND & DIRECTION
            </span>

            <h3>
              Architecting full-stack systems from
              <span> concept to deployment.</span>
            </h3>

            <p>
              I'm a Full Stack Developer passionate about solving real-world
              problems with clean, maintainable code. I specialize in building
              end-to-end web applications—combining responsive, accessible React
              frontends with secure Node.js and Express RESTful backends.
            </p>

            <p>
              My technical direction focuses on modular architecture, role-based
              access control, robust API design, and schema modeling with
              MongoDB. Currently pursuing my B.Tech in Computer Science and Engineering,
              I am focused on contributing to impactful engineering teams through
              software development roles and internships.
            </p>

            {/* Authentic Engineering Highlights */}
            <div className="about-stats">

              <div className="about-stat">
                <strong>MERN</strong>
                <span>Full Stack Focus</span>
              </div>

              <div className="about-stat">
                <strong>B.Tech CSE</strong>
                <span>Computer Science</span>
              </div>

              <div className="about-stat">
                <strong>RESTful</strong>
                <span>API Architecture</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;