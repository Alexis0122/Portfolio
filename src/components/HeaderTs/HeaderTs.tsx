import { useEffect, useState } from "react";
import clsx from "clsx";
import { List, X } from "@phosphor-icons/react"; // Hamburguesa y cerrar

const sections = ["home", "about", "projects", "contact"];

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const offsetTop = el.offsetTop - 120;
          const offsetBottom = offsetTop + el.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(id);
          }
        }
      }
    }; 

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: "smooth",
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed w-full shadow-sm z-50 bg-white/5 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="/"
          className="text-2xl font-bold text-indigo-600"
          onClick={() => handleNavClick("home")}
        >
          A<span className="text-gray-800">R</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {sections.map((id) => (
            <button
              key={id}
              onClick={() => handleNavClick(id)}
              className={clsx(
                "nav-link font-medium transition",
                activeSection === id
                  ? "text-indigo-600 active"
                  : "text-gray-600 hover:text-indigo-600"
              )}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="md:hidden text-gray-500 focus:outline-none"
        >
          {isMobileMenuOpen ? <X size={28} /> : <List size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={clsx(
          "md:hidden flex flex-col items-center bg-white/5 px-6 transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "max-h-96 py-4" : "max-h-0"
        )}
      >
        {sections.map((id) => (
          <button
            key={id}
            onClick={() => handleNavClick(id)}
            className={clsx(
              "py-2 font-medium text-lg w-full text-center transition",
              activeSection === id
                ? "text-indigo-600"
                : "text-gray-300 hover:text-indigo-600"
            )}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </button>
        ))}
      </div>
    </header>
  );
}
