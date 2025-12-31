import React from 'react';

const HowItWorks = () => {
  const steps = [
    'Tell us your pooja requirement',
    'We arrange Pandit Ji and everything needed',
    'Peaceful pooja at your place or online'
  ];

  return (
    <section className="how-it-works">
      <div className="container">
        <h2>HOW IT WORKS</h2>
        <div className="steps">
          {steps.map((step, index) => (
            <div key={index} className="step">
              <div className="step-number">{index + 1}</div>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;