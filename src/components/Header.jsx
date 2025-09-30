


import { ShoppingCart, User, Leaf, Menu, Search } from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { state: cartState, toggleCart } = useCart();
  const { state: authState, openLogin, logout } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
<Leaf className="h-8 w-8 animate-float text-green-600" />
            <span className="text-2xl font-montserrat font-bold text-foreground">
              GreenLife
            </span>
          </div>

          {/* Navigation - Hidden on mobile */}
          <nav className="hidden md:flex items-center space-x-8">
               <Link
              to="/"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Home
            </Link>
             <Link
              to="/product"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Products
            </Link>
             <Link
              to="/about"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              About
            </Link>
             <Link
              to="/service"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Service
            </Link>
             <Link
              to="/contact"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            {/* Search - Hidden on small screens */}
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
              <Search className="h-4 w-4" />
            </Button>

            {/* User Account */}
            {authState.user ? (
              <div className="flex items-center space-x-2">
                <span className="hidden sm:inline text-sm font-medium">
                  Hi, {authState.user.name}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={logout}
                  className="text-sm"
                >
                  Logout
                </Button>
              </div>
            ) : (
              <Button
                variant="ghost"
                size="sm"
                onClick={openLogin}
                className="flex items-center space-x-1"
              >
                <User className="h-4 w-4" />
                <span className="hidden sm:inline">Login</span>
              </Button>
            )}

            {/* Shopping Cart */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleCart}
              className="relative flex items-center space-x-1 hover-lift"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartState.totalItems > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-accent text-accent-foreground animate-scale-in"
                >
                  {cartState.totalItems}
                </Badge>
              )}
              <span className="hidden sm:inline">Cart</span>
            </Button>

            {/* Mobile Menu */}
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
