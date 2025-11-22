import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-10 md:py-12 bg-[#fdf3e6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Logo/Brand */}
          <div>
            <h2 className="text-xl md:text-2xl font-light tracking-wide mb-3 md:mb-4 text-charcoal">GODDESS OF NAILS AND BEAUTY</h2>
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-sm font-medium mb-3 md:mb-4 tracking-wide text-charcoal">Menu</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-charcoal/80 hover:text-brown transition-all duration-200 text-sm hover:translate-x-1">
                Home
              </Link>
              <Link to="/about" className="text-charcoal/80 hover:text-brown transition-all duration-200 text-sm hover:translate-x-1">
                About
              </Link>
              <Link to="/services" className="text-charcoal/80 hover:text-brown transition-all duration-200 text-sm hover:translate-x-1">
                Services
              </Link>
              <Link to="/contact" className="text-charcoal/80 hover:text-brown transition-all duration-200 text-sm hover:translate-x-1">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-medium mb-3 md:mb-4 tracking-wide text-charcoal">Contact</h3>
            <div className="space-y-3 text-xs md:text-sm text-charcoal/80">
              <div>
                <p className="font-medium mb-1">Emporium Melbourne</p>
                <p className="leading-relaxed">Store 305A/287 Lonsdale St<br />Melbourne VIC 3000</p>
                <p><a href="tel:0386098111" className="hover:text-brown transition-colors duration-200">(03) 8609 8111</a></p>
              </div>
              <div>
                <p className="font-medium mb-1">QV Melbourne</p>
                <p className="leading-relaxed">236-238 Lonsdale St<br />Melbourne VIC 3000</p>
                <p><a href="tel:0399137662" className="hover:text-brown transition-colors duration-200">(03) 9913 7662</a></p>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-medium mb-3 md:mb-4 tracking-wide text-charcoal">Social</h3>
            <a
              href="https://www.instagram.com/goddessofnailsandbeauty/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-charcoal/80 hover:text-brown transition-all duration-200 hover:scale-105"
            >
              <Instagram size={20} />
              <span className="text-sm">Instagram</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-charcoal/20 pt-5 md:pt-6 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-charcoal/70">
          <p>Copyright © {new Date().getFullYear()} Goddess of Nails and Beauty</p>
          <div className="flex gap-4 md:gap-6 mt-3 md:mt-0">
            <a href="#" className="hover:text-brown transition-colors duration-200">Terms of Use</a>
            <a href="#" className="hover:text-brown transition-colors duration-200">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
