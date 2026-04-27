import React, { useState } from "react";
import Link from 'next/link';
import Head from 'next/head';
import { PRODUCTS, waLink } from "../data/products";


const WaIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const FEATURED_PRODUCTS = PRODUCTS.slice(0, 8);

const TESTIMONIALS = [
  { name: "Priya Venkataraman", city: "Chennai, Tamil Nadu", initials: "PV", text: "Ordered the Gruhapravesam kit from Chennai — received in 3 days, everything exactly as per Pandit Ji's list. Very satisfied!", amazon: true },
  { name: "Rajesh Kulkarni", city: "Pune, Maharashtra", initials: "RK", text: "Satvik Havan ki samagri bahut shuddh hai. Pune mein delivery on time mili aur quality ekdum authentic thi.", amazon: false },
  { name: "Lakshmi Narayanan", city: "Bengaluru, Karnataka", initials: "LN", text: "Booked an Online Pooja for Satyanarayan from Bangalore. The pandit was well-versed and the whole experience was very devotional.", amazon: false },
  { name: "Amit Sharma", city: "Hyderabad, Telangana", initials: "AS", text: "Havan samagri ka smoke bahut sugandhit tha — pure herbs feel kiye. Amazon pe order kiya tha, next time directly site se karunga.", amazon: true },
];

const OCCASIONS = [
  { emoji: "🏠", title: "Gruhapravesam", sub: "Housewarming" },
  { emoji: "🤱", title: "Seemantham", sub: "Baby Shower" },
  { emoji: "🐘", title: "Ganesh Pooja", sub: "Maharashtra Special" },
  { emoji: "⭐", title: "Satyanarayan Puja", sub: "Monthly / Special" },
  { emoji: "🌙", title: "Navratri Havan", sub: "Shakti Pooja" },
  { emoji: "💍", title: "Vivah Havan", sub: "Wedding Ritual" },
];

// Featured product card with quantity selector
function FeaturedCard({ p }) {
  const [sel, setSel] = useState(0);
  const variant = p.variants[sel];

  return (
    <div className="product-card">
      <div className="product-img">
        <img
          src={p.image}
          alt={p.name}
          loading="lazy"
          onError={e => {
            e.currentTarget.parentElement.innerHTML =
              '<div style="display:flex;align-items:center;justify-content:center;height:100%;font-size:44px;background:linear-gradient(135deg,#FFF3E0,#FFE0B2)">🌿</div>';
          }}
        />
      </div>
      <div className="product-body">
        <h4>{p.name}</h4>
        <div className="product-desc">{p.description}</div>

        {/* Quantity selector */}
        {p.variants.length > 1 ? (
          <div style={{ display: "flex", gap: 6, marginBottom: 10, flexWrap: "wrap" }}>
            {p.variants.map((v, i) => (
              <button
                key={i}
                onClick={() => setSel(i)}
                style={{
                  padding: "3px 10px",
                  borderRadius: 100,
                  border: `1.5px solid ${i === sel ? "var(--saffron)" : "var(--border)"}`,
                  background: i === sel ? "rgba(200,82,10,0.08)" : "transparent",
                  color: i === sel ? "var(--saffron)" : "var(--text-muted)",
                  fontSize: 11,
                  fontWeight: 600,
                  cursor: "pointer",
                  fontFamily: "inherit",
                  transition: "all 0.15s",
                }}
              >
                {v.quantity}
              </button>
            ))}
          </div>
        ) : (
          <div className="product-qty" style={{ marginBottom: 8 }}>{variant.quantity}</div>
        )}

        <div className="product-footer">
          <div>
            <div className="product-price">{variant.price}</div>
            <div className="amazon-tag">✓ Also on Amazon</div>
          </div>
          <div style={{ display: "flex", gap: 6, flexDirection: "column", alignItems: "flex-end" }}>
            <Link href={`/herbs/${p.slug}`} className="btn-view">Details</Link>
            <a
              href={waLink(`Hello, I want to order ${p.name} (${variant.quantity}) for ${variant.price}.`)}
              target="_blank"
              rel="noreferrer"
              className="btn-order-sm"
            >
              <WaIcon size={12} /> Order
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Satvik Havan – Buy Pure Ayurvedic Herbs Online | Pooja Services Delhi NCR</title>
        <meta name="description" content="Buy 100% pure Ayurvedic herbs online in India. Ashwagandha, Brahmi, Amla, Mulethi & 37+ herbs in 100g & 200g packs. Pan India delivery. Pandit Ji booking Delhi NCR." />
        <link rel="canonical" href="https://satvikhavan.com/" />
        <meta property="og:title" content="Satvik Havan – Pure Ayurvedic Herbs & Pooja Services" />
        <meta property="og:description" content="100% pure Ayurvedic herbs in 100g & 200g packs. Pan India delivery. Pandit Ji booking Delhi NCR." />
        <meta property="og:url" content="https://satvikhavan.com/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Satvik Havan",
          "description": "Pure Ayurvedic herbs online and Vedic pooja services",
          "url": "https://satvikhavan.com",
          "telephone": "+918076170877",
          "email": "satvikhavan@gmail.com",
          "address": { "@type": "PostalAddress", "addressLocality": "Delhi", "addressRegion": "Delhi", "addressCountry": "IN" },
          "areaServed": "India",
        })}</script>
      </Head>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-pattern" />
        <div className="hero-glow" />
        <div className="hero-badge">🌿 Pure Ayurvedic Herbs &nbsp;|&nbsp; Pan India Delivery &nbsp;|&nbsp; Also on Amazon</div>
        <h1>
          Pure Ayurvedic Herbs,<br />
          <span className="accent">Delivered Across India</span>
        </h1>
        <p className="hero-sub">
          100% natural herbs sourced with devotion. No chemicals, no adulteration.
        </p>
        {/* <div className="hero-regions">
          <span style={{ color: "rgba(255,255,255,0.55)", fontSize: 12 }}>Delivering to:</span>
          {["Tamil Nadu", "Maharashtra", "Karnataka", "Telangana", "Pan India"].map(r => (
            <span className="region-pill" key={r}>{r}</span>
          ))}
        </div> */}
        <div className="hero-cta-group">
          <Link href="/herbs" className="btn-gold">🌿 Shop All Herbs</Link>
          <a href={waLink("Namaste! I want to order Ayurvedic herbs.")} target="_blank" rel="noreferrer" className="btn-wa">
            <WaIcon /> Order on WhatsApp
          </a>
        </div>
        {/* Amazon logo in hero */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
          marginTop: 32,
          position: "relative",
          zIndex: 1,
        }}>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", letterSpacing: 1, textTransform: "uppercase" }}>
            Also Available on
          </span>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            alt="Amazon"
            style={{ width: 120, filter: "brightness(0) invert(1)" }}
          />
        </div>
        <div className="hero-trust">
          {["100% Pure & Natural", "100g & 200g Packs", "Also on Amazon", "Pan India Delivery"].map(t => (
            <div className="hero-trust-item" key={t}><strong>✓</strong> {t}</div>
          ))}
        </div>
      </section>

      {/* ── TRUST RIBBON ── */}
      <div className="trust-ribbon">
        {[
          { icon: "🌿", text: "100% Pure Herbs — No Chemicals" },
          { icon: "📦", text: "100g & 200g Packs Available" },
          { icon: "🚚", text: "Pan India Delivery" },
          { icon: "🕉️", text: "Trained Vedic Pandits" },
        ].map(r => (
          <div className="trust-ribbon-item" key={r.text}>
            <div className="trust-ribbon-icon">{r.icon}</div>
            {r.text}
          </div>
        ))}
      </div>

      {/* ── AMAZON TRUST STRIP ── */}
      <section style={{
        background: "#fff",
        borderTop: "1px solid rgba(200,82,10,0.1)",
        borderBottom: "1px solid rgba(200,82,10,0.1)",
        padding: "16px 24px",
      }}>
        <div style={{
          maxWidth: 1120,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 20,
        }}>
          {/* Amazon logo */}
          <svg width="80" height="26" viewBox="0 0 80 26" xmlns="http://www.w3.org/2000/svg">
            <text x="0" y="20" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="700" fill="#232F3E">amazon</text>
            <path d="M2 23 Q22 29 42 23" fill="none" stroke="#FF9900" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
          <div style={{ width: 1, height: 28, background: "rgba(200,82,10,0.15)" }} />
          <div style={{ display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap", justifyContent: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ fontSize: 16, color: "#FF9900" }}>★★★★★</span>
              <span style={{ fontSize: 13, color: "var(--brown)", fontWeight: 600 }}>Verified Seller</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ fontSize: 18 }}>📦</span>
              <span style={{ fontSize: 13, color: "var(--brown)", fontWeight: 600 }}>100+ Orders Fulfilled</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ fontSize: 18 }}>🌿</span>
              <span style={{ fontSize: 13, color: "var(--brown)", fontWeight: 600 }}>37+ Products Listed</span>
            </div>
            {/* <a
              href="https://www.amazon.in/s?k=satvik+havan"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                background: "#FF9900",
                color: "#111",
                fontSize: 12,
                fontWeight: 700,
                padding: "6px 14px",
                borderRadius: 100,
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              View on Amazon →
            </a> */}
          </div>
        </div>
      </section>

      {/* ── FEATURED HERBS ── */}
      <section className="section section-white">
        <div className="container">
          <div className="section-tag">Pure Ayurvedic Herbs Online</div>
          <h2 className="section-title">Pure Herbs, Ancient Formula</h2>
          <p className="section-sub">
            37+ authentic Ayurvedic herbs in 100g & 200g packs — sourced with care,
            packed fresh, delivered to your door.
          </p>
          <div className="products-grid" style={{ marginBottom: 32 }}>
            {FEATURED_PRODUCTS.map(p => <FeaturedCard key={p.id} p={p} />)}
          </div>
          <div style={{ textAlign: "center" }}>
            <Link href="/herbs" className="btn-saffron">View All Herbs →</Link>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── OCCASIONS ── */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-tag">Pooja Kits by Occasion</div>
          <h2 className="section-title">Kits for Every Sacred Moment</h2>
          <p className="section-sub">
            Occasion-specific samagri kits — crafted for South Indian & Maharashtrian traditions.
            WhatsApp us your occasion and we'll build the perfect kit.
          </p>
          <div className="occasions-grid">
            {OCCASIONS.map(o => (
              <a
                key={o.title}
                href={waLink(`Namaste! I need a Pooja Kit for ${o.title}.`)}
                target="_blank"
                rel="noreferrer"
                className="occasion-card"
              >
                <span className="occasion-emoji">{o.emoji}</span>
                <h4>{o.title}</h4>
                <p>{o.sub}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="section section-cream section-centered">
        <div className="container">
          <div className="section-tag">Simple Process</div>
          <h2 className="section-title">How to Order</h2>
          <p className="section-sub">From anywhere in India — order in 3 easy steps.</p>
          <div className="steps-grid">
            {[
              { n: "1", title: "Browse Herbs", desc: "Explore 37+ authentic Ayurvedic herbs. Filter by health concern — immunity, digestion, skin, hair. Choose 100g or 200g pack." },
              { n: "2", title: "WhatsApp Us", desc: "Send us your order on WhatsApp. We confirm immediately and accept UPI / bank transfer." },
              { n: "3", title: "Delivered to You", desc: "Packed fresh and dispatched within 24 hours. Pan-India delivery — Tamil Nadu, Maharashtra & beyond." },
            ].map(s => (
              <div className="step" key={s.n}>
                <div className="step-num">{s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── SERVICES (secondary) ── */}
     <section className="section section-white">
  <div className="container">
    <div className="section-tag">Pooja Services</div>

    <h2 className="section-title">Pandit Ji Booking</h2>

    <p className="section-sub">
      Experienced Vedic pandits for all rituals.{" "}
      <span
        style={{
          background: "rgba(200,82,10,0.1)",
          color: "var(--saffron)",
          padding: "2px 8px",
          borderRadius: 100,
          fontSize: 12,
          fontWeight: 600
        }}
      >
        📍 Delhi NCR Only
      </span>
    </p>

    <div className="services-grid">
      {[
        {
          image:
            "https://d1gevr1kq4ckjt.cloudfront.net/A21UD5GUWC34V0_4952cfc18858ddbdde02e42416fcec19_ProductImage_PT02",
          title: "Home Puja & Havan",
          desc:
            "Griha Pravesh, Satyanarayan Katha, Navratri, all festivals — complete samagri included.",
          cta: "Book Pandit Ji"
        },
        {
          image:
            "https://d1gevr1kq4ckjt.cloudfront.net/A21UD5GUWC34V0_6d794f08da2f01e9f40cad11a3d18393_ProductImage_PT03",
          title: "Corporate Puja",
          desc:
            "Office inauguration, Lakshmi-Ganesh puja, Navgrah Shanti — for startups & businesses.",
          cta: "Book Now"
        },
        {
          image:
            "https://d1gevr1kq4ckjt.cloudfront.net/A21UD5GUWC34V0_718b2f42b4ca863a1796d12552210905_ProductImage_PT03",
          title: "Online Pooja (e-Puja)",
          desc:
            "Live Zoom pooja from Delhi — join from Tamil Nadu, Maharashtra, or anywhere globally.",
          cta: "Schedule Online"
        },
        {
          image:
            "https://d1gevr1kq4ckjt.cloudfront.net/A21UD5GUWC34V0_6e64cad70b4ceecdaaa825eb78908182_ProductImage_PT02",
          title: "Vastu Consultation",
          desc:
            "Balance your home or office with Panch Tatva — online & in-person available.",
          cta: "Get Consultation"
        }
      ].map((s) => (
        <a
          key={s.title}
          href={waLink(`Namaste! I want to ${s.cta} — ${s.title}.`)}
          target="_blank"
          rel="noreferrer"
          className="service-card"
          style={{
            borderRadius: 16,
            overflow: "hidden",
            textDecoration: "none",
            background: "#fff",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            transition: "all 0.3s ease"
          }}
        >
          {/* 🔥 BIG IMAGE */}
          <img
            src={s.image}
            alt={s.title}
            style={{
              width: "100%",
              height: 200,
              objectFit: "cover",
              display: "block"
            }}
          />

          {/* 📦 CONTENT */}
          <div style={{ padding: 16 }}>
            <h3
              style={{
                fontSize: 18,
                color: "var(--brown)",
                marginBottom: 8
              }}
            >
              {s.title}
            </h3>

            <p
              style={{
                fontSize: 14,
                color: "var(--text-muted)",
                marginBottom: 12,
                lineHeight: 1.6
              }}
            >
              {s.desc}
            </p>

            <div
              className="service-cta"
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: "var(--saffron)"
              }}
            >
              {s.cta} →
            </div>
          </div>
        </a>
      ))}
    </div>
  </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section section-cream">
        <div className="container">
          <div className="section-tag">Customer Reviews</div>
          <h2 className="section-title">Trusted Across India</h2>
          <p className="section-sub">
            Happy customers from Tamil Nadu, Maharashtra, Karnataka & beyond.
          </p>
          <div className="testi-grid">
            {TESTIMONIALS.map(t => (
              <div className="testi-card" key={t.name}>
                <div className="testi-stars">★★★★★</div>
                <p className="testi-text">"{t.text}"</p>
                <div className="testi-author">
                  <div className="testi-avatar">{t.initials}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.city}</span>
                  </div>
                  {t.amazon && <div className="testi-amz">✓ Amazon</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <h2>Order Pure Herbs — Pan India Delivery</h2>
        <p>100% natural, freshly packed, 100g & 200g packs. WhatsApp us anytime.</p>
        <div className="cta-btns">
          <a
            href={waLink("Namaste! I want to order Ayurvedic herbs.")}
            target="_blank"
            rel="noreferrer"
            className="btn-wa"
            style={{ fontSize: 16, padding: "15px 32px" }}
          >
            <WaIcon /> Chat on WhatsApp
          </a>
          <Link href="/herbs" className="btn-gold" style={{ fontSize: 16, padding: "15px 32px" }}>
            🌿 Browse All Herbs
          </Link>
        </div>
      </section>
    </>
  );
}

