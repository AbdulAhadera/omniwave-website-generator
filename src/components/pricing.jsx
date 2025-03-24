
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Starter",
    price: "$297",
    development: "+ $497 (Setup)",
    description: "Perfect for small businesses getting started with voice AI",
    features: [
      "1 Voice Agent",
      "500 Minutes/Month",
      "Basic Integration",
      "Standard Voice Selection",
      "Email Support",
      "Basic Analytics"
    ],
    highlighted: false
  },
  {
    name: "Professional",
    price: "$997",
    development: "+ $1,497 (Setup)",
    description: "Ideal for growing businesses with moderate call volume",
    features: [
      "3 Voice Agents",
      "5,000 Minutes/Month",
      "Full CRM Integration",
      "Premium Voice Selection",
      "24/7 Support",
      "Advanced Analytics",
      "Custom Personalities"
    ],
    highlighted: true
  },
  {
    name: "Enterprise",
    price: "$2,497",
    development: "+ $3,997 (Setup)",
    description: "Comprehensive solution for large operations",
    features: [
      "Unlimited Voice Agents",
      "25,000 Minutes/Month",
      "Custom Integrations",
      "All Voice Options",
      "Dedicated Account Manager",
      "Full Analytics Suite",
      "Voice Cloning",
      "Custom Training"
    ],
    highlighted: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-red-500/10 rounded-full px-4 py-1 mb-4 border border-red-500/20"
          >
            <span className="text-red-400">SIMPLE PRICING</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Transparent Investment Plans
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-gray-400 max-w-3xl mx-auto"
          >
            Choose the plan that fits your business needs. All plans include our core voice intelligence technology.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-xl p-8 border ${
                plan.highlighted
                  ? "bg-gradient-to-b from-red-900/20 to-black border-red-500/30"
                  : "bg-gradient-to-b from-gray-900 to-black border-gray-800"
              } ${
                plan.highlighted ? "relative" : ""
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg uppercase">
                  Popular
                </div>
              )}
              
              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-gray-400 text-sm">/month</span>
              </div>
              <p className="text-red-500 mb-6">{plan.development}</p>
              <p className="text-gray-400 mb-6">{plan.description}</p>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <Check className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href="#contact"
                className={`block text-center py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white"
                    : "bg-gray-800 text-white hover:bg-gray-700"
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400">
            Need a custom solution? <a href="#contact" className="text-red-400 hover:text-red-300">Contact us</a> for tailored pricing.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
