import React from 'react';
import Link from 'next/link';

const CTABanner = () => {
  return (
    <section className="cta-banner">
      <div className="container">
        <h2>Bring Satvik Energy Home Today.</h2>

        {/* ✅ FIXED: React Router Link */}
        <Link href="/booking">
          <button>Explore More</button>
        </Link>
      </div>
    </section>
  );
};

export default CTABanner;

