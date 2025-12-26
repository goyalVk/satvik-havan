import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

const KitsSection = () => {
  const kits = [
    { name: 'Griha Pravesh Kit', price: '₹1500', image: 'https://pujasamagriwala.com/wp-content/uploads/2023/12/Griha-Pravesh-Puja-Kit-300x300.webp' },
    { name: 'Satyanarayan Puja Kit', price: '₹1200', image: 'https://m.media-amazon.com/images/I/81X8M8wXFxL.jpg' },
    { name: 'Navratri Kit', price: '₹1800', image: 'https://m.media-amazon.com/images/I/71tSPs13X-L.jpg' },
    { name: 'Daily Pooja Kit', price: '₹2500', image: 'https://servdharm.com/cdn/shop/files/SampoornPoojaSamagriKit_7_800x.png?v=1712585276' },
  ];

  return (
    <section className="kits-section">
      <div className="container">
        <h2>Complete Pooja Kits by Occasion.</h2>
        <div className="kits-grid">
          {kits.map((kit, index) => (
            <ProductCard key={index} product={kit} />
          ))}
        </div>

        {/* ✅ NEW BUTTON ADDED HERE */}
        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <Link to="/kits">
            <button
              style={{
                background: "linear-gradient(45deg, #E6A74E, #C77B30)",
                color: "#FFF8EC",
                padding: "1rem 2rem",
                border: "none",
                borderRadius: "6px",
                fontWeight: "600",
                cursor: "pointer",
                fontSize: "1rem",
                boxShadow: "0 4px 15px rgba(199,123,48,0.3)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.05)";
                e.target.style.boxShadow = "0 6px 20px rgba(199,123,48,0.4)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.boxShadow = "0 4px 15px rgba(199,123,48,0.3)";
              }}
            >
              🪔 View All Kits
            </button>
          </Link>
        </div>
        {/* ✅ END NEW BUTTON */}
      </div>
    </section>
  );
};

export default KitsSection;
