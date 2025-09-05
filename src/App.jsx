import Navbar from './components/Navbar';
import Skills from './components/Skills';

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-darkBg text-white font-display">
      <Navbar />

      <main className="w-full max-w-7xl mx-auto px-4 py-12 flex-1">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-accentPurple">Welcome to My Portfolio</h2>
          <p className="text-lg text-accentTeal">
            Hi, I am <span className="text-accentTeal font-bold">Benjamin Gauger</span> and I have recently completed my education and certification in FullStack Software Development.<br />
            I’m passionate about building modern web applications and eager to contribute my skills to a dynamic team!
          </p>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-accentPurple">Projects</h3>
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

        {/* Experience Section */}
        <section id="experience" className="mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-accentPurple">Experience</h3>
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

        {/* Skills Section */}
        <Skills />

        {/* Contact Section */}
        <section id="contact" className="mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-accentPurple">Contact</h3>
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