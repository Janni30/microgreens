import React from 'react';
import './MicrogreensSection.css';

// Placeholder images for the specific microgreens
const broccoliImg = "https://www.shutterstock.com/image-photo/composition-assorted-organic-vegetables-fruits-260nw-1720876846.jpg";
const peaShootsImg = "https://images.unsplash.com/photo-1518843875459-f738682238a6?w=400&h=400&fit=crop"; // Using a sprout/green image as placeholder
const radishImg = "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop";
const basilImg = "https://gardeningsg.nparks.gov.sg/images/Plants/ThaiBasil_JacChua%20(1).jpg";
const handlesubmit=()=>{
  window.location.href="/product";
}
const MicrogreensSection = () => {
  const products = [
    {
      id: 1,
      name: "Broccoli Microgreens",
      price: "$12.00",
      image: broccoliImg,
      desc: "Mild, crunchy, and packed with Sulforaphane."
    },
    {
      id: 2,
      name: "Pea Shoots Microgreens",
      price: "$10.00",
      image: peaShootsImg,
      desc: "Sweet, crisp taste perfect for salads and stir-frys."
    },
    {
      id: 3,
      name: "Radish Microgreens",
      price: "$11.50",
      image: radishImg,
      desc: "Spicy kick to add flavor to sandwiches and tacos."
    },
    {
      id: 4,
      name: "Basil Microgreens",
      price: "$14.00",
      image: basilImg,
      desc: "Intense aromatic flavor, great for Italian dishes."
    }
  ];

  return (
    <section className="microgreens-section">
      {/* Header */}
      <div className="section-header">
        <span className="sub-title">Fresh From Farm</span>
        <h2>Our Microgreens</h2>
        <p className="header-desc">
          Nutrient-dense superfoods grown with care and delivered fresh to your door.
        </p>
      </div>

      {/* Product Grid (4 Columns) */}
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-img-wrapper">
              <img src={product.image} alt={product.name} />
              <button className="add-cart-btn">+</button>
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="product-desc">{product.desc}</p>
              <span className="product-price">{product.price}</span>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="button-container"
      onClick={handlesubmit}>
        <button className="view-all-btn">View All Products ↗</button>
      </div>
    </section>
  );
};

export default MicrogreensSection;