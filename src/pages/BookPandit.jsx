import React, { useState } from "react";
import "../styles/global.css";

export default function BookPandit() {
  const [selectedService, setSelectedService] = useState(null);
  const whatsappBase = "https://wa.me/918076170877?text=";

  const services = [
    {
      id: 1,
      name: "Home Puja & Havan",
      price: "Starting from ₹499 Only*",
      desc: "From Griha Pravesh to Satyanarayan Katha — every ritual made effortless.",
      detail:
        "Book Pandit Ji for your home puja with complete pooja samagri, setup, and chanting guidance. We handle everything — you just focus on devotion. Perfect for daily pujas, festivals, havans, and family rituals.",
    },
    {
      id: 2,
      name: "Corporate & Startup Puja",
      price: "Starting from ₹1999*",
      desc: "Infuse your workspace with divine energy and prosperity.",
      detail:
        "Ideal for offices, startups, and new ventures — this package includes Lakshmi-Ganesh Puja, Navgrah Shanti, and prosperity havans. Pandit Ji performs authentic rituals with all items included, to bring harmony and success in business.",
    },
    {
      id: 3,
      name: "e-Puja",
      price: "Starting from ₹2100*",
      desc: "Experience sacred rituals from anywhere in the world — live from India.",
      detail:
        "Our e-Puja service connects you directly with Pandit Ji in India via live Zoom sessions. Puja samagri shipped globally, mantra guidance in English or Hindi, and optional recording provided. Stay connected to your roots, wherever you are.",
    },
    {
      id: 4,
      name: "Vastu Consultation",
      price: "Starting from ₹999 Only*",
      desc: "Balance your space with the harmony of the five elements (Panch Tatva).",
      detail:
        "Our expert Pandits and Vastu specialists offer both online and in-person consultations to correct energy imbalances in your home or office. Receive remedies for peace, prosperity, and spiritual alignment.",
    },
  ];

  return (
    <div
      style={{
        backgroundImage:
          "url('https://d1gevr1kq4ckjt.cloudfront.net/A21UD5GUWC34V0_cbf77787d7a296dd36e2ec9fbc1df08b_ProductImage_PT03')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "#3E2A1F",
        minHeight: "100vh",
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
        <h1
          style={{
            fontSize: "2.6rem",
            marginBottom: "1rem",
            color: "#C77B30",
            fontWeight: "700",
            lineHeight: "1.3",
          }}
        >
          All Pujas. One Place.  
          <br />Your Divine Journey Starts Here 🙏
        </h1>
        <p
          style={{
            color: "#5C432A",
            maxWidth: "800px",
            margin: "0 auto 2rem",
            fontSize: "1.1rem",
            lineHeight: "1.6",
          }}
        >
          Whether it’s a sacred home ritual, a startup inauguration, or an
          family connecting to their roots — <b>Satvik Havan</b> brings everything together.  
          From <b>Pandit Ji</b> to <b>pooja samagri</b>, from <b>Vastu consultation</b> to <b>online ceremonies</b> —
          we take care of every divine detail.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <a
            href={`${whatsappBase}${encodeURIComponent(
              "Namaste! I want to book a Pandit Ji for puja."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              style={{
                background: "#E6A74E",
                color: "#FFF",
                padding: "1rem 2rem",
                borderRadius: "6px",
                fontWeight: "bold",
                border: "none",
                cursor: "pointer",
              }}
            >
              Book on WhatsApp
            </button>
          </a>
          <button
            onClick={() =>
              document
                .getElementById("services")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            style={{
              background: "#C77B30",
              color: "#FFF8EC",
              padding: "1rem 2rem",
              borderRadius: "6px",
              fontWeight: "bold",
              border: "none",
              cursor: "pointer",
            }}
          >
            View Services
          </button>
        </div>
      </section>

      {/* Core Promise Section */}
      <section
        style={{
          textAlign: "center",
          padding: "4rem 2rem",
          background: "linear-gradient(135deg, #FFF8EC 0%, #FDE6B8 100%)",
        }}
      >
        <h2 style={{ color: "#C77B30", marginBottom: "1rem" }}>
          🪔 One Call for Every Ritual • Every Belief • Every Blessing
        </h2>
        <p
          style={{
            color: "#5C432A",
            maxWidth: "700px",
            margin: "0 auto",
            fontSize: "1.05rem",
            lineHeight: "1.6",
          }}
        >
          We believe spirituality should be effortless and accessible.  
          That’s why our expert Pandits bring everything — from authentic
          samagri to divine guidance — right to your doorstep.  
          <br />
          <b>Just book. Pray. And feel the peace flow.</b>
        </p>
      </section>

      {/* Meet Pandit Ji */}
      <section
        style={{
          textAlign: "center",
          padding: "4rem 2rem",
          background: "#FFF8EC",
        }}
      >
        <h2
          style={{
            color: "#C77B30",
            fontSize: "2rem",
            marginBottom: "1.5rem",
          }}
        >
          ✨ Meet Pandit Hari Om Mishra Ji ✨
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: "700px",
            margin: "0 auto",
            background: "#FFF",
            borderRadius: "15px",
            padding: "2rem",
            boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
          }}
        >
          <img
            src="https://d1gevr1kq4ckjt.cloudfront.net/A21UD5GUWC34V0_98a9c2aa5909434d3bfb931eca14ab26_ProductImage_PT02"
            alt="Pandit Hari Om Mishra Ji"
            style={{
              width: "180px",
              height: "180px",
              objectFit: "cover",
              borderRadius: "50%",
              border: "3px solid #E6A74E",
              marginBottom: "1.2rem",
            }}
          />
          <p
            style={{
              color: "#3E2A1F",
              fontSize: "1rem",
              lineHeight: "1.6",
              textAlign: "justify",
            }}
          >
            With over 15 years of experience, <b>Pandit Hari Om Mishra Ji</b> has helped
            thousands of devotees perform sacred rituals with devotion and precision.
            From household poojas to corporate ceremonies, his guidance ensures that
            every mantra, offering, and moment radiates positivity and peace.
          </p>
          <p
            style={{
              color: "#C77B30",
              fontWeight: "600",
              marginTop: "1.2rem",
            }}
          >
            🙏 “Let spirituality meet simplicity.” 🙏  
            <br />🚩 Serving Delhi NCR and Online Globally
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" style={{ padding: "4rem 2rem" }}>
        <h2
          style={{
            textAlign: "center",
            color: "#C77B30",
            fontSize: "2rem",
            marginBottom: "2rem",
          }}
        >
          Choose Your Divine Experience
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "2rem",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {services.map((s) => {
            const msg = encodeURIComponent(
              `I want to book ${s.name} (${s.price}). Please share details.`
            );
            return (
              <div
                key={s.id}
                style={{
                  background: "#FFF8EC",
                  borderRadius: "15px",
                  padding: "1.5rem",
                  textAlign: "center",
                  border: "1px solid #F1D5A5",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
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
                <h3 style={{ color: "#C77B30" }}>{s.name}</h3>
                <p style={{ color: "#5C432A" }}>{s.desc}</p>
                <p style={{ fontWeight: "bold", color: "#C77B30" }}>{s.price}</p>
                <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem" }}>
                  <a
                    href={`${whatsappBase}${msg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      style={{
                        background: "#E6A74E",
                        color: "#FFF",
                        padding: "0.6rem 1rem",
                        borderRadius: "5px",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      Book via WhatsApp
                    </button>
                  </a>
                  <button
                    onClick={() => setSelectedService(s)}
                    style={{
                      background: "#C77B30",
                      color: "#FFF8EC",
                      padding: "0.6rem 1rem",
                      borderRadius: "5px",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    View Details
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Final CTA */}
      <section
        style={{
          textAlign: "center",
          padding: "4rem 2rem",
          background: "linear-gradient(135deg, #FDE6B8 0%, #FFF8EC 100%)",
        }}
      >
        <h2 style={{ color: "#C77B30", fontSize: "1.8rem" }}>
          🌸 Let’s Make Every Ritual Effortless and Divine
        </h2>
        <p
          style={{
            color: "#5C432A",
            maxWidth: "600px",
            margin: "1rem auto 2rem",
            fontSize: "1rem",
          }}
        >
          No need to manage samagri, search Pandits, or stress about rituals.  
          With Satvik Havan, your spiritual peace is just a message away.
        </p>
        <a
          href={`${whatsappBase}${encodeURIComponent("I want to book a Pandit Ji now")}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            style={{
              background: "#C77B30",
              color: "#FFF8EC",
              padding: "1rem 2rem",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Book on WhatsApp
          </button>
        </a>
      </section>

      {/* Modal */}
      {selectedService && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 999,
          }}
          onClick={() => setSelectedService(null)}
        >
          <div
            style={{
              background: "#FFF8EC",
              borderRadius: "15px",
              padding: "2rem",
              maxWidth: "500px",
              textAlign: "center",
              boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 style={{ color: "#C77B30" }}>{selectedService.name}</h2>
            <p style={{ color: "#5C432A", marginBottom: "1rem" }}>
              {selectedService.detail}
            </p>
            <p style={{ fontWeight: "bold", color: "#C77B30" }}>
              {selectedService.price}
            </p>
            <a
              href={`${whatsappBase}${encodeURIComponent(
                `I want to book ${selectedService.name} (${selectedService.price})`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                style={{
                  background: "#E6A74E",
                  color: "#FFF",
                  padding: "0.7rem 1.5rem",
                  borderRadius: "6px",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Book Now on WhatsApp
              </button>
            </a>
            <button
              style={{
                marginTop: "1rem",
                background: "#C77B30",
                color: "#FFF8EC",
                padding: "0.6rem 1.5rem",
                borderRadius: "6px",
                border: "none",
                cursor: "pointer",
              }}
              onClick={() => setSelectedService(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
