import React from 'react';
import './AboutMicrogreens.css';

// --- Placeholder Images (Replace with your actual assets) ---
// Main circular image (e.g., close up of fresh microgreens in soil)
const mainImage = "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1000&auto=format&fit=crop";
// Smaller inset image (e.g., a hand holding the product or an aerial farm view)
const insetImage = "https://www.shutterstock.com/image-photo/composition-assorted-organic-vegetables-fruits-260nw-1720876846.jpg";
// Optional: Farmer overlay image (transparent PNG looks best)
const farmerOverlay = "https://png.pngtree.com/png-clipart/20230914/ourmid/pngtree-farmer-holding-a-basket-of-vegetables-png-image_10115858.png";
const handlesubmit=()=>{
  window.location.href="/about";
}

const AboutMicrogreens = () => {
  return (
    <section className="about-mg-section">
      
      {/* --- Left Side: Circular Image Complex --- */}
      <div className="about-mg-images">
        <div className="image-circle-wrapper">
          <img src={mainImage} alt="Fresh Microgreens growing" className="main-circle-img" />
          <img src={insetImage} alt="Hand holding microgreens" className="inset-circle-img" />
        </div>
        
        {/* Freshness Badge */}
        <div className="fresh-badge">
          <span className="badge-icon">🌿</span>
          <span>Harvested<br/>Daily</span>
        </div>
      </div>

      {/* --- Right Side: Content --- */}
      <div className="about-mg-content">
        
        {/* Floating Award Box (Optional, remove if not needed) */}
        <div className="floating-award">
          <span className="award-star">★</span>
          <div className="award-text">
            <strong>Certified Organic</strong>
            <span>100% Natural Process</span>
          </div>
        </div>

        <div className="sub-header">
          <span className="leaf-icon">🍃</span> About Our Greens
        </div>

        <h2>
          Small Greens, <br/>
          <span className="highlight-green">Massive Impact.</span>
        </h2>

        {/* Paragraph 1: What they are */}
        <p className="mg-text">
          Microgreens are the "infancy" of vegetables, harvested just 7-14 days after 
          germination once the first true leaves appear. Unlike sprouts grown in water, 
          our greens are <strong>soil-grown and sunlight-kissed</strong>. This natural process 
          allows them to develop intense flavor profiles, vibrant colors, and superior texture.
        </p>

        {/* Paragraph 2: Health Benefits */}
        <p className="mg-text">
          Don't let their size fool you. These tiny plants are nutritional powerhouses. 
          Studies show they can contain up to <strong>40 times higher nutrient levels</strong> than 
          mature counterparts, packed with essential vitamins C, E, K, and powerful 
          antioxidants to boost your immunity.
        </p>

        {/* Key Features Checkmarks */}
        <div className="mg-checklist">
          <div className="check-item">
            <span className="check-icon">✓</span> 100% Organic Soil & Seeds
          </div>
          <div className="check-item">
            <span className="check-icon">✓</span> Nutrient-Dense Superfood
          </div>
          <div className="check-item">
            <span className="check-icon">✓</span> Sustainable Indoor Farming
          </div>
          <div className="check-item">
            <span className="check-icon">✓</span> Pesticide-Free Guarantee
          </div>
        </div>

        <button className="learn-more-btn"
        onClick={handlesubmit}>
          Learn More About Us ↗
        </button>
      </div>

      {/* Optional Farmer Overlay Image on Far Right */}
      <img src={farmerOverlay} alt="" className="farmer-overlay-img" />

    </section>
  );
};

export default AboutMicrogreens;