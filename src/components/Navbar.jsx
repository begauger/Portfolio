import { useState } from "react";
import { motion } from "framer-motion";
import logo from '../assets/logo.JPG'; // Update if needed

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full backdrop-blur-md bg-[#22223b]/70 border-b-4 border-cartoonPink shadow-cartoon">
      <nav className="w-full max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" aria-label="Home">
          <img
            src={logo}
            alt="Logo"
            className="rounded-full shadow-lg"
            style={{
              height: "56px",
              width: "56px",
              objectFit: "cover",
              background: "#FFF700",
              padding: "6px",
              boxShadow: "0 0 24px #FFF700, 0 2px 8px rgba(0,0,0,0.15)"
            }}
          />
        </a>
        {/* Hamburger Icon */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-8 h-1 bg-cartoonPink mb-1 rounded transition-all"></span>
          <span className="block w-8 h-1 bg-cartoonPink mb-1 rounded transition-all"></span>
          <span className="block w-8 h-1 bg-cartoonPink rounded transition-all"></span>
        </button>
        {/* Nav Links */}
        <ul className="hidden md:flex space-x-8">
          {[
            { href: "#projects", label: "Projects" },
            { href: "#experience", label: "Experience" },
            { href: "#skills", label: "Skills" },
            { href: "#contact", label: "Contact" },
          ].map((item) => (
            <li key={item.href}>
              <motion.a
                href={item.href}
                className="text-cartoonPink font-cartoon text-lg transition-colors duration-200"
                whileHover={{ scale: 1.15, color: "#FFF700" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </motion.a>
            </li>
          ))}
        </ul>
      </nav>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#22223b]/95 border-b-4 border-cartoonPink shadow-cartoon">
          <ul className="flex flex-col items-center py-4 space-y-4">
            {[
              { href: "#projects", label: "Projects" },
              { href: "#experience", label: "Experience" },
              { href: "#skills", label: "Skills" },
              { href: "#contact", label: "Contact" },
            ].map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-cartoonPink font-cartoon text-xl"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}