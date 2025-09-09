import project1Img from '../assets/CRUD.jpeg';
import project2Img from '../assets/portfolio.png';
import project3Img from '../assets/chatbot.jpg';

export default function Projects() {
  return (
    <section id="projects" className="mb-20">
      <h3
  className="text-5xl font-extrabold mb-12 bg-gradient-to-r from-accentPurple via-[#FFF700] to-accentTeal bg-clip-text text-transparent drop-shadow-[0_4px_24px_rgba(255,247,0,0.6)]"
    >
        Projects
    </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Project 1 */}
        <div className="bg-cardBg rounded-2xl p-6 border-2 border-accentPurple transition-transform transition-shadow duration-200 hover:shadow-pop hover:-translate-y-1 hover:border-[#FFF700]">
          <h4 className="font-bold text-xl text-accentTeal mb-2">Book CRUD App</h4>
          <p className="text-accentPurple mb-4">
            A fullstack app to create, read, update, and delete books. Built with React, Pyton, Node.js, and SQlite.
          </p>
          <a
            href="https://github.com/begauger/Django-CRUD-Project"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={project1Img}
              alt="Book CRUD App"
              className="rounded-lg w-full h-40 object-cover border-2 border-[#FFF700] hover:scale-105 transition-transform duration-200 cursor-pointer"
            />
          </a>
        </div>
        {/* Project 2 */}
        <div className="bg-cardBg rounded-2xl p-6 border-2 border-accentTeal transition-transform transition-shadow duration-200 hover:shadow-pop hover:-translate-y-1 hover:border-[#FFF700]">
          <h4 className="font-bold text-xl text-accentPurple mb-2">Portfolio Website</h4>
          <p className="text-accentTeal mb-4">
            My personal portfolio built with React and Tailwind CSS, showcasing my projects and skills.
          </p>
          <a
            href="https://github.com/begauger/Portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={project2Img}
              alt="Portfolio Website"
              className="rounded-lg w-full h-40 object-cover border-2 border-[#FFF700] hover:scale-105 transition-transform duration-200 cursor-pointer"
            />
          </a>
        </div>
        {/* Project 3 */}
        <div className="bg-cardBg rounded-2xl p-6 border-2 border-accentPurple transition-transform transition-shadow duration-200 hover:shadow-pop hover:-translate-y-1 hover:border-[#FFF700]">
          <h4 className="font-bold text-xl text-accentTeal mb-2">Play2Learn</h4>
          <p className="text-accentPurple mb-4">
            An educational resource for people to learn math and reading in a fun games format! This site features calculator and anagram games.
          </p>
          <a
            href="https://github.com/begauger/Play2Learn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={project3Img}
              alt="AI Chatbot"
              className="rounded-lg w-full h-40 object-cover border-2 border-[#FFF700] hover:scale-105 transition-transform duration-200 cursor-pointer"
            />
          </a>
        </div>
      </div>
      {/* Future Projects Card */}
        <div className="mt-8 flex justify-center">
        <div className="bg-cardBg rounded-2xl p-6 border-2 border-dashed border-accentTeal w-full max-w-2xl text-center">
            <h4 className="font-bold text-xl text-accentTeal mb-2">Future Projects</h4>
            <p className="text-accentPurple">
            Stay tuned! More exciting projects are on the way as I continue to learn and grow as a developer.
            </p>
            <div className="w-16 h-1 bg-[#FFF700] rounded-full my-4 mx-auto" />
            <p className="text-accentPurple">
            Coming Soon : Trading Card Website, Podcast Website, Social Media App, and more!
            </p>
        </div>
        </div>
    </section>
  );
}