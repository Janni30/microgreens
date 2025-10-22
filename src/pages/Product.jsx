import React, { useState, useMemo } from "react";
import { Plus, ShoppingCart, Heart, Star, Leaf } from "lucide-react";
import { useCart } from "../context/CartContext"; // Add this import

const products = [
  {
    id: 1,
    name: "Broccoli Microgreens",
    price: 12.99,
    oldPrice: 15.99,
    image:
      "https://images.unsplash.com/photo-1609501676725-7186f06ac4ac?w=400&h=400&fit=crop",
    category: "Brassicaceae",
    sale: true,
    discount: 20,
    organic: true,
    rating: 4.9,
  },
  {
    id: 2,
    name: "Pea Shoot Microgreens",
    price: 9.99,
    oldPrice: 12.99,
    image:
      "https://images.unsplash.com/photo-1518843875459-f738682238a6?w=400&h=400&fit=crop",
    category: "Leguminosae",
    sale: true,
    discount: 23,
    organic: true,
    rating: 4.9,
  },
  {
    id: 3,
    name: "Radish Microgreens",
    price: 10.99,
    oldPrice: 14.29,
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop",
    category: "Brassicaceae",
    sale: false,
    discount: 0,
    organic: true,
    rating: 4.9,
  },
  {
    id: 4,
    name: "Basil Microgreens",
    price: 11.49,
    oldPrice: 13.59,
    image:
      "https://images.unsplash.com/photo-1496395031282-8dcee4d48630?w=400&h=400&fit=crop",
    category: "Lamiaceae",
    sale: true,
    discount: 15,
    organic: true,
    rating: 4.8,
  },
  // Add more microgreens products as needed
];

const categories = [
  "All",
  "Brassicaceae",
  "Leguminosae",
  "Lamiaceae",
  "Amaranthaceae",
  "Apiaceae",
  "Poaceae",
  "Herbs",
];

const sortOptions = [
  { label: "Default sorting", fn: (a, b) => 0 },
  { label: "Price: low to high", fn: (a, b) => a.price - b.price },
  { label: "Price: high to low", fn: (a, b) => b.price - a.price },
  { label: "Name: A-Z", fn: (a, b) => a.name.localeCompare(b.name) },
];

function ProductCard({ product, onViewDetails }) {
  const [hoveredCart, setHoveredCart] = useState(false);
  const { addItem } = useCart();

  return (
    <div
      className="bg-white rounded-2xl shadow p-4 max-w-xs flex flex-col relative"
      onMouseLeave={() => setHoveredCart(false)}
    >
      {/* Product Image */}
      <div className="relative rounded-2xl overflow-hidden h-48 w-64">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-full"
        />
        <div className="justify-between absolute inset-0 flex">
          {/* Organic Badge */}
          <div className="absolute top-3 left-2 bg-green-600 rounded-full px-3 py-1 text-white text-[9px] font-semibold flex items-center gap-1 shadow-lg z-10">
            {product.organic && (
              <div className="flex items-center gap-1">
                <Leaf className="w-3 h-3" />
                Organic
              </div>
            )}
          </div>
          {/* Category Badge */}
          <div className="absolute top-3 right-2 border border-gray-300 bg-white rounded-full px-3 py-1 text-[9px] text-gray-800 font-medium  z-10">
            {product.category}
          </div>
        </div>

        {/* Rating Badge */}
        <div className="absolute bottom-3 left-3 bg-[#fafaf9] rounded-full px-3 py-1 flex items-center gap-1 text-green-700 font-medium text-[13px] shadow z-10">
          <Star className="w-4 h-4 fill-current text-[#82CB15]" />
          {product.rating.toFixed(1)}
        </div>
      </div>

      {/* Product Name */}
      <div className="flex flex-row flex-1 mt-4 justify-between items-center">
        <h3 className="mt-4 mb-2 font-semibold text-sm text-gray-800 line-clamp-2">
        {product.name}
      </h3>
      
        <p className="text-green-700 font-semibold mb-2 mt-4">
          {product.oldPrice && (
            <span className="text-gray-400 text-[12px] line-through mr-2">
              ${product.oldPrice}
            </span>
          )}
          <span className="text-green-700 text-[12px]">
            ${product.price}
          </span>
        </p>
      </div>
      

      {/* Bottom Icons */}
      <div className="mt-auto flex justify-center items-center gap-6 py-4 border-t">
        <button
          onClick={() => addItem(product)}
          title="Add to Cart"
          className="bg-green-600 p-3 rounded-full text-white hover:bg-green-700 transition"
          onMouseEnter={() => setHoveredCart(true)}
        >
          <ShoppingCart size={20} />
        </button>
        <button
          onClick={() => alert("Added to wishlist")}
          title="Wishlist"
          className="bg-gray-100 p-3 rounded-full text-gray-700 hover:bg-green-600 hover:text-white transition"
        >
          <Heart size={20} />
        </button>
        <button
          onClick={() => onViewDetails(product)} // <-- Open modal with details
          title="View Details"
          className="bg-gray-100 p-3 rounded-full text-gray-700 hover:bg-green-600 hover:text-white transition"
        >
          <Plus size={20} />
        </button>
      </div>

      {/* Cart Centered Hover Pop-up */}
      {hoveredCart && (
        <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 bg-green-700 p-2 rounded-lg text-white whitespace-nowrap text-sm shadow-lg z-20 pointer-events-none">
          Add to Cart
        </div>
      )}
    </div>
  );
}

export default function ProductPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortIndex, setSortIndex] = useState(0);

  // Modal state
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = useMemo(() => {
    let filtered = products;

    if (activeCategory !== "All") {
      filtered = filtered.filter((p) => p.category === activeCategory);
    }
    if (searchTerm.trim() !== "") {
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    filtered = filtered.slice().sort(sortOptions[sortIndex].fn);
    return filtered;
  }, [activeCategory, searchTerm, sortIndex]);

  // Handler to open modal
  const handleViewDetails = (product) => {
    setSelectedProduct(product);
  };

  // Handler to close modal
  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 p-8 bg-white rounded-2xl mx-6 mt-8 md:mt-12 h-fit">
        <h2 className="font-bold text-xl text-green-900 mb-4">Categories</h2>
        <hr className="mb-3 border-green-200" />
        <ul>
          {categories.map((cat) => (
            <li
              key={cat}
              className={`cursor-pointer px-1 py-2 text-green-900 text-sm hover:font-bold transition ${
                cat === activeCategory ? "font-bold underline" : ""
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 gap-5">
          <div className="flex items-center gap-2 bg-white border rounded-full px-4 py-2 w-full md:max-w-xs">
            <input
              type="search"
              className="outline-none bg-transparent flex-1"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="bg-green-700 rounded-full w-8 h-8 flex items-center justify-center text-white">
              <svg width="16" height="16" fill="none">
                <circle
                  cx="7.5"
                  cy="7.5"
                  r="6.5"
                  stroke="white"
                  strokeWidth="2"
                />
                <path
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  d="M12 12L15 15"
                />
              </svg>
            </button>
          </div>

          <div className="text-gray-700 text-sm">
            Showing{" "}
            {filteredProducts.length > 0 ? `1–${filteredProducts.length}` : "0"}{" "}
            of {products.length} results
          </div>

          <div className="w-full md:max-w-xs flex items-center bg-white border rounded-full px-4 py-2">
            <select
              className="outline-none bg-transparent flex-1 text-gray-700 cursor-pointer"
              value={sortIndex}
              onChange={(e) => setSortIndex(Number(e.target.value))}
            >
              {sortOptions.map((option, i) => (
                <option key={i} value={i}>
                  {option.label}
                </option>
              ))}
            </select>
            <svg width="20" height="20" stroke="gray" viewBox="0 0 20 20">
              <polyline points="6,8 10,12 14,8" fill="none" strokeWidth="2" />
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={handleViewDetails} // Pass handler
              />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500">
              No products found.
            </div>
          )}
        </div>
      </main>

      {/* Modal for product details */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-lg max-w-md w-full p-6 relative animate-scale-in">
            <button
              onClick={handleCloseModal}
              className="absolute top-3 right-3 bg-gray-200 rounded-full p-2 hover:bg-gray-300"
              title="Close"
            >
              <svg width="20" height="20" viewBox="0 0 20 20">
                <line x1="5" y1="5" x2="15" y2="15" stroke="black" strokeWidth="2"/>
                <line x1="15" y1="5" x2="5" y2="15" stroke="black" strokeWidth="2"/>
              </svg>
            </button>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h2 className="text-xl font-bold mb-2">{selectedProduct.name}</h2>
            <p className="text-green-700 font-semibold mb-2">
              ${selectedProduct.price}
              {selectedProduct.oldPrice && (
                <span className="text-gray-400 line-through ml-2">
                  ${selectedProduct.oldPrice}
                </span>
              )}
            </p>
            <p className="text-gray-700 mb-2">
              Category: {selectedProduct.category}
            </p>
            <p className="text-gray-600">
              {selectedProduct.organic ? "Organic" : "Conventional"}
            </p>
            <p className="mt-4 text-gray-800">
              {/* You can add more description here if available */}
              Fresh and healthy microgreens, perfect for salads and garnishes!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
