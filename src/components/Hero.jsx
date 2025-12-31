import React from 'react';

const Hero = () => {
  const handleExploreServices = () => {
    window.location.href = '/booking';
  };

  const handleOrderWhatsApp = () => {
    window.open('https://wa.me/918076170877', '_blank');
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 style={{ color: '#2c2c2c', textShadow: '2px 2px 4px rgba(255,255,255,0.8)' }}>Har Pooja, Vishwas Aur Sukoon Ke Saath</h1>
        <p>
          For moments when family and tradition come first .<br /> we take care of the rest.
        </p>
        <div className="hero-buttons">
          <button onClick={handleExploreServices}>Book Pandit Ji</button>
          <button onClick={handleOrderWhatsApp}>Talk to Us on WhatsApp</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
