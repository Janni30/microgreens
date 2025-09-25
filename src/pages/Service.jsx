// OurServicesPage.jsx
import { FaLeaf, FaShieldAlt, FaCheck, FaPhone } from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Organic Farming",
    description: "Sustainable farming practices to produce organic crops.",
    image: "/assest/image/woman-with-vegetables-basket.jpg",
  },
  {
    id: 2,
    title: "Crop Protection",
    description: "Safe and eco-friendly solutions for crop protection.",
    image: "/assest/image/farm-man-working-his-organic-lettuce-garden.jpg",
  },
  {
    id: 3,
    title: "Irrigation Systems",
    description: "Efficient irrigation techniques for water conservation.",
    image:
      "/assest/image/close-up-gardener-hand-pouring-water-hanging-potted-plant.jpg",
  },
  {
    id: 4,
    title: "Soil Analysis",
    description: "Professional soil testing for maximum productivity.",
    image: "/assest/image/flat-lay-gardening-concept.jpg",
  },
];

const features = [
  { id: 1, title: "Real-Time Tracking" },
  { id: 2, title: "On-Time Delivery" },
  { id: 3, title: "Customizable Fruits Solutions" },
  { id: 4, title: "24/7 Customer Support" },
];
const OurServicesPage = () => {
  return (
    <div className="text-gray-800">
      {/* Hero Section */}
      <section
        className="h-96 flex flex-col justify-center items-center bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/assest/image/page-title.webp')" }}
      >
        <h1 className="text-5xl font-bold mb-4">Our Services</h1>
        <p className="text-lg max-w-xl text-center">
          We provide a range of agricultural solutions to help you grow healthy
          crops.
        </p>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-4 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">What We Do</h2>
        <p className="text-gray-600">
          Our services are designed to support farmers and agribusinesses in
          every step of cultivation, protection, and growth.
        </p>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white shadow-lg rounded-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features / Why Choose Us */}
      <section className="py-16 px-4 max-w-6xl mx-auto md:flex md:items-center md:gap-12">
        {/* Left Images */}
        <div className="relative md:w-1/2 mb-8 md:mb-0">
          <img
            src="/assest/image/mom-daugther-gardending-together.jpg"
            alt="API Prototyping"
            className="rounded-xl w-full shadow-lg h-[520px] object-cover"
            height={400}
            width={300}
          />
          <img
            src="/assest/image/long-shot-woman-taking-care-her-plants-greenhouse.jpg"
            alt="Child Holding Carrots"
            className="absolute bottom-0 right-1/4 transform translate-x-1/2 w-1/2  shadow-lg border-t-8 border-l-8 border-white h-[360px] object-cover"
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 text-left">
          <div className="flex items-center mb-2 text-green-700 font-semibold">
            <FaLeaf className="mr-2" /> Why Choose Us
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Currently We’re Growing & Selling Organic Food
          </h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="flex gap-6 mb-6">
            <div className="flex items-center gap-2 text-green-700">
              <FaLeaf /> Organic Herbs and Produce for You
            </div>
            <div className="flex items-center gap-2 text-green-700">
              <FaShieldAlt /> We’re Distributors of Quality 100%
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6 text-green-700">
            {features.map((f) => (
              <div key={f.id} className="flex items-center gap-2">
                <FaCheck /> {f.title}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="bg-green-700 text-white px-6 py-2 rounded-full hover:bg-green-800 transition">
              More About Us
            </button>
            <div className="flex items-center gap-2 bg-yellow-400 px-4 py-2 rounded-full">
              <FaPhone /> <span className="font-bold">(704) 555-0127</span>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-primaryGreen text-white text-center rounded-tl-3xl rounded-tr-3xl">
        <h2 className="text-3xl font-bold mb-4">Get Started Today</h2>
        <p className="mb-6">
          Contact us to learn how our agricultural services can help your farm
          thrive.
        </p>
        <button className="bg-white text-primaryGreen font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default OurServicesPage;
