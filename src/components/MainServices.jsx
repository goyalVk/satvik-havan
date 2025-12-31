import React from 'react';

const MainServices = () => {
  const services = [
    {
      title: 'Home Pooja & Family Rituals',
      description: 'Ghar par shanti, pavitrata aur parampara ke saath pooja karne ke liye.',
      img: 'https://d1gevr1kq4ckjt.cloudfront.net/A21UD5GUWC34V0_4952cfc18858ddbdde02e42416fcec19_ProductImage_PT02',
      cta: 'View Pooja Services'
    },
    {
      title: 'Corporate & Office Pooja',
      description: 'Kaaryalaya aur vyavsay ke liye shubh aarambh aur mangal kaamna.',
      img: 'https://d1gevr1kq4ckjt.cloudfront.net/A21UD5GUWC34V0_6d794f08da2f01e9f40cad11a3d18393_ProductImage_PT03',
      cta: 'View Pooja Services'
    },
    {
      title: 'Vastu Consultation',
      description: 'Ghar, office ya plot ke liye vastu margdarshan aur sujhav.',
      img: 'https://d1gevr1kq4ckjt.cloudfront.net/A21UD5GUWC34V0_6e64cad70b4ceecdaaa825eb78908182_ProductImage_PT02',
      cta: 'Consult Pandit Ji'
    }
  ];

  const handleServiceClick = () => {
    window.location.href = '/booking';
  };

  return (
    <section className="main-services">
      <div className="container">
        <h2>Who Is Satvik Havan For?</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <img src={service.img} alt={service.title} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button onClick={handleServiceClick}>{service.cta}</button>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
          <button
            onClick={handleServiceClick}
            style={{
              background: "linear-gradient(45deg, #E6A74E, #C77B30)",
              color: "#FFF8EC",
              padding: "1rem 2.5rem",
              border: "none",
              borderRadius: "6px",
              fontWeight: "600",
              cursor: "pointer",
              fontSize: "1.1rem",
              boxShadow: "0 4px 15px rgba(199,123,48,0.3)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.boxShadow = "0 6px 20px rgba(199,123,48,0.4)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "0 4px 15px rgba(199,123,48,0.3)";
            }}
          >
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
};

export default MainServices;