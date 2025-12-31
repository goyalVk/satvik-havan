import React from 'react';
import { Link } from 'react-router-dom';

const CTABanner = () => {
  return (
    <section className="cta-banner">
      <div className="container">
        <h2>Bring Satvik Energy Home Today.</h2>

        {/* ✅ FIXED: React Router Link */}
        <Link to="/booking">
          <button>Explore More</button>
        </Link>
      </div>
    </section>
  );
};

export default CTABanner;
