// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import About from "./pages/About";
import Product from "./pages/Product";
import Login from "./pages/Login";

// ✅ Import CartProvider
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from './context/AuthContext';
import AuthModals from './components/AuthModals';
import ShoppingCart from './components/ShoppingCart';
import Header from './components/Header';

export default function App() {
  return (
    <Router>
      {/* Wrap everything inside CartProvider */}
      <AuthProvider>
        <CartProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/service" element={<Service />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/product" element={<Product />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </Layout>
          <AuthModals />
          <ShoppingCart />
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}
