import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // simple icons for mobile menu

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-beigeBg shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-montserrat font-bold text-primaryGreen">
          Microgreens
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8 text-textDark font-lato">
            <li>
              <Link to="/" className="hover:text-primaryGreen transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/service"
                className="hover:text-primaryGreen transition-colors"
              >
                Service
              </Link>
            </li>
            <li>
              <Link
                to="/product"
                className="hover:text-primaryGreen transition-colors"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-primaryGreen transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-primaryGreen transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-textDark"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <nav className="md:hidden bg-beigeBg border-t border-gray-200">
          <ul className="flex flex-col space-y-4 py-4 px-6 text-textDark font-lato">
            <li>
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="hover:text-primaryGreen transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/service"
                onClick={() => setIsOpen(false)}
                className="hover:text-primaryGreen transition-colors"
              >
                Service
              </Link>
            </li>
            <li>
              <Link
                to="/product"
                onClick={() => setIsOpen(false)}
                className="hover:text-primaryGreen transition-colors"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="hover:text-primaryGreen transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="hover:text-primaryGreen transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
