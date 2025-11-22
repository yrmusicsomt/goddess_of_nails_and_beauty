import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleBooking = () => {
    window.open('https://www.fresha.com/a/studio-april-melbourne-68-mollison-street-pm249xrk/booking', '_blank');
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 bg-cream z-50 border-b border-charcoal/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 md:py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="transition-opacity duration-200 hover:opacity-80">
            <span className="text-lg md:text-xl font-normal tracking-wide text-charcoal">
              GODDESS OF NAILS AND BEAUTY
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            <Link
              to="/"
              className={`text-charcoal transition-all duration-200 text-sm lg:text-base relative pb-1 ${
                isActive('/') ? 'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-charcoal' : 'hover:text-brown'
              }`}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`text-charcoal transition-all duration-200 text-sm lg:text-base relative pb-1 ${
                isActive('/services') ? 'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-charcoal' : 'hover:text-brown'
              }`}
            >
              Services
            </Link>
            <Link
              to="/about"
              className={`text-charcoal transition-all duration-200 text-sm lg:text-base relative pb-1 ${
                isActive('/about') ? 'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-charcoal' : 'hover:text-brown'
              }`}
            >
              About us
            </Link>
            <Link
              to="/contact"
              className={`text-charcoal transition-all duration-200 text-sm lg:text-base relative pb-1 ${
                isActive('/contact') ? 'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-charcoal' : 'hover:text-brown'
              }`}
            >
              Blog
            </Link>
            <button
              onClick={handleBooking}
              className="px-6 lg:px-8 py-2.5 bg-brown text-cream rounded-full hover:bg-brown/90 transition-all duration-300 text-sm lg:text-base font-normal"
            >
              Contact Us
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden transition-transform duration-200 hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden flex flex-col gap-3 md:gap-4 mt-5 md:mt-6 pb-3 md:pb-4 animate-fadeIn">
            <Link
              to="/"
              className={`text-charcoal hover:text-brown transition-all duration-200 text-sm ${
                isActive('/') ? 'font-medium border-l-2 border-charcoal pl-2' : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`text-charcoal hover:text-brown transition-all duration-200 text-sm ${
                isActive('/services') ? 'font-medium border-l-2 border-charcoal pl-2' : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/about"
              className={`text-charcoal hover:text-brown transition-all duration-200 text-sm ${
                isActive('/about') ? 'font-medium border-l-2 border-charcoal pl-2' : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About us
            </Link>
            <Link
              to="/contact"
              className={`text-charcoal hover:text-brown transition-all duration-200 text-sm ${
                isActive('/contact') ? 'font-medium border-l-2 border-charcoal pl-2' : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <button
              onClick={handleBooking}
              className="px-6 py-2.5 bg-brown text-cream rounded-full hover:bg-brown/90 transition-all duration-300 text-center text-sm mt-2"
            >
              Contact Us
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
