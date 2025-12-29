import React from 'react';
import './ServicesSection.css';

const ServicesSection = () => {
  // Data sourced from your first image (image_febebb.jpg)
  const servicesData = [
    {
      id: 1,
      title: "Fresh Harvest",
      description: "Harvested at peak nutrition for maximum flavor and vitality.",
      // Wheat/Grain Icon
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 8a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v12H6V8Z"/><path d="M6 12h12"/><path d="M6 16h12"/>
        </svg>
      )
    },
    {
      id: 2,
      title: "Organic Soil",
      description: "Grown in 100% organic, nutrient-rich soil without chemicals.",
      // Hand holding sprout icon
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22v-8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/><path d="M7 18a5 5 0 0 1 10 0"/><path d="M12 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"/>
        </svg>
      )
    },
    {
      id: 3,
      title: "Fast Delivery",
      description: "Delivered straight to your door within 24 hours of harvest.",
      // Truck Icon
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 17h4V5H2v12h3"/><path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5"/><path d="M14 17h1"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/>
        </svg>
      )
    },
    {
      id: 4,
      title: "Sustainable Farming",
      description: "Eco-friendly practices that save water and protect the planet.",
      // Hand with water drop and leaf icon
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21.54 15H17a5 5 0 0 0-5 5v2a5 5 0 0 1-10 0V10a5 5 0 0 1 5-5h.54"/><path d="M12 2a5 5 0 0 1 10 10v1a5 5 0 0 1-5 5H7a5 5 0 0 1 0-10h3"/>
        </svg>
      )
    }
  ];

  return (
    <section className="services-section">
      {/* Section Header */}
      <div className="services-header">
        <span className="sub-title">Our Services</span>
        <h2>What We Offer</h2>
        <p className="header-desc">Premium microgreens, fresh from our farm to your table.</p>
      </div>

      {/* Grid of Cards (Style based on image_fec189.jpg) */}
      <div className="services-grid">
        {servicesData.map((service) => (
          <div key={service.id} className="service-card">
            <div className="icon-wrapper">
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;