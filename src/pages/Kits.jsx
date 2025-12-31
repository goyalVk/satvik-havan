import React from "react";
import { Link } from "react-router-dom";
import "../styles/global.css";

const Kits = () => {
  const kitsData = [
  {
    id: 1,
    name: "Home Pooja & Family Rituals",
    description:
      "Ghar par shanti, pavitrata aur parampara ke saath pooja karna har parivaar ke liye vishesh hota hai. Satvik Havan ghar ki pooja ke liye uchit Pandit Ji aur poori vyavastha karta hai, taaki aap nishchint hokar shraddha ke saath pooja kar sakein.",
    occasion: "Daily Pooja, Satyanarayan Katha, Havan & Family Rituals",
    img: "https://servdharm.com/cdn/shop/files/SampoornPoojaSamagriKit_7_800x.png?v=1712585276",
    ctaText: "Book Pooja on WhatsApp",
  },
  {
    id: 2,
    name: "Corporate & Office Pooja",
    description:
      "Kaaryalaya aur vyavsay ke liye shubh aarambh aur sakaratmak urja bahut mahatvapurn hoti hai. Office inauguration, festivals aur vishesh avsaron ke liye Satvik Havan pooja aur Pandit Ji ki vyavastha karta hai.",
    occasion: "Office Inauguration, Festivals & Corporate Rituals",
    img: "https://assets-news.housing.com/news/wp-content/uploads/2022/02/17111214/Mandir-for-home-Your-guide-to-set-up-a-pooja-room.jpg",
    ctaText: "Discuss Corporate Pooja",
  },
  {
    id: 3,
    name: "Vastu Consultation",
    description:
      "Ghar, office ya plot ke liye vastu margdarshan jeevan mein santulan aur sakaratmakta laata hai. Anubhavi Pandit Ji ke madhyam se aap apne sthan ke liye sahi salah aur margdarshan pa sakte hain.",
    occasion: "Home, Office & Plot Vastu Guidance",
    img: "https://assets-news.housing.com/news/wp-content/uploads/2022/02/17111214/Mandir-for-home-Your-guide-to-set-up-a-pooja-room.jpg",
    ctaText: "Consult Pandit Ji",
  },
  {
    id: 4,
    name: "Pandit Ji Guidance & Meetings",
    description:
      "Kabhi kabhi jeevan ke faislon ke liye sahi margdarshan zaroori hota hai. Kundli, muhurat, vivah, naamkaran ya kisi bhi dharmik salah ke liye Pandit Ji se shant aur vishwas bhari baatcheet.",
    occasion: "Horoscope, Muhurat, Marriage & Ritual Guidance",
    img: "https://static.toiimg.com/thumb/msid-99625735,width-1280,height-720,resizemode-4/.jpg",
    ctaText: "Talk to Pandit Ji",
  },
];


   const handleOrderWhatsApp = (service) => {
    const message = `Namaste 🙏, I want to know more about ${service.name}. I am looking for complete pooja arrangement with Pandit Ji. Please guide me.`;
    const url = `https://wa.me/918076170877?text=${encodeURIComponent(
      message
    )}`;
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
      {/* HERO SECTION */}
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
          🪔 Pooja Services — With Care, Tradition & Peace
        </h1>

        <p
          style={{
            color: "#5C432A",
            maxWidth: "750px",
            margin: "0 auto 2rem",
            fontSize: "1.1rem",
            lineHeight: "1.8",
          }}
        >
          Pooja is not just a ritual — it is a moment of faith and inner peace.
          <br />
          Every family, every belief, and every occasion is different.
          <br />
          <br />
          At Satvik Havan, we first understand your requirement and then arrange
          the right Pandit Ji along with complete pooja setup, so you can focus
          only on devotion.
        </p>

        <button
          onClick={() => handleOrderWhatsApp({ name: "Pooja Services" })}
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
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "scale(1.05)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "scale(1)")
          }
        >
          🙏 Talk to Us on WhatsApp
        </button>
      </section>

      {/* SERVICES GRID */}
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
            Pooja Services for Every Need
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "2rem",
            }}
          >
            {kitsData.map((service) => (
              <div
                key={service.id}
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
                  src={service.img}
                  alt={service.name}
                  style={{
                    width: "100%",
                    borderRadius: "10px",
                    marginBottom: "1rem",
                    height: "220px",
                    objectFit: "cover",
                  }}
                />

                <h3 style={{ color: "#C77B30", marginBottom: "0.6rem" }}>
                  {service.name}
                </h3>

                {/* <p
                  style={{
                    color: "#5C432A",
                    fontSize: "0.95rem",
                    lineHeight: "1.6",
                  }}
                >
                  {service.description}
                </p> */}

                <p
                  style={{
                    color: "#6B5336",
                    fontSize: "0.85rem",
                    marginTop: "0.7rem",
                  }}
                >
                  {service.occasion}
                </p>

                <div
                  style={{
                    marginTop: "1.2rem",
                    display: "flex",
                    gap: "0.6rem",
                    justifyContent: "center",
                  }}
                >
                  <Link to={`/kits/${service.id}`}>
                    <button
                      style={{
                        background: "#C77B30",
                        color: "#FFF8EC",
                        padding: "0.5rem 1.2rem",
                        borderRadius: "5px",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      Know More
                    </button>
                  </Link>

                  <button
                    onClick={() => handleOrderWhatsApp(service)}
                    style={{
                      background: "#E6A74E",
                      color: "#FFF",
                      padding: "0.5rem 1.2rem",
                      borderRadius: "5px",
                      border: "none",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Book on WhatsApp
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY SECTION */}
      <section
        style={{
          background: "#F4E9D8",
          textAlign: "center",
          padding: "4rem 2rem",
        }}
      >
        <h2 style={{ color: "#C77B30", marginBottom: "1rem" }}>
          🌸 A Thought That Became Satvik Havan
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
          Satvik Havan started with one simple thought —
          people should be able to perform pooja without stress or confusion.
          <br />
          <br />
          Over time, we realised that pooja is not about items,
          but about guidance, tradition, and trust.
          <br />
          <br />
          Today, Satvik Havan stands with you as a calm companion
          in your spiritual journey — from home pooja to vastu guidance
          and meaningful conversations with Pandit Ji.
        </p>
      </section>

      {/* FINAL CTA */}
      <section
        style={{
          textAlign: "center",
          padding: "3rem 2rem",
          background: "linear-gradient(135deg, #FFF8EC, #FDE6B8)",
        }}
      >
        <h2 style={{ color: "#C77B30" }}>
          Let Us Guide You in Your Pooja
        </h2>

        <p style={{ color: "#5C432A", marginTop: "1rem" }}>
          If you are unsure about which pooja, Pandit Ji,
          or process is right for you — just talk to us.
          <br />
          We will take care of the rest.
        </p>

        <button
          onClick={() => handleOrderWhatsApp({ name: "Pooja Guidance" })}
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
      </section>
    </div>
  );
};

export default Kits;
