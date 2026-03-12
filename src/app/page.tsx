"use client";

import Image from "next/image";
import {
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
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
    title: "Maquiveloso",
    description:
      "Full-stack Laravel platform for a sewing machine repair and sales business. Implemented a public product catalog and a custom CMS back office enabling dynamic management of products and pages by non-technical users.",
    tags: ["Laravel", "Livewire", "Tailwind CSS", "Blade", "MySQL", "JavaScript"],
    images: ["/maquiveloso-frontend.png", "/maquiveloso-backoffice.png"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/ricardoVeloso2424/maquivelosoV2",
        primary: false,
      },
    ],
  },
  {
    title: "TLDR",
    description:
      "Spring Boot platform that assists RFP response drafting by generating structured proposal content from business input. Includes REST APIs, PostgreSQL persistence, and AI integration to produce editable outputs for proposal workflows.",
    tags: ["Java", "Spring Boot", "PostgreSQL", "Spring AI"],
    images: ["/TLDR1.jpg", "/TLDR2.jpg"],
    links: [
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
      ".NET 8 web platform for managing gallery operations and public content across artworks, artists, and exhibitions. Implements Entity Framework data models and admin workflows for reliable catalog updates.",
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
      "Python desktop application for converting image and video assets with reusable presets for resolution, aspect ratio, and quality. Integrates FFmpeg processing with a Tkinter UI and PyInstaller packaging for desktop distribution.",
    tags: ["Python", "Tkinter", "FFmpeg", "imageio-ffmpeg", "Pillow", "PyInstaller"],
    images: ["/conversor.png"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/ricardoVeloso2424/Converter",
        primary: false,
      },
    ],
  },
];

const navItems = [
  ["about", "About"],
  ["skills", "Skills"],
  ["projects", "Projects"],
  ["contact", "Contact"],
] as const;

type SectionId = "about" | "skills" | "projects" | "contact";
type Project = (typeof projects)[number];

const EASE_PREMIUM = [0.16, 1, 0.3, 1] as const;
const DURATION_HOVER = 0.3;
const DURATION_REVEAL = 0.56;
const DURATION_HERO = 0.82;

const TRANSITION_HOVER = { duration: DURATION_HOVER, ease: EASE_PREMIUM };
const TRANSITION_REVEAL = { duration: DURATION_REVEAL, ease: EASE_PREMIUM };
const TRANSITION_HERO = { duration: DURATION_HERO, ease: EASE_PREMIUM };

function ExternalLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className: string;
}) {
  return (
    <a href={href} target="_blank" rel="noreferrer noopener" className={className}>
      {children}
    </a>
  );
}

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-4">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900">{title}</h2>
      <div className="h-px flex-1 bg-gradient-to-r from-slate-300 via-slate-200 to-transparent" />
    </div>
  );
}

const ProjectCard = memo(function ProjectCard({
  project,
  motionReduced,
}: {
  project: Project;
  motionReduced: boolean;
}) {
  const cardHoverClass = motionReduced
    ? ""
    : "transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:scale-[1.006]";

  const revealMotion = motionReduced
    ? {}
    : {
        initial: { opacity: 0, y: 18, scale: 0.995 },
        whileInView: { opacity: 1, y: 0, scale: 1 },
        transition: TRANSITION_REVEAL,
        viewport: { once: true, amount: 0.23 },
      };

  return (
    <motion.div
      {...revealMotion}
      className={`group relative overflow-hidden rounded-[1.85rem] border border-white/85 bg-white/80 p-6 shadow-[0_30px_90px_-45px_rgba(15,23,42,0.6)] backdrop-blur-sm sm:p-7 ${cardHoverClass}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-400/10 via-transparent to-emerald-400/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="pointer-events-none absolute left-7 right-7 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/50 to-transparent" />

      <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold tracking-tight text-slate-900">{project.title}</h3>
          <p className="max-w-3xl leading-relaxed text-slate-700">{project.description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.links.map((link) => (
            <ExternalLink
              key={link.href}
              href={link.href}
              className={
                link.primary
                  ? "group/link inline-flex items-center gap-2 rounded-xl border border-slate-900 bg-slate-900 px-3.5 py-1.5 text-sm font-medium text-white transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:scale-[1.01] active:scale-[0.99]"
                  : "group/link inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-3.5 py-1.5 text-sm font-medium text-slate-800 shadow-[0_10px_25px_-18px_rgba(15,23,42,0.8)] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:scale-[1.01] active:scale-[0.99]"
              }
            >
              <span>{link.label}</span>
              <span
                aria-hidden
                className={
                  motionReduced
                    ? ""
                    : "transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/link:translate-x-0.5"
                }
              >
                -&gt;
              </span>
            </ExternalLink>
          ))}
        </div>
      </div>

      <div className="relative flex flex-wrap gap-2 pt-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className={
              motionReduced
                ? "rounded-full border border-slate-200 bg-slate-50/90 px-2.5 py-1 text-sm text-slate-700"
                : "rounded-full border border-slate-200 bg-slate-50/90 px-2.5 py-1 text-sm text-slate-700 transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5"
            }
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="relative grid grid-cols-1 gap-4 pt-5 sm:grid-cols-2">
        {project.images.map((src) => (
          <div
            key={src}
            className={
              motionReduced
                ? "group/image relative aspect-video overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-50/90 p-2"
                : "group/image relative aspect-video overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-50/90 p-2 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:scale-[1.006]"
            }
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-sky-500/0 via-sky-500/10 to-emerald-500/20 opacity-0 transition-opacity duration-300 group-hover/image:opacity-100" />
            <div
              className={
                motionReduced
                  ? "pointer-events-none absolute inset-0 rounded-2xl opacity-0"
                  : "pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-white/0 via-white/45 to-white/0 opacity-0 -translate-x-[115%] transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/image:translate-x-[125%] group-hover/image:opacity-80"
              }
            />

            <div
              className={
                motionReduced
                  ? "relative h-full w-full overflow-hidden rounded-xl border border-slate-100 bg-white/95"
                  : "relative h-full w-full overflow-hidden rounded-xl border border-slate-100 bg-white/95 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/image:scale-[1.015]"
              }
            >
              <Image
                src={src}
                alt={`${project.title} screenshot`}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
});

export default function Portfolio() {
  const prefersReducedMotion = useReducedMotion();
  const motionReduced = Boolean(prefersReducedMotion);
  const { scrollYProgress } = useScroll();

  const [active, setActive] = useState<SectionId>("about");

  const aboutRef = useRef<HTMLElement | null>(null);
  const skillsRef = useRef<HTMLElement | null>(null);
  const projectsRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

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
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) return;

        const found = targets.find((target) => target.el === visible.target);
        if (found) {
          setActive((current) => (current === found.id ? current : found.id));
        }
      },
      { root: null, threshold: [0.2, 0.33, 0.5], rootMargin: "-12% 0px -45% 0px" }
    );

    targets.forEach((target) => target.el && io.observe(target.el));
    return () => io.disconnect();
  }, []);

  const revealMotion = motionReduced
    ? {}
    : {
        initial: {
          opacity: 0,
          y: 16,
          scale: 0.996,
        },
        whileInView: {
          opacity: 1,
          y: 0,
          scale: 1,
        },
        transition: TRANSITION_REVEAL,
        viewport: { once: true, amount: 0.24 },
      };

  const heroLeftMotion = motionReduced
    ? {}
    : {
        initial: { opacity: 0, y: 14, scale: 0.995 },
        animate: { opacity: 1, y: 0, scale: 1 },
        transition: TRANSITION_HERO,
      };

  const heroRightMotion = motionReduced
    ? {}
    : {
        initial: { opacity: 0, y: 18, scale: 0.99 },
        animate: { opacity: 1, y: 0, scale: 1 },
        transition: { ...TRANSITION_HERO, delay: 0.1 },
      };

  const scrollTo = useCallback((id: SectionId) => {
    const map: Record<SectionId, HTMLElement | null> = {
      about: aboutRef.current,
      skills: skillsRef.current,
      projects: projectsRef.current,
      contact: contactRef.current,
    };

    map[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-clip text-slate-900">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_700px_at_15%_-5%,rgba(14,165,233,0.18),transparent_55%),radial-gradient(900px_520px_at_85%_0%,rgba(16,185,129,0.16),transparent_55%),linear-gradient(180deg,#f9fbff_0%,#edf2f9_42%,#eaf0f8_100%)]" />
        <div className="absolute -top-36 -left-24 h-[30rem] w-[30rem] rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute top-[10%] -right-24 h-[27rem] w-[27rem] rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="absolute bottom-[-16%] left-[20%] h-[24rem] w-[24rem] rounded-full bg-sky-300/16 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_80%)]" />
      </div>

      <motion.div
        style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
        className="fixed left-0 right-0 top-0 z-[70] h-1 bg-gradient-to-r from-cyan-500 via-sky-500 to-emerald-500"
      />

      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-8 sm:px-8 sm:pt-10">
        <header className="sticky top-4 z-50 mb-8">
          <div className="rounded-2xl border border-white/80 bg-white/65 px-3 py-2.5 backdrop-blur-xl shadow-[0_20px_70px_-32px_rgba(15,23,42,0.5)]">
            <div className="flex items-center justify-between gap-3">
              <button
                onClick={() => scrollTo("about")}
                className="rounded-xl px-3 py-2 text-sm font-semibold tracking-tight text-slate-800 transition hover:bg-slate-100/70"
              >
                Ricardo Veloso
              </button>

              <nav className="flex flex-wrap items-center gap-1">
                {navItems.map(([id, label]) => (
                  <button
                    key={id}
                    onClick={() => scrollTo(id)}
                    className={
                      motionReduced
                        ? "group relative rounded-xl px-3 py-2 text-sm font-medium text-slate-600 transition hover:text-slate-900"
                        : "group relative rounded-xl px-3 py-2 text-sm font-medium text-slate-600 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:scale-[1.01] active:scale-[0.99] hover:text-slate-900"
                    }
                  >
                    <span className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-r from-sky-100/60 via-white/80 to-emerald-100/60 opacity-0 transition-opacity duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-90" />
                    {active === id && (
                      <>
                        <motion.span
                          layoutId="active-nav-pill"
                          className="absolute inset-0 rounded-xl border border-slate-200 bg-white/90 shadow-[0_8px_20px_-15px_rgba(15,23,42,0.65)]"
                          transition={motionReduced ? {} : TRANSITION_HOVER}
                        />
                        <motion.span
                          layoutId="active-nav-underline"
                          className="absolute bottom-1 left-1/2 h-0.5 w-7 -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-500 to-emerald-500"
                          transition={motionReduced ? {} : TRANSITION_HOVER}
                        />
                      </>
                    )}
                    <span
                      className={`relative z-10 ${
                        active === id ? "scale-[1.02]" : ""
                      } transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]`}
                    >
                      {label}
                    </span>
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </header>

        <motion.section
          initial={motionReduced ? false : { opacity: 0, y: 22, scale: 0.992 }}
          animate={motionReduced ? {} : { opacity: 1, y: 0, scale: 1 }}
          transition={motionReduced ? {} : TRANSITION_HERO}
          className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/70 p-8 shadow-[0_35px_120px_-45px_rgba(15,23,42,0.55)] backdrop-blur-xl sm:p-10"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_42%),radial-gradient(circle_at_82%_20%,rgba(52,211,153,0.16),transparent_38%)]" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.25fr_0.75fr]">
            <motion.div {...heroLeftMotion}>
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/85 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">
                Software Developer at LKCOM
              </span>

              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Ricardo{" "}
                <span className="bg-gradient-to-r from-slate-900 via-sky-800 to-emerald-700 bg-clip-text text-transparent">
                  Veloso
                </span>
              </h1>

              <div className="mt-5 h-px w-full max-w-sm origin-left bg-gradient-to-r from-sky-500/80 via-emerald-500/35 to-transparent" />

              <p className="mt-4 text-xl text-slate-600">
                Full Stack Developer
              </p>

              <p className="mt-5 max-w-2xl text-[1.03rem] leading-relaxed text-slate-600">
                Backend-focused full-stack developer building maintainable web applications.
                Experience with Java/Spring, SQL and modern React/Next.js frontends.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <ExternalLink
                  href="https://www.linkedin.com/in/ricardoveloso24/"
                  className={
                    motionReduced
                      ? "group/cta inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-800 shadow-[0_12px_30px_-18px_rgba(15,23,42,0.6)]"
                      : "group/cta inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-800 shadow-[0_12px_30px_-18px_rgba(15,23,42,0.6)] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:scale-[1.01] active:scale-[0.99]"
                  }
                >
                  <span>LinkedIn</span>
                  <span
                    aria-hidden
                    className={
                      motionReduced
                        ? ""
                        : "transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/cta:translate-x-1"
                    }
                  >
                    -&gt;
                  </span>
                </ExternalLink>

                <ExternalLink
                  href="https://github.com/ricardoVeloso2424"
                  className={
                    motionReduced
                      ? "group/cta inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-800 shadow-[0_12px_30px_-18px_rgba(15,23,42,0.6)]"
                      : "group/cta inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-800 shadow-[0_12px_30px_-18px_rgba(15,23,42,0.6)] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:scale-[1.01] active:scale-[0.99]"
                  }
                >
                  <span>GitHub</span>
                  <span
                    aria-hidden
                    className={
                      motionReduced
                        ? ""
                        : "transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/cta:translate-x-1"
                    }
                  >
                    -&gt;
                  </span>
                </ExternalLink>

                <ExternalLink
                  href="/CVRicardoVeloso.pdf"
                  className={
                    motionReduced
                      ? "group/cta inline-flex items-center gap-2 rounded-xl border border-sky-700 bg-sky-700 px-4 py-2.5 text-sm font-medium text-white shadow-[0_18px_34px_-22px_rgba(15,23,42,0.8)]"
                      : "group/cta inline-flex items-center gap-2 rounded-xl border border-sky-700 bg-sky-700 px-4 py-2.5 text-sm font-medium text-white shadow-[0_18px_34px_-22px_rgba(15,23,42,0.8)] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:scale-[1.01] active:scale-[0.99]"
                  }
                >
                  <span>Resume</span>
                  <span
                    aria-hidden
                    className={
                      motionReduced
                        ? ""
                        : "transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/cta:translate-x-1"
                    }
                  >
                    -&gt;
                  </span>
                </ExternalLink>
              </div>

              <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {[
                  { k: "Currently", v: "LKCOM (Laravel + Livewire CMS)" },
                  { k: "Focus", v: "Backend + clean architecture" },
                  { k: "Also", v: "Python desktop tools" },
                ].map((x) => (
                  <div
                    key={x.k}
                    className={
                      motionReduced
                        ? "rounded-2xl border border-white/90 bg-white/90 p-4 shadow-[0_18px_45px_-30px_rgba(15,23,42,0.65)]"
                        : "rounded-2xl border border-white/90 bg-white/90 p-4 shadow-[0_18px_45px_-30px_rgba(15,23,42,0.65)] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5"
                    }
                  >
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-slate-500">{x.k}</p>
                    <p className="mt-1.5 text-sm font-semibold text-slate-900">{x.v}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              {...heroRightMotion}
              className="relative mx-auto w-full max-w-[20rem]"
            >
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-sky-300/40 via-cyan-300/20 to-emerald-300/30 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/85 bg-white/80 p-4 shadow-[0_35px_85px_-40px_rgba(15,23,42,0.75)] backdrop-blur-xl">
                <div className="relative aspect-square overflow-hidden rounded-[1.4rem] border border-slate-200/70 bg-slate-100">
                  <Image
                    src="/A1A1A1.png"
                    alt="Ricardo Veloso"
                    fill
                    sizes="(max-width: 1024px) 320px, 360px"
                    className="object-cover"
                    priority
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(160deg,rgba(255,255,255,0.4),transparent_35%,rgba(15,23,42,0.15))]" />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          ref={aboutRef}
          {...revealMotion}
          className="mt-10 space-y-4 scroll-mt-28"
        >
          <SectionHeader title="About" />

          <div className="rounded-[1.8rem] border border-white/85 bg-white/78 p-6 shadow-[0_25px_70px_-35px_rgba(15,23,42,0.55)] backdrop-blur-sm sm:p-7">
            <p className="max-w-3xl text-[1.01rem] leading-relaxed text-slate-700">
              Full Stack Developer with hands-on experience in building web applications across backend and frontend.
              Completed the Code for All_ Full-Stack Bootcamp and currently working as a Software Developer at LKCOM,
              contributing to a modular Laravel + Livewire CMS used in production. Strong background in Java,
              JavaScript, SQL and web technologies, with an engineering mindset shaped by an ongoing degree in
              Informatics Engineering.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                { title: "Backend", text: "Java/Spring, SQL, clean data models, REST APIs." },
                { title: "Frontend", text: "React/Next.js with TypeScript, pragmatic UI." },
                { title: "Delivery", text: "Git workflows, production debugging, maintainability." },
              ].map((b) => (
                <div
                  key={b.title}
                  className={
                    motionReduced
                      ? "rounded-2xl border border-slate-200/80 bg-white/90 p-4 shadow-[0_14px_30px_-24px_rgba(15,23,42,0.6)]"
                      : "rounded-2xl border border-slate-200/80 bg-white/90 p-4 shadow-[0_14px_30px_-24px_rgba(15,23,42,0.6)] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5"
                  }
                >
                  <p className="text-sm font-semibold text-slate-900">{b.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-700">{b.text}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          ref={skillsRef}
          {...revealMotion}
          className="mt-10 space-y-5 scroll-mt-28"
        >
          <SectionHeader title="Skills" />

          <div className="rounded-[1.8rem] border border-white/85 bg-white/78 p-6 shadow-[0_25px_70px_-35px_rgba(15,23,42,0.55)] backdrop-blur-sm sm:p-7">
            <div className="flex flex-wrap gap-2.5">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className={
                    motionReduced
                      ? "inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-sm font-medium text-slate-700 shadow-[0_8px_18px_-14px_rgba(15,23,42,0.65)]"
                      : "inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-sm font-medium text-slate-700 shadow-[0_8px_18px_-14px_rgba(15,23,42,0.65)] transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5"
                  }
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-sky-500 to-emerald-500" />
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          ref={projectsRef}
          {...revealMotion}
          className="mt-10 space-y-8 scroll-mt-28"
        >
          <SectionHeader title="Projects" />

          <div className="space-y-6">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} motionReduced={motionReduced} />
            ))}
          </div>
        </motion.section>

        <motion.section
          ref={contactRef}
          {...revealMotion}
          className="mt-10 space-y-4 scroll-mt-28"
        >
          <SectionHeader title="Contact" />

          <div className="rounded-[1.8rem] border border-white/85 bg-white/80 p-6 shadow-[0_30px_80px_-42px_rgba(15,23,42,0.65)] backdrop-blur-sm">
            <div className="grid gap-3 sm:grid-cols-2">
              <p className="text-slate-700">
                Email:{" "}
                <a
                  href="mailto:cfaricardov@hotmail.com"
                  className="font-medium underline decoration-slate-300 underline-offset-4 transition hover:text-slate-900"
                >
                  cfaricardov@hotmail.com
                </a>
              </p>

              <p className="text-slate-700 sm:text-right">
                Phone:{" "}
                <a
                  href="tel:+351960125103"
                  className="font-medium underline decoration-slate-300 underline-offset-4 transition hover:text-slate-900"
                >
                  +351 960 125 103
                </a>
              </p>
            </div>
          </div>
        </motion.section>

        <footer className="mt-10 border-t border-slate-200/80 pt-7 text-sm text-slate-500">Ricardo Veloso</footer>
      </div>
    </main>
  );
}
