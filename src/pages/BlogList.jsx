import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { BLOGS } from "../data/blogData";
import "../styles/global.css";

export default function BlogList() {
  return (
    <>
      <Helmet>
        <title>Ayurveda Blog — Herbs, Health & Pooja Guides | Satvik Havan</title>
        <meta name="description" content="Ayurvedic herbs ke benefits, hair care tips, pooja guides aur more — Satvik Havan ka Ayurveda blog. Hindi aur English mein." />
        <link rel="canonical" href="https://satvikhavan.com/blogs" />
        <meta property="og:title" content="Ayurveda Blog | Satvik Havan" />
        <meta property="og:url" content="https://satvikhavan.com/blogs" />
      </Helmet>

      <section className="page-hero">
        <div className="section-tag">Ayurveda Blog</div>
        <h1>Herbs, Health & Pooja Guides</h1>
        <p>Ayurvedic wisdom in simple words — benefits, how-to guides aur pooja samagri tips.</p>
      </section>

      <section className="section section-white">
        <div className="container">
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 24,
          }}>
            {BLOGS.map(blog => (
              <Link
                key={blog.id}
                to={`/blogs/${blog.slug}`}
                style={{ textDecoration: "none" }}
              >
                <div style={{
                  background: "var(--white)",
                  borderRadius: "var(--radius)",
                  overflow: "hidden",
                  border: "1.5px solid var(--border)",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  height: "100%",
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "var(--shadow-lg)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
                >
                  {/* Hero */}
                  <div style={{
                    background: "linear-gradient(135deg, #FFF3E0, #FFE0B2)",
                    height: 120,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 52,
                  }}>
                    {blog.heroEmoji}
                  </div>

                  <div style={{ padding: "18px 20px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                      <span style={{
                        background: "rgba(200,82,10,0.1)",
                        color: "var(--saffron)",
                        fontSize: 11,
                        fontWeight: 600,
                        padding: "2px 10px",
                        borderRadius: 100,
                        letterSpacing: 0.5,
                      }}>
                        {blog.category}
                      </span>
                      <span style={{ fontSize: 11, color: "var(--text-muted)" }}>{blog.readTime} read</span>
                    </div>

                    <h2 style={{
                      fontSize: 16,
                      color: "var(--brown)",
                      marginBottom: 8,
                      lineHeight: 1.4,
                      fontFamily: "'Yeseva One', serif",
                    }}>
                      {blog.title}
                    </h2>

                    <p style={{
                      fontSize: 13,
                      color: "var(--text-muted)",
                      lineHeight: 1.6,
                      marginBottom: 14,
                    }}>
                      {blog.excerpt}
                    </p>

                    <div style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: "var(--saffron)",
                    }}>
                      Read More →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
