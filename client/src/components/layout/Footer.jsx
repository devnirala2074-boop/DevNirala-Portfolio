// =====================================
// DEVNIRALA PORTFOLIO
// FOOTER COMPONENT
// =====================================

import "./Footer.css";

import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  // =====================================
  // QUICK LINKS
  // =====================================

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ];

  // =====================================
  // SERVICES
  // =====================================

  const services = [
    "Web Development",
    "Frontend Development",
    "Backend Development",
    "Full Stack Development",
    "UI/UX Design",
    "API Development",
  ];

  return (
    <footer className="footer">

      {/* =====================================
          FOOTER MAIN
      ===================================== */}

      <div className="footer-main">

        {/* =====================================
            BRAND
        ===================================== */}

        <div className="footer-brand">

          <a href="#home" className="footer-logo">
            <span>{"{"}</span>
            Dev<span>Nirala</span>
            <span>{"}"}</span>
          </a>

          <p className="footer-description">
            Full Stack Developer building modern,
            scalable and interactive digital experiences.
          </p>

        </div>


        {/* =====================================
            QUICK LINKS
        ===================================== */}

        <div className="footer-column">

          <h3>QUICK LINKS</h3>

          <ul>
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>
                  <span>•</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

        </div>


        {/* =====================================
            SERVICES
        ===================================== */}

        <div className="footer-column">

          <h3>SERVICES</h3>

          <ul>
            {services.map((service) => (
              <li key={service}>
                <span>•</span>
                {service}
              </li>
            ))}
          </ul>

        </div>


        {/* =====================================
            LET'S CONNECT
        ===================================== */}

        <div className="footer-connect">

          <h3>LET'S CONNECT</h3>

          <p>
            Feel free to reach out to me on
            my social platforms.
          </p>


          {/* SOCIAL ICONS */}

          <div className="footer-socials">

            {/* GitHub */}
            <a
              href="https://github.com/devnirala2074-boop"
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>


            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/chandradev-nirala-99752b414/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>


            {/* Instagram */}
            <a
              href="https://www.instagram.com/nirala.dev74/?hl=en"
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>


            {/* Email */}
            <a
              href="mailto:devnirala2074@gmail.com"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>

          </div>

        </div>

      </div>


      {/* =====================================
          FOOTER BOTTOM
      ===================================== */}

      <div className="footer-bottom">

        {/* COPYRIGHT */}

        <p>
          © {currentYear}{" "}
          <span>DevNirala</span>.
          All rights reserved.
        </p>


        {/* MADE WITH */}

        <p className="footer-made">
          ♡ Made with <span>React</span> & passion
        </p>


        {/* BACK TO TOP */}

        <button
          className="back-to-top"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          Back to top ↑
        </button>

      </div>

    </footer>
  );
}

export default Footer;