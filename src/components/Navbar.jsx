import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const links = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
     { name: "Blog", path: "/blog" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 shadow-md backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-5 py-4 flex justify-between items-center">
        
        <h1 className="text-2xl font-bold text-green-600 dark:text-green-400">
  <Link to="/" className="hover:underline">
    saurabh.dev
  </Link>
</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          {links.map((link) => (
            <li key={link.name}>
              <Link to={link.path} className="hover:text-green-500 dark:hover:text-green-400">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button onClick={() => setDarkMode(!darkMode)} className="text-xl">
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white dark:bg-gray-900 flex flex-col gap-6 px-6 py-6 font-medium">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="hover:text-green-500 dark:hover:text-green-400"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
