import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 backdrop-blur-md bg-[#22223b]/70 w-full border-b-4 border-cartoonPink shadow-cartoon">
        
        
        <nav className="w-full max-w-7xl mx-auto px-4 flex items-center justify-between h-16">        
          <div className="flex items-center space-x-2">
          <span className="text-3xl font-extrabold tracking-tight text-cartoonBlue font-cartoon drop-shadow">
            Benjamin Gauger
          </span>
        </div>
        <ul className="flex space-x-8">
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
              >
                {item.label}
              </motion.a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}