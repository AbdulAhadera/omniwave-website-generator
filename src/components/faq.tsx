
import { useState, useRef, useId } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

type FaqItemType = {
  question: string;
  answer: string;
};

const faqs: FaqItemType[] = [
  {
    question: "How does the OmnisolAi voice assistant work?",
    answer: "OmnisolAi uses advanced natural language processing and machine learning to create voice agents that can understand and respond to human speech naturally. Our technology enables these agents to handle complex conversations, answer questions, schedule appointments, and perform various tasks without human intervention."
  },
  {
    question: "Will callers know they're speaking with an AI?",
    answer: "Our voice agents are designed to sound natural and human-like. While we recommend transparency about using AI technology, many customers report that callers can't tell they're interacting with an AI assistant due to the natural flow of conversation and realistic voice patterns."
  },
  {
    question: "How long does implementation take?",
    answer: "Implementation time varies based on your specific needs and integration requirements. Typically, our basic setup can be completed in 1-2 weeks, while more complex integrations may take 3-4 weeks. Our team works closely with you throughout the process to ensure a smooth transition."
  },
  {
    question: "Is my data secure with OmnisolAi?",
    answer: "Absolutely. We prioritize data security and compliance. OmnisolAi is fully HIPAA compliant for healthcare applications and adheres to strict data protection standards across all industries. Your data is encrypted both in transit and at rest, and we implement comprehensive security measures to protect all information."
  },
  {
    question: "Can I customize the voice and personality of my AI assistant?",
    answer: "Yes, you can choose from a wide range of voices, accents, and personalities for your AI assistant. We offer options to match your brand identity and customer preferences. For enterprise clients, we even offer voice cloning services to create a unique voice for your brand."
  },
  {
    question: "What types of businesses benefit most from OmnisolAi?",
    answer: "While our technology benefits businesses across many sectors, we've seen particularly strong results in healthcare (appointment scheduling, patient follow-ups), customer service operations, sales departments, and service-based businesses that handle high call volumes for bookings and inquiries."
  }
];

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState<FaqItemType | null>(null);
  const ref = useRef(null);
  const id = useId();

  useOutsideClick(ref, () => setActiveQuestion(null));

  return (
    <section className="py-24 bg-[#0a0a0a] grid-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-[#00A3FF]/10 rounded-full px-4 py-1 mb-4 border border-[#00A3FF]/20"
          >
            <span className="text-[#00A3FF]">FAQs</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Frequently Asked Questions
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-gray-400 max-w-3xl mx-auto"
          >
            Get answers to common questions about our voice intelligence solutions.
          </motion.p>
        </div>

        <AnimatePresence>
          {activeQuestion && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                layoutId={`faq-${activeQuestion.question}-${id}`}
                ref={ref}
                className="w-full max-w-2xl bg-gradient-to-b from-[#0f1722] to-[#0a0a0a] border border-gray-800 rounded-xl overflow-hidden"
              >
                <div className="p-6">
                  <motion.h3
                    layoutId={`question-${activeQuestion.question}-${id}`}
                    className="text-xl font-bold text-white mb-4"
                  >
                    {activeQuestion.question}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-gray-300"
                  >
                    {activeQuestion.answer}
                  </motion.p>
                </div>
                <div className="bg-[#0f1722] p-4 flex justify-end">
                  <button
                    onClick={() => setActiveQuestion(null)}
                    className="bg-[#00A3FF] hover:bg-[#0080ff] text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              layoutId={`faq-${faq.question}-${id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setActiveQuestion(faq)}
              className="p-4 bg-gradient-to-r from-[#0f1722] to-[#0a0a0a] border border-gray-800 rounded-xl mb-4 cursor-pointer hover:border-[#00A3FF]/30 transition-all duration-300"
            >
              <div className="flex justify-between items-center">
                <motion.h3
                  layoutId={`question-${faq.question}-${id}`}
                  className="font-medium text-white"
                >
                  {faq.question}
                </motion.h3>
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
                  className="text-[#00A3FF] h-5 w-5"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
