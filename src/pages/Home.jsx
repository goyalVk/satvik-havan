import React from 'react';
// import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustRibbon from '../components/TrustRibbon';
import MainServices from '../components/MainServices';
import HowItWorks from '../components/HowItWorks';
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
    <div
        className="hero-background"
        style={{
          position: 'relative',
          height: '100vh',
          backgroundImage: `
            linear-gradient(
              rgba(246,196,83,0.55),
              rgba(246,196,83,0.55)
            ),
            url('https://imagine-public.x.ai/imagine-public/images/2b2b5859-8283-46ea-a946-dba33faf8beb.png?cache=1&dl=1')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
      <div style={{ position: 'relative', zIndex: 2 }}>
        <Hero />
      </div>
    </div>


      <div className="animated-divider"></div>
      <TrustRibbon />
      <div className="animated-divider"></div>
      <MainServices />
      <div className="animated-divider"></div>
      <HowItWorks />
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