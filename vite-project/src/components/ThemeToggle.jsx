import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

    useEffect(() =>{
        const storedTheme = localStorage.getItem("theme")
        if (storedTheme === "dark") {
            setIsDark(true);
            document.documentElement.classList.add("dark");    
        } else{
            document.documentElement.classList.add("dark");
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
    <button onClick={toggleTheme}>
    
      {""}
      {isDark ? (
        <Sun className="h-6 w-6 text-yellow-400" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900 dark:text-blue-300" />
      )}
    </button>
  );
};
