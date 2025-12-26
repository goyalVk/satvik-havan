import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < lastScrollY && currentScrollY > 50) {
        // Scrolling up and past 50px from top
        setIsVisible(true);
        setIsMobileMenuOpen(false); // Close hamburger menu when showing navbar
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px
        setIsVisible(false);
        setIsMobileMenuOpen(false); // Close menu when hiding
      } else if (currentScrollY <= 50) {
        // Near top of page
        setIsVisible(false);
        setIsMobileMenuOpen(false); // Close menu at top
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${!isVisible ? 'navbar-hidden' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="logo" style={{ textDecoration: "none", color: "inherit" }} onClick={closeMobileMenu}>
          Satvik Havan
        </Link>

        <div className="nav-menu">
          <ul className={`nav-links ${isMobileMenuOpen ? 'nav-links-open' : ''}`}>
            <li><Link to="/" onClick={closeMobileMenu}>Home</Link></li>
            <li><Link to="/kits" onClick={closeMobileMenu}>Kits</Link></li>
            <li><Link to="/herbs" onClick={closeMobileMenu}>Herbs</Link></li>
            <li><Link to="/booking" onClick={closeMobileMenu}>Book Pandit Ji</Link></li>
            <li><Link to="/about" onClick={closeMobileMenu}>About</Link></li>
            <li><Link to="/contact" onClick={closeMobileMenu}>Contact</Link></li>
          </ul>
          
          <button className="hamburger" onClick={toggleMobileMenu} aria-label="Toggle menu">
            <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
