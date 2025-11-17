import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="p-4 bg-gray-900 text-white flex justify-between items-center">
      <div className="flex gap-4">
        <Link to="/" className="hover:text-blue-400">Home</Link>
        <Link to="/quotes" className="hover:text-blue-400">Quotes</Link>
      </div>

      <ThemeToggle />
    </nav>
  );
}
