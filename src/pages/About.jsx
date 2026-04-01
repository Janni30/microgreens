import StatsSection from '../components/StatsSection';
import './AboutUs.css'; 
import React, { useState, useEffect, useRef } from 'react';// Placeholder images - Replace with your actual assets
const farmAerial = "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1000&auto=format&fit=crop"; 
const microGreenClose = "https://www.shutterstock.com/image-photo/composition-assorted-organic-vegetables-fruits-260nw-1720876846.jpg";
// If you don't have a transparent farmer image, remove the <img> tag at the bottom or find a transparent PNG
const testimonialData = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=1000&auto=format&fit=crop', // Man in apron
    quote: "“I would recommend practitioners at this center to everyone! They are great to work with & are excellent.”",
    name: 'Charlotte Wilson',
    title: 'Formal Farmer',
    authorImg: 'https://randomuser.me/api/portraits/women/44.jpg' // Small profile pic
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=1000&auto=format&fit=crop', // Another farmer
    quote: "“The quality of their microgreens is unmatched. Our restaurant's dishes have never looked or tasted better!”",
    name: 'David Miller',
    title: 'Head Chef',
    authorImg: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  // Add more testimonials here...
];
const AboutUs = () => {
  const [current, setCurrent] = useState(0);
  const length = testimonialData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(testimonialData) || testimonialData.length <= 0) {
    return null;
  }
  return (
    <section className="about-section">
      
      {/* Top Row: Images and Content */}
      <div className="about-top">
        {/* --- Left Side: Circular Images --- */}
        <div className="about-images">
        <img src={farmAerial} alt="Farm Aerial View" className="main-circle" />
        <img src={microGreenClose} alt="Fresh Microgreens" className="inset-circle" />
        
        {/* Yellow Badge */}
        <div className="delivery-badge">
          <span className="icon">⏱</span>
          EXPRESS<br/>DELIVERY
        </div>
      </div>

      {/* --- Middle: Text Content --- */}
      <div className="about-content">
      

        <div className="sub-header">
          <span className="leaf-icon">🍃</span> About GreenLife
        </div>

        <h2>Cultivating Wellness: <br/> <span className="highlight-green">The Power of Microgreens</span></h2>

        {/* Paragraph 1: Definition */}
        <p className="text-block">
          Microgreens are the infancy of vegetables, harvested just days after germination. 
          Unlike sprouts grown in water, ours are soil-grown and sunlight-kissed, developing 
          intense flavors from spicy to sweet. They are not just a garnish; they are a 
          complete vegetable in a miniature, potent form.
        </p>

        {/* Checkmarks (Microgreen Benefits) */}
        <div className="check-list">
          <div className="check-item">
            <span className="check-icon">✓</span> Contains up to 40x more vitamins than mature plants.
          </div>
          <div className="check-item">
            <span className="check-icon">✓</span> Sustainable farming using less water and land.
          </div>
        </div>

        {/* Progress Bars (New Style) */}
        <div className="progress-container">
          {/* Bar 1 */}
          <div className="progress-item">
            <div className="progress-label">
              <span>Natural & Organic</span>
              <span>100%</span>
            </div>
            <div className="progress-bg">
              <div className="progress-fill" style={{ width: '100%' }}></div>
            </div>
          </div>

          {/* Bar 2 */}
          <div className="progress-item">
            <div className="progress-label">
              <span>Nutrient Density</span>
              <span>95%</span>
            </div>
            <div className="progress-bg">
              <div className="progress-fill" style={{ width: '95%' }}></div>
            </div>
          </div>
        </div>

        <button className="contact-btn">
          Contact Us ↗
        </button>
      </div>
      </div>

      {/* --- Below: Testimonial --- */}
      {/* Background Decorative Elements */}
      <div className="testimonial-bg-circle"></div>
      <div className="testimonial-bg-leaf"></div>

      <div className="testimonial-container">
        <div className="testimonial-header">
          <span className="leaf-icon">🍃</span> Our Testimonial
        </div>

        <div className="slider">
          {/* Previous Button */}
          <button className="arrow-btn left-arrow" onClick={prevSlide}>
            ←
          </button>

          {testimonialData.map((slide, index) => (
            <div
              className={index === current ? 'slide active' : 'slide'}
              key={slide.id}
            >
              {index === current && (
                <div className="testimonial-card">
                  {/* Left Image with Irregular Border */}
                  <div className="image-wrapper">
                    <img src={slide.image} alt={slide.name} className="testimonial-image" />
                  </div>

                  {/* Right Content */}
                  <div className="content-wrapper">
                    <p className="quote-text">{slide.quote}</p>
                    
                    <div className="author-info">
                      <img src={slide.authorImg} alt={slide.name} className="author-img" />
                      <div>
                        <p className="author-title">{slide.title}</p>
                        <h4 className="author-name">{slide.name}</h4>
                      </div>
                      <div className="quote-icon">”</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Next Button */}
          <button className="arrow-btn right-arrow" onClick={nextSlide}>
            →
          </button>
        </div>
        
        {/* Pagination Dots (Optional) */}
        <div className="carousel-dots">
          {testimonialData.map((_, index) => (
            <span 
              key={index} 
              className={index === current ? "dot active-dot" : "dot"}
              onClick={() => setCurrent(index)}
            ></span>
          ))}
        </div>
      </div>
      <StatsSection />

    </section>
  );
};

export default AboutUs;