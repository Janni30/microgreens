import React from "react";
import {
  Leaf,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Separator } from "../components/ui/separator";
import { Input } from "../components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-green-600 text-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <Leaf className="h-8 w-8 animate-bounce" />
              <span className="text-2xl font-montserrat font-bold">
                GreenLife
              </span>
            </div>
            <p className="text-white/80 leading-relaxed">
              Premium organic microgreens grown with sustainable farming
              practices. Delivering fresh, nutrient-dense superfoods to your
              doorstep daily.
            </p>
            <div className="flex gap-4">
              <Button
                variant="ghost"
                size="sm"
                className="p-2 hover:bg-green-200/20"
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="p-2 hover:bg-green-200/20"
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="p-2 hover:bg-green-200/20"
              >
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-montserrat font-semibold mb-6">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Products", href: "#products" },
                { label: "About Us", href: "#about" },
                { label: "Health Benefits", href: "#benefits" },
                { label: "Growing Process", href: "#process" },
                { label: "Recipes & Ideas", href: "#recipes" },
                { label: "Sustainability", href: "#sustainability" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-montserrat font-semibold mb-6">
              Support
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                "FAQ",
                "Shipping Info",
                "Returns & Refunds",
                "Track Your Order",
                "Contact Support",
                "Wholesale Inquiries",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div>
            <h3 className="text-lg font-montserrat font-semibold mb-6">
              Stay Connected
            </h3>
            <div className="space-y-4 mb-6">
              <p className="text-white/80 text-sm">
                Subscribe to get fresh updates and special offers delivered to
                your inbox.
              </p>
              <div className="flex gap-2">
                <Input
                  placeholder="Enter your email"
                  className="flex-1 bg-green-200/20 border border-green-200/30 text-white placeholder:text-white/60"
                />
                <Button className="bg-lime-600 text-white hover:bg-lime-600/90">
                  Subscribe
                </Button>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-white/60" />
                <span className="text-sm">hello@greenlifemicrogreens.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-white/60" />
                <span className="text-sm">+1 (555) 123-GREENS</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-white/60" />
                <span className="text-sm">Fresh Farm Valley, CA</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-green-200/30" />

        {/* Bottom Footer */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-white/80">
            © {new Date().getFullYear()} GreenLife Microgreens. All rights
            reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-white/80 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white/80 hover:text-white transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-white/80 hover:text-white transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
