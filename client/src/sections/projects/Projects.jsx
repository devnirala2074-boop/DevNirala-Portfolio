// =========================================
// DEVNIRALA PORTFOLIO
// PROJECTS SECTION
// =========================================

import { useMemo, useState } from "react";
import "./Projects.css";


// =========================================
// PROJECT DATA
// =========================================

const projects = [
  {
    number: "01",
    title: "Expense Tracker",
    description:
      "A full-stack personal finance platform for tracking expenses, income, budgets and spending patterns.",
    category: "Full Stack",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    status: "Featured",
  },

  {
    number: "02",
    title: "College Management System",
    description:
      "A complete academic management platform for students, faculty, authentication, records and administration.",
    category: "Full Stack",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    status: "Featured",
  },

  {
    number: "03",
    title: "E-Commerce Platform",
    description:
      "A scalable online shopping platform with products, categories, cart, checkout and order management.",
    category: "Full Stack",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    status: "Featured",
  },

  {
    number: "04",
    title: "Learning Management System",
    description:
      "An online education platform for courses, lessons, instructors, students and learning progress.",
    category: "Full Stack",
    technologies: ["React", "Node.js", "MongoDB", "JWT"],
    status: "Featured",
  },

  {
    number: "05",
    title: "Job Portal",
    description:
      "A recruitment platform connecting job seekers with companies through job listings and applications.",
    category: "Full Stack",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    status: "Building",
  },

  {
    number: "06",
    title: "Hospital Management System",
    description:
      "A healthcare administration platform for appointments, patients, doctors and medical records.",
    category: "Full Stack",
    technologies: ["React", "Node.js", "MongoDB", "JWT"],
    status: "Building",
  },

  {
    number: "07",
    title: "Food Delivery Platform",
    description:
      "A food ordering application with restaurants, menus, carts, orders and delivery workflows.",
    category: "Full Stack",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    status: "Building",
  },

  {
    number: "08",
    title: "Real Estate Platform",
    description:
      "A property discovery platform for searching, filtering and managing residential and commercial listings.",
    category: "Full Stack",
    technologies: ["React", "Node.js", "MongoDB", "Cloudinary"],
    status: "Building",
  },

  {
    number: "09",
    title: "Event Management Platform",
    description:
      "A platform for creating events, managing registrations, attendees and event schedules.",
    category: "Full Stack",
    technologies: ["React", "Node.js", "MongoDB", "JWT"],
    status: "Building",
  },

  {
    number: "10",
    title: "Project Management Tool",
    description:
      "A collaborative workspace for managing projects, tasks, teams, deadlines and productivity.",
    category: "SaaS",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    status: "Building",
  },

  {
    number: "11",
    title: "Customer Relationship Manager",
    description:
      "A CRM application for managing customers, leads, communication and sales activities.",
    category: "SaaS",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    status: "Building",
  },

  {
    number: "12",
    title: "Inventory Management System",
    description:
      "A business inventory platform for products, stock levels, suppliers and transactions.",
    category: "Full Stack",
    technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
    status: "Building",
  },

  {
    number: "13",
    title: "Invoice Management System",
    description:
      "A professional invoicing platform for creating invoices, managing customers and tracking payments.",
    category: "SaaS",
    technologies: ["React", "Node.js", "MongoDB", "PDF"],
    status: "Building",
  },

  {
    number: "14",
    title: "Task Management App",
    description:
      "A productivity application for creating, organizing, prioritizing and completing daily tasks.",
    category: "Frontend",
    technologies: ["React", "JavaScript", "CSS", "LocalStorage"],
    status: "Live",
  },

  {
    number: "15",
    title: "Real-Time Chat Application",
    description:
      "A real-time communication application supporting conversations, online status and instant messaging.",
    category: "Full Stack",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    status: "Featured",
  },

  {
    number: "16",
    title: "Social Media Platform",
    description:
      "A social networking application with profiles, posts, likes, comments and user interactions.",
    category: "Full Stack",
    technologies: ["React", "Node.js", "MongoDB", "Cloudinary"],
    status: "Building",
  },

  {
    number: "17",
    title: "Blog Publishing Platform",
    description:
      "A modern publishing system for creating, editing and discovering articles and technical content.",
    category: "Full Stack",
    technologies: ["React", "Node.js", "MongoDB", "JWT"],
    status: "Live",
  },

  {
    number: "18",
    title: "News Aggregator",
    description:
      "A news discovery interface that organizes articles by topics, sources and categories.",
    category: "Frontend",
    technologies: ["React", "JavaScript", "REST API", "CSS"],
    status: "Live",
  },

  {
    number: "19",
    title: "Weather Dashboard",
    description:
      "A responsive weather dashboard displaying current conditions, forecasts and location-based data.",
    category: "Frontend",
    technologies: ["React", "REST API", "JavaScript", "CSS"],
    status: "Live",
  },

  {
    number: "20",
    title: "Movie Discovery Platform",
    description:
      "A movie browsing application with search, categories, ratings and detailed movie information.",
    category: "Frontend",
    technologies: ["React", "REST API", "JavaScript", "CSS"],
    status: "Live",
  },

  {
    number: "21",
    title: "Music Streaming UI",
    description:
      "A modern music streaming interface with playlists, albums, artists and audio controls.",
    category: "Frontend",
    technologies: ["React", "JavaScript", "CSS", "Web Audio"],
    status: "Building",
  },

  {
    number: "22",
    title: "Personal Finance Dashboard",
    description:
      "An analytics dashboard for visualizing financial activity, budgets, savings and monthly trends.",
    category: "Frontend",
    technologies: ["React", "Chart.js", "JavaScript", "CSS"],
    status: "Building",
  },

  {
    number: "23",
    title: "Admin Dashboard",
    description:
      "A reusable administration dashboard with analytics, users, activity and management interfaces.",
    category: "Frontend",
    technologies: ["React", "Chart.js", "JavaScript", "CSS"],
    status: "Live",
  },

  {
    number: "24",
    title: "Analytics Dashboard",
    description:
      "A data visualization interface for monitoring business metrics, trends and performance indicators.",
    category: "Frontend",
    technologies: ["React", "Chart.js", "REST API", "CSS"],
    status: "Building",
  },

  {
    number: "25",
    title: "SaaS Subscription Platform",
    description:
      "A subscription-based SaaS architecture with user accounts, plans, billing and dashboard workflows.",
    category: "SaaS",
    technologies: ["React", "Node.js", "MongoDB", "JWT"],
    status: "Building",
  },

  {
    number: "26",
    title: "URL Shortener",
    description:
      "A URL management service that generates short links and tracks link usage and analytics.",
    category: "Backend",
    technologies: ["Node.js", "Express", "MongoDB", "REST API"],
    status: "Live",
  },

  {
    number: "27",
    title: "Authentication Service",
    description:
      "A reusable authentication backend supporting registration, login, protected routes and token-based access.",
    category: "Backend",
    technologies: ["Node.js", "Express", "JWT", "MongoDB"],
    status: "Building",
  },

  {
    number: "28",
    title: "REST API Platform",
    description:
      "A structured REST API backend designed around scalable resources, validation and authentication.",
    category: "Backend",
    technologies: ["Node.js", "Express", "MongoDB", "JWT"],
    status: "Building",
  },

  {
    number: "29",
    title: "API Monitoring Dashboard",
    description:
      "A developer dashboard for monitoring API endpoints, response times and service availability.",
    category: "Backend",
    technologies: ["Node.js", "Express", "React", "MongoDB"],
    status: "Building",
  },

  {
    number: "30",
    title: "File Management System",
    description:
      "A cloud-style file management application for uploading, organizing and managing digital documents.",
    category: "Full Stack",
    technologies: ["React", "Node.js", "MongoDB", "Cloudinary"],
    status: "Building",
  },

  {
    number: "31",
    title: "Document Management System",
    description:
      "A secure document platform for organizing files, metadata, access permissions and document workflows.",
    category: "SaaS",
    technologies: ["React", "Node.js", "MongoDB", "JWT"],
    status: "Building",
  },

  {
    number: "32",
    title: "Online Examination System",
    description:
      "A digital examination platform supporting question banks, tests, submissions and result analysis.",
    category: "Full Stack",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    status: "Building",
  },

  {
    number: "33",
    title: "Quiz Platform",
    description:
      "An interactive quiz application with categories, scoring, timers and performance tracking.",
    category: "Frontend",
    technologies: ["React", "JavaScript", "CSS", "LocalStorage"],
    status: "Live",
  },

  {
    number: "34",
    title: "Attendance Management System",
    description:
      "A digital attendance solution for managing students, attendance records and reports.",
    category: "Full Stack",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    status: "Building",
  },

  {
    number: "35",
    title: "Employee Management System",
    description:
      "An internal business application for employee records, departments, roles and management workflows.",
    category: "Full Stack",
    technologies: ["React", "Node.js", "MongoDB", "JWT"],
    status: "Building",
  },

  {
    number: "36",
    title: "HR Management Platform",
    description:
      "A human resources platform for employee data, leave management and organizational workflows.",
    category: "SaaS",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    status: "Building",
  },

  {
    number: "37",
    title: "Appointment Booking System",
    description:
      "A scheduling platform for discovering available slots and managing appointments.",
    category: "Full Stack",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    status: "Building",
  },

  {
    number: "38",
    title: "Travel Planning Platform",
    description:
      "A travel planning application for destinations, itineraries, activities and trip organization.",
    category: "Frontend",
    technologies: ["React", "REST API", "JavaScript", "CSS"],
    status: "Building",
  },

  {
    number: "39",
    title: "Hotel Booking Platform",
    description:
      "A hotel discovery and reservation interface with search, filtering and booking workflows.",
    category: "Full Stack",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    status: "Building",
  },

  {
    number: "40",
    title: "Restaurant Management System",
    description:
      "A restaurant operations platform for menus, orders, tables and management workflows.",
    category: "Full Stack",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    status: "Building",
  },

  {
    number: "41",
    title: "AI Resume Analyzer",
    description:
      "An AI-powered tool that analyzes resumes and provides structured insights for improvement.",
    category: "AI/ML",
    technologies: ["React", "Node.js", "Python", "AI API"],
    status: "Building",
  },

  {
    number: "42",
    title: "AI Content Assistant",
    description:
      "An AI productivity tool for generating, rewriting and organizing content through a web interface.",
    category: "AI/ML",
    technologies: ["React", "Node.js", "AI API", "MongoDB"],
    status: "Building",
  },

  {
    number: "43",
    title: "AI Chat Assistant",
    description:
      "A conversational AI interface with chat history, prompts and assistant-style interactions.",
    category: "AI/ML",
    technologies: ["React", "Node.js", "AI API", "MongoDB"],
    status: "Building",
  },

  {
    number: "44",
    title: "AI Image Generator",
    description:
      "A creative AI application for generating images from natural language prompts.",
    category: "AI/ML",
    technologies: ["React", "Node.js", "AI API", "Cloudinary"],
    status: "Building",
  },

  {
    number: "45",
    title: "Recommendation Engine",
    description:
      "A recommendation-focused application that suggests relevant content based on user interactions.",
    category: "AI/ML",
    technologies: ["Python", "Machine Learning", "React", "REST API"],
    status: "Building",
  },

  {
    number: "46",
    title: "Customer Support AI",
    description:
      "An AI-assisted support platform for answering customer questions and organizing conversations.",
    category: "AI/ML",
    technologies: ["React", "Node.js", "AI API", "MongoDB"],
    status: "Building",
  },

  {
    number: "47",
    title: "Code Snippet Manager",
    description:
      "A developer productivity tool for storing, searching and organizing reusable code snippets.",
    category: "Developer Tools",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    status: "Building",
  },

  {
    number: "48",
    title: "Developer API Tester",
    description:
      "A browser-based API testing workspace for sending requests and inspecting responses.",
    category: "Developer Tools",
    technologies: ["React", "JavaScript", "REST API", "CSS"],
    status: "Building",
  },

  {
    number: "49",
    title: "Markdown Editor",
    description:
      "A developer-friendly markdown editor with live preview and document management.",
    category: "Developer Tools",
    technologies: ["React", "JavaScript", "Markdown", "CSS"],
    status: "Live",
  },

  {
    number: "50",
    title: "GitHub Profile Analyzer",
    description:
      "A developer analytics tool for exploring GitHub profiles, repositories and contribution data.",
    category: "Developer Tools",
    technologies: ["React", "GitHub API", "JavaScript", "CSS"],
    status: "Building",
  },

  {
    number: "51",
    title: "Password Manager",
    description:
      "A secure-style credential management interface focused on organizing account information.",
    category: "Developer Tools",
    technologies: ["React", "Node.js", "MongoDB", "JWT"],
    status: "Building",
  },

  {
    number: "52",
    title: "Productivity Workspace",
    description:
      "A unified workspace combining tasks, notes, goals and productivity tracking.",
    category: "SaaS",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    status: "Building",
  },

  {
    number: "53",
    title: "Digital Notes Application",
    description:
      "A modern notes application for creating, editing, searching and organizing personal notes.",
    category: "Frontend",
    technologies: ["React", "JavaScript", "CSS", "LocalStorage"],
    status: "Live",
  },

  {
    number: "54",
    title: "Habit Tracker",
    description:
      "A habit-building application for tracking routines, streaks and personal progress.",
    category: "Frontend",
    technologies: ["React", "JavaScript", "CSS", "LocalStorage"],
    status: "Live",
  },

  {
    number: "55",
    title: "Fitness Tracking Dashboard",
    description:
      "A fitness dashboard for tracking workouts, goals, progress and activity statistics.",
    category: "Frontend",
    technologies: ["React", "Chart.js", "JavaScript", "CSS"],
    status: "Building",
  },

  {
    number: "56",
    title: "Subscription Tracker",
    description:
      "A personal finance utility for tracking recurring subscriptions and monthly costs.",
    category: "Frontend",
    technologies: ["React", "JavaScript", "CSS", "LocalStorage"],
    status: "Building",
  },

  {
    number: "57",
    title: "Digital Marketplace",
    description:
      "A marketplace architecture for discovering, listing and purchasing digital products.",
    category: "Full Stack",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    status: "Building",
  },

  {
    number: "58",
    title: "Freelance Marketplace",
    description:
      "A platform connecting clients and freelancers through profiles, projects and proposals.",
    category: "SaaS",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    status: "Building",
  },

  {
    number: "59",
    title: "Community Forum",
    description:
      "A discussion platform with communities, posts, comments, voting and user profiles.",
    category: "Full Stack",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    status: "Building",
  },

  {
    number: "60",
    title: "Developer Portfolio Platform",
    description:
      "A professional portfolio platform designed to showcase projects, skills, experience and technical growth.",
    category: "Frontend",
    technologies: ["React", "JavaScript", "CSS", "Vite"],
    status: "Building",
  },
];


// =========================================
// PROJECT CATEGORIES
// =========================================

const categories = [
  "All",
  "Full Stack",
  "Frontend",
  "Backend",
  "AI/ML",
  "SaaS",
  "Developer Tools",
];


// =========================================
// PROJECT COMPONENT
// =========================================

function Projects() {

  // =========================================
  // FILTER STATE
  // =========================================

  const [activeCategory, setActiveCategory] =
    useState("All");


  // =========================================
  // SEARCH STATE
  // =========================================

  const [searchTerm, setSearchTerm] =
    useState("");


  // =========================================
  // FILTERED PROJECTS
  // =========================================

  const filteredProjects = useMemo(() => {

    return projects.filter((project) => {

      const matchesCategory =
        activeCategory === "All" ||
        project.category === activeCategory;


      const searchText = searchTerm
        .toLowerCase()
        .trim();


      const matchesSearch =
        !searchText ||
        project.title
          .toLowerCase()
          .includes(searchText) ||
        project.description
          .toLowerCase()
          .includes(searchText) ||
        project.technologies.some((technology) =>
          technology
            .toLowerCase()
            .includes(searchText)
        );


      return (
        matchesCategory &&
        matchesSearch
      );

    });

  }, [activeCategory, searchTerm]);


  // =========================================
  // RENDER
  // =========================================

  return (
    <section
      className="projects"
      id="projects"
    >

      <div className="projects-container">


        {/* =====================================
            SECTION HEADER
        ===================================== */}

        <div className="projects-heading">

          <span className="section-label">
            03 — PROJECTS
          </span>


          <h2>
            Things I've
            <span> built.</span>
          </h2>


          <p>
            A collection of real-world projects
            covering full-stack development,
            SaaS, AI, developer tools and
            modern frontend experiences.
          </p>

        </div>


        {/* =====================================
            CONTROLS
        ===================================== */}

        <div className="projects-controls">


          {/* FILTERS */}

          <div className="projects-filters">

            {categories.map((category) => (

              <button
                key={category}
                type="button"
                className={
                  activeCategory === category
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setActiveCategory(category)
                }
              >
                {category}
              </button>

            ))}

          </div>


          {/* SEARCH */}

          <div className="projects-search">

            <input
              type="search"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(event) =>
                setSearchTerm(
                  event.target.value
                )
              }
              aria-label="Search projects"
            />

          </div>

        </div>


        {/* =====================================
            PROJECT COUNT
        ===================================== */}

        <div className="projects-count">

          Showing

          <strong>
            {filteredProjects.length}
          </strong>

          of

          <strong>
            {projects.length}
          </strong>

          projects

        </div>


        {/* =====================================
            PROJECT LIST
        ===================================== */}

        {filteredProjects.length > 0 ? (

          <div className="projects-list">

            {filteredProjects.map((project) => (

              <article
                className="project-card"
                key={project.number}
              >


                {/* =================================
                    TOP
                ================================= */}

                <div className="project-top">

                  <span className="project-number">
                    {project.number}
                  </span>


                  <span className="project-status">
                    {project.status}
                  </span>

                </div>


                {/* =================================
                    MAIN CONTENT
                ================================= */}

                <div className="project-content">


                  {/* PROJECT INFO */}

                  <div className="project-info">

                    <span className="project-category">
                      {project.category}
                    </span>


                    <h3>
                      {project.title}
                    </h3>


                    <p>
                      {project.description}
                    </p>


                    {/* TECHNOLOGIES */}

                    <div className="project-tech">

                      {project.technologies.map(
                        (technology) => (

                          <span
                            key={technology}
                          >
                            {technology}
                          </span>

                        )
                      )}

                    </div>

                  </div>


                  {/* =================================
                      PROJECT VISUAL
                  ================================= */}

                  <div className="project-visual">

                    <div className="project-window">


                      {/* WINDOW BAR */}

                      <div className="window-bar">

                        <span></span>
                        <span></span>
                        <span></span>

                      </div>


                      {/* WINDOW CONTENT */}

                      <div className="window-content">

                        <div className="visual-line large"></div>

                        <div className="visual-line"></div>

                        <div className="visual-line short"></div>


                        <div className="visual-boxes">

                          <div></div>
                          <div></div>
                          <div></div>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>


                {/* =================================
                    BOTTOM
                ================================= */}

                <div className="project-bottom">


                  {/* LIVE DEMO */}

                  <a
                    href="#"
                    className="project-link primary"
                    onClick={(event) =>
                      event.preventDefault()
                    }
                  >
                    Live Demo
                    <span>↗</span>
                  </a>


                  {/* GITHUB */}

                  <a
                    href="#"
                    className="project-link"
                    onClick={(event) =>
                      event.preventDefault()
                    }
                  >
                    GitHub
                    <span>↗</span>
                  </a>

                </div>

              </article>

            ))}

          </div>

        ) : (

          /* =====================================
             EMPTY STATE
          ===================================== */

          <div className="projects-empty">

            <h3>
              No projects found
            </h3>

            <p>
              Try another project name,
              technology or category.
            </p>

          </div>

        )}


        {/* =====================================
            MORE PROJECTS
        ===================================== */}

        <div className="projects-more">

          <span>
            60 professional projects in
            the collection.
          </span>

          <div className="projects-more-line"></div>

        </div>

      </div>

      

    </section>
  );


}


export default Projects;