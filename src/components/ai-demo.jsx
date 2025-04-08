
import { useState } from "react";
import { motion } from "framer-motion";
import { Headphones, Link as LinkIcon, FileText, Mic } from "lucide-react";
import { Link } from "react-router-dom";

const AiDemo = () => {
  const [message, setMessage] = useState("");
  const [isRecording, setIsRecording] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");
    // Demo submission logic would go here
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  return (
    <section id="demo" className="py-24 bg-[#0a0a0a] grid-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-[#00A3FF]/20 rounded-full px-4 py-1 mb-4 border border-[#00A3FF]/30"
          >
            <span className="text-[#00A3FF]">EXPERIENCE OUR TECHNOLOGY</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Try Our AI Demo Call
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-gray-400 max-w-3xl"
          >
            Experience the power of our voice intelligence technology firsthand. Interact with our demo to see how OmnisolAi can transform your customer interactions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0f1722] rounded-2xl border border-gray-800 overflow-hidden"
          >
            <div className="p-8">
              <div className="flex justify-between mb-4">
                <div className="text-white font-semibold">AI Voice Assistant Demo</div>
                <div className="flex gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#00A3FF]"></span>
                  <span className="h-2 w-2 rounded-full bg-gray-500"></span>
                </div>
              </div>

              <div className="h-64 overflow-y-auto bg-[#0a0a0a]/50 rounded-lg p-4 mb-6 border border-gray-800">
                <div className="flex gap-3 mb-4">
                  <div className="bg-[#00A3FF]/20 p-2 rounded-full h-8 w-8 flex items-center justify-center">
                    <Headphones className="h-4 w-4 text-[#00A3FF]" />
                  </div>
                  <div className="bg-gray-800 rounded-lg p-3 text-gray-300 text-sm max-w-[80%]">
                    Hello! I'm your OmnisolAi assistant. How can I help you today?
                  </div>
                </div>
              </div>

              <div className="relative">
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message here..."
                    className="w-full bg-gray-900/80 border border-gray-800 rounded-lg py-3 px-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00A3FF]/50"
                  />
                  <button
                    type="button"
                    onClick={toggleRecording}
                    className={`p-3 rounded-lg flex items-center justify-center ${
                      isRecording
                        ? "bg-[#00A3FF] text-white"
                        : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                    }`}
                  >
                    <Mic className="h-5 w-5" />
                  </button>
                  <button
                    type="submit"
                    className="bg-[#00A3FF] hover:bg-[#0080ff] text-white p-3 rounded-lg"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m5 12 14-9v18Z" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>

            <div className="bg-gray-900 p-3 border-t border-gray-800 flex justify-center gap-8">
              <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <LinkIcon className="h-5 w-5" />
                <span className="text-sm">Link</span>
              </button>
              <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <FileText className="h-5 w-5" />
                <span className="text-sm">File</span>
              </button>
              <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <Mic className="h-5 w-5" />
                <span className="text-sm">Voice</span>
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Experience the Future of Customer Interaction
            </h3>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="bg-[#00A3FF]/10 p-3 rounded-full h-12 w-12 flex items-center justify-center text-[#00A3FF] shrink-0">
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
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-2">Natural Conversations</h4>
                  <p className="text-gray-400">
                    Our AI understands context, nuance, and can handle complex conversations just like a human representative.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-[#00A3FF]/10 p-3 rounded-full h-12 w-12 flex items-center justify-center text-[#00A3FF] shrink-0">
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
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-2">24/7 Availability</h4>
                  <p className="text-gray-400">
                    Our voice agents never sleep, ensuring your customers receive support around the clock without increasing your staffing costs.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-[#00A3FF]/10 p-3 rounded-full h-12 w-12 flex items-center justify-center text-[#00A3FF] shrink-0">
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
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-2">Seamless Booking</h4>
                  <p className="text-gray-400">
                    Schedule appointments, handle inquiries, and process routine tasks without human intervention.
                  </p>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8"
            >
              <Link
                to="/contact-form"
                className="bg-[#00A3FF] text-white font-medium py-3 px-8 rounded-full inline-block transition-all duration-300 transform hover:scale-105"
              >
                Request Full Demo
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AiDemo;
