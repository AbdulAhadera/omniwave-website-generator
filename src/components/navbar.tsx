
import { useState, useEffect } from "react";
import ThemeSwitcher from "./theme-switcher";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/30 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <Link to="/" className="text-white font-bold text-xl flex items-center">
              <span className="text-2xl font-semibold tracking-tight">OMNI</span>
              <span className="text-red-500 font-semibold text-2xl tracking-tight">SOL</span>
              <span className="text-white text-2xl font-light">Ai</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-white hover:text-red-400 transition-colors">
              Home
            </Link>
            <Link to="/services" className="text-white hover:text-red-400 transition-colors">
              Services
            </Link>
            <Link to="/industries" className="text-white hover:text-red-400 transition-colors">
              Industries
            </Link>
            <Link to="/demo" className="text-white hover:text-red-400 transition-colors">
              AI Demo
            </Link>
            <Link to="/about" className="text-white hover:text-red-400 transition-colors">
              About
            </Link>
            <ThemeSwitcher />
            <Link
              to="/contact"
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-2 px-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </Link>
          </nav>

          <div className="flex items-center gap-4 md:hidden">
            <ThemeSwitcher />
            <button
              className="text-white p-2 focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/80 backdrop-blur-lg border-t border-white/10"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <Link
                to="/"
                className="text-white py-2 hover:text-red-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/services"
                className="text-white py-2 hover:text-red-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/industries"
                className="text-white py-2 hover:text-red-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Industries
              </Link>
              <Link
                to="/demo"
                className="text-white py-2 hover:text-red-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                AI Demo
              </Link>
              <Link
                to="/about"
                className="text-white py-2 hover:text-red-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="bg-gradient-to-r from-red-500 to-red-600 text-white py-2 px-4 rounded-full text-center font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
