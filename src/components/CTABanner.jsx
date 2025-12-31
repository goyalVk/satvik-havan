import React from 'react';

const CTABanner = () => {
  const handleExplore = () => {
    window.location.href = '/booking';
  };

  return (
    <section className="cta-banner">
      <div className="container">
        <h2>Bring Satvik Energy Home Today.</h2>
        <button onClick={handleExplore}>Explore More</button>
      </div>
    </section>
  );
};

export default CTABanner;