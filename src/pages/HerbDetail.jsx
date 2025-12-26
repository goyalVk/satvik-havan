import React from "react";
import { useParams, Link } from "react-router-dom";

export default function HerbDetail() {
  const { id } = useParams();

  const products = [
    { id: 1, name: "Mulethi (Licorice Root)", quantity: "100g", price: "₹199", description: "In Ayurveda, Mulethi is celebrated as a rasayana herb — soothing the throat, aiding digestion, and purifying the body. It balances Kapha and Vata doshas, supporting vitality and calmness.", image: "https://m.media-amazon.com/images/I/51qg8U4zFyL.jpg" },
    { id: 2, name: "Ashwagandha Root", quantity: "100g", price: "₹229", description: "Ashwagandha is known as the 'Indian Ginseng' — a powerful adaptogen that boosts energy, improves stamina, and relieves stress. It balances Vata dosha and supports strength and mental peace.", image: "https://m.media-amazon.com/images/I/61Kh6JGq-FL.jpg" },
    { id: 3, name: "Amla Reetha Shikakai Mix", quantity: "100g", price: "₹179", description: "Amla, Reetha, and Shikakai are nature’s gift for hair and scalp health. Rich in antioxidants, they purify and nourish hair roots, promoting shine and reducing dandruff naturally.", image: "https://m.media-amazon.com/images/I/61sk8+s9jdL.jpg" },
    { id: 4, name: "Multani Mitti (Whole Chunks)", quantity: "500g + Free Bowl", price: "₹199", description: "Multani Mitti, or Fuller’s Earth, is known for its cooling and cleansing properties. It absorbs impurities, tightens skin, and promotes natural glow by balancing excess Pitta.", image: "https://m.media-amazon.com/images/I/515SYij6cTL.jpg" },
    { id: 5, name: "Neem Powder", quantity: "200g + Free Bowl", price: "₹189", description: "Neem is Ayurveda’s most sacred antibacterial herb. It purifies the blood, clears acne, and supports overall detoxification — balancing both Pitta and Kapha doshas.", image: "https://m.media-amazon.com/images/I/51JQbruhUTL.jpg" },
    { id: 6, name: "Dry Rose Petals", quantity: "100g + Free Bowl", price: "₹159", description: "Dried Rose Petals are cooling, aromatic, and soothing to the heart and mind. They pacify Pitta dosha, enhance skin beauty, and uplift emotional well-being.", image: "https://m.media-amazon.com/images/I/516EsK8WHQL.jpg" },
    { id: 7, name: "Bhimseni Camphor", quantity: "100g", price: "₹249", description: "Bhimseni Camphor purifies the atmosphere and uplifts energy. It’s used in pooja, havan, and aromatherapy — promoting calmness, clarity, and spiritual awakening.", image: "https://m.media-amazon.com/images/I/515SYij6cTL.jpg" },
    { id: 8, name: "Amla Powder", quantity: "200g", price: "₹169", description: "Amla, the Indian Gooseberry, is a rejuvenating superfruit rich in Vitamin C. It strengthens immunity, nourishes hair, and supports digestion — balancing all three doshas.", image: "https://m.media-amazon.com/images/I/51cRsamHFSL.jpg" },
    { id: 9, name: "Multani Mitti Powder", quantity: "500g", price: "₹199", description: "Finely powdered Multani Mitti helps remove excess oil, unclog pores, and bring a natural radiance to the skin — a timeless Ayurvedic beauty secret.", image: "https://m.media-amazon.com/images/I/51qg8U4zFyL.jpg" },
    { id: 10, name: "Ratanjot (Alkanet Root)", quantity: "100g", price: "₹199", description: "Ratanjot is used for its natural color and cooling properties. Traditionally, it’s used in oils and remedies to soothe skin irritation and purify blood.", image: "https://m.media-amazon.com/images/I/613hLNlT83L.jpg" },
    { id: 11, name: "Kapoor Kachri", quantity: "100g", price: "₹219", description: "Kapoor Kachri enhances hair fragrance, strength, and natural shine. It’s a natural hair tonic known to stimulate growth and maintain scalp health.", image: "https://m.media-amazon.com/images/I/61CFXvYV-dL.jpg" },
    { id: 12, name: "Agar Tagar", quantity: "100g", price: "₹249", description: "Agar Tagar, or Valerian Root, is a grounding herb used to calm the mind, reduce anxiety, and promote restful sleep — harmonizing Vata dosha.", image: "https://m.media-amazon.com/images/I/51ZRQNUVgmL.jpg" },
    { id: 13, name: "Jatamansi Root", quantity: "100g", price: "₹299", description: "Jatamansi is a medhya rasayana — a brain tonic that promotes mental calmness, clarity, and deep sleep. It balances all three doshas and supports emotional healing.", image: "https://m.media-amazon.com/images/I/51vSEnae0SL.jpg" },
    { id: 14, name: "Guggul + Loban Combo", quantity: "200g", price: "₹199", description: "This sacred resin blend purifies the aura and atmosphere during pooja and meditation. It enhances spiritual vibrations and brings inner peace.", image: "https://m.media-amazon.com/images/I/61W9A6gAaTL.jpg" },
    { id: 15, name: "Kamarkas (Palash Gond)", quantity: "200g", price: "₹189", description: "Kamarkas is known for strengthening postnatal women and improving reproductive health. It restores energy, tones muscles, and balances the system.", image: "https://m.media-amazon.com/images/I/51mRwVSguiL.jpg" },
    { id: 16, name: "Kutki Root (Picrorhiza kurroa)", quantity: "100g", price: "₹299", description: "Kutki is an Ayurvedic liver protector that supports detoxification and immunity. It’s a potent Pitta-pacifying herb with strong antioxidant properties.", image: "https://m.media-amazon.com/images/I/61Kh6JGq-FL.jpg" },
    { id: 17, name: "Manjistha Powder", quantity: "200g", price: "₹189", description: "Manjistha purifies the blood, supports clear skin, and improves lymphatic circulation. It’s one of Ayurveda’s most trusted herbs for detox and radiance.", image: "https://m.media-amazon.com/images/I/61gUTZp3GzL.jpg" },
    { id: 18, name: "Brahmi Powder", quantity: "200g", price: "₹179", description: "Brahmi is a revered herb for memory, focus, and stress relief. It nourishes the nervous system and enhances spiritual clarity through mindfulness.", image: "https://m.media-amazon.com/images/I/515SYij6cTL.jpg" }
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
