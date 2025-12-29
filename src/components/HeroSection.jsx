import React from 'react';
import './HeroSection.css';


// Placeholder image - "One hand holding soil with a single plant"
// You can replace this URL with your own image later.
const heroImage = "https://images.unsplash.com/photo-1542601906990-b4d3fb7d5b1e?q=80&w=1000&auto=format&fit=crop"; 
const handlesubmit=()=>{
  window.location.href="/product";
}
const HeroSection = () => {
  return (
    <section className="hero-container">
      
      {/* Left Side: The Image */}
      <div className="hero-image-wrapper">
        <img 
          src="/plant with hand.jpg" 
          alt="Hand holding a fresh seedling" 
          className="hero-img" 
        />
        {/* Optional: A decorative shape/blob behind the image could go here */}
      </div>

      {/* Right Side: The Content */}
      <div className="hero-content mt-12">
        <div className="content-box">
          <span className="welcome-tag">🌱 100% Organic Life</span>
          
          <h1 className="main-heading">
            Fresh <span className="highlight-text">Microgreens</span> <br/>
            Delivered
          </h1>
          
          <p className="sub-heading">
            Organic, healthy, and home-friendly microgreens grown with care. 
            Experience the farm-to-table difference today.
          </p>

          <div className="button-group">
            <button className="btn-primary "
            onClick={handlesubmit}>
              Shop Now
            </button>
            
          </div>
          
          {/* Trust indicators (optional visual enhancement) */}
          <div className="trust-badges">
            <div className="badge-item">
              <span className="badge-check">✓</span> Free Shipping
            </div>
            <div className="badge-item">
              <span className="badge-check">✓</span> Freshness Guaranteed
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;