import { useState } from "react";
import axios from "axios";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:9001/users", formData);
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("❌ Error sending message:", error);
      setStatus("Failed to send message. Try again.");
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-6xl font-bold text-green-600">Contact Us</h2>
        <p className="text-gray-600 text-lg mt-2">We'd love to hear from you</p>
      </div>

      {/* Grid Layout */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-stretch">
        {/* Left: Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg p-6 border flex flex-col"
        >
          <h3 className="text-xl font-semibold mb-4">Send us a message</h3>
          <div className="space-y-4 flex-1">
            <input
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
            <input
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
            {/* <input
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
            /> */}
            <textarea
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none h-32 resize-none"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition"
          >
            Send Message
          </button>
          {status && <p className="mt-4 text-center text-green-600">{status}</p>}
        </form>

        {/* Right: Contact Info */}
        <div className="flex flex-col justify-between h-full space-y-6">
          <div className="flex items-start gap-4 bg-white border rounded-lg p-6 shadow-sm">
            <div className="bg-green-100 p-3 rounded-full">
              <Mail className="text-green-600 w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-lg">Email</h4>
              <p className="text-gray-600">hello@greenlife.com</p>
              <p className="text-gray-600">support@greenlife.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-white border rounded-lg p-6 shadow-sm">
            <div className="bg-green-100 p-3 rounded-full">
              <Phone className="text-green-600 w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-lg">Phone</h4>
              <p className="text-gray-600">+1 (555) 123-4567</p>
              <p className="text-gray-600">Mon-Fri: 9AM - 6PM</p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-white border rounded-lg p-6 shadow-sm">
            <div className="bg-green-100 p-3 rounded-full">
              <MapPin className="text-green-600 w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-lg">Location</h4>
              <p className="text-gray-600">123 Green Street</p>
              <p className="text-gray-600">Organic City, OC 12345</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
