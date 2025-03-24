
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    setIsMobileMenuOpen(false);
    
    if (isHomePage) {
      // If already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If on different page, navigate to home page with hash
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="/" className="text-xl md:text-2xl font-bold text-white">
            OmnisolAi
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              <button
                onClick={() => scrollToSection("features")}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("process")}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Process
              </button>
              <a
                href="/industries"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Industries
              </a>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-gray-300 hover:text-white transition-colors"
              >
                FAQ
              </button>
            </nav>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-full transition-colors"
            >
              Contact Us
            </button>
          </div>

          <button
            className="block md:hidden text-white p-2"
            onClick={toggleMobileMenu}
            aria-label="Menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black border-t border-gray-800 mt-2"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection("features")}
                  className="text-gray-300 hover:text-white transition-colors py-2"
                >
                  Features
                </button>
                <button
                  onClick={() => scrollToSection("process")}
                  className="text-gray-300 hover:text-white transition-colors py-2"
                >
                  Process
                </button>
                <a
                  href="/industries"
                  className="text-gray-300 hover:text-white transition-colors py-2"
                >
                  Industries
                </a>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="text-gray-300 hover:text-white transition-colors py-2"
                >
                  Testimonials
                </button>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="text-gray-300 hover:text-white transition-colors py-2"
                >
                  FAQ
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-full transition-colors"
                >
                  Contact Us
                </button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
