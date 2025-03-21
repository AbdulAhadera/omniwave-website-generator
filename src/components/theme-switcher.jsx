
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.className = savedTheme;
    } else if (prefersDark) {
      setTheme("dark");
      document.documentElement.className = "dark";
    } else {
      setTheme("light");
      document.documentElement.className = "light";
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    
    // Update document class
    document.documentElement.className = newTheme;
    
    // Save preference
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-background/10 backdrop-blur-sm border border-white/10 hover:bg-background/20 transition-all duration-300 text-white"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  );
};

export default ThemeSwitcher;
