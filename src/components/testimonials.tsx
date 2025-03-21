
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "OmnisolAi has transformed our patient scheduling process. Our staff now focuses on patient care rather than administrative tasks.",
    name: "Dr. Sarah Johnson",
    title: "Medical Director, Northwest Healthcare",
    avatar: "public/lovable-uploads/3e4c60cf-1d70-432d-8b64-b18352318b97.png"
  },
  {
    quote: "The voice agents handle over 80% of our customer inquiries, resulting in a 40% reduction in operational costs within the first quarter.",
    name: "Michael Chen",
    title: "CTO, Global Retail Solutions",
    avatar: "public/lovable-uploads/22d68593-1c11-4408-b873-70c56a6f199a.png"
  },
  {
    quote: "The seamless integration with our existing CRM system made implementation effortless. Our customers can't tell they're speaking with an AI.",
    name: "Jessica Williams",
    title: "Customer Experience Director, TechFlex Inc.",
    avatar: "public/lovable-uploads/2abb48b7-31de-4921-bccf-1ac1890fd951.png"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-red-500/10 rounded-full px-4 py-1 mb-4 border border-red-500/20"
          >
            <span className="text-red-400">TESTIMONIALS</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            What Our Clients Say
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-gray-400 max-w-3xl"
          >
            Discover how OmnisolAi's voice intelligence solutions are transforming businesses across industries.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-b from-gray-900 to-black rounded-xl p-8 border border-gray-800 hover:border-red-500/30 transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex-1">
                <svg
                  className="h-8 w-8 text-red-500 mb-4 opacity-50"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                </svg>
                <p className="text-gray-300 mb-6 italic">{testimonial.quote}</p>
              </div>
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <p className="text-white font-medium">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
