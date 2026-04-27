import Link from 'next/link';
import React from "react";
import { useRouter } from 'next/router';
import Head from 'next/head';
import { BLOGS } from "../data/blogData";
import { PRODUCTS, waLink } from "../data/products";


const WaIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

function renderSection(section, index) {
  switch (section.type) {
    case "intro":
      return (
        <p key={index} style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.85, marginBottom: 28, fontStyle: "italic", borderLeft: "3px solid var(--saffron)", paddingLeft: 16 }}>
          {section.text}
        </p>
      );
    case "heading":
      return (
        <h2 key={index} style={{ fontSize: 22, color: "var(--brown)", margin: "36px 0 16px", fontFamily: "'Yeseva One', serif" }}>
          {section.text}
        </h2>
      );
    case "text":
      return (
        <p key={index} style={{ fontSize: 15, color: "var(--text-muted)", lineHeight: 1.8, marginBottom: 20 }}>
          {section.text}
        </p>
      );
    case "benefits":
      return (
        <div key={index} style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 28 }}>
          {section.items.map((item, i) => (
            <div key={i} style={{
              background: "var(--cream-dark)",
              borderRadius: "var(--radius)",
              padding: "16px 20px",
              borderLeft: "3px solid var(--saffron)",
            }}>
              <div style={{ fontSize: 15, fontWeight: 600, color: "var(--brown)", marginBottom: 6, fontFamily: "'Hind', sans-serif" }}>
                {item.title}
              </div>
              <div style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.7 }}>
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      );
    case "howto":
      return (
        <div key={index} style={{ marginBottom: 28 }}>
          {section.items.map((item, i) => (
            <div key={i} style={{ display: "flex", gap: 16, marginBottom: 12, alignItems: "flex-start" }}>
              <div style={{
                width: 80,
                flexShrink: 0,
                background: "var(--saffron)",
                color: "white",
                borderRadius: 8,
                padding: "6px 10px",
                fontSize: 11,
                fontWeight: 700,
                textAlign: "center",
                marginTop: 2,
              }}>
                {item.step}
              </div>
              <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      );
    default:
      return null;
  }
}

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;
  const blog = BLOGS.find(b => b.slug === slug);

  if (!blog) {
    return (
      <div style={{ textAlign: "center", padding: "80px 24px" }}>
        <h2 style={{ color: "var(--brown)", marginBottom: 12 }}>Blog post not found</h2>
        <Link href="/blogs" className="btn-saffron">← All Blogs</Link>
      </div>
    );
  }

  const relatedProduct = PRODUCTS.find(p => p.slug === blog.relatedProductSlug);
  const otherBlogs = BLOGS.filter(b => b.slug !== slug).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": blog.title,
    "description": blog.metaDesc,
    "author": { "@type": "Organization", "name": "Satvik Havan" },
    "publisher": { "@type": "Organization", "name": "Satvik Havan", "url": "https://satvikhavan.com" },
    "datePublished": blog.date,
    "url": `https://satvikhavan.com/blogs/${blog.slug}`,
  };

  return (
    <>
      <Head>
        <title>{blog.metaTitle}</title>
        <meta name="description" content={blog.metaDesc} />
        <link rel="canonical" href={`https://satvikhavan.com/blogs/${blog.slug}`} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.metaDesc} />
        <meta property="og:url" content={`https://satvikhavan.com/blogs/${blog.slug}`} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Head>

      {/* Hero */}
      <section style={{
        background: "linear-gradient(135deg, #FFF8EC 0%, #FDE6B8 100%)",
        padding: "60px 24px 48px",
        textAlign: "center",
      }}>
        <nav style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 20 }}>
          <Link href="/" style={{ color: "var(--saffron)" }}>Home</Link>
          {" › "}
          <Link href="/blogs" style={{ color: "var(--saffron)" }}>Blog</Link>
          {" › "}
          <span>{blog.category}</span>
        </nav>
        <div style={{ fontSize: 56, marginBottom: 16 }}>{blog.heroEmoji}</div>
        <div style={{ display: "flex", gap: 8, justifyContent: "center", marginBottom: 16 }}>
          <span style={{ background: "rgba(200,82,10,0.1)", color: "var(--saffron)", fontSize: 11, fontWeight: 600, padding: "3px 12px", borderRadius: 100 }}>
            {blog.category}
          </span>
          <span style={{ fontSize: 11, color: "var(--text-muted)", padding: "3px 0" }}>{blog.readTime} read</span>
        </div>
        <h1 style={{ fontSize: "clamp(24px, 4vw, 40px)", color: "var(--brown)", maxWidth: 760, margin: "0 auto 16px", fontFamily: "'Yeseva One', serif", lineHeight: 1.25 }}>
          {blog.title}
        </h1>
        <p style={{ fontSize: 16, color: "var(--text-muted)", maxWidth: 600, margin: "0 auto" }}>
          {blog.excerpt}
        </p>
      </section>

      {/* Content */}
      <section style={{ padding: "48px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          {blog.content.map((section, i) => renderSection(section, i))}

          {/* Related Product CTA */}
          {relatedProduct && (
            <div style={{
              background: "linear-gradient(135deg, #FFF3E0, #FFE0B2)",
              borderRadius: "var(--radius)",
              padding: "24px",
              marginTop: 36,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 16,
              border: "1.5px solid rgba(200,82,10,0.2)",
            }}>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.2, textTransform: "uppercase", color: "var(--saffron)", marginBottom: 4 }}>
                  🌿 Buy This Herb
                </div>
                <div style={{ fontSize: 16, fontWeight: 600, color: "var(--brown)", marginBottom: 4 }}>
                  {relatedProduct.name}
                </div>
                <div style={{ fontSize: 13, color: "var(--text-muted)" }}>
                  Starting {relatedProduct.variants[0].price} · Free Delivery Pan India
                </div>
              </div>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <Link
                  href={`/herbs/${relatedProduct.slug}`}
                  className="btn-outline"
                  style={{ fontSize: 13, padding: "9px 18px" }}
                >
                  View Details
                </Link>
                <a
                  href={waLink(`Hello! I read your blog and want to order ${relatedProduct.name}.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-wa"
                  style={{ fontSize: 13, padding: "9px 18px" }}
                >
                  <WaIcon /> Order Now
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Other blogs */}
      {otherBlogs.length > 0 && (
        <section className="section section-cream">
          <div className="container">
            <h2 style={{ fontSize: 22, color: "var(--brown)", marginBottom: 24, fontFamily: "'Yeseva One', serif" }}>
              More Articles
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 20 }}>
              {otherBlogs.map(b => (
                <Link key={b.id} href={`/blogs/${b.slug}`} style={{ textDecoration: "none" }}>
                  <div style={{
                    background: "var(--white)",
                    borderRadius: "var(--radius)",
                    padding: "20px",
                    border: "1.5px solid var(--border)",
                    display: "flex",
                    gap: 14,
                    alignItems: "flex-start",
                    transition: "transform 0.2s",
                  }}
                    onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = "none"; }}
                  >
                    <div style={{ fontSize: 32, flexShrink: 0 }}>{b.heroEmoji}</div>
                    <div>
                      <div style={{ fontSize: 11, color: "var(--saffron)", fontWeight: 600, marginBottom: 4 }}>{b.category}</div>
                      <div style={{ fontSize: 14, color: "var(--brown)", fontWeight: 600, lineHeight: 1.4, fontFamily: "'Hind', sans-serif" }}>{b.title}</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="cta-section">
        <h2>Shop Pure Ayurvedic Herbs</h2>
        <p>100% natural, free delivery. Pan India.</p>
        <div className="cta-btns">
          <Link href="/herbs" className="btn-gold" style={{ fontSize: 15, padding: "13px 28px" }}>
            🌿 Browse All Herbs
          </Link>
          <a href={waLink("Namaste! I want to order Ayurvedic herbs.")} target="_blank" rel="noreferrer" className="btn-wa" style={{ fontSize: 15, padding: "13px 28px" }}>
            <WaIcon /> Order on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}


