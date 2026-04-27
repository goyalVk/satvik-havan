import Link from 'next/link';
import React, { useState, useMemo } from "react";
import { useRouter } from 'next/router';
import Head from 'next/head';
import { PRODUCTS, CATEGORIES, waLink } from "../data/products";

const WaIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

function HerbCard({ product }) {
  const [selectedVariant, setSelectedVariant] = useState(0);
  const variant = product.variants[selectedVariant];
  const hasMultiple = product.variants.length > 1;

  return (
    <div className="herb-card">
      <Link href={`/herbs/${product.slug}`} style={{ textDecoration: "none" }}>
        <div className="herb-card-img">
          <img
            src={product.image}
            alt={`${product.name} – Ayurvedic herb`}
            loading="lazy"
            onError={e => {
              e.currentTarget.parentElement.innerHTML =
                '<div style="display:flex;align-items:center;justify-content:center;height:100%;font-size:40px;background:linear-gradient(135deg,#FFF3E0,#FFE0B2)">🌿</div>';
            }}
          />
        </div>
      </Link>

      <div className="herb-card-body">
        <Link href={`/herbs/${product.slug}`} style={{ textDecoration: "none" }}>
          <h3>{product.name}</h3>
        </Link>
        <p className="herb-card-desc">{product.description}</p>

        {hasMultiple && (
          <div style={{ display: "flex", gap: 6, marginBottom: 10, flexWrap: "wrap" }}>
            {product.variants.map((v, i) => (
              <button
                key={i}
                onClick={() => setSelectedVariant(i)}
                style={{
                  padding: "4px 10px",
                  borderRadius: 100,
                  border: `1.5px solid ${i === selectedVariant ? "var(--saffron)" : "var(--border)"}`,
                  background: i === selectedVariant ? "rgba(200,82,10,0.08)" : "transparent",
                  color: i === selectedVariant ? "var(--saffron)" : "var(--text-muted)",
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
        )}

        {!hasMultiple && (
          <div className="herb-card-qty" style={{ marginBottom: 10 }}>{variant.quantity}</div>
        )}

        <div className="herb-card-footer">
          <span className="herb-price">{variant.price}</span>
          <div className="herb-card-actions">
            <Link href={`/herbs/${product.slug}`} className="btn-view">Details</Link>
            <a
              href={waLink(`Hello! I want to order ${product.name} (${variant.quantity}) for ${variant.price}.`)}
              target="_blank"
              rel="noreferrer"
              className="btn-order-sm"
            >
              <WaIcon /> Order
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Herbs() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const activeCat = router.query.cat || "all";

  const setCategory = (cat) => {
    if (cat === "all") {
      router.push('/herbs', undefined, { shallow: true });
    } else {
      router.push({ pathname: '/herbs', query: { cat } }, undefined, { shallow: true });
    }
  };

  const filtered = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchCat = activeCat === "all" || p.category === activeCat;
      const matchQ = !query ||
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase());
      return matchCat && matchQ;
    });
  }, [query, activeCat]);

  const activeCatLabel = CATEGORIES.find(c => c.id === activeCat)?.label || "Herbs";

  return (
    <>
      <Head>
        <title>Buy Ayurvedic Herbs Online India | Pure {activeCatLabel} – Satvik Havan</title>
        <meta name="description" content="Buy 100% pure Ayurvedic herbs online. 37+ herbs in 100g & 200g packs. Ashwagandha, Brahmi, Mulethi, Amla & more. Pan India delivery. Order on WhatsApp." />
        <link rel="canonical" href="https://satvikhavan.com/herbs" />
        <meta property="og:title" content="Buy Ayurvedic Herbs Online | Satvik Havan" />
        <meta property="og:description" content="Authentic Ayurvedic herbs in 100g & 200g packs. Pan India delivery. Trusted by Ayurvedic students across India." />
        <meta property="og:url" content="https://satvikhavan.com/herbs" />
      </Head>

      <section className="herbs-hero">
        <div className="section-tag">Pure Ayurvedic Herbs Online</div>
        <h1>Buy Pure Ayurvedic Herbs Online</h1>
        <p>
          100% natural, no chemicals. Available in 100g & 200g packs.
          Sourced with care, packed fresh, delivered pan-India.
        </p>
      </section>

      <section className="section section-white">
        <div className="container">
          <div className="herbs-controls">
            <div className="herbs-search-wrap">
              <span className="herbs-search-icon">🔍</span>
              <input
                type="text"
                className="herbs-search"
                placeholder="Search herbs (e.g. Ashwagandha, Brahmi...)"
                value={query}
                onChange={e => setQuery(e.target.value)}
              />
            </div>
            <div className="category-filters">
              {CATEGORIES.map(c => (
                <button
                  key={c.id}
                  className={`cat-btn${activeCat === c.id ? " active" : ""}`}
                  onClick={() => setCategory(c.id)}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="no-results">
              <h3>No products found</h3>
              <p>
                Try a different search or{" "}
                <button
                  className="btn-outline"
                  style={{ padding: "6px 14px", fontSize: 13 }}
                  onClick={() => { setQuery(""); setCategory("all"); }}
                >
                  clear filters
                </button>
              </p>
            </div>
          ) : (
            <div className="herbs-grid">
              {filtered.map(p => <HerbCard key={p.id} product={p} />)}
            </div>
          )}
        </div>
      </section>

      <section className="section section-alt">
        <div className="container" style={{ textAlign: "center" }}>
          <div className="section-tag">For Professionals</div>
          <h2 className="section-title">BAMS Students, Doctors & Bulk Orders</h2>
          <p className="section-sub" style={{ margin: "0 auto 32px" }}>
            We welcome Ayurvedic students, BAMS practitioners, and wellness centers.
            Looking for a rare herb or bulk supply? We source on demand.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={waLink("Namaste! I want to place a bulk order for Ayurvedic herbs.")} target="_blank" rel="noreferrer" className="btn-wa">
              📦 Bulk / Wholesale Inquiry
            </a>
            <a href={waLink("Namaste! I am an Ayurvedic student looking for specific herbs.")} target="_blank" rel="noreferrer" className="btn-gold">
              🌿 Ask for a Rare Herb
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
