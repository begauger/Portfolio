    import Navbar from './components/Navbar';
    import Skills from './components/Skills';
    import profilePic from './assets/waterfall2.jpg'; // <-- Make sure to add your image here

    function App() {
      return (
      <div className="min-h-screen w-full flex flex-col bg-darkBg text-white font-display">
        <Navbar />

      <main className="w-full max-w-7xl mx-auto px-4 py-12 flex-1">
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
              Benjamin Gauger
            </h1>
            <p className="text-2xl text-accentTeal">
              Newly Certified FullStack Software Developer.<br />
              I’m passionate about building modern web applications and eager to contribute my skills to a dynamic team!
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
        <section id="projects" className="mb-20">
          <h3 className="text-2xl font-semibold mb-4 text-accentWhite">Projects</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-cardBg rounded-2xl p-4 border-2 border-accentPurple transition-transform transition-shadow duration-200 hover:shadow-pop hover:-translate-y-1 hover:border-accentYellow">
              <h4 className="font-bold mb-2 text-accentTeal">Project 1</h4>
              <p className="text-accentPurple">Short description of your project.</p>
            </div>
            <div className="bg-cardBg rounded-2xl p-4 border-2 border-accentTeal transition-transform transition-shadow duration-200 hover:shadow-pop hover:-translate-y-1 hover:border-accentYellow">
              <h4 className="font-bold mb-2 text-accentPurple">Project 2</h4>
              <p className="text-accentTeal">Short description of your project.</p>
            </div>
            <div className="bg-cardBg rounded-2xl p-4 border-2 border-accentPurple transition-transform transition-shadow duration-200 hover:shadow-pop hover:-translate-y-1 hover:border-accentYellow">
              <h4 className="font-bold mb-2 text-accentTeal">Project 3</h4>
              <p className="text-accentPurple">Short description of your project.</p>
            </div>
          </div>
        </section>

        {/* Break Bar */}
          <div className="w-full h-1 bg-[#FFF700] rounded-full mb-12" />

        {/* Experience Section */}
        <section id="experience" className="mb-20">
          <h3 className="text-2xl font-semibold mb-4 text-accentWhite">Experience</h3>
          <ul className="space-y-4">
            <li className="bg-cardBg rounded-2xl p-4 border-2 border-accentTeal transition-transform transition-shadow duration-200 hover:shadow-pop hover:-translate-y-1 hover:border-accentYellow">
              <span className="font-bold text-accentTeal">Job Title</span> at Company (Year-Year)
              <p className="text-accentPurple">Brief description of your role and achievements.</p>
            </li>
            <li className="bg-cardBg rounded-2xl p-4 border-2 border-accentPurple transition-transform transition-shadow duration-200 hover:shadow-pop hover:-translate-y-1 hover:border-accentYellow">
              <span className="font-bold text-accentTeal">Job Title</span> at Company (Year-Year)
              <p className="text-accentTeal">Brief description of your role and achievements.</p>
            </li>
          </ul>
        </section>

        {/* Break Bar */}
          <div className="w-full h-1 bg-[#FFF700] rounded-full mb-12" />

        

        {/* Contact Section */}
        <section id="contact" className="mb-20">
          <h3 className="text-2xl font-semibold mb-4 text-accentWhite">Contact</h3>
          <p className="text-accentTeal mb-2">
            Email: <a href="mailto:your@email.com" className="text-accentPurple underline hover:text-accentYellow">your@email.com</a>
          </p>
          <p className="text-accentTeal">
            LinkedIn: <a href="https://linkedin.com/in/yourprofile" className="text-accentPurple underline hover:text-accentYellow">yourprofile</a>
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-cardBg text-accentPurple py-4 text-center w-full shadow-pop border-t-2 border-accentPurple">
        &copy; {new Date().getFullYear()} Benjamin Gauger. All rights reserved.
      </footer>
    </div>
  );
}

export default App;