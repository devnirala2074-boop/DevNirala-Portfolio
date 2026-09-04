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
                <span>developer.js</span>
              </div>

              <div className="about-code">
                <p>
                  <span className="code-purple">const</span>{" "}
                  developer = {"{"}
                </p>

                <p className="code-indent">
                  name: <span>"DevNirala"</span>,
                </p>

                <p className="code-indent">
                  role: <span>"Full Stack Developer"</span>,
                </p>

                <p className="code-indent">
                  passion: <span>"Building"</span>,
                </p>

                <p className="code-indent">
                  mindset: <span>"Always Learning"</span>
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
              WHO I AM
            </span>

            <h3>
              Turning ideas into
              <span> real-world products.</span>
            </h3>

            <p>
              I'm a Full Stack Developer who enjoys turning ideas
              into clean, interactive and scalable web applications.
              I work across the frontend and backend to build
              complete digital experiences.
            </p>

            <p>
              I enjoy learning new technologies, solving problems
              through code and continuously improving the way I
              build for the web.
            </p>

            {/* Stats */}
            <div className="about-stats">

              <div className="about-stat">
                <strong>11+</strong>
                <span>Experience</span>
              </div>

              <div className="about-stat">
                <strong>15+</strong>
                <span>Projects</span>
              </div>

              <div className="about-stat">
                <strong>13+</strong>
                <span>Technologies</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;