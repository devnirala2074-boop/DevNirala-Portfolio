import "./Blog.css";

function Blog() {
  const articles = [
    {
      number: "01",
      category: "FULL STACK",
      title: "Building Modern Full Stack Applications",
      description:
        "My approach to building scalable web applications with frontend, backend and database technologies.",
      date: "Coming Soon",
    },
    {
      number: "02",
      category: "JAVASCRIPT",
      title: "JavaScript Concepts I Learned",
      description:
        "Practical notes and lessons from working with JavaScript and modern web development.",
      date: "Coming Soon",
    },
    {
      number: "03",
      category: "WEB DEVELOPMENT",
      title: "From Idea to Real Project",
      description:
        "How I turn an idea into a functional, interactive and user-focused web application.",
      date: "Coming Soon",
    },
  ];

  return (
    <section className="blog-section" id="blog">
      <div className="blog-container">

        <div className="blog-header">
          <span className="section-label">05 — BLOG</span>

          <h2>
            Thoughts, ideas &{" "}
            <span>experiments.</span>
          </h2>

          <p>
            Sharing what I learn, build and discover throughout my
            development journey.
          </p>
        </div>

        <div className="blog-grid">
          {articles.map((article) => (
            <article className="blog-card" key={article.number}>

              <div className="blog-card-top">
                <span>{article.number}</span>
                <span>{article.category}</span>
              </div>

              <h3>{article.title}</h3>

              <p>{article.description}</p>

              <div className="blog-card-bottom">
                <span>{article.date}</span>
                <button type="button">Read Article ↗</button>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Blog;