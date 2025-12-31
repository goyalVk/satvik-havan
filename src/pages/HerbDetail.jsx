import React from "react";
import { useParams, Link } from "react-router-dom";

export default function HerbDetail() {
  const { id } = useParams();

const products = [
  {
    id: 1,
    name: "Mulethi (Licorice Root)",
    quantity: "100g",
    price: "₹99",
    description:
      "Mulethi is a traditional Ayurvedic rasayana herb known for soothing the throat, aiding digestion, and purifying the system. It helps balance Vata and Kapha doshas naturally.",
    image: "https://m.media-amazon.com/images/I/61W9A6gAaTL.jpg"
  },
  {
    id: 2,
    name: "Ashwagandha Root",
    quantity: "100g",
    price: "₹149",
    description:
      "Ashwagandha is a powerful adaptogenic root that helps reduce stress, improve stamina, and support overall vitality. Widely used for mental and physical balance.",
    image: "https://m.media-amazon.com/images/I/61Kh6JGq-FL.jpg"
  },
  {
    id: 3,
    name: "Amla Reetha Shikakai Mix",
    quantity: "100g",
    price: "₹99",
    description:
      "A traditional herbal blend for natural hair cleansing. Strengthens hair roots, reduces dandruff, and promotes healthy shine without chemicals.",
    image: "https://m.media-amazon.com/images/I/61gUTZp3GzL.jpg"
  },
  {
    id: 4,
    name: "Neem Powder",
    quantity: "200g + Free Bowl",
    price: "₹149",
    description:
      "Neem is known for its strong antibacterial and purifying properties. Ideal for skincare, hair care, and traditional cleansing rituals.",
    image: "https://m.media-amazon.com/images/I/51mRwVSguiL.jpg"
  },
  {
    id: 5,
    name: "Dry Rose Petals",
    quantity: "100g + Free Bowl",
    price: "₹149",
    description:
      "Naturally aromatic rose petals used in pooja, skincare, and herbal beauty rituals. Cooling in nature and soothing for the mind.",
    image: "https://m.media-amazon.com/images/I/51vSEnae0SL.jpg"
  },
  {
    id: 6,
    name: "Ratanjot (Alkanet Root)",
    quantity: "50g",
    price: "₹90",
    description:
      "A traditional Ayurvedic root used for natural coloring in oils and remedies. Known for its cooling and skin-soothing properties.",
    image: "https://m.media-amazon.com/images/I/613hLNlT83L.jpg"
  },
  {
    id: 7,
    name: "Kapoor Kachri",
    quantity: "100g",
    price: "₹199",
    description:
      "Aromatic root powder used for hair care. Adds natural fragrance, improves volume, and strengthens hair roots.",
    image: "https://m.media-amazon.com/images/I/51qg8U4zFyL.jpg"
  },
  {
    id: 8,
    name: "Jatamansi Root",
    quantity: "100g",
    price: "₹149",
    description:
      "A calming Ayurvedic herb known for promoting sound sleep, reducing mental stress, and supporting emotional balance.",
    image: "https://m.media-amazon.com/images/I/61CFXvYV-dL.jpg"
  },
  {
    id: 9,
    name: "Kamarkas (Palash Gond)",
    quantity: "100g",
    price: "₹149",
    description:
      "Traditionally used in postpartum nutrition and strengthening laddoos. Supports recovery, strength, and nourishment.",
    image: "https://m.media-amazon.com/images/I/515SYij6cTL.jpg"
  },
  {
    id: 10,
    name: "Manjistha Powder",
    quantity: "100g",
    price: "₹129",
    description:
      "Manjistha is well-known for blood purification and skin health. Helps reduce acne and supports natural glow.",
    image: "https://m.media-amazon.com/images/I/516EsK8WHQL.jpg"
  },
  {
    id: 11,
    name: "Brahmi Powder",
    quantity: "100g",
    price: "₹99",
    description:
      "Brahmi supports memory, focus, and stress relief. Also beneficial for hair nourishment and scalp health.",
    image: "https://m.media-amazon.com/images/I/51JQbruhUTL.jpg"
  }
];


  const product = products.find((p) => p.id === Number(id));
  if (!product) return <h2 style={{ textAlign: "center", padding: "4rem" }}>Product not found</h2>;

  const whatsappLink = `https://wa.me/918076170877?text=Hello, I want to order ${product.name} (${product.quantity}) for ${product.price}`;
  const similarProducts = products.filter((p) => p.id !== Number(id)).sort(() => 0.5 - Math.random()).slice(0, 4);

  return (
    <div style={{ background: "linear-gradient(to bottom, #FFF8EC, #F4E9D8)" }}>
      <section style={{ padding: "4rem 2rem", textAlign: "center" }}>
        <img
          src={product.image}
          alt={product.name}
          style={{
            maxWidth: "400px",
            width: "100%",
            borderRadius: "10px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
            marginBottom: "1.5rem",
            objectFit: "contain",
          }}
        />
        <h1 style={{ color: "#C77B30" }}>{product.name}</h1>
        <p style={{ color: "#5C432A" }}>{product.quantity}</p>
        <p style={{ fontSize: "1.2rem", color: "#C77B30", fontWeight: "bold" }}>{product.price}</p>

        {/* <div style={{ margin: "1rem auto", maxWidth: "700px", color: "#5C432A", lineHeight: "1.8" }}>
          {product.description}
        </div> */}

        <div style={{ marginTop: "1rem" }}>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <button className="order-btn" style={{ margin: "0.5rem" }}>Order on WhatsApp</button>
          </a>
          <Link to="/herbs">
            <button className="back-btn" style={{ margin: "0.5rem" }}>Back to Herbs</button>
          </Link>
        </div>

        {/* Ayurvedic Insight Section */}
        <div
          style={{
            marginTop: "3rem",
            background: "#FFF8EC",
            borderRadius: "12px",
            padding: "2rem",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            maxWidth: "800px",
            marginInline: "auto",
          }}
        >
          <h2 style={{ color: "#C77B30", marginBottom: "1rem" }}>Ayurvedic Insight 🌿</h2>
          <p style={{ color: "#5C432A", fontSize: "1.05rem", lineHeight: "1.8" }}>
            {product.description}  
            <br /><br />
            {/* Every herb in Ayurveda carries spiritual energy. Using {product.name} is not only about physical healing —
            it’s about aligning with nature’s intelligence.  
            These herbs were described by ancient Rishis as *divine medicines* — created to purify the body and awaken inner peace. */}
          </p>
        </div>

        {/* Similar Herbs */}
        <div style={{ marginTop: "4rem" }}>
          <h2 style={{ color: "#C77B30", marginBottom: "1rem" }}>🌸 Similar Ayurvedic Herbs</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1.5rem",
              maxWidth: "1000px",
              margin: "0 auto",
            }}
          >
            {similarProducts.map((sp) => (
              <Link
                key={sp.id}
                to={`/herbs/${sp.id}`}
                style={{
                  textDecoration: "none",
                  background: "#FFF8EC",
                  border: "1px solid #F1D5A5",
                  borderRadius: "10px",
                  padding: "1rem",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <img
                  src={sp.image}
                  alt={sp.name}
                  style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "cover",
                    borderRadius: "8px",
                    marginBottom: "0.5rem",
                  }}
                />
                <h4 style={{ color: "#C77B30" }}>{sp.name}</h4>
                <p style={{ color: "#5C432A", fontSize: "0.9rem" }}>{sp.price}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Educational CTA */}
        <div
          style={{
            marginTop: "4rem",
            background: "#F4E9D8",
            padding: "2rem",
            borderRadius: "10px",
            maxWidth: "800px",
            marginInline: "auto",
          }}
        >
          <h3 style={{ color: "#C77B30" }}>🌿 Ayurveda for Everyone</h3>
          <p style={{ color: "#5C432A", lineHeight: "1.7" }}>
            If you’re an <b>Ayurvedic doctor, BAMS student, or wellness practitioner</b>,  
            we welcome you to collaborate, learn, or order in bulk.  
            Let’s revive Ayurveda together — one herb, one heart at a time.
          </p>
          <a
            href="https://wa.me/918076170877?text=I want to collaborate or order Ayurvedic herbs in bulk."
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              style={{
                background: "#E6A74E",
                color: "#FFF",
                padding: "0.8rem 1.5rem",
                borderRadius: "6px",
                border: "none",
                marginTop: "1rem",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              📞 Connect with Satvik Ayurveda
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}
