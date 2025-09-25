import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:9001/users", formData);
      console.log("✅ Response:", res.data);

      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" }); // clear form
    } catch (error) {
      console.error("❌ Error sending message:", error);
      setStatus("Failed to send message. Try again.");
    }
  };

  return (
    <div className="bg-beigeBg min-h-screen py-20 text-textDark text-center px-4 md:px-0">
      <h2 className="text-3xl font-montserrat font-bold mb-4">Contact Us</h2>
      <p className="font-lato mb-6">
        Have questions or want to place an order? Reach out to us!
      </p>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto flex flex-col gap-4"
      >
        <input
          className="p-3 rounded border"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          className="p-3 rounded border"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <textarea
          className="p-3 rounded border"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-primaryGreen text-white px-6 py-3 rounded-lg font-lato hover:bg-green-600 transition-colors"
        >
          Send Message
        </button>
      </form>

      {status && <p className="mt-4 text-lg">{status}</p>}
    </div>
  );
}
