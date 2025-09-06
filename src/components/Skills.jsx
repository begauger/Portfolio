import { FaUser, FaLaptopCode, FaServer, FaGraduationCap } from "react-icons/fa";


export default function Skills() {
  return (
    <section id="skills" className="mb-12">
      <h3
  className="text-5xl font-extrabold mb-12 bg-gradient-to-r from-accentPurple via-[#FFF700] to-accentTeal bg-clip-text text-transparent drop-shadow-[0_4px_24px_rgba(255,247,0,0.6)]"
        >
       Skills & About Me
    </h3>
      <div className="flex flex-col md:flex-row gap-8">
        {/* About Me Card */}
        <div className="flex-1 bg-cardBg rounded-2xl p-8 border-2 border-accentPurple shadow-pop text-left mb-8 md:mb-0">
          <div className="flex items-center mb-4 gap-2">
            <FaUser className="text-[#FFF700] text-3xl" />
            <h4 className="text-3xl font-bold text-accentPurple">About Me</h4>
          </div>
          <p className="text-lg text-white mb-2">
            I’m Benjamin Gauger, a newly certified FullStack Software Developer. Previously an elementary school teacher with four years of experience. 
            I decided to take my love of teaching into the coding world and hope to mentor and teach others who decide to make a chance in their life!
            I love building modern, user-friendly web applications and am always eager to learn new technologies. 
            My passion is to help others. I don't know what would be more rewarding than helping others build something of their dream together.
          </p>
          <p className="text-lg text-accentPurple">
            I can't WAIT to make your dreams become reality!
          </p>
          <p className="italic text-2xl text-accentTeal mt-10">
            "The future belongs to those who believe in the beauty of their dreams—and have the courage to turn them into reality."
          </p>
        </div>

        {/* Skills Cards Column */}
        <div className="flex flex-col flex-1 gap-8">
          {/* Frontend Languages */}
          <div className="bg-cardBg rounded-2xl p-6 border-2 border-accentTeal shadow-pop">
            <div className="flex items-center mb-2 gap-2">
              <FaLaptopCode className="text-[#FFF700] text-2xl" />
              <h5 className="text-xl font-bold text-accentTeal">Frontend Languages</h5>
            </div>
            <ul className="list-disc list-inside text-white space-y-1">
              <li>HTML5</li>
              <li>CSS3 / Tailwind CSS</li>
              <li>JavaScript (ES6+)</li>
              <li>React / Vite</li>
            </ul>
          </div>
          {/* Backend Languages */}
          <div className="bg-cardBg rounded-2xl p-6 border-2 border-accentTeal shadow-pop">
            <div className="flex items-center mb-2 gap-2">
              <FaServer className="text-[#FFF700] text-2xl" />
              <h5 className="text-xl font-bold text-accentTeal">Backend Languages</h5>
            </div>
            <ul className="list-disc list-inside text-white space-y-1">
              <li>Node.js</li>
              <li>Python / Django</li>
              <li>PostgreSQL</li>
            </ul>
          </div>
          {/* School Experience */}
          <div className="bg-cardBg rounded-2xl p-6 border-2 border-accentTeal shadow-pop">
            <div className="flex items-center mb-2 gap-2">
              <FaGraduationCap className="text-[#FFF700] text-2xl" />
              <h5 className="text-xl font-bold text-accentTeal">Experience</h5>
            </div>
            <ul className="list-disc list-inside text-white space-y-1">
              <li>FullStack Software Development Certification</li>
              <li>Capstone project: Book CRUD Application</li>
              <li>Bachelors in Education</li>
              <li>Teacher with 4 years experience</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}