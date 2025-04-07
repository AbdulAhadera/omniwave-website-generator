
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Spotlight } from "./ui/spotlight";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      id="hero"
      className="relative h-screen flex overflow-hidden" style={{ backgroundColor: "#141414" }}>
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
        )} />
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="white" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 max-w-4xl mx-auto text-center px-4 flex flex-col items-center justify-center"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="inline-block bg-black/30 backdrop-blur-sm rounded-full px-4 py-1 mb-8 border border-white/10"
        >
          {/* <span className="text-white">The Future Is Here.</span> */}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-transparent leading-tight mb-4"
        >
          Streamline the future with{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#007bff] to-[#00BFFF] block mt-2">
            Voice-Driven Intelligence
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto"
        >
          Through our advanced AI technology, we empower businesses and hospitals
          with revolutionary voice agents designed to enhance customer service, streamline
          appointment bookings, and reduce operational costs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/contact-form"
            className="bg-gradient-to-r from-[#007bff] to-[#00BFFF] text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Get Started
          </Link>
          <a
            href="#features"
            className="bg-white/10 backdrop-blur-md text-white font-medium py-3 px-8 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            Learn More
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
