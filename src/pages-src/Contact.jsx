import Link from 'next/link';
import React, { useState } from "react";
import Head from 'next/head';


export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, message } = form;
    const msg = `🙏 Namaste Satvik Havan,%0A%0AName: ${name}%0APhone: ${phone}%0A%0AMessage: ${message}%0A%0ASent via satvikhavan.com`;
    window.open(`https://wa.me/918076170877?text=${msg}`, "_blank");
  };

  return (
    <>
      <Head>
        <title>Contact Satvik Havan | Order Herbs & Book Pandit Ji</title>
        <meta name="description" content="Contact Satvik Havan to order pure Ayurvedic herbs or book a Pandit Ji. WhatsApp: +91 80761 70877. Pan India herb delivery. Pooja services Delhi NCR." />
        <link rel="canonical" href="https://satvikhavan.com/contact" />
        <meta property="og:title" content="Contact Satvik Havan" />
        <meta property="og:url" content="https://satvikhavan.com/contact" />
      </Head>

      <section className="page-hero">
        <div className="section-tag">Get in Touch</div>
        <h1>Contact Satvik Havan</h1>
        <p>
          Order herbs, book a Pandit Ji, or ask anything about Ayurveda.
          We respond fast — usually within minutes on WhatsApp.
        </p>
      </section>

      <section className="section section-white">
        <div className="container">
          <div className="contact-grid">
            {/* Form */}
            <div className="contact-form-card">
              <h2 style={{ fontSize: 20, color: "var(--brown)", marginBottom: 20 }}>📩 Send Us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-field">
                  <label className="form-label">Full Name *</label>
                  <input type="text" className="form-input" required placeholder="Your name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                </div>
                <div className="form-field">
                  <label className="form-label">WhatsApp / Phone *</label>
                  <input type="tel" className="form-input" required placeholder="+91 98765 43210" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                </div>
                <div className="form-field">
                  <label className="form-label">Your Message *</label>
                  <textarea className="form-textarea" required placeholder="Tell us what you need — herbs, pooja booking, Ayurvedic guidance..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                </div>
                <button type="submit" className="btn-wa" style={{ width: "100%", justifyContent: "center", fontSize: 15, padding: "13px 24px" }}>
                  ✨ Send on WhatsApp
                </button>
              </form>
              <p style={{ marginTop: 16, fontSize: 12, color: "var(--text-muted)", textAlign: "center" }}>
                This will open WhatsApp with your message pre-filled.
              </p>
            </div>

            {/* Info */}
            <div className="contact-info-card">
              <a href="https://wa.me/918076170877" target="_blank" rel="noreferrer" className="contact-info-item">
                <div className="contact-info-icon">💬</div>
                <div>
                  <h3>WhatsApp</h3>
                  <p>+91 80761 70877</p>
                  <p style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 2 }}>Fastest way to reach us</p>
                </div>
              </a>
              <a href="mailto:satvikhavan@gmail.com" className="contact-info-item">
                <div className="contact-info-icon">📧</div>
                <div>
                  <h3>Email</h3>
                  <p>satvikhavan@gmail.com</p>
                  <p style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 2 }}>For bulk & business queries</p>
                </div>
              </a>
              <a href="https://www.google.com/maps/place/Delhi,+India/" target="_blank" rel="noreferrer" className="contact-info-item">
                <div className="contact-info-icon">📍</div>
                <div>
                  <h3>Location</h3>
                  <p>Delhi NCR, India</p>
                  <p style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 2 }}>Pandit service: Delhi NCR only</p>
                </div>
              </a>
              <div className="contact-info-item" style={{ cursor: "default" }}>
                <div className="contact-info-icon">🚚</div>
                <div>
                  <h3>Herb Delivery</h3>
                  <p>Pan India</p>
                  <p style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 2 }}>Tamil Nadu, Maharashtra, Karnataka & all states</p>
                </div>
              </div>

              <div style={{ background: "var(--cream-dark)", borderRadius: "var(--radius)", padding: 20, fontSize: 13, color: "var(--text-muted)", lineHeight: 1.65 }}>
                <strong style={{ color: "var(--saffron)", display: "block", marginBottom: 6 }}>⏱ Response Time</strong>
                We typically respond within minutes on WhatsApp — usually much faster.
                For herb orders, we confirm and dispatch within 24 hours.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


