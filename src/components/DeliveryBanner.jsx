// src/components/DeliveryBanner.jsx
// Add this in App.js — right after <Navbar /> and before <main>

import React, { useState } from "react";

export default function DeliveryBanner() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div style={{
      background: "#2C1408",
      color: "#FDF6E3",
      textAlign: "center",
      padding: "10px 40px",
      fontSize: 13,
      fontWeight: 500,
      position: "relative",
      fontFamily: "'Hind', sans-serif",
      borderBottom: "1px solid rgba(232,151,10,0.3)",
    }}>
      🚚 <strong style={{ color: "#F5C842" }}>Free Delivery</strong> &nbsp;|&nbsp;
      Pan India — Tamil Nadu, Maharashtra, Karnataka &amp; all states &nbsp;|&nbsp;
      <span style={{ color: "#F5C842" }}>Order on WhatsApp ↗</span>
      <button
        onClick={() => setVisible(false)}
        style={{
          position: "absolute",
          right: 14,
          top: "50%",
          transform: "translateY(-50%)",
          background: "none",
          border: "none",
          color: "rgba(253,246,227,0.5)",
          fontSize: 18,
          cursor: "pointer",
          lineHeight: 1,
          padding: "0 4px",
        }}
        aria-label="Close"
      >
        ×
      </button>
    </div>
  );
}

