import React from 'react';

const Hero = () => {
  const handleBookPandit = () => {
    window.location.href = '/booking';
  };

  const handleOrderWhatsApp = () => {
    window.open('https://wa.me/918076170877', '_blank');
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Experience Divinity Made Simple 🪔</h1>
        <p>
          Authentic Pooja Kits • Certified Pandit Ji • Ayurveda &  e-Puja — All at One Sacred Place.
        </p>
        <div className="hero-buttons">
          <button onClick={handleBookPandit}>Book Pandit Ji</button>
          <button onClick={handleOrderWhatsApp}>Order on WhatsApp</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
