import React from "react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918076170877?text=Hello%20Satvik%20Havan%2C%20I%20need%20assistance"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "25px",
        right: "25px",
        backgroundColor: "#25D366",
        color: "#fff",
        padding: "15px 18px",
        borderRadius: "50%",
        fontSize: "24px",
        textDecoration: "none",
        boxShadow: "0 4px 10px var(--shadow-brown)",
        zIndex: 999,
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => e.target.style.transform = "scale(1.1)"}
      onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
    >
      💬
    </a>
  );
}
