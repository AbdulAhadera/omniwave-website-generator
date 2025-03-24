
import { motion } from "framer-motion";
import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "./ui/glowing-effect";

const testimonials = [
  {
    quote: "OmnisolAi has transformed our patient scheduling process. Our staff now focuses on patient care rather than administrative tasks.",
    name: "Dr. Sarah Johnson",
    title: "Medical Director, Northwest Healthcare",
    avatar: "../lovable-uploads/sarah.jpeg",
    icon: <Box className="h-4 w-4 text-black dark:text-neutral-400" />
  },
  {
    quote: "The voice agents handle over 80% of our customer inquiries, resulting in a 40% reduction in operational costs within the first quarter.",
    name: "Michael Chen",
    title: "CTO, Global Retail Solutions",
    avatar: "../lovable-uploads/michael.jpeg",
    icon: <Settings className="h-4 w-4 text-black dark:text-neutral-400" />
  },
  {
    quote: "The seamless integration with our existing CRM system made implementation effortless. Our customers can't tell they're speaking with an AI.",
    name: "Jessica Williams",
    title: "Customer Experience Director, TechFlex Inc.",
    avatar: "../lovable-uploads/jessica.jpeg",
    icon: <Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-black" id="testimonials">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative min-h-[14rem] rounded-xl p-2"
            >
              <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-xl border-0.75 p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D] bg-gradient-to-b from-gray-900 to-black border border-gray-800">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                />
                <div className="flex-1 mb-4">
                  <div className="w-fit rounded-lg border border-gray-600 p-2 mb-4">
                    {testimonial.icon}
                  </div>
                  <p className="text-gray-300 italic text-base">{testimonial.quote}</p>
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
