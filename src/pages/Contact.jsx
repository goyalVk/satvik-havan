import React, { useState } from "react";
import "../styles/global.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const whatsappMessage = `🙏 Namaste Satvik Havan,%0A%0AMy name is ${name}.%0AEmail: ${email}%0A%0AMessage: ${message}%0A%0A🌼 Sent via Satvik Havan Contact Page`;
    window.open(
      `https://wa.me/918076170877?text=${whatsappMessage}`,
      "_blank"
    );
  };

  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #FFF8EC 0%, #F4E9D8 100%)",
        color: "#3E2A1F",
        minHeight: "100vh",
      }}
    >
      {/* Hero Section */}
      <section
        style={{
          textAlign: "center",
          padding: "5rem 2rem 3rem",
          background: "linear-gradient(135deg, #FFF8EC 0%, #FDE6B8 100%)",
        }}
      >
        <h1
          style={{
            fontSize: "2.6rem",
            marginBottom: "1rem",
            color: "#C77B30",
            fontWeight: "700",
          }}
        >
          Contact <span style={{ color: "#E6A74E" }}>Satvik Havan</span>
        </h1>
        <p
          style={{
            fontSize: "1.1rem",
            maxWidth: "650px",
            margin: "0 auto",
            color: "#5C432A",
            lineHeight: "1.7",
          }}
        >
          We’d love to connect with your spiritual journey.  
          Whether you want to <b>book a Pandit Ji</b>, <b>get Vastu guidance</b>, or simply
          learn more — our team is always here with devotion and clarity.
        </p>
      </section>

      {/* Contact Form */}
      <section
        style={{
          padding: "4rem 2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            background: "#FFF8EC",
            borderRadius: "15px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
            padding: "2rem",
            maxWidth: "600px",
            width: "100%",
            border: "1px solid #F1D5A5",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              marginBottom: "1.5rem",
              color: "#C77B30",
            }}
          >
            📩 Send Us a Message
          </h2>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "1rem" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  color: "#5C432A",
                }}
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                style={{
                  width: "100%",
                  padding: "0.8rem",
                  borderRadius: "6px",
                  border: "1px solid #E6A74E",
                  fontSize: "1rem",
                  background: "#FFF",
                  color: "#3E2A1F",
                }}
              />
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  color: "#5C432A",
                }}
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="example@email.com"
                style={{
                  width: "100%",
                  padding: "0.8rem",
                  borderRadius: "6px",
                  border: "1px solid #E6A74E",
                  fontSize: "1rem",
                  background: "#FFF",
                  color: "#3E2A1F",
                }}
              />
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  color: "#5C432A",
                }}
              >
                Your Message
              </label>
              <textarea
                name="message"
                required
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                style={{
                  width: "100%",
                  padding: "0.8rem",
                  borderRadius: "6px",
                  border: "1px solid #E6A74E",
                  fontSize: "1rem",
                  resize: "none",
                  background: "#FFF",
                  color: "#3E2A1F",
                }}
              ></textarea>
            </div>

            <div style={{ textAlign: "center" }}>
              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "1rem",
                  background: "linear-gradient(45deg, #E6A74E, #C77B30)",
                  color: "#FFF8EC",
                  borderRadius: "6px",
                  fontWeight: "600",
                  fontSize: "1.1rem",
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.03)";
                  e.target.style.boxShadow =
                    "0 6px 20px rgba(199,123,48,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)";
                  e.target.style.boxShadow =
                    "0 4px 15px rgba(0,0,0,0.2)";
                }}
              >
                ✨ Send Message on WhatsApp
              </button>
            </div>
          </form>
        </div>

        <p
          style={{
            marginTop: "2rem",
            textAlign: "center",
            color: "#5C432A",
          }}
        >
          Prefer a quick chat?  
          <br />
          <a
            href="https://wa.me/918076170877"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#C77B30", fontWeight: "600" }}
          >
            Click here to chat instantly on WhatsApp
          </a>
        </p>
      </section>

      {/* Quick Contact Info */}
      <section
        style={{
          background: "#F4E9D8",
          textAlign: "center",
          padding: "3rem 2rem",
        }}
      >
        <h2 style={{ color: "#C77B30", marginBottom: "1.5rem" }}>
          📞 Connect With Us
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1rem",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          {[
            {
              title: "WhatsApp",
              detail: "+91 8076-1708-77",
              link: "https://wa.me/918076170877",
              icon: "💬",
            },
            {
              title: "Email",
              detail: "satvikhavan@gmail.com",
              link: "mailto:satvikhavan@gmail.com",
              icon: "📧",
            },
            {
              title: "Address",
              detail: "Delhi NCR, India",
              link: "https://www.google.com/maps/place/Delhi,+India/",
              icon: "📍",
            },
          ].map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#FFF8EC",
                border: "1px solid #F1D5A5",
                borderRadius: "12px",
                padding: "1.5rem",
                color: "#3E2A1F",
                textDecoration: "none",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0 8px 20px rgba(199,123,48,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 4px 10px rgba(0,0,0,0.1)";
              }}
            >
              <div style={{ fontSize: "1.8rem" }}>{item.icon}</div>
              <h3 style={{ color: "#C77B30", marginTop: "0.8rem" }}>
                {item.title}
              </h3>
              <p style={{ color: "#5C432A" }}>{item.detail}</p>
            </a>
          ))}
        </div>

        <p
          style={{
            marginTop: "2rem",
            color: "#C77B30",
            fontWeight: "500",
          }}
        >
          We respond within 24 hours — usually faster on WhatsApp.
        </p>
      </section>
    </div>
  );
}
