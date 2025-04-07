
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mic, MicOff, X } from "lucide-react";
import { toast } from "sonner";

const VoiceAssistant = ({ name }) => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [response, setResponse] = useState("");
  const [waveform, setWaveform] = useState([]);

  // Generate random waveform values for animation
  useEffect(() => {
    if (isListening) {
      const interval = setInterval(() => {
        // Generate 30 random values between 10-100% for the waveform
        const newWaveform = Array(30)
          .fill(0)
          .map(() => 10 + Math.random() * 90);
        setWaveform(newWaveform);
      }, 100);

      return () => clearInterval(interval);
    } else {
      // Reset waveform when not listening
      setWaveform(Array(30).fill(15));
    }
  }, [isListening]);

  // Simulate assistant responses
  useEffect(() => {
    if (!transcript) return;
    
    // Reset response
    setResponse("");
    
    // Show loading response
    const timer = setTimeout(() => {
      const responses = [
        `Hi ${name}, I'm your AI assistant. How can I help you today?`,
        `I understand you're looking for information about our services. What specifically would you like to know?`,
        `Thanks for your question. Our AI voice technology can help businesses reduce costs by up to 40%.`,
        `I'd be happy to schedule a follow-up call with one of our specialists.`,
        `Our voice agents are available 24/7 and can handle multiple calls simultaneously.`
      ];
      
      setResponse(responses[Math.floor(Math.random() * responses.length)]);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, [transcript, name]);

  const handleToggleListen = () => {
    setIsListening(!isListening);
    
    if (!isListening) {
      // Simulate browser's speech recognition
      toast.info("Listening...");
      setTimeout(() => {
        setTranscript("Tell me about your voice AI technology");
        setIsListening(false);
      }, 3000);
    } else {
      setTranscript("");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-md mx-auto box-background rounded-xl p-6 shadow-lg border border-gray-700 text-center"
    >
      <h2 className="text-2xl font-bold mb-6 heading-gradient">AI Voice Assistant</h2>
      
      <div className="mb-8">
        <div className="mb-4">
          <motion.div 
            animate={{ 
              boxShadow: isListening 
                ? ["0px 0px 0px 0px var(--color-gradient-from)", "0px 0px 20px 10px var(--color-gradient-from)", "0px 0px 0px 0px var(--color-gradient-from)"] 
                : "0px 0px 0px 0px var(--color-gradient-from)"
            }}
            transition={{ 
              repeat: isListening ? Infinity : 0, 
              duration: 1.5, 
            }}
            className="w-24 h-24 rounded-full bg-gradient-to-r from-[var(--color-gradient-from)] to-[var(--color-gradient-to)] flex items-center justify-center mx-auto"
          >
            <button 
              onClick={handleToggleListen}
              className="w-20 h-20 rounded-full bg-gray-900 flex items-center justify-center cursor-pointer hover:bg-gray-800 transition-colors"
            >
              {isListening ? (
                <MicOff size={30} className="text-white" />
              ) : (
                <Mic size={30} className="text-white" />
              )}
            </button>
          </motion.div>
        </div>
        
        {/* SIRI-like waveform animation */}
        {isListening && (
          <div className="flex items-end justify-center h-16 gap-[2px] mb-4">
            {waveform.map((height, index) => (
              <motion.div
                key={index}
                initial={{ height: "15%" }}
                animate={{ height: `${height}%` }}
                transition={{ duration: 0.2 }}
                className="w-1 bg-gradient-to-t from-[var(--color-gradient-from)] to-[var(--color-gradient-to)]"
                style={{ borderRadius: '1px' }}
              />
            ))}
          </div>
        )}
        
        {transcript && (
          <div className="mb-4 p-3 bg-gray-800 rounded-lg">
            <p className="text-sm text-gray-400">You said:</p>
            <p className="text-white">{transcript}</p>
          </div>
        )}
        
        {response && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-3 bg-gray-800 rounded-lg"
          >
            <p className="text-sm text-gray-400">Assistant:</p>
            <p className="text-white">{response}</p>
          </motion.div>
        )}
      </div>
      
      <div className="mb-4">
        <p className="text-sm text-gray-400">Try asking:</p>
        <div className="flex flex-wrap gap-2 mt-2 justify-center">
          {[
            "Tell me about your pricing",
            "How does the voice AI work?",
            "What industries do you serve?"
          ].map((suggestion, index) => (
            <button
              key={index}
              onClick={() => {
                setTranscript(suggestion);
                setIsListening(false);
              }}
              className="py-1 px-3 bg-gray-700 text-white text-sm rounded-full hover:bg-gray-600 transition-colors"
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>
      
      <button 
        onClick={() => window.location.href = '/'}
        className="mt-6 py-2 px-4 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors flex items-center gap-2 mx-auto"
      >
        <X size={16} />
        End Demo
      </button>
    </motion.div>
  );
};

export default VoiceAssistant;
