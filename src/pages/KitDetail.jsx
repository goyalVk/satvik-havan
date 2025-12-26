import React from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/global.css";

const KitDetail = () => {
  const { id } = useParams();

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
      occasion: "Housewarming",
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
      occasion: "Satyanarayan Puja",
      totalItems: 30,
      items: ["Katha Book", "Chawal", "Kesar", "Mishri", "Panchamrit", "Supari"],
      img: "https://m.media-amazon.com/images/I/81X8M8wXFxL.jpg",
    },
    {
      id: 4,
      name: "Navgrah Puja Kit",
      price: 549,
      description:
        "Celebrate the nine forms of Devi with purity — includes all samagri for daily Navratri puja, Kalash sthapana, and diya rituals.",
      occasion: "Navgrah Shanti",
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
      occasion: "All Rituals",
      totalItems: 40,
      items: ["Temple Bell", "Diya", "Kalash", "Cotton Wicks", "Loban", "Kumkum"],
      img: "https://assets-news.housing.com/news/wp-content/uploads/2022/02/17111214/Mandir-for-home-Your-guide-to-set-up-a-pooja-room.jpg",
    },
  ];

  const kit = kitsData.find((k) => k.id === parseInt(id));
  if (!kit) {
    return (
      <div style={{ textAlign: "center", padding: "4rem", fontSize: "1.2rem" }}>
        Kit not found
      </div>
    );
  }

  const handleOrderWhatsApp = (kit) => {
    const message = `Namaste 🙏, I want to order the ${kit.name} for ₹${kit.price}. Please share COD details.`;
    const url = `https://wa.me/918076170877?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  // pick 3 random other kits for "related" section
  const relatedKits = kitsData
    .filter((k) => k.id !== kit.id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #FFF8EC, #F4E9D8)",
        minHeight: "100vh",
      }}
    >
      {/* Detail Section */}
      <section style={{ padding: "4rem 2rem" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: "900px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <img
            src={kit.img}
            alt={kit.name}
            style={{
              maxWidth: "400px",
              width: "100%",
              borderRadius: "10px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
              marginBottom: "1.5rem",
            }}
          />

          <h1 style={{ color: "#C77B30", marginBottom: "0.5rem" }}>{kit.name}</h1>
          <p style={{ fontWeight: "600", color: "#C77B30" }}>₹{kit.price}</p>
          <p style={{ color: "#5C432A" }}>{kit.occasion}</p>
          <p
            style={{
              maxWidth: "700px",
              margin: "1rem auto",
              lineHeight: "1.8",
              color: "#5C432A",
            }}
          >
            {kit.description}
          </p>

          <p style={{ color: "#C77B30", fontWeight: "600" }}>
            Total Items: {kit.totalItems}
          </p>

          <h3 style={{ color: "#C77B30", marginTop: "1rem" }}>Included Items</h3>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: "1rem 0",
              color: "#5C432A",
            }}
          >
            {kit.items.map((item, index) => (
              <li key={index} style={{ marginBottom: "0.3rem" }}>
                • {item}
              </li>
            ))}
          </ul>

          <div style={{ marginTop: "1rem" }}>
            <button
              onClick={() => handleOrderWhatsApp(kit)}
              style={{
                background: "#E6A74E",
                color: "#FFF",
                padding: "0.8rem 1.5rem",
                border: "none",
                borderRadius: "6px",
                marginRight: "0.5rem",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Order on WhatsApp
            </button>
            <Link to="/kits">
              <button
                style={{
                  background: "#C77B30",
                  color: "#FFF8EC",
                  padding: "0.8rem 1.5rem",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Back to Kits
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Satvik Kits Section */}
      <section
        style={{
          background: "#FFF8EC",
          padding: "3rem 2rem",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#C77B30", marginBottom: "1rem" }}>
          ✨ The Purpose Behind Satvik Kits
        </h2>
        <p
          style={{
            color: "#5C432A",
            maxWidth: "800px",
            margin: "0 auto",
            lineHeight: "1.8",
          }}
        >
          Every Satvik Kit was born from a simple observation — devotees waste
          hours running from one shop to another before every ritual.  
          We decided to change that.  
          Each kit is curated with <b>authentic, temple-quality items</b>,
          prepared under guidance of Vedic experts.  
          Our goal is to make your worship <b>pure, peaceful, and effortless</b>,
          so that faith never feels like a burden, but a blessing.
        </p>
      </section>

      {/* Benefits Section */}
      <section
        style={{
          padding: "3rem 2rem",
          textAlign: "center",
          background: "linear-gradient(135deg, #FDE6B8, #FFF8EC)",
        }}
      >
        <h2 style={{ color: "#C77B30", marginBottom: "1.5rem" }}>
          🪔 Why Devotees Choose Satvik Kits
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.5rem",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          {[
            "🧡 100% temple-approved ingredients",
            "🙏 Ready-to-use for any pooja or havan",
            "📦 Hassle-free delivery across India",
            "🕉️ Blessed and spiritually energized items",
            "💬 Free mantra & ritual guidance via WhatsApp",
          ].map((benefit, i) => (
            <div
              key={i}
              style={{
                background: "#FFF8EC",
                border: "1px solid #F1D5A5",
                borderRadius: "10px",
                padding: "1rem",
                color: "#5C432A",
                fontWeight: "500",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              }}
            >
              {benefit}
            </div>
          ))}
        </div>
      </section>

      {/* Related Kits */}
      <section style={{ padding: "4rem 2rem", textAlign: "center" }}>
        <h2 style={{ color: "#C77B30", marginBottom: "2rem" }}>
          🌼 Other Popular Satvik Kits
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.5rem",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          {relatedKits.map((rk) => (
            <Link
              key={rk.id}
              to={`/kits/${rk.id}`}
              style={{
                textDecoration: "none",
                background: "#FFF8EC",
                border: "1px solid #F1D5A5",
                borderRadius: "10px",
                padding: "1rem",
                color: "#3E2A1F",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <img
                src={rk.img}
                alt={rk.name}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginBottom: "0.5rem",
                }}
              />
              <h4 style={{ color: "#C77B30" }}>{rk.name}</h4>
              <p style={{ color: "#5C432A" }}>₹{rk.price}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Final Spiritual Message */}
      <section
        style={{
          background: "#F4E9D8",
          textAlign: "center",
          padding: "4rem 2rem",
        }}
      >
        <h2 style={{ color: "#C77B30", marginBottom: "1rem" }}>
          🙏 Satvik Havan — Faith Made Simple
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
          Satvik Havan isn’t just about selling kits — it’s about reviving the
          spiritual heart of every Indian household.  
          When devotion becomes easy, families pray together — and that’s where
          true peace begins.  
          <br />
          <b>May every diya you light bring clarity, calm, and divine connection.</b>
        </p>
      </section>
    </div>
  );
};

export default KitDetail;
