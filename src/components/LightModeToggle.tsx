import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function LightModeToggle() {
  const { resolvedTheme, toggleTheme } = useTheme();
  const isLight = resolvedTheme === 'light';

  return (
    <button
      className="relative w-9 h-9 flex items-center justify-center rounded-full text-[var(--color-ivory)] hover:text-[var(--color-gold)] transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)]"
      onClick={toggleTheme}
      aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
      role="switch"
      aria-checked={isLight}
    >
      <Sun
        size={18}
        className={`absolute transition-all duration-300 ${
          isLight ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
        }`}
      />
      <Moon
        size={18}
        className={`absolute transition-all duration-300 ${
          isLight ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
        }`}
      />
    </button>
  );
}
