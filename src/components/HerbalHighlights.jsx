import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

const HerbalHighlights = () => {
  const herbs = [
    { name: "Mulethi (Licorice Root)", quantity: "100g", price: "₹199", image: 'https://m.media-amazon.com/images/I/51vSEnae0SL.jpg' },
    { name: "Ashwagandha Root", quantity: "100g", price: "₹229", image: 'https://m.media-amazon.com/images/I/51mRwVSguiL.jpg' },
    { name: "Jatamansi", quantity: "100g", price: "₹299", image: 'https://m.media-amazon.com/images/I/613hLNlT83L.jpg' },
    { name: "Guggul + Loban Combo", quantity: "Pack Combo", price: "₹349", image: 'https://m.media-amazon.com/images/I/510SN7T6IjL.jpg' },
    { name: "Bhimseni Camphor", quantity: "100g", price: "₹249", image: 'https://m.media-amazon.com/images/I/515SYij6cTL.jpg' },
  ];

  return (
    <section className="herbal-section">
      <div className="container">
        <h2>Where Spirituality Meets Ayurveda 🌿</h2>
        <div className="herbs-grid">
          {herbs.map((herb, index) => (
            <ProductCard key={index} product={herb} />
          ))}
        </div>

        {/* ✅ New Button Added Below */}
        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <Link to="/herbs">
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
              🌿 Explore All Herbal Products
            </button>
          </Link>
        </div>
        {/* ✅ End New Button */}
      </div>
    </section>
  );
};

export default HerbalHighlights;
