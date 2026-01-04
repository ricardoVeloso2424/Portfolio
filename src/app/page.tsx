"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll } from "framer-motion";

const skills = [
  "Java",
  "JavaScript",
  "TypeScript",
  "SQL",
  "React",
  "Next.js",
  "Spring",
  "Laravel",
  "REST APIs",
  "Git",
  "Python",
];

const projects = [
  {
    title: "TLDR",
    description:
      "AI-assisted platform that generates tailored responses to RFPs, producing structured and relevant content.",
    tags: ["Java", "Spring Boot", "PostgreSQL", "Spring AI"],
    images: ["/TLDR1.jpg", "/TLDR2.jpg"],
    links: [
      {
        label: "Live",
        href: "http://ec2-13-53-174-58.eu-north-1.compute.amazonaws.com/",
        primary: true,
      },
      {
        label: "GitHub",
        href: "https://github.com/ricardoVeloso2424/RFP-AI-Response",
        primary: false,
      },
    ],
  },
  {
    title: "Galeria Lelo",
    description:
      "Web platform to manage and showcase gallery content, including artworks, artists and exhibitions.",
    tags: ["C#", ".NET 8", "Entity Framework", "SQL Server"],
    images: ["/GALERIA1.png", "/GALERIA2.png"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/ricardoVeloso2424/Galeria-Lelo",
        primary: false,
      },
    ],
  },
  {
    title: "Conversor",
    description:
      "Cross-platform desktop application to convert images and videos with presets for resolution, aspect ratio and quality.",
    tags: ["Python", "Tkinter", "FFmpeg", "imageio-ffmpeg", "Pillow", "PyInstaller"],
    images: ["/conversor.png"],
    links: [
      {
        label: "GitHub",
        href: "PUT_YOUR_REPO_LINK_HERE",
        primary: false,
      },
    ],
  },
];

function ExternalLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className: string;
}) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      {children}
    </a>
  );
}

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="flex items-end justify-between gap-4">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="hidden sm:block h-px flex-1 bg-gray-200 mb-2" />
    </div>
  );
}

type SectionId = "about" | "skills" | "projects" | "contact";

export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const [active, setActive] = useState<SectionId>("about");

  const aboutRef = useRef<HTMLElement | null>(null);
  const skillsRef = useRef<HTMLElement | null>(null);
  const projectsRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 450);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const targets: Array<{ id: SectionId; el: HTMLElement | null }> = [
      { id: "about", el: aboutRef.current },
      { id: "skills", el: skillsRef.current },
      { id: "projects", el: projectsRef.current },
      { id: "contact", el: contactRef.current },
    ];

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        const el = (visible?.target as HTMLElement | undefined) ?? null;
        if (!el) return;

        const found = targets.find((t) => t.el === el);
        if (found) setActive(found.id);
      },
      { root: null, threshold: [0.18, 0.25, 0.35, 0.5] }
    );

    targets.forEach((t) => t.el && io.observe(t.el));
    return () => io.disconnect();
  }, []);

  const anim = useMemo(() => {
    const easeOut = [0.16, 1, 0.3, 1] as const;

    if (reduceMotion) {
      return {
        viewport: { once: true, amount: 0.2 },
        fadeUp: { initial: {}, whileInView: {}, transition: {} },
        card: { initial: {}, whileInView: {}, transition: {} },
        stagger: {},
        child: {},
      };
    }

    return {
      viewport: { once: true, amount: 0.25 },
      fadeUp: {
        initial: { opacity: 0, y: 14 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.55, ease: easeOut },
      },
      card: {
        initial: { opacity: 0, y: 12, scale: 0.995 },
        whileInView: { opacity: 1, y: 0, scale: 1 },
        transition: { duration: 0.5, ease: easeOut },
      },
      stagger: {
        initial: "hidden",
        whileInView: "show",
        variants: {
          hidden: {},
          show: { transition: { staggerChildren: 0.06 } },
        },
      },
      child: {
        variants: {
          hidden: { opacity: 0, y: 10 },
          show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: easeOut } },
        },
      },
    };
  }, [reduceMotion]);

  function scrollTo(id: SectionId) {
    const map: Record<SectionId, HTMLElement | null> = {
      about: aboutRef.current,
      skills: skillsRef.current,
      projects: projectsRef.current,
      contact: contactRef.current,
    };
    map[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f6f7fb]">
        <div className="w-10 h-10 rounded-full border-4 border-gray-300 border-t-gray-600 animate-spin" />
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#f6f7fb] text-gray-900">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl" />
        <div className="absolute top-24 -right-24 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />
      </div>

      <motion.div
        style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-sky-500 z-50"
      />

      <div className="relative max-w-5xl mx-auto px-6 py-8 sm:py-10 space-y-10">
        <div className="sticky top-3 z-40">
          <div className="rounded-2xl border border-gray-200 bg-white/75 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.05)] px-4 py-3">
            <div className="flex items-center justify-between gap-3">
              <button
                onClick={() => scrollTo("about")}
                className="text-sm font-semibold tracking-tight hover:opacity-80"
              >
                Ricardo Veloso
              </button>

              <nav className="flex gap-1">
                {(
                  [
                    ["about", "About"],
                    ["skills", "Skills"],
                    ["projects", "Projects"],
                    ["contact", "Contact"],
                  ] as const
                ).map(([id, label]) => (
                  <button
                    key={id}
                    onClick={() => scrollTo(id)}
                    className={
                      active === id
                        ? "px-3 py-1.5 rounded-xl text-sm bg-gray-100 border border-gray-200"
                        : "px-3 py-1.5 rounded-xl text-sm hover:bg-gray-50 border border-transparent"
                    }
                  >
                    {label}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <motion.section
          className="rounded-3xl border border-gray-200 bg-white/70 backdrop-blur-sm p-8 sm:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
            <motion.img
              src="/A1A1A1.png"
              alt="Ricardo Veloso"
              className="w-32 h-32 rounded-2xl object-cover border border-gray-200 shadow-sm"
              whileHover={reduceMotion ? undefined : { scale: 1.02, rotate: -0.2 }}
              transition={{ duration: 0.2 }}
            />

            <div className="space-y-5 text-center sm:text-left">
              <div className="space-y-2">
                <h1 className="text-4xl font-semibold tracking-tight">Ricardo Veloso</h1>
                <p className="text-xl text-gray-600">Full Stack Developer</p>
                <p className="text-gray-700 max-w-2xl">
                  Backend-focused full-stack developer building maintainable web applications.
                  Experience with Java/Spring, SQL and modern React/Next.js frontends.
                </p>
              </div>

              <div className="flex flex-wrap justify-center sm:justify-start gap-3 pt-1">
                <ExternalLink
                  href="https://www.linkedin.com/in/ricardoveloso24/"
                  className="px-4 py-2 rounded-xl border border-gray-300 bg-white hover:bg-gray-50 transition shadow-sm"
                >
                  LinkedIn
                </ExternalLink>

                <ExternalLink
                  href="https://github.com/ricardoVeloso2424"
                  className="px-4 py-2 rounded-xl border border-gray-300 bg-white hover:bg-gray-50 transition shadow-sm"
                >
                  GitHub
                </ExternalLink>

                <ExternalLink
                  href="/CVRicardoVeloso.pdf"
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-sky-500 text-white hover:from-indigo-600 hover:to-sky-600 transition shadow-sm"
                >
                  Resume
                </ExternalLink>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {[
                  { k: "Currently", v: "LKCOM (Laravel + Livewire CMS)" },
                  { k: "Focus", v: "Backend + clean architecture" },
                  { k: "Also", v: "Python desktop tools" },
                ].map((x) => (
                  <div
                    key={x.k}
                    className="rounded-2xl border border-gray-200 bg-white p-4 text-left shadow-sm"
                  >
                    <p className="text-xs text-gray-500">{x.k}</p>
                    <p className="text-sm font-semibold text-gray-900 mt-1">{x.v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          ref={aboutRef}
          {...anim.fadeUp}
          viewport={anim.viewport}
          className="space-y-4 scroll-mt-24"
        >
          <SectionHeader title="About" />
          <div className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-7 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
            <p className="text-gray-700 leading-relaxed max-w-3xl">
              Full Stack Developer with hands-on experience in building web applications across backend and frontend.
              Completed the Code for All_ Full-Stack Bootcamp and currently working as a Software Developer at LKCOM,
              contributing to a modular Laravel + Livewire CMS used in production. Strong background in Java,
              JavaScript, SQL and web technologies, with an engineering mindset shaped by an ongoing degree in
              Informatics Engineering.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">
              {[
                { title: "Backend", text: "Java/Spring, SQL, clean data models, REST APIs." },
                { title: "Frontend", text: "React/Next.js with TypeScript, pragmatic UI." },
                { title: "Delivery", text: "Git workflows, production debugging, maintainability." },
              ].map((b) => (
                <div key={b.title} className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                  <p className="text-sm font-semibold">{b.title}</p>
                  <p className="text-sm text-gray-700 mt-1">{b.text}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          ref={skillsRef}
          {...anim.fadeUp}
          viewport={anim.viewport}
          className="space-y-5 scroll-mt-24"
        >
          <SectionHeader title="Skills" />

          <motion.div
            {...(reduceMotion ? {} : anim.stagger)}
            viewport={anim.viewport}
            className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-7 shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
          >
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <motion.span
                  key={s}
                  {...(reduceMotion ? {} : anim.child)}
                  className="px-3 py-1 rounded-full border border-gray-300 bg-white text-sm text-gray-700 shadow-sm"
                  whileHover={reduceMotion ? undefined : { y: -2, scale: 1.01 }}
                  transition={{ duration: 0.18 }}
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          ref={projectsRef}
          {...anim.fadeUp}
          viewport={anim.viewport}
          className="space-y-8 scroll-mt-24"
        >
          <SectionHeader title="Projects" />

          <div className="space-y-6">
            {projects.map((p) => (
              <motion.article
                key={p.title}
                {...anim.card}
                viewport={anim.viewport}
                className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-7 shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
                whileHover={reduceMotion ? undefined : { y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{p.title}</h3>
                    <p className="text-gray-700 max-w-3xl">{p.description}</p>
                  </div>

                  <div className="flex gap-2 flex-wrap">
                    {p.links.map((l) => (
                      <ExternalLink
                        key={l.href}
                        href={l.href}
                        className={
                          l.primary
                            ? "px-3 py-1.5 rounded-xl text-sm bg-indigo-500 text-white hover:bg-indigo-600 transition shadow-sm"
                            : "px-3 py-1.5 rounded-xl text-sm border border-gray-300 bg-white hover:bg-gray-50 transition shadow-sm"
                        }
                      >
                        {l.label}
                      </ExternalLink>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-4">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-full bg-gray-100 text-sm text-gray-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-5">
                  {p.images.map((src) => (
                    <motion.img
                      key={src}
                      src={src}
                      alt={`${p.title} screenshot`}
                      className="rounded-2xl border border-gray-200 object-cover w-full"
                      whileHover={reduceMotion ? undefined : { scale: 1.015 }}
                      transition={{ duration: 0.2 }}
                      loading="lazy"
                    />
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          ref={contactRef}
          {...anim.fadeUp}
          viewport={anim.viewport}
          className="space-y-4 scroll-mt-24"
        >
          <SectionHeader title="Contact" />

          <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
            <p className="text-gray-700">
              Email:{" "}
              <a
                href="mailto:cfaricardov@hotmail.com"
                className="underline underline-offset-4 hover:text-gray-900"
              >
                cfaricardov@hotmail.com
              </a>
            </p>
            <p className="text-gray-700 mt-2">Phone: 960125103</p>
          </div>
        </motion.section>

        <footer className="pt-8 border-t border-gray-200 text-sm text-gray-500">
          {new Date().getFullYear()} Ricardo Veloso
        </footer>
      </div>
    </main>
  );
}
