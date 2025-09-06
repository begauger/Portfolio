import Navbar from './components/Navbar';
import Skills from './components/Skills';
import profilePic from './assets/waterfall2.jpg';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import SpinningCube from './components/SpinningCube';

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-darkBg text-white font-display">
      <Navbar />

      <main className="w-full max-w-7xl mx-auto px-4 py-12 flex-1 pt-24">
        {/* Hero Section */}
        <section id="hero" className="flex flex-col md:flex-row items-center mb-20">
          <section className="flex items-center justify-start mb-12 min-h-[300px]">
            <div className="w-60 h-60 rounded-full overflow-hidden border-8 border-accentPurple shadow-pop mr-12 flex-shrink-0">
              <img
                src={profilePic}
                alt="Benjamin Gauger"
                className="w-full h-full object-cover object-top scale-125"
              />
              
            </div>
            <div>
              <h2 className="text-3xl font-extrabold mb-2 text-white">Hi, I'm</h2>
              <h1 className="text-7xl font-extrabold mb-4 bg-gradient-to-r from-accentPurple via-accentTeal to-accentPurple bg-clip-text text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.08)' }}>
                <span className="flex items-center gap-4">
                  Benjamin Gauger
                  <span className="ml-4">
                    <SpinningCube />
                  </span>
                </span>
              </h1>
              
              <p className="text-2xl text-accentTeal">
                Certified FullStack Software Developer.<br />
                I build modern, user-friendly web applications. Let's make your dreams a reality!<br />
              </p>
              
            </div>
          </section>
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