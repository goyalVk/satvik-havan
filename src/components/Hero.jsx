import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const handleOrderWhatsApp = () => {
    window.open('https://wa.me/918076170877', '_blank');
  };

  return (
    <section className="hero">
      <div className="hero-content">
              <h1>
  Har Pooja, <span style={{ color: '#8C1D18' }}>Vishwas</span> Aur <span style={{ color: '#8C1D18' }}>Sukoon</span> Ke Saath
</h1>


                    <p
          style={{
            color: '#030500ff',
            fontSize: '1.2rem',
            lineHeight: '1.4',
            marginTop: '10px',
            fontWeight: '500'
          }}
        >
          Pooja aapki, taiyari hamari
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
