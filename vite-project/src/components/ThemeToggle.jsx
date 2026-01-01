import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

    useEffect(() =>{
        const storedTheme = localStorage.getItem("theme")
        if (storedTheme === "dark") {
            setIsDark(true);
            document.documentElement.classList.add("dark");    
        } else{
            localStorage.setItem("theme", "light");
            setIsDark(false);
        }
    }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed top-5 right-5 z-50",
        "p-2 rounded-full",

        "transition-transform duration-300 hover:scale-110",
        "focus:outline-none"
      )}
    >
      {isDark ? (
        <Sun className="h-6 w-6 text-yellow-400" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900 " />
      )}
    </button>
  );
};
