import React from 'react';

const WhatWeDo = () => {
  const services = [
    'Pandit Ji booking as per pooja requirement',
    'Pooja samagri arranged as per tradition',
    'Complete coordination and guidance',
    'Simple, transparent process'
  ];

  return (
    <section className="what-we-do">
      <div className="container">
        <h2>What We Take Care Of</h2>
        <ul className="services-list">
          {services.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhatWeDo;