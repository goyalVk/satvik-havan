import React from 'react';
// import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustRibbon from '../components/TrustRibbon';
import KitsSection from '../components/KitsSection';
import BookPanditSection from '../components/BookPanditSection';
import HerbalHighlights from '../components/HerbalHighlights';
import Testimonials from '../components/Testimonials';
import CTABanner from '../components/CTABanner';

import '../styles/global.css';


const Home = () => {
  return (
    <div className="page-transition animate-bg">
      <div className="particle-container">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="particle" style={{ left: `${i * 10}%` }}></div>
        ))}
      </div>
      {/* <Navbar /> */}
      <div className="hero-background" style={{ position: 'relative', height: '100vh', backgroundImage: `url('https://d1gevr1kq4ckjt.cloudfront.net/A21UD5GUWC34V0_90663842f250ccdd57d7af25770c8a2e_ProductImage_PT03')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.4)', zIndex: 1 }}></div>
        <Hero />
      </div>
      <div className="animated-divider"></div>
      <TrustRibbon />
      <div className="animated-divider"></div>
      <KitsSection />
      <div className="animated-divider"></div>
      <BookPanditSection />
      <div className="animated-divider"></div>
      <HerbalHighlights />
      <div className="animated-divider"></div>
      <Testimonials />
      <div className="animated-divider"></div>
      <CTABanner />
    </div>
  );
};

export default Home;