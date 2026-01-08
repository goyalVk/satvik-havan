import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/global.css";
import { Helmet } from "react-helmet-async";


export default function Herbs() {
  const [searchQuery, setSearchQuery] = useState("");

const products = [
  {
    id: 1,
    name: "Mulethi (Licorice Root)",
    quantity: "100g",
    price: "₹99",
    description: "Soothes throat, aids digestion, and purifies the system.",
    image: "https://m.media-amazon.com/images/I/61W9A6gAaTL.jpg"
  },
  {
    id: 2,
    name: "Ashwagandha Root",
    quantity: "100g",
    price: "₹149",
    description: "Boosts energy and reduces stress — perfect for Ayurvedic wellness.",
    image: "https://m.media-amazon.com/images/I/61Kh6JGq-FL.jpg"
  },
  {
    id: 3,
    name: "Amla Reetha Shikakai Mix",
    quantity: "100g",
    price: "₹99",
    description: "Natural hair cleanser and conditioner made from traditional herbs.",
    image: "https://m.media-amazon.com/images/I/61gUTZp3GzL.jpg"
  },
  {
    id: 4,
    name: "Neem Powder",
    quantity: "200g + Free Bowl",
    price: "₹149",
    description: "Powerful antibacterial herb for skincare and purification rituals.",
    image: "https://m.media-amazon.com/images/I/51mRwVSguiL.jpg"
  },
  {
    id: 5,
    name: "Dry Rose Petals",
    quantity: "100g + Free Bowl",
    price: "₹149",
    description: "Used in pooja, aroma, and Ayurvedic beauty rituals.",
    image: "https://m.media-amazon.com/images/I/51vSEnae0SL.jpg"
  },
  {
    id: 6,
    name: "Ratanjot (Alkanet Root)",
    quantity: "50g",
    price: "₹90",
    description: "Traditional herb used for natural coloring and Ayurvedic remedies.",
    image: "https://m.media-amazon.com/images/I/613hLNlT83L.jpg"
  },
  {
    id: 7,
    name: "Kapoor Kachri",
    quantity: "100g",
    price: "₹199",
    description: "Excellent for hair fragrance, volume, and Ayurvedic hair care.",
    image: "https://m.media-amazon.com/images/I/51qg8U4zFyL.jpg"
  },
  {
    id: 8,
    name: "Jatamansi Root",
    quantity: "100g",
    price: "₹149",
    description: "Supports sleep, reduces stress, and enhances mental calmness.",
    image: "https://m.media-amazon.com/images/I/61CFXvYV-dL.jpg"
  },
  {
    id: 9,
    name: "Kamarkas (Palash Gond)",
    quantity: "100g",
    price: "₹149",
    description: "Strengthening herb used in postpartum laddu and traditional nutrition.",
    image: "https://m.media-amazon.com/images/I/515SYij6cTL.jpg"
  },
  {
    id: 10,
    name: "Manjistha Powder",
    quantity: "100g",
    price: "₹129",
    description: "A powerful herb for blood purification, acne control & skin glow.",
    image: "https://m.media-amazon.com/images/I/516EsK8WHQL.jpg"
  },
  {
    id: 11,
    name: "Brahmi Powder",
    quantity: "100g",
    price: "₹99",
    description: "Supports memory, focus, and stress relief; nourishes hair naturally.",
    image: "https://m.media-amazon.com/images/I/51JQbruhUTL.jpg"
  },
  {
    id: 12,
    name: "Satvik Havan Amalaki (Amla) Whole 100g",
    quantity: "100g",
    price: "₹99",
    description: "Amalaki (Amla / Indian Gooseberry) is one of the most revered fruits in Ayurveda.",
    image: "https://m.media-amazon.com/images/I/61x-ie6rohL.jpg"
  },
  {
    id: 13,
    name: "Satvik Havan Musta Powder 100g",
    quantity: "100g",
    price: "₹99",
    description: "Musta (Nutgrass) supports digestion, metabolism, and women’s wellness.",
    image: "https://m.media-amazon.com/images/I/51FgnpJ3NaL.jpg"
  },
  {
    id: 14,
    name: "Satvik Havan Guduchi (Giloy) Powder 100g",
    quantity: "100g",
    price: "₹111",
    description: "Guduchi is traditionally used for immunity support and detoxification.",
    image: "https://m.media-amazon.com/images/I/51IHfjJeP6L.jpg"
  },
  {
    id: 15,
    name: "Satvik Havan Choti Pippali 100g",
    quantity: "100g",
    price: "₹149",
    description: "Supports respiratory health and digestion.",
    image: "https://m.media-amazon.com/images/I/61ddAtZhfQL.jpg"
  },
  {
    id: 16,
    name: "Satvik Havan Trikatu Churna 100g",
    quantity: "100g",
    price: "₹149",
    description: "Enhances digestion, metabolism, and respiratory health.",
    image: "https://m.media-amazon.com/images/I/51mrZVXIt4L.jpg"
  },
  {
    id: 17,
    name: "Satvik Havan Dashmool Powder 100g",
    quantity: "100g",
    price: "₹149",
    description: "Used for inflammation relief and vitality.",
    image: "https://m.media-amazon.com/images/I/51Bfchj59LL.jpg"
  },
  {
    id: 18,
    name: "Satvik Havan Kutaj Chaal 100g",
    quantity: "100g",
    price: "₹149",
    description: "Effective for digestive disorders and gut balance.",
    image: "https://m.media-amazon.com/images/I/617zEiB63dL.jpg"
  },
  {
    id: 19,
    name: "Satvik Havan Nagarmotha Root 100g",
    quantity: "100g",
    price: "₹99",
    description: "Supports digestion and metabolic balance.",
    image: "https://m.media-amazon.com/images/I/612F+Bux38L.jpg"
  },
  {
    id: 20,
    name: "Satvik Havan Vidanga 100g",
    quantity: "100g",
    price: "₹199",
    description: "Trusted herb for intestinal cleansing.",
    image: "https://m.media-amazon.com/images/I/61ViqnL9D1L.jpg"
  },
  {
    id: 21,
    name: "Satvik Havan Hadjod 100g",
    quantity: "100g",
    price: "₹121",
    description: "Supports bone healing and fracture recovery.",
    image: "https://m.media-amazon.com/images/I/61tjTzuRDrL.jpg"
  },
  {
    id: 22,
    name: "Satvik Havan Arjun Chal 100g",
    quantity: "100g",
    price: "₹99",
    description: "Respected herb for heart health.",
    image: "https://m.media-amazon.com/images/I/61-Mk13bGmL.jpg"
  },
  {
    id: 23,
    name: "Satvik Havan Varun Chal 100g",
    quantity: "100g",
    price: "₹99",
    description: "Used for kidney and urinary wellness.",
    image: "https://m.media-amazon.com/images/I/51nJ0hE1j8L.jpg"
  },
  {
    id: 24,
    name: "Satvik Havan Gokhru 100g",
    quantity: "100g",
    price: "₹111",
    description: "Supports stamina, kidney cleansing, and vitality.",
    image: "https://m.media-amazon.com/images/I/51qbHRV5SeL.jpg"
  },
  {
    id: 25,
    name: "Satvik Havan Chot Sajji (Sajji Kali) 100g",
    quantity: "100g",
    price: "₹121",
    description: "Used for acidity relief and digestive balance.",
    image: "https://m.media-amazon.com/images/I/51sYJc87S9L.jpg"
  },
  {
    id: 26,
    name: "Satvik Havan Amba Haldi Powder 100g",
    quantity: "100g",
    price: "₹99",
    description: "Traditional herb for glowing skin and skincare.",
    image: "https://m.media-amazon.com/images/I/51hKv1bxHAL.jpg"
  }
];




const filteredProducts = products.filter((product) => {
  if (!searchQuery) return true;
  try {
    const regex = new RegExp(searchQuery, "i");
    return regex.test(product.name);
  } catch {
    return product.name.toLowerCase().includes(searchQuery.toLowerCase());
  }
});

return (
  <>
    <Helmet>
      <title>Buy Ayurvedic Herbs Online in India | Satvik Havan</title>

      <meta
        name="description"
        content="Buy pure Ayurvedic herbs online in India from Satvik Havan. Natural herbs for immunity, digestion, hair, skin and holistic wellness. Pan India delivery."
      />

      <link rel="canonical" href="https://satvikhavan.com/herbs" />

      {/* Open Graph for WhatsApp / Facebook */}
      <meta property="og:title" content="Buy Ayurvedic Herbs Online | Satvik Havan" />
      <meta
        property="og:description"
        content="Explore authentic Ayurvedic herbs sourced with devotion. Trusted by Ayurvedic students and wellness seekers across India."
      />
      <meta property="og:url" content="https://satvikhavan.com/herbs" />
      <meta property="og:type" content="website" />
    </Helmet>
    
  <div
    className="herbs-page"
    style={{
      background: "linear-gradient(to bottom, #FFF8EC 0%, #F4E9D8 100%)",
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
      <h1 style={{ fontSize: "2.6rem", color: "#C77B30", fontWeight: "700" }}>
        Ayurveda: Where Science Meets Spirituality 🌿
      </h1>

      <p
        style={{
          color: "#5C432A",
          maxWidth: "750px",
          margin: "1rem auto 2rem",
          fontSize: "1.1rem",
          lineHeight: "1.8",
        }}
      >
        Ayurveda is not just a system of medicine — it’s a philosophy of life.
        At <b>Satvik Havan</b>, we reconnect spirituality with Ayurveda through
        pure, authentic herbs sourced with devotion.
        <br />
        Our mission is to <b>educate, guide, and empower</b> Ayurvedic students,
        doctors, and wellness seekers across India.
      </p>

      <input
        type="text"
        placeholder="🔍 Search Ayurvedic herbs..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="herbs-search"
        style={{
          padding: "0.7rem 1rem",
          width: "300px",
          borderRadius: "6px",
          border: "1px solid #E6A74E",
          fontSize: "1rem",
          background: "#FFF",
          color: "#3E2A1F",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        }}
      />
    </section>

    {/* Product Grid */}
    <section className="herbs-section" style={{ padding: "3rem 2rem" }}>
      <div
        className="herbs-grid-container"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "2rem",
        }}
      >
        {filteredProducts.map((product) => {
          const whatsappLink = `https://wa.me/918076170877?text=Hello, I want to order ${product.name} (${product.quantity}) for ${product.price}`;

          return (
            <div
              key={product.id}
              className="herb-card"
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
              <Link to={`/herbs/${product.id}`} style={{ textDecoration: "none" }}>
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "100%",
                    height: "230px",
                    objectFit: "cover",
                    borderRadius: "10px",
                    marginBottom: "1rem",
                  }}
                  onError={(e) =>
                    (e.currentTarget.src =
                      "https://placehold.co/400x400?text=Herbal+Product")
                  }
                />
              </Link>

              <h3 style={{ color: "#C77B30", fontSize: "1.2rem" }}>
                {product.name}
              </h3>
              <p style={{ color: "#5C432A", fontSize: "0.95rem" }}>
                {product.quantity}
              </p>
              <p
                style={{
                  color: "#C77B30",
                  fontWeight: "600",
                  fontSize: "1rem",
                }}
              >
                {product.price}
              </p>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "0.5rem",
                }}
              >
                <Link to={`/herbs/${product.id}`}>
                  <button className="view-details-btn">View Details</button>
                </Link>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="order-btn">Order on WhatsApp</button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>

    {/* 🌿 Emotional Ayurveda Expansion Section */}
    <section
      style={{
        background: "linear-gradient(135deg, #FFF1DA 0%, #F6E2BF 100%)",
        padding: "3.5rem 2rem",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          color: "#9E5B1F",
          fontSize: "2rem",
          marginBottom: "1.2rem",
          fontWeight: "700",
        }}
      >
        🌿 We’re Not Just Selling Herbs — We’re Reviving Ayurveda
      </h2>

      <p
        style={{
          color: "#5C432A",
          maxWidth: "820px",
          margin: "0 auto 1.5rem",
          fontSize: "1.05rem",
          lineHeight: "1.8",
        }}
      >
        At <b>Satvik Havan</b>, every herb has a story — a connection to our
        ancestors, Rishis, and centuries of Ayurvedic wisdom.
        <br />
        The products listed above are only a part of what we offer.
        Many Ayurvedic herbs are sourced <b>on demand</b>, freshly packed, and
        supplied with care.
      </p>

      <p
        style={{
          color: "#6B4A2D",
          maxWidth: "780px",
          margin: "0 auto 2rem",
          fontSize: "1rem",
          lineHeight: "1.7",
        }}
      >
        Looking for a <b>rare herb</b>, a <b>custom churna</b>, or traditional
        guidance?
        <br />
        If it belongs to Ayurveda — we’ll help you find it.
      </p>

      <a
        href="https://wa.me/918076170877?text=Namaste%20Satvik%20Havan%20🙏%0AI%20am%20looking%20for%20specific%20Ayurvedic%20herbs%20or%20need%20guidance.%20Please%20assist."
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          style={{
            background: "#C77B30",
            color: "#FFF",
            padding: "1rem 2.2rem",
            borderRadius: "30px",
            border: "none",
            cursor: "pointer",
            fontSize: "1rem",
            fontWeight: "600",
            boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
          }}
        >
          💬 WhatsApp Us for Any Herb or Info
        </button>
      </a>

      <p
        style={{
          marginTop: "1.5rem",
          color: "#7A5A3A",
          fontSize: "0.95rem",
          fontStyle: "italic",
        }}
      >
        “Ayurveda is not treatment — it is harmony with nature.”
      </p>
    </section>

    {/* Educational / Awareness CTA */}
    <section
      style={{
        background: "#F4E9D8",
        textAlign: "center",
        padding: "3rem 2rem",
      }}
    >
      <h2 style={{ color: "#C77B30", marginBottom: "1rem" }}>
        🌿 Empowering Ayurveda, One Herb at a Time
      </h2>

      <p
        style={{
          color: "#5C432A",
          maxWidth: "700px",
          margin: "0 auto 1.5rem",
          fontSize: "1.05rem",
          lineHeight: "1.7",
        }}
      >
        We welcome <b>Ayurvedic students</b>, <b>BAMS practitioners</b>, and
        <b> doctors</b> for collaboration, learning, and bulk supply.
        <br />
        Let’s preserve and promote authentic Ayurveda together.
      </p>

      <a
        href="https://wa.me/918076170877?text=I want to know more about bulk or educational Ayurvedic herb supply"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          style={{
            background: "#E6A74E",
            color: "#FFF",
            padding: "1rem 2rem",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          📦 Contact for Bulk / Educational Orders
        </button>
      </a>
    </section>
  </div>
  </>
);
}
