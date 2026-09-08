import { useEffect, useState } from "react";
import clsx from "clsx";
import { List, X } from "@phosphor-icons/react";

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
    <header className="fixed w-full z-50 bg-base/40 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="/"
          className="text-2xl font-bold"
          onClick={() => handleNavClick("home")}
        >
          <span className="bg-gradient-to-r from-duron to-duron-light bg-clip-text text-transparent hover:from-duron-light hover:to-purple-300 transition-all duration-300">
            A<span className="text-white">R</span>
          </span>
        </a>

        <nav className="hidden md:flex space-x-8">
          {sections.map((id) => (
            <button
              key={id}
              onClick={() => handleNavClick(id)}
              className={clsx(
                "nav-link font-medium transition-colors",
                activeSection === id
                  ? "text-duron active"
                  : "text-white/80 hover:text-duron-light"
              )}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
        </nav>

        <button
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="md:hidden text-white/80 hover:text-duron-light focus:outline-none transition-colors"
        >
          {isMobileMenuOpen ? <X size={28} /> : <List size={28} />}
        </button>
      </div>

      <div
        className={clsx(
          "md:hidden flex flex-col items-center bg-base/60 backdrop-blur-xl border-b border-white/5 transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "max-h-96 py-4" : "max-h-0"
        )}
      >
        {sections.map((id) => (
          <button
            key={id}
            onClick={() => handleNavClick(id)}
            className={clsx(
              "py-2 font-medium text-lg w-full text-center transition-colors",
              activeSection === id
                ? "text-duron"
                : "text-white/80 hover:text-duron-light"
            )}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </button>
        ))}
      </div>
    </header>
  );
}
