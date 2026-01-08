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
