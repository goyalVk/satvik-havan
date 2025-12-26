import React from "react";
import { Link } from "react-router-dom";
import "../styles/global.css";

const Kits = () => {
  const kitsData = [
    {
      id: 1,
      name: "Daily Pooja Kit",
      price: 299,
      description:
        "A sacred set of 21 essential items for your everyday worship — making your morning puja effortless and complete.",
      occasion: "Daily Worship & Home Rituals",
      totalItems: 21,
      items: ["Agarbatti", "Kapoor", "Diya", "Kumkum", "Haldi", "Chandan", "Janeu"],
      img: "https://servdharm.com/cdn/shop/files/SampoornPoojaSamagriKit_7_800x.png?v=1712585276",
    },
    {
      id: 2,
      name: "Griha Pravesh Kit",
      price: 499,
      description:
        "Everything needed for your sacred new beginning — a complete set for Havan and Griha Pravesh with temple-approved items.",
      occasion: "Housewarming & New Beginnings",
      totalItems: 36,
      items: ["Samidha", "Ghee", "Kapoor", "Kalash", "Moli", "Havan Kund"],
      img: "https://pujasamagriwala.com/wp-content/uploads/2023/12/Griha-Pravesh-Puja-Kit-300x300.webp",
    },
    {
      id: 3,
      name: "Satyanarayan Puja Kit",
      price: 599,
      description:
        "A devotional set crafted for complete Satyanarayan Puja — includes guidebook and QR video for step-by-step rituals.",
      occasion: "Satyanarayan Katha & Family Pooja",
      totalItems: 30,
      items: ["Katha Book", "Chawal", "Kesar", "Mishri", "Panchamrit", "Supari"],
      img: "https://m.media-amazon.com/images/I/81X8M8wXFxL.jpg",
    },
    {
      id: 4,
      name: "Navratri Puja Kit",
      price: 549,
      description:
        "Celebrate the nine forms of Devi with purity — includes all samagri for daily Navratri puja, Kalash sthapana, and diya rituals.",
      occasion: "Navratri, Durga Puja & Shakti Sadhana",
      totalItems: 28,
      items: ["Nine Grah Daan Items", "Kalava", "Til", "Rice", "Dhoop", "Diya"],
      img: "https://m.media-amazon.com/images/I/71tSPs13X-L.jpg",
    },
    {
      id: 5,
      name: "Premium Home Temple Kit",
      price: 899,
      description:
        "A complete temple setup for your home — from diya and bell to pure havan samagri. Crafted for peace and daily connection with the Divine.",
      occasion: "All Spiritual & Family Rituals",
      totalItems: 40,
      items: ["Temple Bell", "Diya", "Kalash", "Cotton Wicks", "Loban", "Kumkum"],
      img: "https://assets-news.housing.com/news/wp-content/uploads/2022/02/17111214/Mandir-for-home-Your-guide-to-set-up-a-pooja-room.jpg",
    },
  ];

  const handleOrderWhatsApp = (kit) => {
    const message = `Namaste 🙏, I want to order the ${kit.name} for ₹${kit.price}. Please provide details.`;
    const url = `https://wa.me/918076170877?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #FFF8EC 0%, #F4E9D8 100%)",
        color: "#3E2A1F",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      {/* Hero Section */}
      <section
        style={{
          textAlign: "center",
          padding: "5rem 2rem",
          background: "linear-gradient(135deg, #FFF8EC 0%, #FDE6B8 100%)",
        }}
      >
        <h1
          style={{
            fontSize: "2.8rem",
            marginBottom: "1rem",
            color: "#C77B30",
            fontWeight: "700",
          }}
        >
          🪔 Satvik Pooja Kits — Purity, Packed with Devotion
        </h1>
        <p
          style={{
            color: "#5C432A",
            maxWidth: "700px",
            margin: "0 auto 2rem",
            fontSize: "1.1rem",
            lineHeight: "1.8",
          }}
        >
          Satvik Havan began with a simple thought — that no devotee should rush
          to the market before a pooja.  
          These carefully crafted kits bring <b>all essentials</b> to your doorstep,  
          so your only focus is <b>faith and devotion</b>.
        </p>
        <button
          onClick={() =>
            handleOrderWhatsApp({ name: "General Inquiry", price: "" })
          }
          style={{
            background: "#E6A74E",
            color: "#FFF",
            padding: "1rem 2rem",
            borderRadius: "6px",
            fontWeight: "bold",
            border: "none",
            cursor: "pointer",
            transition: "all 0.3s ease",
            boxShadow: "0 0 10px rgba(230, 167, 78, 0.5)",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          📦 Order Your Kit on WhatsApp
        </button>
      </section>

      {/* Kits Grid */}
      <section style={{ padding: "4rem 2rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              textAlign: "center",
              color: "#C77B30",
              fontSize: "2.2rem",
              marginBottom: "2.5rem",
              fontWeight: "700",
            }}
          >
            Choose the Kit That Resonates with Your Ritual
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "2rem",
            }}
          >
            {kitsData.map((kit) => (
              <div
                key={kit.id}
                style={{
                  background: "#FFF8EC",
                  borderRadius: "15px",
                  padding: "1.5rem",
                  textAlign: "center",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                  border: "1px solid #F1D5A5",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.03)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 25px rgba(199,123,48,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 20px rgba(0,0,0,0.1)";
                }}
              >
                <img
                  src={kit.img}
                  alt={kit.name}
                  style={{
                    width: "100%",
                    borderRadius: "10px",
                    marginBottom: "1rem",
                    height: "220px",
                    objectFit: "cover",
                  }}
                />
                <h3 style={{ color: "#C77B30", marginBottom: "0.4rem" }}>
                  {kit.name}
                </h3>
                <p style={{ color: "#5C432A", fontSize: "0.95rem" }}>
                  {kit.description}
                </p>
                <p
                  style={{
                    color: "#6B5336",
                    fontSize: "0.85rem",
                    marginTop: "0.5rem",
                  }}
                >
                  Occasion: {kit.occasion}
                </p>
                <p
                  style={{
                    fontWeight: "600",
                    color: "#C77B30",
                    marginTop: "0.7rem",
                  }}
                >
                  ₹{kit.price} • {kit.totalItems} items
                </p>

                <div
                  style={{
                    marginTop: "1rem",
                    display: "flex",
                    gap: "0.5rem",
                    justifyContent: "center",
                  }}
                >
                  <Link to={`/kits/${kit.id}`}>
                    <button
                      style={{
                        background: "#C77B30",
                        color: "#FFF8EC",
                        padding: "0.5rem 1rem",
                        borderRadius: "5px",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      View Details
                    </button>
                  </Link>
                  <button
                    onClick={() => handleOrderWhatsApp(kit)}
                    style={{
                      background: "#E6A74E",
                      color: "#FFF",
                      padding: "0.5rem 1rem",
                      borderRadius: "5px",
                      border: "none",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Order on WhatsApp
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section
        style={{
          background: "#F4E9D8",
          textAlign: "center",
          padding: "4rem 2rem",
        }}
      >
        <h2 style={{ color: "#C77B30", marginBottom: "1rem" }}>
          🌸 The Journey that Lit the Lamp
        </h2>
        <p
          style={{
            color: "#5C432A",
            maxWidth: "800px",
            margin: "0 auto",
            lineHeight: "1.8",
            fontSize: "1.05rem",
          }}
        >
          Satvik Havan started with these humble kits — a vision to make every
          home temple-ready, every pooja effortless, and every devotee stress-free.  
          Today, our journey extends into Ayurvedic and herbal products,  
          but these kits remain our roots — a reminder that **faith should be simple and pure**.
        </p>
      </section>

      {/* Call to Action */}
      <section
        style={{
          textAlign: "center",
          padding: "3rem 2rem",
          background: "linear-gradient(135deg, #FFF8EC, #FDE6B8)",
        }}
      >
        <h2 style={{ color: "#C77B30" }}>
          🙏 Bring Divine Convenience Home Today
        </h2>
        <p style={{ color: "#5C432A", marginTop: "1rem" }}>
          Whether it’s a small daily pooja or a grand family ritual —  
          Satvik Havan Kits ensure that devotion comes without disturbance.
        </p>
        <a
          href="https://wa.me/918076170877?text=I want to know more about Satvik Pooja Kits"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            style={{
              marginTop: "1.5rem",
              background: "#E6A74E",
              color: "#FFF",
              padding: "1rem 2rem",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            📞 Connect on WhatsApp
          </button>
        </a>
      </section>
    </div>
  );
};

export default Kits;
