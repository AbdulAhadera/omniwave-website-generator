
import { motion } from "framer-motion";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const integrations = [
  { name: "SalesForce", description: "Enhance your voice agents with HIPAA compliant CRM integration." },
  { name: "Epic Systems", description: "HIPAA compliant integration for secure patient data and appointment bookings." },
  { name: "GHL", description: "Revolutionize your marketing funnels with AI voice agents." },
  { name: "HubSpot", description: "Optimize CRM operations with seamless voice intelligence." },
  { name: "PipeDrive", description: "Streamline appointment reminders with direct pipeline connections." },
  { name: "Custom CRM", description: "Integrate with your custom systems for tailored solutions." }
];

const integrationTestimonials = [
  {
    quote: "Integrating OmnisolAi with our SalesForce system was seamless. Setup took just hours, not weeks.",
    name: "Amanda Roberts",
    title: "IT Director, Healthcare Solutions"
  },
  {
    quote: "The Epic Systems integration transformed our hospital's appointment process with 99.8% accuracy.",
    name: "Dr. Robert Chen",
    title: "Chief Medical Officer, Memorial Hospital"
  },
  {
    quote: "GHL plus OmnisolAi automated our entire intake workflow. Conversions up 47% in first month.",
    name: "Sarah Miller",
    title: "Marketing Director, TechHealth"
  },
  {
    quote: "HubSpot integration gave us complete visibility into our AI voice agent performance metrics.",
    name: "Jason Park",
    title: "Sales Operations Manager, CareConnect"
  },
  {
    quote: "The custom integration with our proprietary systems was flawless. Their team understood our unique needs.",
    name: "Marcus Johnson",
    title: "CTO, GlobalCare Solutions"
  }
];

const Integrations = () => {
  return (
    <section className="py-24 bg-black" id="integrations">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-red-500/10 rounded-full px-4 py-1 mb-4 border border-red-500/20"
          >
            <span className="text-red-400">BRING YOUR WORK TOGETHER</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Integration with all your favorite software
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-gray-400 max-w-3xl mx-auto"
          >
            Through our advanced AI technology, our voice agents seamlessly integrate with all your platforms and software. The revolutionary future is here.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center mb-12"
        >
          <a href="#all-integrations" className="bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 border border-gray-800">
            View All Integrations
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {integrations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-gray-900/30 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-red-500/30 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-3">{item.name}</h3>
              <p className="text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <div id="all-integrations" className="mt-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold text-white mb-8 text-center"
          >
            What our integration partners say
          </motion.h3>
          
          <div className="h-60 overflow-hidden rounded-md bg-black/90">
            <InfiniteMovingCards
              items={integrationTestimonials}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
