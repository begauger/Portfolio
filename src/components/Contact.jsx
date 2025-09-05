import { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("begauger00@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section id="contact" className="mb-20">
      <h3
        className="text-5xl font-extrabold mb-12 bg-gradient-to-r from-accentPurple via-[#FFF700] to-accentTeal bg-clip-text text-transparent drop-shadow-[0_4px_24px_rgba(255,247,0,0.6)]"
      >
        Contact
      </h3>
      <div className="flex flex-col md:flex-row justify-center items-center gap-12">
        {/* Email */}
        <a
          href="mailto:begauger00@gmail.com"
          className="flex flex-col items-center group relative"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope className="text-[#FFF700] text-6xl mb-2 group-hover:scale-110 transition-transform" />
          <span className="text-accentTeal text-xl font-semibold group-hover:underline">Email</span>
          {/* Tooltip with Copy Button */}
          <span className="absolute -bottom-14 left-1/2 -translate-x-1/2 bg-darkBg text-[#FFF700] text-sm px-3 py-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto z-10 flex flex-col items-center gap-2">
            begauger00@gmail.com
            <button
              type="button"
              onClick={e => {
                e.preventDefault();
                handleCopy();
              }}
              className="bg-[#FFF700] text-darkBg px-2 py-1 rounded text-xs font-bold hover:bg-accentTeal hover:text-white transition-colors pointer-events-auto"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </span>
        </a>
        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/yourprofile"
          className="flex flex-col items-center group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-[#FFF700] text-6xl mb-2 group-hover:scale-110 transition-transform" />
          <span className="text-accentTeal text-xl font-semibold group-hover:underline">LinkedIn</span>
        </a>
        {/* GitHub */}
        <a
          href="https://github.com/begauger"
          className="flex flex-col items-center group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-[#FFF700] text-6xl mb-2 group-hover:scale-110 transition-transform" />
          <span className="text-accentTeal text-xl font-semibold group-hover:underline">GitHub</span>
        </a>
      </div>
    </section>
  );
}