
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Features from "../components/features";
import Process from "../components/process";
import AiDemo from "../components/ai-demo";
import Testimonials from "../components/testimonials";
import FAQ from "../components/faq";
import Contact from "../components/contact";
import Integrations from "../components/integrations";
import VapiAssistant from "../components/vapi-assistant";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Features />
      <Process />
      <AiDemo />
      <Integrations />
      <VapiAssistant />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
