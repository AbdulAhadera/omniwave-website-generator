
import { motion } from "framer-motion";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const integrationItems = [
  {
    quote: "Loops",
    name: "CRM & Marketing",
    title: "Integration Partner",
  },
  {
    quote: "MessageBird",
    name: "Communication",
    title: "Integration Partner",
  },
  {
    quote: "Zapier",
    name: "Automation",
    title: "Integration Partner",
  },
  {
    quote: "TED",
    name: "Content",
    title: "Integration Partner",
  },
  {
    quote: "Dropbox",
    name: "Storage",
    title: "Integration Partner",
  },
  {
    quote: "Discord",
    name: "Communication",
    title: "Integration Partner",
  },
  {
    quote: "Upwork",
    name: "Freelancing",
    title: "Integration Partner",
  },
];

const Integrations = () => {
  return (
    <section className="py-24 bg-black" id="integrations">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-red-500/10 rounded-full px-4 py-1 mb-4 border border-red-500/20"
          >
            <span className="text-red-400">INTEGRATIONS</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            20,104+ Integration Support
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-gray-400 max-w-3xl"
          >
            Connect OmnisolAi with your existing software ecosystem to create seamless workflows and maximize efficiency.
          </motion.p>
        </div>

        <div className="py-8">
          <InfiniteMovingCards items={integrationItems} direction="right" speed="slow" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6"
          >
            <div className="h-12 w-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Seamless Integration</h3>
            <p className="text-gray-400">Connect our AI voice agents with your existing CRM, ERP, and scheduling systems without disruption.</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6"
          >
            <div className="h-12 w-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Data Synchronization</h3>
            <p className="text-gray-400">Real-time synchronization ensures all customer information and interactions remain up-to-date across platforms.</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6"
          >
            <div className="h-12 w-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">API Access</h3>
            <p className="text-gray-400">Custom API endpoints allow developers to create unique integrations specific to your business needs.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
