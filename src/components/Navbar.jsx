export default function Navbar() {
  return (
    <header className="backdrop-blur-md bg-[#22223b]/70 w-full border-b-4 border-cartoonPink shadow-cartoon">
      <nav className="w-full max-w-7xl mx-auto px-4 flex items-center justify-between h-20">
        <div className="flex items-center space-x-2">
          <span className="text-3xl font-extrabold tracking-tight text-cartoonBlue font-cartoon drop-shadow">
            Benjamin Gauger
          </span>
        </div>
        <ul className="flex space-x-8">
          <li>
            <a
              href="#projects"
              className="text-cartoonPink font-cartoon text-lg transition-colors duration-200 hover:text-[#FFF700]"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="text-cartoonPink font-cartoon text-lg transition-colors duration-200 hover:text-[#FFF700]"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="text-cartoonPink font-cartoon text-lg transition-colors duration-200 hover:text-[#FFF700]"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-cartoonPink font-cartoon text-lg transition-colors duration-200 hover:text-[#FFF700]"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}