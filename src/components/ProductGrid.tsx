import React from "react";
import { Plus, Star, Leaf } from "lucide-react";

const products = [
  {
    name: "Pea Shoot Microgreens",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1518843875459-f738682238a6?w=400&h=400&fit=crop",
    category: "Legumes",
    description: "Sweet and tender pea shoots perfect for salads and garnishes. High in protein and fiber.",
    weight: "2 oz",
    organic: true,
    rating: 4.9
  },
  {
    name: "Radish Microgreens",
    price: 10.99,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop",
    category: "Brassicas",
    description: "Spicy and colorful radish microgreens that add a peppery kick to any dish.",
    weight: "2 oz",
    organic: true,
    rating: 4.9
  }
];

export default function ProductGridSimple() {
  return (
    <section className="py-14 bg-[#f6f8f6] min-h-screen">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-6">
        {products.map((product, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-lg p-0 w-full md:w-1/2 flex flex-col">
            <div className="relative rounded-t-2xl overflow-hidden h-56">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                {product.organic && (
                  <span className="bg-green-600 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                    <Leaf className="w-3 h-3" /> Organic
                  </span>
                )}
                <span className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full">
                  {product.category}
                </span>
              </div>
              <div className="absolute bottom-4 left-4 flex items-center bg-white/90 rounded-full px-2 py-0.5 text-sm font-semibold">
                <Star className="w-4 h-4 text-green-600 fill-green-600 mr-1" /> {product.rating}
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-lg font-bold mb-1">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-3">{product.description}</p>
              <div className="mb-4 text-gray-500 text-sm">Weight: {product.weight}</div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold text-green-600">${product.price}</span>
              </div>
              <button className="bg-green-500 text-white w-full rounded-xl py-2 flex items-center justify-center gap-2 text-base font-semibold hover:bg-green-600 transition">
                <Plus className="w-5 h-5" /> Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
