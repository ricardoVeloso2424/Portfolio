export default function Portfolio() {
  return (
    <div className="min-h-screen p-10 bg-gradient-to-br from-purple-950 via-purple-950 to-black text-white">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <img src="/A1A1A1.jpg" alt="Ricardo Veloso" className="w-40 h-40 rounded-full mx-auto shadow-xl border-4 border-purple-500" />
          <h1 className="text-5xl font-extrabold tracking-tight text-white">Ricardo Veloso</h1>
          <p className="text-2xl text-purple-300 font-medium">Full Stack Developer</p>
          <p className="text-lg italic text-purple-400">&quot;Think it. Code it. Push it.&quot;</p>
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
        <section className="space-y-8">
          <h2 className="text-3xl font-semibold border-b-2 border-purple-400 pb-2">Featured Projects</h2>

          {/* TLDR Project */}
          <div className="bg-purple-900/60 rounded-xl shadow-lg p-6 space-y-4">
            <h3 className="text-2xl font-bold">TLDR</h3>
            <p className="text-purple-200">
              TLDR is an all-in-one platform tailored for organizations that handle technical and commercial proposals. It generates AI-powered responses to RFPs, creating tailored content based on each request.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Java", "Spring Boot", "PostgreSQL", "JavaScript", "Spring AI"].map(tag => (
                <span key={tag} className="bg-purple-700 text-sm px-3 py-1 rounded-full text-white">{tag}</span>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {["/TLDR1.jpg", "/TLDR2.jpg"].map((src, i) => (
                <img key={i} src={src} alt={`TLDR screenshot ${i + 1}`} className="rounded-xl border border-purple-700" />
              ))}
            </div>
            <div className="flex gap-3 pt-3">
              <a href="http://ec2-13-53-174-58.eu-north-1.compute.amazonaws.com/" target="_blank" className="bg-pink-500 text-white px-4 py-2 rounded-full shadow hover:bg-pink-600">Live</a>
              <a href="https://github.com/ricardoVeloso2424/RFP-AI-Response" target="_blank" className="bg-cyan-500 text-white px-4 py-2 rounded-full shadow hover:bg-cyan-600">GitHub</a>
            </div>
          </div>

          {/* Galeria Lelo Project */}
          <div className="bg-purple-900/60 rounded-xl shadow-lg p-6 space-y-4">
            <h3 className="text-2xl font-bold">Galeria Lelo</h3>
            <p className="text-purple-200">
              Galeria Lelo is a complete web platform designed to manage and showcase art gallery content, including artworks, artists, and exhibitions. It offers a responsive UI and dynamic backend for CRUD operations.
            </p>
            <div className="flex flex-wrap gap-2">
              {["C#", ".NET 8", "Entity Framework", "SQL Server", "Bootstrap"].map(tag => (
                <span key={tag} className="bg-purple-700 text-sm px-3 py-1 rounded-full text-white">{tag}</span>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {["/GALERIA1.png", "/GALERIA2.png", "/GALERIA3.png", "/GALERIA4.png", "/GALERIA5.jpg"].map((src, i) => (
                <img key={i} src={src} alt={`Galeria screenshot ${i + 1}`} className="rounded-xl border border-purple-700" />
              ))}
            </div>
            <div className="flex gap-3 pt-3">
              <a href="https://github.com/ricardoVeloso2424/Galeria-Lelo" target="_blank" className="bg-cyan-500 text-white px-4 py-2 rounded-full shadow hover:bg-cyan-600">GitHub</a>
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
