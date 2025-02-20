import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (path, id) => {
    navigate(path);
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="relative px-4 md:px-8 py-4 fixed top-0 w-full bg-white z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.svg" alt="MRKT.AI" className="h-6 md:h-8" />
          <span className="text-lg md:text-xl font-bold ml-2">MRKT.AI</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          <button
            onClick={() => handleNavClick("/", "home")}
            className="text-purple-600 border-b-2 border-purple-600"
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick("/features", "features")}
            className="text-gray-600 hover:text-purple-600"
          >
            Feature
          </button>
          <button
            onClick={() => handleNavClick("/testimonials", "testimonials")}
            className="text-gray-600 hover:text-purple-600"
          >
            Testimonials
          </button>
          <button
            onClick={() => handleNavClick("/pricing", "pricing")}
            className="text-gray-600 hover:text-purple-600"
          >
            Pricing
          </button>
        </div>

        {/* Desktop CTA Button */}
        <button className="hidden md:block px-4 lg:px-6 py-2 text-purple-600 border border-purple-200 rounded-full bg-white hover:bg-purple-50">
          Start Free Trial
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
          <div className="flex flex-col py-4">
            <button
              onClick={() => handleNavClick("/", "home")}
              className="px-4 py-2 text-purple-600 hover:bg-purple-50 text-left"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick("/features", "features")}
              className="px-4 py-2 text-gray-600 hover:bg-purple-50 text-left"
            >
              Feature
            </button>
            <button
              onClick={() => handleNavClick("/testimonials", "testimonials")}
              className="px-4 py-2 text-gray-600 hover:bg-purple-50 text-left"
            >
              Testimonials
            </button>
            <button
              onClick={() => handleNavClick("/pricing", "pricing")}
              className="px-4 py-2 text-gray-600 hover:bg-purple-50 text-left"
            >
              Pricing
            </button>
            <div className="px-4 pt-4">
              <button className="w-full px-4 py-2 text-purple-600 border border-purple-200 rounded-full bg-white hover:bg-purple-50">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
