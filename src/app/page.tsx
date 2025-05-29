export default function Portfolio() {
  return (
    <div className="min-h-screen p-10 bg-gradient-to-br from-purple-950 via-purple-950 to-black text-white">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <img src="/A1A1A1.jpg" alt="Ricardo Veloso" className="w-40 h-40 rounded-full mx-auto shadow-xl border-4 border-purple-500" />
          <h1 className="text-5xl font-extrabold tracking-tight text-white">Ricardo Veloso</h1>
          <p className="text-2xl text-purple-300 font-medium">Full Stack Developer</p>
          <p className="text-lg italic text-purple-400">"Think it. Code it. Push it."</p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="https://www.linkedin.com/in/ricardoveloso24/" target="_blank" className="bg-pink-500 text-white px-5 py-2 rounded-full shadow-lg hover:bg-pink-600">LinkedIn</a>
            <a href="https://github.com/ricardoVeloso2424" target="_blank" className="bg-cyan-500 text-white px-5 py-2 rounded-full shadow-lg hover:bg-cyan-600">GitHub</a>
            <a href="/CVRicardoVeloso.pdf" target="_blank" className="bg-green-500 text-white px-5 py-2 rounded-full shadow-lg hover:bg-green-600">Resume</a>
          </div>
        </section>

        {/* About Section */}
        <section className="space-y-4">
          <h2 className="text-3xl font-semibold border-b-2 border-purple-400 pb-2">About Me</h2>
          <p className="text-lg leading-relaxed text-purple-100">
            Passionate programmer transitioning from education into tech, currently enrolled in the Code for All_ bootcamp. Gaining hands-on experience in C++, Haskell, SQL, Java, OOP, JavaScript, full-stack development, and database management. Skilled in problem-solving, teamwork, adaptability, and critical thinking. Committed to continuous learning, with real-world projects showcasing software engineering and AI interests. Eager to apply technical and transferable skills to a dynamic tech role.
          </p>
        </section>

        {/* Skills Section */}
        <section className="space-y-4">
          <h2 className="text-3xl font-semibold border-b-2 border-purple-400 pb-2">Skills</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center text-md">
            {['Java', 'JavaScript', 'HTML', 'CSS', 'Spring', 'React', 'SQL', 'Haskell', 'C#'].map(skill => (
              <li key={skill} className="bg-purple-800 text-white p-2 rounded-xl shadow hover:bg-purple-700 transition">{skill}</li>
            ))}
          </ul>
        </section>

        {/* Projects Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold border-b-2 border-purple-400 pb-2">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-purple-500 p-6 rounded-lg shadow-lg hover:scale-[1.01] transition bg-purple-900/70 backdrop-blur-md">
              <h3 className="text-2xl font-bold text-white">TLDR</h3>
              <p className="text-md text-purple-200 mt-2">
                AI-powered platform for organizations to auto-generate responses to RFPs with PDF export.
              </p>
              <p className="text-sm text-purple-300 mt-1">Tech: Java 17, Spring Boot, PostgreSQL, Bootstrap, Fetch API</p>
              <div className="space-x-2 pt-3">
                <a href="http://ec2-13-53-174-58.eu-north-1.compute.amazonaws.com/" target="_blank" className="bg-pink-500 text-white px-4 py-2 rounded-full shadow hover:bg-pink-600">Live</a>
                <a href="https://github.com/ricardoVeloso2424/RFP-AI-Response" target="_blank" className="bg-cyan-500 text-white px-4 py-2 rounded-full shadow hover:bg-cyan-600">GitHub</a>
              </div>
            </div>

            <div className="border border-purple-500 p-6 rounded-lg shadow-lg hover:scale-[1.01] transition bg-purple-900/70 backdrop-blur-md">
              <h3 className="text-2xl font-bold text-white">Galeria Lelo</h3>
              <p className="text-md text-purple-200 mt-2">
                Art gallery management system built with ASP.NET and Entity Framework for CRUD operations.
              </p>
              <p className="text-sm text-purple-300 mt-1">Tech: C#, .NET 8, ASP.NET MVC, SQL Server, Bootstrap</p>
              <div className="pt-3">
                <a href="https://github.com/ricardoVeloso2424/Galeria-Lelo" target="_blank" className="bg-cyan-500 text-white px-4 py-2 rounded-full shadow hover:bg-cyan-600">GitHub</a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="space-y-4">
          <h2 className="text-3xl font-semibold border-b-2 border-purple-400 pb-2">Contact</h2>
          <p className="text-lg text-purple-200">Email: <a href="mailto:ddfbae@gmail.com" className="text-green-400 hover:underline">ddfbae@gmail.com</a></p>
          <p className="text-lg text-purple-200">Phone: <span className="text-green-400">960125103</span></p>
        </section>
      </div>
    </div>
  );
}
