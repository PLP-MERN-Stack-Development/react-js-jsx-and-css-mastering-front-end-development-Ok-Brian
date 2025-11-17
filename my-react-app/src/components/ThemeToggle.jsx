import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(AppContext);

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
    >
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
}
