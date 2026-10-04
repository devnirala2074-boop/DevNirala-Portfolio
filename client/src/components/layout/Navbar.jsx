// =========================================
// DEVNIRALA PORTFOLIO
// NAVBAR COMPONENT
// =========================================

import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar({ darkMode, setDarkMode }) {

  // =========================================
  // MOBILE MENU
  // =========================================

  const [menuOpen, setMenuOpen] = useState(false);
  


  // =========================================
  // ACTIVE SECTION
  // =========================================

  const [activeSection, setActiveSection] = useState(
    window.location.hash || "#home"
  );


  // =========================================
  // NAVIGATION LINKS
  // =========================================

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ];


  // =========================================
  // UPDATE ACTIVE LINK
  // =========================================

  useEffect(() => {

    const handleHashChange = () => {
      setActiveSection(
        window.location.hash || "#home"
      );

      setMenuOpen(false);
    };


    window.addEventListener(
      "hashchange",
      handleHashChange
    );


    return () => {
      window.removeEventListener(
        "hashchange",
        handleHashChange
      );
    };

  }, []);


  // =========================================
  // CLOSE MOBILE MENU
  // =========================================

  const closeMenu = () => {
    setMenuOpen(false);
  };


  return (
    <header className="navbar">

      <div className="navbar-container">


        {/* =====================================
            LOGO
        ===================================== */}

        <a
          href="#home"
          className="navbar-logo"
          onClick={closeMenu}
        >
          <span className="logo-bracket">
            {"{"}
          </span>

          <span>Dev</span>

          <span className="logo-accent">
            Nirala
          </span>

          <span className="logo-bracket">
            {"}"}
          </span>
        </a>


        {/* =====================================
            DESKTOP NAVIGATION
        ===================================== */}

        <nav className="navbar-links">

          {navLinks.map((link) => (

            <a
              key={link.href}
              href={link.href}
              className={
                activeSection === link.href
                  ? "active"
                  : ""
              }
            >
              {link.label}
            </a>

          ))}

        </nav>


        {/* =====================================
            ACTIONS
        ===================================== */}

        <div className="navbar-actions">


          {/* THEME TOGGLE */}

          <button
            className="theme-toggle"
            type="button"
            aria-label="Toggle theme"
            onClick={() => setDarkMode(!darkMode)}
          >
            <span>☀</span>
            <span>☾</span>
          </button>



          {/* MOBILE MENU BUTTON */}

          <button
            className={`mobile-menu-button ${
              menuOpen ? "open" : ""
            }`}
            type="button"
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
          >

            <span></span>
            <span></span>
            <span></span>

          </button>

        </div>

      </div>


      {/* =====================================
          MOBILE NAVIGATION
      ===================================== */}

      <nav
        className={`mobile-menu ${
          menuOpen
            ? "mobile-menu-open"
            : ""
        }`}
      >

        {navLinks.map((link) => (

          <a
            key={link.href}
            href={link.href}
            className={
              activeSection === link.href
                ? "active"
                : ""
            }
            onClick={closeMenu}
          >
            {link.label}
          </a>

        ))}

      </nav>

    </header>
  );
}

export default Navbar;