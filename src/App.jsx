// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import SpinningCube from './components/SpinningCube';

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-darkBg text-white font-display">
      <Navbar />

      <main className="w-full max-w-7xl mx-auto px-4 py-12 flex-1 pt-24">
        {/* Dynamic Hero Section */}
        <section id="hero" className="flex flex-col items-center justify-center mb-20 min-h-[350px]">
          {/* Hi, I'm */}
          <motion.h2
            className="text-3xl font-extrabold mb-2 text-white"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9, type: "spring" }}
          >
            Hi, I'm
          </motion.h2>
          {/* Name + Cube */}
             <motion.h1
          className="text-7xl font-extrabold mb-4 bg-gradient-to-r from-accentPurple via-accentTeal to-accentPurple bg-clip-text text-transparent flex items-center gap-4"
          style={{ WebkitTextStroke: '1px rgba(255,255,255,0.08)' }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 1.5, type: "spring" }}
        >
          <span style={{ paddingLeft: "15rem" }}>Benjamin Gauger</span>
          <span className="ml-4">
            <SpinningCube />
          </span>
            </motion.h1>
          {/* Tagline */}
          <motion.p
            className="text-2xl text-accentTeal text-center max-w-2xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 1.3, type: "spring" }}
          >
            Certified FullStack Software Developer.<br />
            I build modern, user-friendly web applications.<br />
            Let's make your dreams a reality!
          </motion.p>
        </section>
        
        {/* Break Bar */}
        <div className="w-full h-1 bg-[#FFF700] rounded-full mb-12" />
        
        {/* Skills Section */}
        <Skills />

        {/* Break Bar */}
        <div className="w-full h-1 bg-[#FFF700] rounded-full mb-12" />

        {/* Projects Section */}
        <Projects />

        {/* Break Bar */}
        <div className="w-full h-1 bg-[#FFF700] rounded-full mb-12" />

        {/* Experience Section */}
        <Experience />

        {/* Break Bar */}
        <div className="w-full h-1 bg-[#FFF700] rounded-full mb-12" />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-cardBg text-accentPurple py-4 text-center w-full shadow-pop border-t-2 border-accentPurple">
        &copy; {new Date().getFullYear()} Benjamin Gauger. All rights reserved.
      </footer>
    </div>
  );
}

export default App;