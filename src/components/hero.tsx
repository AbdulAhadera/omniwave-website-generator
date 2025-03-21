
import { WavyBackground } from "./ui/wavy-background";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <WavyBackground
      colors={["#ff3c3c", "#ff3c8f", "#ff3cc6", "#ff3c3c", "#ff813c"]}
      waveWidth={100}
      backgroundFill="black"
      blur={10}
      speed="slow"
      waveOpacity={0.5}
      containerClassName="h-screen"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-4xl mx-auto text-center px-4"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="inline-block bg-black/30 backdrop-blur-sm rounded-full px-4 py-1 mb-8 border border-white/10"
        >
          <span className="text-white">The Future Is Here.</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4"
        >
          Streamline the future with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600 block mt-2">
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
          <a
            href="#demo"
            className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Get Started
          </a>
          <a
            href="#features"
            className="bg-white/10 backdrop-blur-md text-white font-medium py-3 px-8 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            Learn More
          </a>
        </motion.div>
      </motion.div>
    </WavyBackground>
  );
};

export default Hero;
