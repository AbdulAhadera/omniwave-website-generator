
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-24" style={{ backgroundColor: "var(--color-background)" }}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-red-500/10 rounded-full px-4 py-1 mb-4 border border-red-500/20"
          >
            <span className="text-red-400">CONTACT US</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Ready to Get Started?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-gray-400 max-w-3xl"
          >
            Connect with our team for a personalized consultation and discover how our voice AI can transform your business.
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="box-background p-8 md:p-12 rounded-2xl border border-gray-800"
          >
            <div className="grid gap-6">
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">Main Office</h3>
                <p className="text-gray-400">123 Innovation Drive, San Francisco, CA 94105</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">Contact Details</h3>
                <p className="text-gray-400 mb-1">Email: contact@omnisolai.com</p>
                <p className="text-gray-400 mb-1">Sales: +1 (555) 123-4567</p>
                <p className="text-gray-400">Support: +1 (555) 987-6543</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">Business Hours</h3>
                <p className="text-gray-400 mb-1">Monday - Friday: 9am - 6pm PST</p>
                <p className="text-gray-400">Support: Available 24/7</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="box-background p-8 md:p-12 rounded-2xl border border-gray-800 flex flex-col justify-between"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Experience Our Demo</h3>
              <p className="text-gray-400 mb-6">
                Experience firsthand how our voice intelligence technology can transform your customer interactions and business operations.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-red-500/10 p-3 rounded-full h-12 w-12 flex items-center justify-center text-red-500 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
                    <path d="M9 18h6"></path>
                    <path d="M10 22h4"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-1">Interactive Demo</h4>
                  <p className="text-gray-400">Try our conversational AI assistant in a real-time demo.</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-red-500/10 p-3 rounded-full h-12 w-12 flex items-center justify-center text-red-500 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-1">Expert Consultation</h4>
                  <p className="text-gray-400">Get personalized insights from our AI specialists.</p>
                </div>
              </div>
            </div>

            <Link
              to="/contact-form"
              className="mt-8 inline-block bg-gradient-to-r from-[var(--color-gradient-from)] to-[var(--color-gradient-to)] text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 text-center"
            >
              Request Demo
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
