
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">404</h1>
            <div className="w-24 h-1 bg-red-500 mx-auto mb-8"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Page Not Found</h2>
            <p className="text-gray-400 max-w-md mx-auto mb-8">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <a
              href="/"
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-3 px-8 rounded-full font-medium inline-block transition-all duration-300"
            >
              Back to Home
            </a>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
