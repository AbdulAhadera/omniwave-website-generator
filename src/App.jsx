
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ContactForm from "./pages/ContactForm";
import { ThemeProvider } from "./components/theme-provider";
import { Toaster } from "sonner";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="viteTheme">
      <Toaster position="top-right" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact-form" element={<ContactForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
