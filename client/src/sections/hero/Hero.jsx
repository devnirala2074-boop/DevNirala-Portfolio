// =====================================
// DEVNIRALA PORTFOLIO
// HERO SECTION
// =====================================

import "./Hero.css";

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
            Available for opportunities
          </div>


          {/* Greeting */}
          <p className="hero-greeting">
            Hi, I'm
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
            I build modern, scalable and interactive digital
            experiences using code, creativity and technology.
          </p>


          {/* Buttons */}
          <div className="hero-actions">

            <a
              href="#projects"
              className="hero-primary-button"
            >
              View Projects
              <span>↗</span>
            </a>

            <a
              href="#contact"
              className="hero-secondary-button"
            >
              Let's Connect
            </a>

          </div>


          {/* Social Links */}
          <div className="hero-socials">
<a
  href="https://github.com/devnirala2074-boop"
  aria-label="GitHub"
  target="_blank"
  rel="noopener noreferrer"
>
  GitHub
</a>

<a
  href="https://www.linkedin.com/in/chandradev-nirala-99752b414/"
  aria-label="LinkedIn"
  target="_blank"
  rel="noopener noreferrer"
>
  LinkedIn
</a>

<a
  href="https://www.instagram.com/nirala.dev74/?hl=en"
  aria-label="Instagram"
  target="_blank"
  rel="noopener noreferrer"
>
  Instagram
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