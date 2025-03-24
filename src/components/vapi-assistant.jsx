
import React, { useState, useEffect, useRef } from 'react';
import { toast } from "../components/ui/sonner";
import { motion } from 'framer-motion';
import { Mic, MicOff, Volume2, VolumeX } from 'lucide-react';

const VapiAssistant = () => {
  const [isListening, setIsListening] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [response, setResponse] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [vapiKey, setVapiKey] = useState('');
  const [assistantId, setAssistantId] = useState('');
  const [hasSetupVapi, setHasSetupVapi] = useState(false);
  
  const vapiRef = useRef(null);
  const chatHistoryRef = useRef([]);

  // Store Vapi credentials in localStorage
  useEffect(() => {
    const savedKey = localStorage.getItem('vapiKey');
    const savedAssistantId = localStorage.getItem('assistantId');
    
    if (savedKey && savedAssistantId) {
      setVapiKey(savedKey);
      setAssistantId(savedAssistantId);
      setHasSetupVapi(true);
    }
  }, []);

  const saveVapiSetup = () => {
    if (!vapiKey || !assistantId) {
      toast({
        title: "Error",
        description: "Please enter both Vapi API key and Assistant ID",
        variant: "destructive",
      });
      return;
    }
    
    localStorage.setItem('vapiKey', vapiKey);
    localStorage.setItem('assistantId', assistantId);
    setHasSetupVapi(true);
    
    toast({
      title: "Success",
      description: "Vapi assistant configured successfully!",
    });
  };

  const toggleListening = async () => {
    if (!hasSetupVapi) {
      toast({
        title: "Setup Required",
        description: "Please configure your Vapi assistant first",
        variant: "destructive",
      });
      return;
    }

    try {
      if (isListening) {
        // Stop listening
        setIsListening(false);
        setIsLoading(true);
        
        // Simulate API call to Vapi (in real implementation, this would use Vapi SDK)
        // This is where you'd send the transcript to Vapi and get a response
        setTimeout(() => {
          const botResponse = "I'm your voice assistant powered by Vapi. I can help answer questions about OmnisolAi's voice intelligence solutions. What would you like to know?";
          setResponse(botResponse);
          chatHistoryRef.current.push({ role: 'user', content: transcript });
          chatHistoryRef.current.push({ role: 'assistant', content: botResponse });
          setIsLoading(false);
        }, 1500);
      } else {
        // Start listening
        setIsListening(true);
        setTranscript('');
        
        // Simulate microphone activity with random transcript updates
        const textOptions = [
          "Tell me about your voice AI features",
          "How does OmnisolAi work with healthcare providers?",
          "What industries do you support?",
          "Can I try a demo?",
        ];
        
        const randomText = textOptions[Math.floor(Math.random() * textOptions.length)];
        let currentIndex = 0;
        
        const interval = setInterval(() => {
          if (currentIndex <= randomText.length) {
            setTranscript(randomText.substring(0, currentIndex));
            currentIndex++;
          } else {
            clearInterval(interval);
            setIsListening(false);
            setIsLoading(true);
            
            setTimeout(() => {
              const botResponse = "OmnisolAi provides cutting-edge voice intelligence solutions tailored to your industry needs. Our AI-powered voice agents can handle customer inquiries, appointment scheduling, and much more. Would you like to know about specific features or industries we serve?";
              setResponse(botResponse);
              chatHistoryRef.current.push({ role: 'user', content: randomText });
              chatHistoryRef.current.push({ role: 'assistant', content: botResponse });
              setIsLoading(false);
            }, 1500);
          }
        }, 100);
      }
    } catch (error) {
      console.error("Error with voice assistant:", error);
      toast({
        title: "Error",
        description: "There was a problem connecting to the voice assistant",
        variant: "destructive",
      });
      setIsListening(false);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  if (!hasSetupVapi) {
    return (
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="py-24 bg-gradient-to-b from-black to-gray-900"
        id="vapi-setup"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">Configure Vapi Assistant</h2>
            <p className="text-gray-400 mb-8 text-center">
              Connect your Vapi assistant by providing your API key and Assistant ID.
              Don't have a Vapi account? <a href="https://vapi.ai" target="_blank" rel="noopener noreferrer" className="text-red-400 underline">Sign up at Vapi.ai</a>
            </p>
            <div className="space-y-4">
              <div>
                <label htmlFor="vapi-key" className="block text-white mb-2">Vapi API Key</label>
                <input
                  id="vapi-key"
                  type="password"
                  value={vapiKey}
                  onChange={(e) => setVapiKey(e.target.value)}
                  placeholder="Enter your Vapi API key"
                  className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <label htmlFor="assistant-id" className="block text-white mb-2">Assistant ID</label>
                <input
                  id="assistant-id"
                  type="text"
                  value={assistantId}
                  onChange={(e) => setAssistantId(e.target.value)}
                  placeholder="Enter your Vapi Assistant ID"
                  className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <button
                onClick={saveVapiSetup}
                className="w-full bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-md transition-colors duration-300 mt-4"
              >
                Connect Vapi Assistant
              </button>
            </div>
          </div>
        </div>
      </motion.section>
    );
  }

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-24 bg-gradient-to-b from-black to-gray-900"
      id="voice-assistant"
      ref={vapiRef}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-red-500/10 rounded-full px-4 py-1 mb-4 border border-red-500/20"
          >
            <span className="text-red-400">VOICE ASSISTANT</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Try Our AI Voice Assistant
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-gray-400 max-w-3xl"
          >
            Experience the power of our voice intelligence technology with this interactive demo.
            Click the microphone to start talking.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 relative">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-white">Voice Assistant Demo</h3>
            <div className="flex space-x-2">
              <button
                onClick={toggleMute}
                className={`p-2 rounded-full ${isMuted ? 'bg-gray-700 text-gray-400' : 'bg-red-500/20 text-red-400'}`}
              >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>
              <button
                onClick={() => {
                  setHasSetupVapi(false);
                  localStorage.removeItem('vapiKey');
                  localStorage.removeItem('assistantId');
                }}
                className="text-gray-400 hover:text-white text-sm"
              >
                Reset Configuration
              </button>
            </div>
          </div>
          
          <div className="min-h-[200px] bg-gray-800/50 rounded-lg p-4 mb-6">
            {transcript && (
              <div className="mb-4">
                <p className="text-gray-400 text-sm mb-1">You said:</p>
                <p className="text-white">{transcript}</p>
              </div>
            )}
            
            {isLoading && (
              <div className="flex items-center space-x-2 text-gray-400">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse delay-150"></div>
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse delay-300"></div>
                <span className="ml-2">Processing...</span>
              </div>
            )}
            
            {response && (
              <div className="mt-4">
                <p className="text-gray-400 text-sm mb-1">Assistant:</p>
                <p className="text-white">{response}</p>
              </div>
            )}
          </div>
          
          <div className="flex justify-center">
            <button
              onClick={toggleListening}
              className={`p-6 rounded-full transition-all duration-300 ${
                isListening 
                  ? 'bg-red-600 text-white animate-pulse'
                  : 'bg-red-500 text-white hover:bg-red-600'
              }`}
            >
              {isListening ? <MicOff size={24} /> : <Mic size={24} />}
            </button>
          </div>
          
          <p className="text-center text-gray-500 mt-4 text-sm">
            {isListening ? 'Listening... Click to stop' : 'Click the microphone to start speaking'}
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default VapiAssistant;
