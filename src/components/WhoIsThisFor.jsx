import React from 'react';

const WhoIsThisFor = () => {
  const categories = [
    {
      title: 'Home Pooja & Family Rituals',
      description: 'Daily, monthly, or special pooja at home with complete arrangement.'
    },
    {
      title: 'Corporate & Office Pooja',
      description: 'Office inauguration, festivals, and corporate spiritual events.'
    },
    {
      title: 'E-Pooja for NRIs',
      description: 'Remote pooja performed on your behalf with full transparency.'
    },
    {
      title: 'Special Occasions',
      description: 'Birthdays, anniversaries, griha pravesh, naamkaran, and more.'
    }
  ];

  const handleWhatsApp = (category) => {
    const message = `Hi, I am interested in ${category}. Please provide end-to-end arrangement details.`;
    window.open(`https://wa.me/918076170877?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="who-is-this-for">
      <div className="container">
        <h2>Who Is Satvik Havan For?</h2>
        <div className="categories-grid">
          {categories.map((category, index) => (
            <div key={index} className="category-card">
              <h3>{category.title}</h3>
              <p>{category.description}</p>
              <button onClick={() => handleWhatsApp(category.title)}>Get End-to-End Arrangement</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisFor;