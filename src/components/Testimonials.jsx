import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rohit S.",
      location: "Delhi",
      quote:
        "Satvik Havan ne pooja ki poori vyavastha sambhali. Pandit Ji bahut shaant aur samajhdaar the. Humein bas shraddha ke saath pooja karni thi.",
      image:
        "https://d1gevr1kq4ckjt.cloudfront.net/A21UD5GUWC34V0_98d0a25a0e58166180b8cd492c5708e5_ProductImage_PT03",
    },
    {
      name: "Anjali M.",
      location: "Mumbai",
      quote:
        "Humein pehle pata nahi tha kaunsi pooja kaise hogi. Team ne sab kuch clearly samjhaya aur poora sahyog diya.",
      image:
        "https://d1gevr1kq4ckjt.cloudfront.net/A21UD5GUWC34V0_998237ddb64dc7d0d27d0ac084d3d48b_ProductImage_PT02",
    },
    {
      name: "Amit K.",
      location: "Pune",
      quote:
        "Ghar par shanti aur vyavastha dono mili. Pooja bina kisi tension ke poori hui.",
      image:
        "https://d1gevr1kq4ckjt.cloudfront.net/A21UD5GUWC34V0_2577abf1ee7ee2a8dff522257d8e6a2c_ProductImage_PT02",
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
