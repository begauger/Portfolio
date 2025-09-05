import { FaUniversity, FaUsers } from "react-icons/fa";

export default function Experience() {
  return (
    <section id="experience" className="mb-20">
      <h3
        className="text-5xl font-extrabold mb-12 bg-gradient-to-r from-accentPurple via-[#FFF700] to-accentTeal bg-clip-text text-transparent drop-shadow-[0_4px_24px_rgba(255,247,0,0.6)]"
      >
        Experience
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Education Card */}
        <div className="relative bg-cardBg rounded-[2rem] p-10 border-2 border-accentTeal shadow-lg transition-transform transition-shadow duration-200 hover:shadow-pop hover:-translate-y-1">
          <FaUniversity className="absolute -top-6 left-6 text-[#FFF700] text-4xl drop-shadow" />
          <h4 className="font-extrabold text-3xl text-accentTeal mb-4 pl-10 drop-shadow-[0_2px_8px_rgba(45,226,230,0.4)]">
            Education
          </h4>
          <p className="text-accentPurple mb-1 font-semibold">University of Wisconsin–Parkside</p>
          <p className="text-white mb-1">
            <span className="font-bold text-accentTeal">FullStack Software Developer Certification</span>
          </p>
          <p className="text-white">
            Completed an intensive program focused on modern web development, teamwork, and real-world projects.
          </p>
        </div>
        {/* Independent Group Work Card */}
        <div className="relative bg-cardBg rounded-[2rem] p-10 border-2 border-accentPurple shadow-lg transition-transform transition-shadow duration-200 hover:shadow-pop hover:-translate-y-1">
          <FaUsers className="absolute -top-6 left-6 text-[#FFF700] text-4xl drop-shadow" />
          <h4 className="font-extrabold text-3xl text-accentPurple mb-4 pl-10 drop-shadow-[0_2px_8px_rgba(162,89,247,0.4)]">
            Independent Group Work
          </h4>
          <p className="text-accentTeal mb-1 font-semibold">Software Developer Collaboration</p>
          <p className="text-white">
            Worked with a team of software developers on independent projects, sharing knowledge, solving problems, and building real applications together.
          </p>
        </div>
      </div>
    </section>
  );
}