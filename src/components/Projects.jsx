import project1Img from '../assets/CRUD.jpeg';
import project2Img from '../assets/pkbrew.png'; // Add PKBrew screenshot
import project3Img from '../assets/snshn.png'; // Add SNSHN screenshot
import project4Img from '../assets/end10.JPG'; // Trinity Virtual Tour image

export default function Projects() {
  return (
    <section id="projects" className="mb-20">
      <h3
        className="text-5xl font-extrabold mb-12 bg-gradient-to-r from-accentPurple via-[#FFF700] to-accentTeal bg-clip-text text-transparent drop-shadow-[0_4px_24px_rgba(255,247,0,0.6)]"
      >
        Projects
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Project 1 */}
        <div className="bg-cardBg rounded-2xl p-4 border-2 border-accentPurple transition-transform transition-shadow duration-200 hover:shadow-pop hover:-translate-y-1 hover:border-[#FFF700]">
          <h4 className="font-bold text-xl text-accentTeal mb-2">Book CRUD App</h4>
          <p className="text-accentPurple mb-4">
            A fullstack app to create, read, update, and delete books. Built with React, Python, Node.js, and SQLite. Check it out!
          </p>
          <a
            href="https://github.com/begauger/Django-CRUD-Project"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={project1Img}
              alt="Book CRUD App"
              className="rounded-lg w-full h-28 object-cover border-2 border-[#FFF700] hover:scale-105 transition-transform duration-200 cursor-pointer"
            />
          </a>
        </div>
        {/* Project 2 */}
        <div className="bg-cardBg rounded-2xl p-4 border-2 border-accentTeal transition-transform transition-shadow duration-200 hover:shadow-pop hover:-translate-y-1 hover:border-[#FFF700]">
          <h4 className="font-bold text-xl text-accentPurple mb-2">PKBrew</h4>
          <p className="text-accentTeal mb-4">
            A specialized coffee builder for people with PKU (Phenylketonuria). Build your own Low-Pro Coffees today!
          </p>
          <a
            href="https://pkbrew.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={project2Img}
              alt="PKBrew"
              className="rounded-lg w-full h-28 object-cover border-2 border-[#FFF700] hover:scale-105 transition-transform duration-200 cursor-pointer"
            />
          </a>
        </div>
        {/* Project 3 */}
        <div className="bg-cardBg rounded-2xl p-4 border-2 border-accentPurple transition-transform transition-shadow duration-200 hover:shadow-pop hover:-translate-y-1 hover:border-[#FFF700]">
          <h4 className="font-bold text-xl text-accentTeal mb-2">SNSHN Real Estate</h4>
          <p className="text-accentPurple mb-4">
            A modern real estate company website built with React, Implements AI tools, and backend mailing.
          </p>
          <a
            href="https://snshn-website.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={project3Img}
              alt="SNSHN Real Estate"
              className="rounded-lg w-full h-28 object-cover border-2 border-[#FFF700] hover:scale-105 transition-transform duration-200 cursor-pointer"
            />
          </a>
        </div>
        {/* Project 4 */}
        <div className="bg-cardBg rounded-2xl p-4 border-2 border-accentTeal transition-transform transition-shadow duration-200 hover:shadow-pop hover:-translate-y-1 hover:border-[#FFF700]">
          <h4 className="font-bold text-xl text-accentPurple mb-2">Trinity Virtual Tour</h4>
          <p className="text-accentTeal mb-4">
            A virtual tour created using React of my home church and school! Click below to take the virtual tour! Thank you
          </p>
          <a
            href="https://virtual-tour-trinity.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={project4Img}
              alt="Trinity Virtual Tour"
              className="rounded-lg w-full h-28 object-cover border-2 border-[#FFF700] hover:scale-105 transition-transform duration-200 cursor-pointer"
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
            Coming Soon: Trading Card Website, Podcast Website, Social Media App, and more!
          </p>
        </div>
      </div>
    </section>
  );
}