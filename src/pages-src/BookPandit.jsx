import Link from 'next/link';
import React, { useState } from "react";
import Head from 'next/head';
import { waLink } from "../data/products";

import panditPhoto from "../asset/hari-om-mishra-ji.jpeg";

const SERVICES = [
  {
    image: "https://d1gevr1kq4ckjt.cloudfront.net/A21UD5GUWC34V0_4952cfc18858ddbdde02e42416fcec19_ProductImage_PT02",
    name: "Home Puja & Havan",
    price: "Starting ₹499",
    desc: "Griha Pravesh, Satyanarayan Katha, Navratri, all festivals — complete samagri included. Pandit Ji handles everything.",
    detail: "Book Pandit Ji for your home puja with complete pooja samagri, setup, and chanting guidance. We handle everything — you just focus on devotion. Perfect for daily pujas, festivals, havans, and family rituals.",
  },
  {
    image: "https://d1gevr1kq4ckjt.cloudfront.net/A21UD5GUWC34V0_6d794f08da2f01e9f40cad11a3d18393_ProductImage_PT03",
    name: "Corporate & Startup Puja",
    price: "Starting ₹1,999",
    desc: "Office inauguration, Lakshmi-Ganesh Puja, Navgrah Shanti, prosperity havans for new ventures.",
    detail: "Ideal for offices, startups, and new ventures — this package includes Lakshmi-Ganesh Puja, Navgrah Shanti, and prosperity havans. Pandit Ji performs authentic rituals with all items included.",
  },
  {
    image: "https://d1gevr1kq4ckjt.cloudfront.net/A21UD5GUWC34V0_718b2f42b4ca863a1796d12552210905_ProductImage_PT03",
    name: "Online Pooja (e-Puja)",
    price: "Starting ₹2,100",
    desc: "Live Zoom pooja from Delhi — join from anywhere in the world.",
    detail: "Our e-Puja service connects you directly with Pandit Ji via live Zoom sessions. Puja samagri shipped, mantra guidance in English or Hindi, optional recording provided.",
  },
  {
    image: "https://d1gevr1kq4ckjt.cloudfront.net/A21UD5GUWC34V0_6e64cad70b4ceecdaaa825eb78908182_ProductImage_PT02",
    name: "Vastu Consultation",
    price: "Starting ₹999",
    desc: "Balance your home or office with Panch Tatva — online and in-person sessions available.",
    detail: "Expert Pandits and Vastu specialists offer both online and in-person consultations to correct energy imbalances.",
  },
];

export default function BookPandit() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <Head>
        <title>Book Pandit Ji for Pooja Delhi NCR | Online Puja Services – Satvik Havan</title>
        <meta name="description" content="Book an experienced Vedic Pandit Ji for home puja, havan, Griha Pravesh, Satyanarayan Katha in Delhi NCR. Online pooja available pan India. Book on WhatsApp." />
        <link rel="canonical" href="https://satvikhavan.com/booking" />
        <meta property="og:title" content="Book Pandit Ji for Pooja | Satvik Havan Delhi NCR" />
        <meta property="og:description" content="Experienced Vedic pandits for all rituals in Delhi NCR. Online pooja available pan India." />
        <meta property="og:url" content="https://satvikhavan.com/booking" />
      </Head>

      {/* Hero */}
      <section className="page-hero">
        <div className="delhi-badge">📍 Offline Service: Delhi NCR Only</div>
        <h1>Book Pandit Ji for Pooja</h1>
        <p>
          All pujas, one place — from Griha Pravesh to Navratri.
          In-home service in Delhi NCR. Online pooja available anywhere in India.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginTop: 28 }}>
          <a href={waLink("Namaste! I want to book a Pandit Ji for puja.")} target="_blank" rel="noreferrer" className="btn-wa">
            💬 Book on WhatsApp
          </a>
          <a href="#services" className="btn-saffron">View Services</a>
        </div>
      </section>

      {/* Pandit Ji */}
     <section className="section section-cream section-centered">
  <div className="container">
    <div className="section-tag">Our Pandit</div>
    <h2 className="section-title">Meet Pandit Hari Om Mishra Ji</h2>

    <div className="pandit-card">
      <div style={{ flexShrink: 0, textAlign: "center" }}>
        
        {/* ✅ Image Added Here */}
        <img
          src={panditPhoto}
          alt="Pandit Hari Om Mishra Ji"
          style={{
            width: 100,
            height: 100,
            borderRadius: "50%",
            objectFit: "cover",
            border: "3px solid var(--gold)",
            margin: "0 auto 8px",
            display: "block"
          }}
        />

        <div style={{ fontSize: 13, color: "var(--saffron)", fontWeight: 600 }}>
          15+ Years Experience
        </div>
      </div>

      <div>
        <h3 style={{ fontSize: 20, color: "var(--brown)", marginBottom: 10 }}>
          Pandit Hari Om Mishra Ji
        </h3>

        <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 14 }}>
          With over 15 years of experience, Pandit Hari Om Mishra Ji has helped thousands of
          devotees perform sacred rituals with devotion and precision. From household poojas
          to corporate ceremonies, his guidance ensures that every mantra and moment radiates
          positivity and peace.
        </p>

        <div style={{ fontSize: 13, color: "var(--saffron)", fontWeight: 600, marginBottom: 14 }}>
          🚩 Serving Delhi NCR &nbsp;|&nbsp; 🌐 Online Globally
        </div>

        <a
          href={waLink("Namaste! I want to speak with Pandit Ji.")}
          target="_blank"
          rel="noreferrer"
          className="btn-wa"
          style={{ fontSize: 13, padding: "10px 20px" }}
        >
          💬 Connect Now
        </a>
      </div>
    </div>
  </div>
</section>

      {/* Services */}
      <section id="services" className="section section-white">
  <div className="container">
    <div className="section-tag">Our Services</div>

    <h2 className="section-title">Choose Your Divine Experience</h2>

    <p className="section-sub">
      All services include complete samagri.{" "}
      <span style={{ color: "var(--saffron)", fontWeight: 600 }}>
        Offline: Delhi NCR only.
      </span>{" "}
      Online pooja available across India.
    </p>

    <div className="service-booking-grid">
      {SERVICES.map((s) => (
        <div
          className="booking-card"
          key={s.name}
          style={{
            borderRadius: 16,
            overflow: "hidden",
            background: "#fff",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            transition: "all 0.3s ease"
          }}
        >
          {/* 🔥 BIG IMAGE */}
          <img
            src={s.image}
            alt={s.name}
            style={{
              width: "100%",
              height: 180,
              objectFit: "cover",
              display: "block"
            }}
          />

          {/* 📦 CONTENT */}
          <div style={{ padding: 16 }}>
            <h3 style={{ marginBottom: 6 }}>{s.name}</h3>

            <div
              className="price"
              style={{
                color: "var(--saffron)",
                fontWeight: 700,
                marginBottom: 8
              }}
            >
              {s.price}
            </div>

            <p style={{ fontSize: 14, marginBottom: 14 }}>
              {s.desc}
            </p>

            <div className="booking-card-actions">
              <a
                href={waLink(`I want to book ${s.name} (${s.price}). Please share details.`)}
                target="_blank"
                rel="noreferrer"
                className="btn-wa"
                style={{ fontSize: 13, padding: "8px 16px" }}
              >
                💬 Book via WhatsApp
              </a>

              <button
                className="btn-outline"
                style={{ fontSize: 13, padding: "8px 16px" }}
                onClick={() => setSelected(s)}
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* CTA */}
      <section className="cta-section">
        <h2>Let's Make Every Ritual Effortless</h2>
        <p>No stress, no searching — just book and experience pure devotion.</p>
        <div className="cta-btns">
          <a href={waLink("Namaste! I want to book a Pandit Ji.")} target="_blank" rel="noreferrer" className="btn-wa" style={{ fontSize: 16, padding: "15px 32px" }}>
            💬 Book on WhatsApp
          </a>
        </div>
      </section>

      {/* Modal */}
      {selected && (
        <div
          style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.55)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 800, padding: 24 }}
          onClick={() => setSelected(null)}
        >
          <div
            style={{ background: "var(--cream)", borderRadius: 16, padding: 32, maxWidth: 480, width: "100%", textAlign: "center" }}
            onClick={e => e.stopPropagation()}
          >
            <div style={{ fontSize: 40, marginBottom: 12 }}>{selected.icon}</div>
            <h2 style={{ color: "var(--brown)", marginBottom: 8 }}>{selected.name}</h2>
            <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 14 }}>{selected.detail}</p>
            <div style={{ fontSize: 16, fontWeight: 600, color: "var(--saffron)", marginBottom: 20 }}>{selected.price}</div>
            <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
              <a
                href={waLink(`I want to book ${selected.name} (${selected.price})`)}
                target="_blank"
                rel="noreferrer"
                className="btn-wa"
              >
                💬 Book Now
              </a>
              <button className="btn-outline" onClick={() => setSelected(null)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}


