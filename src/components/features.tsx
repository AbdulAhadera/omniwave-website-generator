
import { motion } from "framer-motion";
import { Headphones, ShieldCheck, Users } from "lucide-react";

const features = [
  {
    icon: <Headphones className="h-12 w-12 text-[#00A3FF]" />,
    title: "Unlimited Calls",
    description:
      "Never worry about call limits. OmnisolAi's Voice Intelligence Agents handle unlimited calls, ensuring you never miss an opportunity.",
  },
  {
    icon: <ShieldCheck className="h-12 w-12 text-[#00A3FF]" />,
    title: "Highly Compliant",
    description:
      "Our systems are compliant with all major privacy regulations, keeping your patient and customer data secure at all times.",
  },
  {
    icon: <Users className="h-12 w-12 text-[#00A3FF]" />,
    title: "Custom Personalities",
    description:
      "Choose from thousands of personalities for your voice agents, from professional to friendly, to match your brand identity perfectly.",
  },
];

const Features = () => {
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
    <section id="features" className="py-24 bg-[#0a0a0a] grid-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-center mb-16 text-center"
        >
          <motion.span
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.5 } },
            }}
            className="px-4 py-1 bg-[#00A3FF]/20 text-[#00A3FF] rounded-full border border-[#00A3FF]/30 mb-4"
          >
            KEY FEATURES
          </motion.span>
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
            }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            AI Super Employees
          </motion.h2>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
            }}
            className="text-lg text-gray-300 max-w-3xl"
          >
            Free yourself from the limits of traditional staffing. Embrace the AI renaissance with our
            scalable voice intelligence solutions.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-[#0f1722] border border-gray-800 rounded-xl p-8 hover:border-[#00A3FF]/30 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="p-3 rounded-full bg-[#00A3FF]/10 mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
