import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/global.css";

export default function Herbs() {
  const [searchQuery, setSearchQuery] = useState("");

const products = [
  {
    id: 1,
    name: "Mulethi (Licorice Root)",
    quantity: "100g",
    price: "₹199",
    description: "Soothes throat, aids digestion, and purifies the system.",
    image: "https://m.media-amazon.com/images/I/61W9A6gAaTL.jpg"
  },
  {
    id: 2,
    name: "Ashwagandha Root",
    quantity: "100g",
    price: "₹229",
    description: "Boosts energy and reduces stress — perfect for Ayurvedic wellness.",
    image: "https://m.media-amazon.com/images/I/61Kh6JGq-FL.jpg"
  },
  {
    id: 3,
    name: "Amla Reetha Shikakai Mix",
    quantity: "100g",
    price: "₹179",
    description: "Natural hair cleanser and conditioner made from traditional herbs.",
    image: "https://m.media-amazon.com/images/I/61gUTZp3GzL.jpg"
  },
  {
    id: 4,
    name: "Multani Mitti (Whole Chunks)",
    quantity: "500g + Free Bowl",
    price: "₹199",
    description: "Traditional clay for glowing skin and natural detox.",
    image: "https://m.media-amazon.com/images/I/515SYij6cTL.jpg"
  },
  {
    id: 5,
    name: "Neem Powder",
    quantity: "200g + Free Bowl",
    price: "₹189",
    description: "Powerful antibacterial herb for skincare and purification rituals.",
    image: "https://m.media-amazon.com/images/I/51mRwVSguiL.jpg"
  },
  {
    id: 6,
    name: "Dry Rose Petals",
    quantity: "100g + Free Bowl",
    price: "₹159",
    description: "Used in pooja, aroma, and Ayurvedic beauty rituals.",
    image: "https://m.media-amazon.com/images/I/51vSEnae0SL.jpg"
  },
  {
    id: 7,
    name: "Bhimseni Camphor",
    quantity: "100g",
    price: "₹249",
    description: "100% pure natural camphor used in daily pooja and aromatherapy.",
    image: "https://m.media-amazon.com/images/I/515SYij6cTL.jpg"
  },
  {
    id: 8,
    name: "Amla Powder",
    quantity: "200g",
    price: "₹169",
    description: "Rich in Vitamin C; promotes hair growth and glowing skin.",
    image: "https://m.media-amazon.com/images/I/51cRsamHFSL.jpg"
  },
  {
    id: 9,
    name: "Multani Mitti Powder",
    quantity: "500g",
    price: "₹199",
    description: "Fine-quality clay for clear, glowing, and oil-free skin.",
    image: "https://m.media-amazon.com/images/I/51qg8U4zFyL.jpg"
  },
  {
    id: 10,
    name: "Ratanjot (Alkanet Root)",
    quantity: "100g",
    price: "₹199",
    description: "Traditional herb used for natural coloring and Ayurvedic remedies.",
    image: "https://m.media-amazon.com/images/I/613hLNlT83L.jpg"
  },
  {
    id: 11,
    name: "Kapoor Kachri",
    quantity: "100g",
    price: "₹219",
    description: "Excellent for hair fragrance, volume, and Ayurvedic hair care.",
    image: "https://m.media-amazon.com/images/I/51qg8U4zFyL.jpg"
  },
  {
    id: 12,
    name: "Agar Tagar",
    quantity: "100g",
    price: "₹249",
    description: "Powerful aromatic herb used in Ayurveda for stress relief and rituals.",
    image: "https://m.media-amazon.com/images/I/51ZRQNUVgmL.jpg"
  },
  {
    id: 13,
    name: "Jatamansi Root",
    quantity: "100g",
    price: "₹299",
    description: "Supports sleep, reduces stress, and enhances mental calmness.",
    image: "https://m.media-amazon.com/images/I/61CFXvYV-dL.jpg"
  },
  {
    id: 14,
    name: "Guggul + Loban Combo",
    quantity: "200g",
    price: "₹199",
    description: "Purifies environment during pooja; powerful spiritual resin combo.",
    image: "https://m.media-amazon.com/images/I/61W9A6gAaTL.jpg"
  },
  {
    id: 15,
    name: "Kamarkas (Palash Gond)",
    quantity: "200g",
    price: "₹189",
    description: "Strengthening herb used in postpartum laddu and traditional nutrition.",
    image: "https://m.media-amazon.com/images/I/515SYij6cTL.jpg"
  },
  {
    id: 16,
    name: "Kutki Root (Picrorhiza kurroa)",
    quantity: "100g",
    price: "₹299",
    description: "Highly valued Ayurvedic herb for liver detox and immunity.",
    image: "https://m.media-amazon.com/images/I/61Kh6JGq-FL.jpg"
  },
  {
    id: 17,
    name: "Manjistha Powder",
    quantity: "200g",
    price: "₹189",
    description: "A powerful herb for blood purification, acne control & skin glow.",
    image: "https://m.media-amazon.com/images/I/516EsK8WHQL.jpg"
  },
  {
    id: 18,
    name: "Brahmi Powder",
    quantity: "200g",
    price: "₹179",
    description: "Supports memory, focus, and stress relief; nourishes hair naturally.",
    image: "https://m.media-amazon.com/images/I/51JQbruhUTL.jpg"
  }
];


  const filteredProducts = products.filter((product) => {
    if (!searchQuery) return true;
    try {
      const regex = new RegExp(searchQuery, "i");
      return regex.test(product.name);
    } catch {
      return product.name.toLowerCase().includes(searchQuery.toLowerCase());
    }
  });

  return (
    <div className="herbs-page" style={{ background: "linear-gradient(to bottom, #FFF8EC 0%, #F4E9D8 100%)" }}>
      {/* Hero Section */}
      <section
        style={{
          textAlign: "center",
          padding: "5rem 2rem 3rem",
          background: "linear-gradient(135deg, #FFF8EC 0%, #FDE6B8 100%)",
        }}
      >
        <h1 style={{ fontSize: "2.6rem", color: "#C77B30", fontWeight: "700" }}>
          Ayurveda: Where Science Meets Spirituality 🌿
        </h1>
        <p
          style={{
            color: "#5C432A",
            maxWidth: "750px",
            margin: "1rem auto 2rem",
            fontSize: "1.1rem",
            lineHeight: "1.8",
          }}
        >
          Ayurveda is not just a system of medicine — it’s a philosophy of life.  
          At <b>Satvik Havan</b>, we aim to reconnect spirituality with Ayurveda through
          pure, high-quality herbal products sourced ethically and made with devotion.  
          <br />
          Our mission is to <b>educate and empower Ayurvedic students, doctors, and wellness seekers</b> —
          and to make these sacred herbs available to everyone at honest prices.
        </p>

        <input
          type="text"
          placeholder="🔍 Search Ayurvedic herbs..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="herbs-search"
          style={{
            padding: "0.7rem 1rem",
            width: "300px",
            borderRadius: "6px",
            border: "1px solid #E6A74E",
            fontSize: "1rem",
            background: "#FFF",
            color: "#3E2A1F",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          }}
        />
      </section>

      {/* Product Grid */}
      <section className="herbs-section" style={{ padding: "3rem 2rem" }}>
        <div
          className="herbs-grid-container"
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "2rem",
          }}
        >
          {filteredProducts.map((product) => {
            const whatsappLink = `https://wa.me/918076170877?text=Hello, I want to order ${product.name} (${product.quantity}) for ${product.price}`;
            return (
              <div
                key={product.id}
                className="herb-card"
                style={{
                  background: "#FFF8EC",
                  borderRadius: "15px",
                  padding: "1.5rem",
                  textAlign: "center",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                  border: "1px solid #F1D5A5",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.03)";
                  e.currentTarget.style.boxShadow = "0 8px 25px rgba(199,123,48,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.1)";
                }}
              >
                <Link to={`/herbs/${product.id}`} style={{ textDecoration: "none" }}>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{
                      width: "100%",
                      height: "230px",
                      objectFit: "cover",
                      borderRadius: "10px",
                      marginBottom: "1rem",
                    }}
                    onError={(e) => (e.currentTarget.src = "https://placehold.co/400x400?text=Herbal+Product")}
                  />
                </Link>
                <h3 style={{ color: "#C77B30", fontSize: "1.2rem" }}>{product.name}</h3>
                <p style={{ color: "#5C432A", fontSize: "0.95rem" }}>{product.quantity}</p>
                <p style={{ color: "#C77B30", fontWeight: "600", fontSize: "1rem" }}>{product.price}</p>
                {/* <p style={{ color: "#6B5336", fontSize: "0.9rem", marginBottom: "1rem" }}>{product.description}</p> */}

                <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem" }}>
                  <Link to={`/herbs/${product.id}`}>
                    <button className="view-details-btn">View Details</button>
                  </Link>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <button className="order-btn">Order on WhatsApp</button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Educational / Awareness CTA */}
      <section
        style={{
          background: "#F4E9D8",
          textAlign: "center",
          padding: "3rem 2rem",
        }}
      >
        <h2 style={{ color: "#C77B30", marginBottom: "1rem" }}>
          🌿 Empowering Ayurveda, One Herb at a Time
        </h2>
        <p
          style={{
            color: "#5C432A",
            maxWidth: "700px",
            margin: "0 auto 1.5rem",
            fontSize: "1.05rem",
            lineHeight: "1.7",
          }}
        >
          Our goal isn’t just to sell herbs — it’s to **spread awareness** and **educate India**
          about the healing power of Ayurveda.  
          If you are an **Ayurvedic student**, **BAMS practitioner**, or **doctor**,  
          we welcome collaborations and bulk supply for study or clinical use.
        </p>
        <a
          href="https://wa.me/918076170877?text=I want to order Ayurvedic herbs in bulk or learn more about Satvik Havan products"
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
            📦 Contact for Bulk / Educational Orders
          </button>
        </a>
      </section>
    </div>
  );
}
