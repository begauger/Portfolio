import { useState } from "react";
import logo from '../assets/logo.JPG';
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

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
          className="md:hidden flex items-center justify-center w-10 h-10"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <FaTimes className="text-cartoonPink text-3xl" />
          ) : (
            <FaBars className="text-cartoonPink text-3xl" />
          )}
        </button>
        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-8 items-center">
          {navLinks.map((item) => (
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
          {/* Resume Button */}
          <li>
            <a
              href="/benjamingaugerresume.pdf"
              download
              className="ml-4 px-5 py-2 rounded-lg font-extrabold text-lg bg-gradient-to-r from-accentPurple via-accentTeal to-accentPurple bg-clip-text text-transparent border-2 border-accentTeal hover:from-[#FFF700] hover:via-accentTeal hover:to-accentPurple hover:text-[#FFF700] transition-all duration-200"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#22223b]/95 border-b-4 border-cartoonPink shadow-cartoon absolute top-16 left-0 w-full">
          <ul className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map((item) => (
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
            {/* Resume Button for Mobile */}
            <li>
              <a
                href="/benjamingaugerresume.pdf"
                download
                className="px-5 py-2 rounded-lg font-extrabold text-xl bg-gradient-to-r from-accentPurple via-accentTeal to-accentPurple bg-clip-text text-transparent border-2 border-accentTeal hover:from-[#FFF700] hover:via-accentTeal hover:to-accentPurple hover:text-[#FFF700] transition-all duration-200"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}