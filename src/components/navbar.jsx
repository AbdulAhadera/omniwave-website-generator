
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import ThemeSwitcher from "./theme-switcher";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      closeMenu();
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-lg py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-white">
              OmnisolAi
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a onClick={() => scrollToSection('hero')} className="text-white hover:text-red-400 transition-colors cursor-pointer">
              Home
            </a>
            <a onClick={() => scrollToSection('features')} className="text-white hover:text-red-400 transition-colors cursor-pointer">
              Services
            </a>
            <Link to="/industries" className="text-white hover:text-red-400 transition-colors cursor-pointer">
              Industries
            </Link>
            <a onClick={() => scrollToSection('demo')} className="text-white hover:text-red-400 transition-colors cursor-pointer">
              Demo
            </a>
            <a onClick={() => scrollToSection('about')} className="text-white hover:text-red-400 transition-colors cursor-pointer">
              About
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeSwitcher />
            <a href="#contact" className="hidden md:inline-block bg-red-500 hover:bg-red-600 transition-colors text-white px-4 py-2 rounded-full">
              Contact Us
            </a>
            <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <motion.div
          className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -20 }}
          transition={{ duration: 0.2 }}
        >
          <div className="mt-4 py-4 flex flex-col space-y-4">
            <a
              onClick={() => scrollToSection('hero')}
              className="text-white py-2 hover:text-red-400 transition-colors cursor-pointer"
            >
              Home
            </a>
            <a
              onClick={() => scrollToSection('features')}
              className="text-white py-2 hover:text-red-400 transition-colors cursor-pointer"
            >
              Services
            </a>
            <Link
              to="/industries"
              className="text-white py-2 hover:text-red-400 transition-colors cursor-pointer"
              onClick={closeMenu}
            >
              Industries
            </Link>
            <a
              onClick={() => scrollToSection('demo')}
              className="text-white py-2 hover:text-red-400 transition-colors cursor-pointer"
            >
              Demo
            </a>
            <a
              onClick={() => scrollToSection('about')}
              className="text-white py-2 hover:text-red-400 transition-colors cursor-pointer"
            >
              About
            </a>
            <a
              href="#contact"
              className="bg-red-500 hover:bg-red-600 transition-colors text-white px-4 py-2 rounded-full inline-block text-center"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Navbar;
