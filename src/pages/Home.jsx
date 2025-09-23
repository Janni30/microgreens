import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-beigeBg min-h-screen">
      {/* Hero Section */}
      <section
        id="hero"
        className="h-screen flex flex-col justify-center items-center text-center bg-lightGreen px-6"
      >
        <h1 className="text-5xl md:text-6xl font-montserrat font-bold text-primaryGreen mb-4">
          Fresh Microgreens Delivered
        </h1>
        <p className="text-lg md:text-xl font-lato max-w-2xl mb-6">
          Organic, healthy, and home-friendly microgreens grown with care.
        </p>
        <div className="flex gap-4">
          <button
            className="bg-primaryGreen text-white px-6 py-3 rounded-lg font-lato hover:bg-green-600 transition-colors"
            onClick={() => navigate("/products")}
          >
            Shop Now
          </button>
          <button
            className="bg-white text-primaryGreen px-6 py-3 rounded-lg font-lato hover:bg-gray-100 transition-colors"
            onClick={() => navigate("/about")}
          >
            Learn More
          </button>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 text-textDark text-center">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-12">
          Our Services
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-8 px-4 md:px-0">
          <div className="p-6 bg-white shadow-md rounded-lg flex-1">
            <h3 className="font-montserrat font-bold mb-2">Home Delivery</h3>
            <p className="font-lato text-sm">
              Fresh microgreens delivered straight to your doorstep.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg flex-1">
            <h3 className="font-montserrat font-bold mb-2">Workshops</h3>
            <p className="font-lato text-sm">
              Learn how to grow microgreens at home easily.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg flex-1">
            <h3 className="font-montserrat font-bold mb-2">Café Tie-Ups</h3>
            <p className="font-lato text-sm">
              Supplying fresh microgreens to cafes and restaurants.
            </p>
          </div>
        </div>
      </section>

      {/* Product Preview */}
      <section className="py-20 bg-lightGreen text-textDark text-center">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-12">
          Our Microgreens
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-8 px-4 md:px-0">
          <div className="p-6 bg-white shadow-md rounded-lg flex-1">
            <img
              src="/assets/microgreens/broccoli.jpg"
              alt="Broccoli Microgreens"
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h3 className="font-montserrat font-bold mb-2">Broccoli</h3>
            <p className="font-lato text-sm">Rich in vitamins and easy to grow.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg flex-1">
            <img
              src="/assets/microgreens/sunflower.jpg"
              alt="Sunflower Microgreens"
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h3 className="font-montserrat font-bold mb-2">Sunflower</h3>
            <p className="font-lato text-sm">Crunchy, nutritious, and tasty.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg flex-1">
            <img
              src="/assets/microgreens/radish.jpg"
              alt="Radish Microgreens"
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h3 className="font-montserrat font-bold mb-2">Radish</h3>
            <p className="font-lato text-sm">Adds spice and nutrition to meals.</p>
          </div>
        </div>
        <button
          className="mt-8 bg-primaryGreen text-white px-6 py-3 rounded-lg font-lato hover:bg-green-600 transition-colors"
          onClick={() => navigate("/products")}
        >
          View All Products
        </button>
      </section>

      {/* About Preview */}
      <section className="py-20 text-textDark text-center px-4 md:px-0">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">
          About Us
        </h2>
        <p className="max-w-2xl mx-auto font-lato text-lg">
          We grow organic microgreens with care and passion, making healthy
          living simple and accessible for everyone.
        </p>
        <button
          className="mt-6 bg-primaryGreen text-white px-6 py-3 rounded-lg font-lato hover:bg-green-600 transition-colors"
          onClick={() => navigate("/about")}
        >
          Learn More
        </button>
      </section>

      {/* Contact Preview */}
      <section className="py-20 bg-beigeBg text-textDark text-center px-4 md:px-0">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">
          Contact Us
        </h2>
        <p className="font-lato mb-6">
          Have questions or want to place an order? Reach out to us today!
        </p>
        <button
          className="bg-primaryGreen text-white px-6 py-3 rounded-lg font-lato hover:bg-green-600 transition-colors"
          onClick={() => navigate("/contact")}
        >
          Contact Now
        </button>
      </section>
    </div>
  );
}
