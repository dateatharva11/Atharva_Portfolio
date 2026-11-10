import { useCallback, useState } from "react";

const readTheme = () =>
  document.documentElement.dataset.theme === "light" ? "light" : "dark";

// The initial theme is applied in index.html before React loads; this keeps it in sync.
export const useTheme = () => {
  const [theme, setTheme] = useState(readTheme);

  const toggleTheme = useCallback(() => {
    const next = readTheme() === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage can be unavailable (private mode); the theme still applies for this visit.
    }
    setTheme(next);
  }, []);

  return { theme, toggleTheme };
};
