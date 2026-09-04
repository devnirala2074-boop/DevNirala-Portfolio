import { useState } from "react";

import Navbar from "./components/layout/Navbar";
import Hero from "./sections/hero/Hero";
import About from "./sections/about/About";
import Skills from "./sections/skills/Skills";
import Projects from "./sections/projects/Projects";
import Experience from "./sections/experience/Experience";
import Blog from "./sections/blog/Blog";
import Contact from "./sections/contact/Contact";
import Footer from "./components/layout/Footer";


function App() {

  // =========================================
  // THEME
  // =========================================

  const [darkMode, setDarkMode] = useState(true);


  return (

    <div className={darkMode ? "dark-mode" : "light-mode"}>

      {/* =====================================
          NAVBAR
      ===================================== */}

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />


      {/* =====================================
          HERO
      ===================================== */}

      <Hero />


      {/* =====================================
          ABOUT
      ===================================== */}

      <About />


      {/* =====================================
          SKILLS
      ===================================== */}

      <Skills />


      {/* =====================================
          PROJECTS
      ===================================== */}

      <Projects />


      {/* =====================================
          EXPERIENCE
      ===================================== */}

      <Experience />


      {/* =====================================
          BLOG
      ===================================== */}

      <Blog />


      {/* =====================================
          CONTACT
      ===================================== */}

      <Contact />


      {/* =====================================
          FOOTER
      ===================================== */}

      <Footer />

    </div>

  );
}


export default App;