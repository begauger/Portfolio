// filepath: c:\Users\begau\OneDrive\Desktop\Code Projects\Portfolio\my-portfolio\src\components\Skills.jsx
export default function Skills() {
  return (
    <section id="skills" className="mb-12">
      <h3 className="text-2xl font-semibold mb-4 text-cyberpunkPink font-futuristic drop-shadow-neon">Skills</h3>
      <div className="flex flex-wrap gap-3">
        <span className="bg-cyberpunkBlue text-cyberpunkBg px-3 py-1 rounded-full font-bold shadow-neon">React</span>
        <span className="bg-cyberpunkPink text-cyberpunkBg px-3 py-1 rounded-full font-bold shadow-neon">Tailwind CSS</span>
        <span className="bg-cyberpunkPurple text-cyberpunkYellow px-3 py-1 rounded-full font-bold shadow-neon">JavaScript</span>
        <span className="bg-cyberpunkYellow text-cyberpunkBg px-3 py-1 rounded-full font-bold shadow-neon">HTML</span>
        <span className="bg-cyberpunkBlue text-cyberpunkBg px-3 py-1 rounded-full font-bold shadow-neon">CSS</span>
        {/* Add more skills as needed */}
      </div>
    </section>
  );
}