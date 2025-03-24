
import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Headphones, ShieldCheck, Users, Building2, Hospital, Briefcase, Server, GraduationCap, ShoppingCart } from "lucide-react";

const industriesData = [
  {
    icon: <Hospital className="h-12 w-12 text-red-500" />,
    title: "Healthcare",
    description: "Automate appointment scheduling, follow-ups, and patient inquiries with voice AI designed specifically for healthcare providers."
  },
  {
    icon: <Briefcase className="h-12 w-12 text-red-500" />,
    title: "Professional Services",
    description: "Handle client inquiries, appointment bookings, and follow-up calls for law firms, accounting, and consulting businesses."
  },
  {
    icon: <Building2 className="h-12 w-12 text-red-500" />,
    title: "Real Estate",
    description: "Qualify leads, schedule viewings, and follow up with potential buyers using AI voice agents that understand property requirements."
  },
  {
    icon: <ShoppingCart className="h-12 w-12 text-red-500" />,
    title: "Retail & E-commerce",
    description: "Enhance customer service with 24/7 voice support for order status, returns, and product information across all your selling channels."
  },
  {
    icon: <Server className="h-12 w-12 text-red-500" />,
    title: "Technology",
    description: "Provide technical support, handle basic troubleshooting, and escalate complex issues to the right department automatically."
  },
  {
    icon: <GraduationCap className="h-12 w-12 text-red-500" />,
    title: "Education",
    description: "Streamline admissions processes, answer prospective student questions, and automate enrollment follow-ups."
  }
];

const Industries = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center mb-16 text-center"
          >
            <motion.span
              variants={itemVariants}
              className="px-4 py-1 bg-red-500/10 text-red-500 rounded-full border border-red-500/20 mb-4"
            >
              INDUSTRIES WE SERVE
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              Voice AI Solutions For Every Industry
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-400 max-w-3xl"
            >
              Our advanced voice intelligence technology adapts to the unique requirements of your industry, delivering customized solutions that drive results.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {industriesData.map((industry, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-xl p-8 hover:border-red-500/30 transition-all duration-300"
              >
                <div className="p-3 rounded-full bg-red-500/10 mb-6 inline-block">{industry.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{industry.title}</h3>
                <p className="text-gray-400">{industry.description}</p>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-16 text-center"
          >
            <a href="/#contact" className="bg-red-500 hover:bg-red-600 transition-colors text-white px-8 py-3 rounded-full font-medium inline-block">
              Contact Us For Custom Solutions
            </a>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Industries;
