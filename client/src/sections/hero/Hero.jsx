// =====================================
// DEVNIRALA PORTFOLIO
// HERO SECTION
// =====================================

import "./Hero.css";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-container">

        {/* =====================================
            LEFT CONTENT
        ===================================== */}

        <div className="hero-content">

          {/* Availability */}
          <div className="hero-status">
            <span className="status-dot"></span>
            Available for Full-Time Roles & Opportunities
          </div>


          {/* Greeting */}
          <p className="hero-greeting">
            Hello, I'm
          </p>


          {/* Name */}
          <h1 className="hero-title">
            Chandr Dev
            <span>Nirala</span>
          </h1>


          {/* Role */}
          <h2 className="hero-role">
            Full Stack Developer
          </h2>


          {/* Description */}
          <p className="hero-description">
            Building robust, scalable full-stack web applications with modern
            architecture, clean RESTful APIs, and intuitive user experiences.
          </p>

          {/* Tech Strengths Pills */}
          <div className="hero-stack-pills">
            <span>React.js</span>
            <span className="dot">•</span>
            <span>Node.js</span>
            <span className="dot">•</span>
            <span>Express.js</span>
            <span className="dot">•</span>
            <span>MongoDB</span>
          </div>


          {/* Buttons */}
          <div className="hero-actions">

            <a
              href="#projects"
              className="hero-primary-button"
            >
              Explore Projects
              <span>↗</span>
            </a>

            <a
              href="#contact"
              className="hero-secondary-button"
            >
              Get in Touch
            </a>

          </div>


          {/* Social Links */}
          <div className="hero-socials">
            <a
              href="https://github.com/devnirala2074-boop"
              aria-label="GitHub Profile"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/chandradev-nirala-99752b414/"
              aria-label="LinkedIn Profile"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
            >
              <FaLinkedinIn />
              <span>LinkedIn</span>
            </a>

            <a
              href="mailto:devnirala2074@gmail.com"
              aria-label="Send Email"
              className="social-icon-btn"
            >
              <FaEnvelope />
              <span>Email</span>
            </a>
          </div>

        </div>


        {/* =====================================
            RIGHT VISUAL
        ===================================== */}

        <div className="hero-visual">

          {/* Glow behind image */}
          <div className="profile-glow"></div>


          {/* Purple / Blue Orb */}
          <div className="profile-orb"></div>


          {/* Dotted Background */}
          <div className="profile-dots"></div>


          {/* Profile Image */}
          <img
            src="/profile.png"
            alt="Chandr Dev Nirala"
            className="hero-profile-image"
          />


          {/* Floating Tech Badges */}

          <div className="floating-badge badge-one">
            React
          </div>

          <div className="floating-badge badge-two">
            Node.js
          </div>

          <div className="floating-badge badge-three">
            MongoDB
          </div>

        </div>

      </div>


      {/* =====================================
          SCROLL INDICATOR
      ===================================== */}

      <div className="hero-scroll">

        <span>
          Scroll to explore
        </span>

        <div className="scroll-line"></div>

      </div>

    </section>
  );
}

export default Hero;