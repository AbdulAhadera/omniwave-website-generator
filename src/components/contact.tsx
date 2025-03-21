
import { useState } from "react";
import { motion } from "framer-motion";
import { AtSign, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: ""
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-block bg-red-500/10 rounded-full px-4 py-1 mb-4 border border-red-500/20"
              >
                <span className="text-red-400">GET IN TOUCH</span>
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
              >
                Ready to Transform Your Business?
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-lg text-gray-400 mb-8"
              >
                Contact us today to learn how OmnisolAi's voice intelligence solutions can streamline your operations and enhance customer experience.
              </motion.p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-red-500/10 p-3 rounded-full h-12 w-12 flex items-center justify-center text-red-500">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-white font-medium text-lg mb-1">Our Location</h3>
                  <p className="text-gray-400">123 AI Innovation Boulevard<br />San Francisco, CA 94103</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-red-500/10 p-3 rounded-full h-12 w-12 flex items-center justify-center text-red-500">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-white font-medium text-lg mb-1">Call Us</h3>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-red-500/10 p-3 rounded-full h-12 w-12 flex items-center justify-center text-red-500">
                  <AtSign className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-white font-medium text-lg mb-1">Email Us</h3>
                  <p className="text-gray-400">info@omnisolai.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-xl p-8"
          >
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-8">
                <div className="bg-green-500/20 p-4 rounded-full mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-500"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-400">
                  Thank you for contacting OmnisolAi. We'll get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-400 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-900 border border-gray-800 rounded-lg py-3 px-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-red-500/50"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-400 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-900 border border-gray-800 rounded-lg py-3 px-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-red-500/50"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-gray-400 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-gray-900 border border-gray-800 rounded-lg py-3 px-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-red-500/50"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-gray-400 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-gray-900 border border-gray-800 rounded-lg py-3 px-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-red-500/50"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-400 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-gray-900 border border-gray-800 rounded-lg py-3 px-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-red-500/50"
                    placeholder="Tell us about your needs..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
