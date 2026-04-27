import Link from 'next/link';
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import Head from 'next/head';
import { PRODUCTS, waLink } from "../data/products";


const WaIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function HerbDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const product = PRODUCTS.find(p => p.slug === slug);
  const [selectedVariant, setSelectedVariant] = useState(0);

  useEffect(() => { setSelectedVariant(0); }, [slug]);

  if (!product) {
    return (
      <div style={{ textAlign: "center", padding: "80px 24px" }}>
        <h2 style={{ color: "var(--brown)", marginBottom: 12 }}>Product not found</h2>
        <p style={{ color: "var(--text-muted)", marginBottom: 24 }}>The herb you're looking for doesn't exist.</p>
        <Link href="/herbs" className="btn-saffron">← Back to All Herbs</Link>
      </div>
    );
  }

  const variant = product.variants[selectedVariant];
  const hasMultiple = product.variants.length > 1;
  const similar = PRODUCTS.filter(p => p.slug !== slug && p.category === product.category).slice(0, 4);
  const waMsg = `Hello! I want to order ${product.name} (${variant.quantity}) for ${variant.price}.`;

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.longDescription,
    "image": product.image,
    "brand": { "@type": "Brand", "name": "Satvik Havan" },
    "offers": product.variants.map(v => ({
      "@type": "Offer",
      "price": v.priceNum,
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "name": v.quantity,
    }))
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `What is ${product.name} used for?`,
        "acceptedAnswer": { "@type": "Answer", "text": product.longDescription }
      },
      {
        "@type": "Question",
        "name": `Is ${product.name} delivered to Tamil Nadu and Maharashtra?`,
        "acceptedAnswer": { "@type": "Answer", "text": `Yes! Satvik Havan delivers ${product.name} across India — Tamil Nadu, Maharashtra, Karnataka, Telangana, and all states. Order on WhatsApp.` }
      },
      {
        "@type": "Question",
        "name": `What sizes are available for ${product.name}?`,
        "acceptedAnswer": { "@type": "Answer", "text": `${product.name} is available in ${product.variants.map(v => `${v.quantity} (${v.price})`).join(" and ")}.` }
      }
    ]
  };

  return (
    <>
      <Head>
        <title>Buy {product.name} Online India | {product.variants[0].quantity} – Satvik Havan</title>
        <meta name="description" content={`Buy pure ${product.name} online in India. ${product.description} Available in ${product.variants.map(v => v.quantity).join(" & ")}. Pan India delivery. Order on WhatsApp.`} />
        <link rel="canonical" href={`https://satvikhavan.com/herbs/${product.slug}`} />
        <meta property="og:title" content={`${product.name} | Satvik Havan`} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={product.image} />
        <meta property="og:type" content="product" />
        <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Head>

      {/* ── DETAIL HERO ── */}
      <section className="herb-detail-hero">
        <nav style={{ fontSize: 12, color: "var(--text-muted)", maxWidth: 1000, margin: "0 auto 20px" }}>
          <Link href="/" style={{ color: "var(--saffron)" }}>Home</Link>
          {" › "}
          <Link href="/herbs" style={{ color: "var(--saffron)" }}>Herbs</Link>
          {" › "}
          <span>{product.name}</span>
        </nav>

        <div className="herb-detail-grid">
          <div className="herb-detail-img">
            <img
              src={product.image}
              alt={`${product.name} – pure Ayurvedic herb buy online India`}
              onError={e => { e.currentTarget.src = "https://placehold.co/400x400/FFF3E0/C8520A?text=Herb"; }}
            />
          </div>

          <div className="herb-detail-info">
            <div style={{ marginBottom: 8 }}>
              <span className="amazon-tag">✓ Also on Amazon</span>
            </div>

            <h1>{product.name}</h1>
            <p className="herb-detail-desc">{product.description}</p>

            {/* Quantity selector */}
            {hasMultiple && (
              <div style={{ marginBottom: 20 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: "var(--brown)", marginBottom: 8 }}>
                  Select Quantity:
                </div>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  {product.variants.map((v, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedVariant(i)}
                      style={{
                        padding: "10px 18px",
                        borderRadius: 10,
                        border: `2px solid ${i === selectedVariant ? "var(--saffron)" : "var(--border)"}`,
                        background: i === selectedVariant ? "rgba(200,82,10,0.06)" : "var(--white)",
                        cursor: "pointer",
                        fontFamily: "inherit",
                        transition: "all 0.15s",
                        textAlign: "center",
                        minWidth: 90,
                      }}
                    >
                      <div style={{ fontSize: 13, fontWeight: 600, color: i === selectedVariant ? "var(--saffron)" : "var(--brown)" }}>
                        {v.quantity}
                      </div>
                      <div style={{ fontSize: 15, fontWeight: 700, color: i === selectedVariant ? "var(--saffron)" : "var(--text-muted)", marginTop: 2 }}>
                        {v.price}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="herb-detail-price">{variant.price}</div>
            <div style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 16 }}>
              Pack size: {variant.quantity}
            </div>

            <div className="herb-benefits">
              <h4>Key Benefits</h4>
              <ul>
                {product.benefits.map(b => <li key={b}>{b}</li>)}
              </ul>
            </div>

            <div style={{ fontSize: 12, color: "var(--green-wa)", fontWeight: 600, marginBottom: 16 }}>
              ✓ Pan India Delivery — Tamil Nadu, Maharashtra, Karnataka & all states
            </div>

            <div className="herb-detail-actions">
              <a href={waLink(waMsg)} target="_blank" rel="noreferrer" className="btn-wa">
                <WaIcon /> Order on WhatsApp
              </a>
              <Link href="/herbs" className="btn-outline">← All Herbs</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── LONG DESCRIPTION ── */}
      <section className="herb-long-desc">
        <h2>About {product.name} — Ayurvedic Insight 🌿</h2>
        <p>{product.longDescription}</p>
        <div style={{ marginTop: 24, padding: "16px 20px", background: "var(--cream-dark)", borderRadius: "var(--radius)", fontSize: 13, color: "var(--text-muted)" }}>
          <strong style={{ color: "var(--saffron)" }}>How to Order:</strong> WhatsApp us at{" "}
          <a href="https://wa.me/918076170877" style={{ color: "var(--saffron)", fontWeight: 600 }}>
            +91 80761 70877
          </a>{" "}
          with your name, address, and pack size. Dispatch within 24 hours, pan India delivery.
        </div>

        {/* ── SEHAT AI CROSS-PROMO ── */}
        <div style={{
          background: "linear-gradient(135deg, #E8F5E9, #F1F8E9)",
          border: "1.5px solid #A5D6A7",
          borderRadius: 14,
          padding: "20px 24px",
          marginTop: 24,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 16,
        }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.2, textTransform: "uppercase", color: "#2E7D32", marginBottom: 4 }}>
              🩺 Health + Ayurveda
            </div>
            <div style={{ fontSize: 15, fontWeight: 600, color: "#1B5E20", marginBottom: 4 }}>
              Understand your health reports in Hindi
            </div>
            <div style={{ fontSize: 13, color: "#388E3C" }}>
              Upload blood reports, get AI-powered explanation — free on Sehat AI
            </div>
          </div>
          <a
            href="https://sehat24.com"
            target="_blank"
            rel="noreferrer"
            style={{
              background: "#2E7D32",
              color: "white",
              fontSize: 13,
              fontWeight: 700,
              padding: "10px 20px",
              borderRadius: 100,
              textDecoration: "none",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            Try Sehat AI Free →
          </a>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section section-white" style={{ paddingTop: 32, paddingBottom: 32 }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <h2 style={{ fontSize: 20, color: "var(--brown)", marginBottom: 20 }}>Frequently Asked Questions</h2>
          {[
            { q: `What is ${product.name} used for?`, a: product.description + " " + product.benefits.join(". ") + "." },
            { q: `What sizes are available for ${product.name}?`, a: `${product.name} is available in ${product.variants.map(v => `${v.quantity} at ${v.price}`).join(" and ")}.` },
            { q: `Is ${product.name} delivered to Tamil Nadu and Maharashtra?`, a: `Yes! We deliver across India — Tamil Nadu, Maharashtra, Karnataka, Telangana, and all states. Order on WhatsApp for fast delivery.` },
          ].map(faq => (
            <details key={faq.q} style={{ borderBottom: "1px solid var(--border)", padding: "14px 0" }}>
              <summary style={{ cursor: "pointer", fontSize: 15, fontWeight: 600, color: "var(--brown)", listStyle: "none" }}>
                ▸ {faq.q}
              </summary>
              <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.7, marginTop: 10, paddingLeft: 12 }}>
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* ── SIMILAR HERBS ── */}
      {similar.length > 0 && (
        <section className="similar-herbs">
          <h2>Similar Herbs You May Like</h2>
          <div className="similar-grid">
            {similar.map(sp => (
              <Link key={sp.id} href={`/herbs/${sp.slug}`} style={{ textDecoration: "none" }} className="herb-card">
                <div className="herb-card-img">
                  <img
                    src={sp.image}
                    alt={sp.name}
                    loading="lazy"
                    onError={e => { e.currentTarget.parentElement.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100%;font-size:32px;background:linear-gradient(135deg,#FFF3E0,#FFE0B2)">🌿</div>'; }}
                  />
                </div>
                <div className="herb-card-body">
                  <h3 style={{ fontSize: 13 }}>{sp.name}</h3>
                  <div className="herb-price">{sp.variants[0].price}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ── FINAL CTA ── */}
      <section className="cta-section">
        <h2>Order {product.name} — Pan India Delivery</h2>
        <p>Fresh stock, pure quality. WhatsApp us anytime — we respond fast.</p>
        <div className="cta-btns">
          <a
            href={waLink(waMsg)}
            target="_blank"
            rel="noreferrer"
            className="btn-wa"
            style={{ fontSize: 16, padding: "15px 32px" }}
          >
            <WaIcon /> Order on WhatsApp
          </a>
          <Link href="/herbs" className="btn-gold" style={{ fontSize: 16, padding: "15px 32px" }}>
            Browse More Herbs
          </Link>
        </div>
      </section>
    </>
  );
}


