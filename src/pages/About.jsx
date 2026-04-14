// About.jsx
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "../styles/global.css";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Satvik Havan | Pure Ayurvedic Herbs & Vedic Pooja Services India</title>
        <meta name="description" content="Satvik Havan — founded in 2024 to bring pure Ayurvedic herbs and authentic Vedic pooja services to every home. Pan India herb delivery. Pooja services in Delhi NCR." />
        <link rel="canonical" href="https://satvikhavan.com/about" />
        <meta property="og:title" content="About Satvik Havan – Our Story & Mission" />
        <meta property="og:url" content="https://satvikhavan.com/about" />
      </Helmet>

      <section className="page-hero">
        <div className="section-tag">Our Story</div>
        <h1>About Satvik Havan</h1>
        <p>
          Where ancient Ayurvedic wisdom meets modern simplicity —
          pure herbs delivered to your door, authentic pandits for every ritual.
        </p>
      </section>

      {/* Story */}
      <section className="section section-white">
        <div className="container" style={{ maxWidth: 860, textAlign: "center" }}>
          <div className="section-tag">Our Journey</div>
          <h2 className="section-title">Born from a Purpose</h2>
          <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.85, marginBottom: 24 }}>
            Satvik Havan was founded in 2024 with one heartfelt purpose — to revive the purity of
            Ayurveda and devotion in today's busy world. We saw that people wanted authentic
            Ayurvedic herbs but couldn't trust what was available online. We wanted to change that.
          </p>
          <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.85 }}>
            Today, Satvik Havan ships 26+ authentic herbs across India — with strong demand from
            Tamil Nadu, Maharashtra, and Karnataka. We also offer Pandit Ji booking and pooja
            services in Delhi NCR, plus online pooja for devotees worldwide.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginTop: 40 }}>
            {[
              { year: "2024", text: "Founded with the vision to make authentic herbs and pooja services easily accessible." },
              { year: "2025", text: "Launched 26+ herbs on Amazon and satvikhavan.com. Receiving orders from Tamil Nadu, Maharashtra, Karnataka." },
            ].map(s => (
              <div key={s.year} style={{ background: "var(--cream-dark)", borderRadius: "var(--radius)", padding: 24, textAlign: "left" }}>
                <div style={{ fontSize: 22, fontFamily: "'Yeseva One', serif", color: "var(--saffron)", marginBottom: 8 }}>{s.year}</div>
                <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.65 }}>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section section-alt section-centered">
        <div className="container" style={{ maxWidth: 760 }}>
          <div className="section-tag">Our Mission</div>
          <h2 className="section-title">What We Believe</h2>
          <p className="section-sub" style={{ margin: "0 auto 36px" }}>
            To make every home a space of peace, purity, and divine connection —
            through authentic herbs and sincere Vedic practice.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
            {[
              { icon: "🌿", text: "100% pure Ayurvedic herbs — no chemicals, no adulteration" },
              { icon: "🕉️", text: "Verified Vedic Pandits — online & offline pooja" },
              { icon: "🚚", text: "Pan India delivery — Tamil Nadu, Maharashtra & beyond" },
              { icon: "📚", text: "Education — we explain every herb's Ayurvedic context" },
            ].map(m => (
              <div key={m.text} style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.13)", borderRadius: "var(--radius)", padding: 20, textAlign: "center" }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{m.icon}</div>
                <p style={{ fontSize: 13, color: "rgba(253,246,227,0.72)", lineHeight: 1.6 }}>{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section section-cream">
        <div className="container">
          <div className="section-tag">Core Values</div>
          <h2 className="section-title">What Drives Us</h2>
          <div className="values-grid">
            {[
              { title: "Purity", desc: "Every herb is sourced and packed with sacred intent. No compromise on quality — ever." },
              { title: "Trust", desc: "Honest product descriptions, fair prices, and genuine Ayurvedic knowledge." },
              { title: "Knowledge", desc: "We explain the meaning and use of every herb — because understanding deepens devotion." },
              { title: "Service", desc: "Our greatest joy is serving families and spreading wellness through every herb and prayer." },
            ].map(v => (
              <div className="value-card" key={v.title}>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="section section-white" style={{ textAlign: "center" }}>
        <div className="container" style={{ maxWidth: 680 }}>
          <div className="section-tag">Founders' Message</div>
          <blockquote style={{ fontSize: 18, color: "var(--text-muted)", fontStyle: "italic", lineHeight: 1.75, marginBottom: 20 }}>
            "We started Satvik Havan not as a business, but as a prayer —
            a promise that every herb we send carries the energy of authenticity,
            and every puja we conduct brings genuine peace."
          </blockquote>
          <p style={{ fontSize: 14, fontWeight: 600, color: "var(--saffron)" }}>— Team Satvik Havan</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 32, flexWrap: "wrap" }}>
            <Link to="/herbs" className="btn-saffron">Shop Herbs</Link>
            <Link to="/contact" className="btn-outline">Get in Touch</Link>
          </div>
        </div>
      </section>
    </>
  );
}
