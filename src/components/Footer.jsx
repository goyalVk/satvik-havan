import React from 'react';
import { FaWhatsapp, FaInstagram, FaYoutube, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="satvik-footer">
      <div className="footer-top-glow"></div>
      
      <div className="footer-main-content">
        {/* Brand Section */}
        <div className="footer-section brand-info">
          <h2 className="footer-logo">Satvik Havan</h2>
          <p className="brand-tagline">
            Bringing the essence of Vedic traditions to your doorstep. 
            Pure herbs, sacred kits, and divine services.
          </p>
          <div className="contact-mini">
            <span><FaEnvelope /> support@satvikhavan.com</span>
            <span><FaMapMarkerAlt /> Delhi, India</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/kits">Pooja Kits</a></li>
            <li><a href="/herbs">Sacred Herbs</a></li>
            <li><a href="/about">Our Story</a></li>
          </ul>
        </div>

        {/* Services Section */}
        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li><a href="/book-pandit">Book Pandit Ji</a></li>
            <li><a href="/e-puja">E-Puja Services</a></li>
            <li><a href="/consultation">Vastu Consultation</a></li>
            <li><a href="/contact">Support</a></li>
          </ul>
        </div>

        {/* Social Connect */}
        <div className="footer-section connect">
          <h3>Follow Our Journey</h3>
          <p>Join our spiritual community</p>
          <div className="social-icons">
            <a href="https://wa.me/918076170877" className="wa" aria-label="WhatsApp"><FaWhatsapp /></a>
            <a href="https://instagram.com/satvikhavan" className="ig" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://youtube.com/@satvikhavan" className="yt" aria-label="YouTube"><FaYoutube /></a>
          </div>
        </div>
      </div>

      <div className="footer-mantra-divider">
        <span className="line"></span>
        <span className="mantra-text">ॐ सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः</span>
        <span className="line"></span>
      </div>

      <div className="footer-bottom">
        <div className="bottom-content">
          <p>© 2025 Satvik Havan. Crafted with devotion for a pure lifestyle.</p>
          <div className="legal-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;