// =========================================
// DEVNIRALA PORTFOLIO
// BLOG & ENGINEERING NOTES
// =========================================

import { FaBookOpen, FaClock } from "react-icons/fa";
import "./Blog.css";

function Blog() {
  const articles = [
    {
      number: "01",
      category: "FULL STACK ARCHITECTURE",
      title: "Structuring Scalable MERN Applications: MVC & Clean Route Design",
      description:
        "Architectural patterns for separating concerns across controllers, models, and middleware in Node.js and Express to build maintainable full-stack systems.",
      readTime: "5 min read",
      status: "In Progress",
    },
    {
      number: "02",
      category: "BACKEND SECURITY",
      title: "Implementing Role-Based Access Control & JWT in Modern Express APIs",
      description:
        "A practical guide to securing RESTful API endpoints with stateless JSON Web Tokens, password hashing via bcrypt, and authorization middleware.",
      readTime: "6 min read",
      status: "In Progress",
    },
    {
      number: "03",
      category: "DATABASE MODELING",
      title: "MongoDB Schema Design: Embedding vs Referencing for Real Applications",
      description:
        "Trade-offs and real-world considerations when structuring document relationships in MongoDB for multi-tenant and collaborative tools.",
      readTime: "4 min read",
      status: "In Progress",
    },
  ];

  return (
    <section className="blog-section" id="blog">
      <div className="blog-container">

        <div className="blog-header">
          <span className="section-label">05 — ENGINEERING NOTES</span>

          <h2>
            Technical thoughts &{" "}
            <span>architectural reflections.</span>
          </h2>

          <p>
            Insights, code explorations, and practical lessons documented throughout
            my journey building full-stack software.
          </p>
        </div>

        <div className="blog-grid">
          {articles.map((article) => (
            <article className="blog-card" key={article.number}>

              <div className="blog-card-top">
                <span className="blog-number">{article.number}</span>
                <span className="blog-category">{article.category}</span>
              </div>

              <h3 className="blog-title">{article.title}</h3>

              <p className="blog-desc">{article.description}</p>

              <div className="blog-card-bottom">
                <div className="blog-read-time">
                  <FaClock />
                  <span>{article.readTime}</span>
                </div>

                <div className="blog-status-badge">
                  <FaBookOpen />
                  <span>{article.status}</span>
                </div>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Blog;