import React from "react";

const TrustRibbon = () => {
  const trustPoints = [
    {
      icon: "🌿",
      title: "Pure Ingredients",
      desc: "100% natural and spiritually sourced",
    },
    {
      icon: "🪔",
      title: "Satvik Certified",
      desc: "Blessed & verified by authentic Pandits",
    },
    {
      icon: "💰",
      title: "Easy COD",
      desc: "Cash on delivery available across India",
    },
    {
      icon: "🚚",
      title: "Fast Dispatch",
      desc: "Shipped with care within 24-48 hours",
    },
  ];

  return (
    <section
      className="trust-ribbon"
      style={{
        background: "linear-gradient(90deg, #FFF8EC 0%, #FDE6B8 100%)",
        padding: "1.5rem 1rem",
        borderTop: "1px solid #F1D5A5",
        borderBottom: "1px solid #F1D5A5",
        boxShadow: "0 4px 15px rgba(199,123,48,0.15)",
      }}
    >
      <div
        className="trust-container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "2rem",
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        {trustPoints.map((point, index) => (
          <div
            key={index}
            className="trust-item"
            style={{
              flex: "1 1 200px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "#5C432A",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "default",
              padding: "0.5rem",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 4px 15px rgba(199,123,48,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <span
              style={{
                fontSize: "1.8rem",
                color: "#C77B30",
                marginBottom: "0.5rem",
              }}
            >
              {point.icon}
            </span>
            <h4
              style={{
                fontSize: "1.05rem",
                fontWeight: "600",
                color: "#3E2A1F",
                marginBottom: "0.2rem",
              }}
            >
              {point.title}
            </h4>
            <p
              style={{
                fontSize: "0.85rem",
                color: "#7A6142",
                maxWidth: "180px",
              }}
            >
              {point.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustRibbon;
