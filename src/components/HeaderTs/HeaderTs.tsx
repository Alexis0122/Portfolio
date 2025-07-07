import { useEffect, useState } from "react";
import clsx from "clsx";

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
    <header className="fixed w-full shadow-sm z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
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

        {/* {/* Mobile Menu Button */}
        {/* <button
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="md:hidden text-gray-600 focus:outline-none"
        >
          <i className="fas fa-bars text-2xl" />
        </button>  */}
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col space-y-2">
          {sections.map((id) => (
            <button
              key={id}
              onClick={() => handleNavClick(id)}
              className={clsx(
                "block py-2 font-medium text-left transition",
                activeSection === id
                  ? "text-indigo-600"
                  : "text-gray-600 hover:text-indigo-600"
              )}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
