import React from "react";
import "../styles/global.css";

export default function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section
        className="about-hero"
        style={{
          background:
            "linear-gradient(135deg, #FFF8EC 0%, #FDE6B8 100%)",
          padding: "6rem 2rem",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "2.8rem",
            color: "#C77B30",
            marginBottom: "1rem",
            fontWeight: "700",
          }}
        >
          About <span className="accent-text">Satvik Havan</span>
        </h1>
        <p
          style={{
            color: "#5C432A",
            maxWidth: "700px",
            margin: "0 auto",
            fontSize: "1.1rem",
            lineHeight: "1.7",
          }}
        >
          Where ancient faith meets modern simplicity.  
          <br />
          We bring authentic <b>Pooja, Havan, and Vastu</b> services to every
          doorstep — complete with all samagri, guidance, and devotion.
        </p>
      </section>

      {/* Our Journey */}
      <section
        className="about-section"
        style={{ padding: "4rem 2rem", textAlign: "center" }}
      >
        <h2
          style={{
            color: "#C77B30",
            marginBottom: "2.5rem",
            fontSize: "2rem",
          }}
        >
          🪔 Our Journey of Faith
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2rem",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          {[
            {
              year: "2024",
              text: "Founded with the vision to simplify spirituality and make authentic pooja services easily accessible.",
            },
            {
              year: "2025",
              text: "Introduced herbal and spiritual products, and built a network of certified Vedic Pandits across India.",
            },
          ].map((step, i) => (
            <div key={i}>
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  background: "#C77B30",
                  margin: "0 auto",
                  boxShadow: "0 0 20px rgba(199,123,48,0.5)",
                }}
              ></div>
              <p style={{ marginTop: "1rem", color: "#5C432A" }}>
                <strong>{step.year}:</strong> {step.text}
              </p>
              {i < 2 && (
                <div
                  style={{
                    width: "2px",
                    height: "50px",
                    background: "#E6A74E",
                    opacity: 0.5,
                    margin: "0.5rem auto",
                  }}
                ></div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Our Story */}
      <section
        style={{
          padding: "4rem 2rem",
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            color: "#C77B30",
            marginBottom: "2rem",
            fontSize: "2rem",
          }}
        >
          🌸 Our Story
        </h2>
        <p
          style={{
            lineHeight: "1.8",
            fontSize: "1.1rem",
            color: "#5C432A",
          }}
        >
          Satvik Havan was born with a heartfelt purpose — to bring back the
          <b> purity of devotion </b> in today’s busy world.  
          Many of us wish to perform pooja with the right rituals but struggle
          with finding <b>Pandit Ji, samagri</b>, and authentic guidance.  
          We decided to change that.
          <br />
          <br />
          Today, Satvik Havan stands as a one-stop destination for all your
          spiritual needs — from booking a <b>home pooja or corporate havan</b>
          to <b> online rituals</b> and <b>Vastu consultations</b>.  
          We ensure every ceremony is performed with authenticity, devotion, and ease.
        </p>
      </section>

      {/* Mission */}
      <section
        style={{
          background: "#F4E9D8",
          padding: "4rem 2rem",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#C77B30", marginBottom: "1.5rem" }}>
          🔱 Our Mission
        </h2>
        <p
          style={{
            fontSize: "1.1rem",
            maxWidth: "800px",
            margin: "0 auto",
            lineHeight: "1.8",
            color: "#5C432A",
          }}
        >
          To make every home — whether in India or abroad — a space of peace,
          purity, and divine connection.  
          <br />
          We simplify spirituality by offering:
        </p>
        <ul
          style={{
            listStyle: "none",
            marginTop: "1rem",
            color: "#5C432A",
            lineHeight: "1.8",
            fontSize: "1.05rem",
          }}
        >
          <li>🪔 <b>All-in-one pooja services</b> with complete samagri</li>
          <li>📿 <b>Verified Vedic Pandit Jis</b> — available online & offline</li>
          <li>🌍 <b>friendly e-Puja</b> rituals streamed live from India</li>
          <li>🏡 <b>Vastu consultation</b> for homes, offices & startups</li>
        </ul>
        <p style={{ marginTop: "1rem", color: "#5C432A" }}>
          Every pooja we conduct is guided by knowledge and performed with heart.
        </p>
      </section>

      {/* Values */}
      <section style={{ padding: "4rem 2rem" }}>
        <h2
          style={{
            textAlign: "center",
            color: "#C77B30",
            marginBottom: "2rem",
          }}
        >
          🌿 Our Core Values
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1.5rem",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          {[
            {
              title: "Purity",
              desc: "Every samagri and ritual is prepared and performed with sacred intent and devotion.",
            },
            {
              title: "Trust",
              desc: "We believe true spirituality thrives on honesty, clarity, and authentic Vedic practices.",
            },
            {
              title: "Knowledge",
              desc: "We explain the meaning behind every mantra and ritual — because faith begins with understanding.",
            },
            {
              title: "Service",
              desc: "Our greatest joy lies in serving families and spreading peace through every havan and prayer.",
            },
          ].map((v, i) => (
            <div
              key={i}
              style={{
                background: "#FFF8EC",
                borderRadius: "12px",
                padding: "1.5rem",
                boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
                textAlign: "center",
                border: "1px solid #F1D5A5",
              }}
            >
              <h3 style={{ color: "#C77B30", marginBottom: "0.5rem" }}>
                {v.title}
              </h3>
              <p style={{ color: "#5C432A" }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Global Spirituality */}
      <section
        style={{
          background: "#F4E9D8",
          padding: "4rem 2rem",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#C77B30", marginBottom: "1rem" }}>
          🌍 Spirituality Without Borders
        </h2>
        <p
          style={{
            fontSize: "1.1rem",
            maxWidth: "800px",
            margin: "0 auto",
            color: "#5C432A",
            lineHeight: "1.8",
          }}
        >
          From Delhi to Dubai, from Mumbai to Melbourne —  
          <b>Satvik Havan</b> has become a trusted spiritual companion for
          thousands of families.  
          <br />
          Because we believe faith isn’t bound by location — it’s a feeling
          that travels through devotion, sincerity, and sound of the mantras.
        </p>
      </section>

      {/* Founder’s Message */}
      <section style={{ padding: "4rem 2rem", textAlign: "center" }}>
        <h2 style={{ color: "#C77B30", marginBottom: "1rem" }}>
          🪔 A Message from the Founders
        </h2>
        <p
          style={{
            fontSize: "1.1rem",
            maxWidth: "800px",
            margin: "0 auto 1.5rem",
            color: "#5C432A",
            lineHeight: "1.8",
          }}
        >
          “We started Satvik Havan not as a business, but as a prayer —  
          a promise that every diya lit should bring light to someone’s life.  
          Our goal is to keep Indian spirituality authentic, accessible, and
          alive for the next generation.”
        </p>
        <h4 style={{ color: "#E6A74E", fontWeight: "700" }}>
          — Team Satvik Havan
        </h4>
      </section>

      {/* CTA */}
      <section
        style={{
          background: "#F4E9D8",
          textAlign: "center",
          padding: "4rem 2rem",
        }}
      >
        <h2 style={{ color: "#C77B30" }}>Begin Your Satvik Journey Today</h2>
        <p
          style={{
            color: "#5C432A",
            maxWidth: "600px",
            margin: "0.8rem auto 2rem",
          }}
        >
          Let us take care of your next puja — from samagri to blessings.  
          All you need is faith, we’ll handle the rest.
        </p>
        <a
          href="https://wa.me/918076170877?text=I want to book Pandit Ji for puja"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            style={{
              background: "#E6A74E",
              color: "#FFF",
              padding: "1rem 2rem",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Connect on WhatsApp
          </button>
        </a>
      </section>
    </div>
  );
}
