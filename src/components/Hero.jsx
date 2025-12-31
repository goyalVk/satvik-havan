import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const handleOrderWhatsApp = () => {
    window.open('https://wa.me/918076170877', '_blank');
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1
          style={{
            color: '#2c2c2c',
            textShadow: '2px 2px 4px rgba(255,255,255,0.8)',
          }}
        >
          Har Pooja, Vishwas Aur Sukoon Ke Saath
        </h1>

        <p>
          For moments when family and tradition come first.
          <br />
          we take care of the rest.
        </p>

        <div className="hero-buttons">
          {/* ✅ FIXED: React Router Link */}
          <Link to="/booking">
            <button>Book Pandit Ji</button>
          </Link>

          <button onClick={handleOrderWhatsApp}>
            Talk to Us on WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
