import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative px-4 md:px-8 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.svg" alt="MRKT.AI" className="h-6 md:h-8" />
          <span className="text-lg md:text-xl font-bold ml-2">MRKT.AI</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          <a href="#" className="text-purple-600 border-b-2 border-purple-600">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-purple-600">
            Feature
          </a>
          <a href="#" className="text-gray-600 hover:text-purple-600">
            Testimonials
          </a>
          <a href="#" className="text-gray-600 hover:text-purple-600">
            Pricing
          </a>
          <a href="#" className="text-gray-600 hover:text-purple-600">
            Download
          </a>
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
            <a
              href="#"
              className="px-4 py-2 text-purple-600 hover:bg-purple-50"
            >
              Home
            </a>
            <a href="#" className="px-4 py-2 text-gray-600 hover:bg-purple-50">
              Feature
            </a>
            <a href="#" className="px-4 py-2 text-gray-600 hover:bg-purple-50">
              Testimonials
            </a>
            <a href="#" className="px-4 py-2 text-gray-600 hover:bg-purple-50">
              Pricing
            </a>
            <a href="#" className="px-4 py-2 text-gray-600 hover:bg-purple-50">
              Download
            </a>
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
