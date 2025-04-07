
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import VoiceAssistant from "@/components/voice-assistant";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
});

const ContactForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear error when typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
  };

  const validateForm = () => {
    try {
      formSchema.parse(formData);
      return true;
    } catch (error) {
      const formattedErrors = {};
      error.errors.forEach((err) => {
        formattedErrors[err.path[0]] = err.message;
      });
      setErrors(formattedErrors);
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      toast.success("Form submitted successfully!");
      setIsSubmitted(true);
    } else {
      toast.error("Please fill all required fields correctly.");
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#141414" }}>
      <Navbar />
      
      <div className="flex-grow container mx-auto px-4 py-12">
        {!isSubmitted ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-md mx-auto box-background rounded-xl p-8 shadow-lg border border-gray-700"
          >
            <h2 className="text-2xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#007bff] to-[#00BFFF]">
              Request Demo Call
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-1">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full p-3 rounded-lg bg-gray-800 text-white border ${
                    errors.name ? "border-red-500" : "border-gray-700"
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white font-medium mb-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full p-3 rounded-lg bg-gray-800 text-white border ${
                    errors.email ? "border-red-500" : "border-gray-700"
                  }`}
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-white font-medium mb-1">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full p-3 rounded-lg bg-gray-800 text-white border ${
                    errors.phone ? "border-red-500" : "border-gray-700"
                  }`}
                  placeholder="Enter your phone number"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>
              
              <button
                type="submit"
                className="w-full py-3 px-4 bg-gradient-to-r from-[#007bff] to-[#00BFFF] text-white font-medium rounded-lg hover:opacity-90 transition duration-300"
              >
                Start Demo Call
              </button>
            </form>
          </motion.div>
        ) : (
          <VoiceAssistant name={formData.name} />
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default ContactForm;
