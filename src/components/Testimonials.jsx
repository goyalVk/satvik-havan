import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Riya Sharma",
      location: "London, UK",
      quote:
        "Even thousands of miles away, Satvik Havan made me feel like home. The puja kit was pure perfection!",
      image:
        "https://media.gettyimages.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.jpg?s=612x612&w=gi&k=20&c=tFkDOWmEyqXQmUHNxkuR5TsmRVLi5VZXYm3mVsjee0E=",
    },
    {
      name: "Amit Verma",
      location: "Mumbai, India",
      quote:
        "I ordered the Griha Pravesh Kit — it had every item, perfectly packed with devotion. Truly Satvik!",
      image:
        "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3Dt",
    },
    {
      name: "Priya Mehta",
      location: "Delhi, India",
      quote:
        "Pandit Ji’s online puja guidance was soulful and peaceful. No stress, just pure devotion.",
      image:
        "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
    },
  ];

  return (
    <section
      className="testimonials"
      style={{
        background: "linear-gradient(to bottom, #FFF8EC, #F4E9D8)",
        padding: "4rem 2rem",
        textAlign: "center",
      }}
    >
      <div className="container" style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h2
          style={{
            color: "#C77B30",
            fontSize: "2.2rem",
            marginBottom: "0.5rem",
            fontWeight: "700",
          }}
        >
          Voices of Faith ✨
        </h2>
        <p
          style={{
            color: "#5C432A",
            marginBottom: "2.5rem",
            fontSize: "1.05rem",
            maxWidth: "650px",
            marginInline: "auto",
            lineHeight: "1.7",
          }}
        >
          Real stories from devotees who brought divine peace, purity, and
          spirituality into their homes through <strong>Satvik Havan</strong>.
        </p>

        <div
          className="testimonials-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
          }}
        >
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="testimonial-card"
              style={{
                background: "#FFF",
                borderRadius: "12px",
                padding: "1.5rem",
                boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
                border: "1px solid #F1D5A5",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.03)";
                e.currentTarget.style.boxShadow =
                  "0 8px 20px rgba(199,123,48,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 6px 15px rgba(0,0,0,0.1)";
              }}
            >
              <img
                src={t.image}
                alt={t.name}
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  marginBottom: "1rem",
                  border: "2px solid #E6A74E",
                }}
              />
              <p
                style={{
                  fontStyle: "italic",
                  color: "#5C432A",
                  marginBottom: "1rem",
                  lineHeight: "1.6",
                }}
              >
                “{t.quote}”
              </p>
              <h4
                style={{
                  color: "#C77B30",
                  fontWeight: "600",
                }}
              >
                {t.name}
              </h4>
              <p style={{ color: "#8B6E47", fontSize: "0.9rem" }}>
                {t.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
