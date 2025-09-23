import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-beigeBg shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-montserrat font-bold text-primaryGreen">
          Microgreens
        </h1>

        <nav>
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
      </div>
    </header>
  );
}
