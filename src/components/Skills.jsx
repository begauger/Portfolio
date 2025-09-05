export default function Skills() {
  return (
    <section id="skills" className="mb-12">
      <h3 className="text-2xl font-semibold mb-8 text-accentWhite">Skills & Experience</h3>
      <div className="flex flex-col md:flex-row gap-8">
        {/* About Me Card */}
        <div className="flex-1 bg-cardBg rounded-2xl p-8 border-2 border-accentPurple shadow-pop text-left mb-8 md:mb-0">
          <h4 className="text-3xl font-bold mb-4 text-accentPurple">About Me</h4>
          <p className="text-lg text-white mb-2">
            I’m Benjamin Gauger, a newly certified FullStack Software Developer. I love building modern, user-friendly web applications and am always eager to learn new technologies. My passion is solving problems and collaborating with others to create innovative solutions.
          </p>
          <p className="text-lg text-accentPurple">
            I’m excited to bring my skills and energy to a dynamic team!
          </p>
        </div>

        {/* Skills Cards Column */}
        <div className="flex flex-col flex-1 gap-8">
          {/* Frontend Languages */}
          <div className="bg-cardBg rounded-2xl p-6 border-2 border-accentTeal shadow-pop">
            <h5 className="text-xl font-bold mb-2 text-accentTeal">Frontend Languages</h5>
            <ul className="list-disc list-inside text-white space-y-1">
              <li>HTML5</li>
              <li>CSS3 / Tailwind CSS</li>
              <li>JavaScript (ES6+)</li>
              <li>React</li>
            </ul>
          </div>
          {/* Backend Languages */}
          <div className="bg-cardBg rounded-2xl p-6 border-2 border-accentTeal shadow-pop">
            <h5 className="text-xl font-bold mb-2 text-accentTeal">Backend Languages</h5>
            <ul className="list-disc list-inside text-white space-y-1">
              <li>Node.js</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>SQL</li>
              <li>Python</li>
            </ul>
          </div>
          {/* School Experience */}
          <div className="bg-cardBg rounded-2xl p-6 border-2 border-accentTeal shadow-pop">
            <h5 className="text-xl font-bold mb-2 text-accentTeal">School Experience</h5>
            <ul className="list-disc list-inside text-white space-y-1">
              <li>FullStack Software Development Certification</li>
              <li>Team projects & Agile workflow</li>
              <li>Capstone project: [Your Project Name]</li>
              <li>Consistent top performer in coursework</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}