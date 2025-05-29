"use client";
import { useEffect, useState } from "react";

export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true);
  const [typedText, setTypedText] = useState("");
  const fullText = "Compiling your portfolio...";

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setTypedText((prev) => {
        if (prev.length < fullText.length) {
          return fullText.slice(0, prev.length + 1);
        } else {
          clearInterval(typingInterval);
          return prev;
        }
      });
    }, 50);

    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearInterval(typingInterval);
      clearTimeout(timeout);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
        <div className="relative w-16 h-16 mb-4 animate-spin">
          <svg className="w-full h-full text-purple-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="text-xl font-semibold font-mono text-purple-300 transition-all duration-500 ease-in-out animate-fade-in">
          {typedText}
          <span className="animate-blink">|</span>
        </p>
        <style jsx>{`
          @keyframes blink {
            0%, 50%, 100% { opacity: 1; }
            25%, 75% { opacity: 0; }
          }
          .animate-blink {
            display: inline-block;
            margin-left: 4px;
            animation: blink 1s step-start infinite;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-10 bg-gradient-to-br from-[#1a002a] via-[#1a002a] to-black text-white">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <img src="/A1A1A1.png" alt="Ricardo Veloso" className="w-40 h-40 rounded-full mx-auto shadow-xl border-4 border-purple-500" />
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
            Passionate programmer that recently completed the CodeforAll_ bootcamp. Gained hands-on experience in C#, Haskell, SQL, Java, OOP, JavaScript, full-stack development, and database management. Skilled in problem-solving, teamwork, adaptability, and critical thinking. Committed to continuous learning, with real-world projects showcasing software engineering and AI interests. Eager to apply technical and transferable skills to a dynamic tech role.
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
