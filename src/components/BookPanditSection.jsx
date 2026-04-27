import React from "react";
import Link from 'next/link';

const BookPanditSection = () => {
  return (
    <section
      className="book-section"
      style={{
        background: "linear-gradient(to right, #FFF8EC, #F4E9D8)",
        padding: "4rem 2rem",
        textAlign: "center",
      }}
    >
      <div className="container" style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h2
          style={{
            color: "#C77B30",
            fontSize: "2.3rem",
            marginBottom: "1rem",
            fontWeight: "700",
          }}
        >
          Book Pandit Ji — For Every Puja, Anywhere 🪔
        </h2>

        <p
          style={{
            color: "#5C432A",
            fontSize: "1.1rem",
            lineHeight: "1.8",
            marginBottom: "2rem",
          }}
        >
          Whether it’s your home, office, or across the ocean —
          our experienced <strong>Vedic Pandit Ji</strong> brings sacred energy and guidance to you.
          From <strong>Griha Pravesh</strong> to <strong>Corporate Puja</strong>, or <strong>Online Rituals</strong> —
          perform every ceremony the <strong>Satvik way</strong>, without stress.
        </p>

        {/* ✅ FIXED: React Router Link */}
        <Link href="/booking">
          <button
            style={{
              background: "linear-gradient(45deg, #E6A74E, #C77B30)",
              color: "#FFF8EC",
              padding: "1rem 2.5rem",
              border: "none",
              borderRadius: "6px",
              fontWeight: "600",
              cursor: "pointer",
              fontSize: "1.1rem",
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
            📿 Book Pandit Ji Now
          </button>
        </Link>

        <p
          style={{
            marginTop: "1.5rem",
            color: "#8B6E47",
            fontSize: "0.95rem",
          }}
        >
          Serving across <strong>Delhi NCR</strong> and <strong>Online Worldwide</strong>.
        </p>
      </div>
    </section>
  );
};

export default BookPanditSection;

