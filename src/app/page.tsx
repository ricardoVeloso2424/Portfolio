"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ComponentProps,
} from "react";
import { motion, useReducedMotion, useScroll } from "framer-motion";
import AboutSection from "@/components/portfolio/AboutSection";
import ContactSection from "@/components/portfolio/ContactSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import { navItems, projects, skills, type SectionId } from "@/data/portfolio";
import { TRANSITION_HERO, TRANSITION_HOVER, TRANSITION_REVEAL } from "@/lib/motion";

type MotionSectionProps = Partial<ComponentProps<typeof motion.section>>;

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

    const ACTIVE_SECTION_OFFSET = 124;
    const targets: Array<{ id: SectionId; el: HTMLElement | null }> = [
      { id: "about", el: aboutRef.current },
      { id: "skills", el: skillsRef.current },
      { id: "projects", el: projectsRef.current },
      { id: "contact", el: contactRef.current },
    ];

    const updateActiveSection = () => {
      let current: SectionId = "about";

      for (const target of targets) {
        if (!target.el) continue;

        if (target.el.getBoundingClientRect().top <= ACTIVE_SECTION_OFFSET) {
          current = target.id;
        } else {
          break;
        }
      }

      setActive((prev) => (prev === current ? prev : current));
    };

    let rafId: number | null = null;
    const onScroll = () => {
      if (rafId !== null) return;

      rafId = window.requestAnimationFrame(() => {
        updateActiveSection();
        rafId = null;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    updateActiveSection();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId !== null) window.cancelAnimationFrame(rafId);
    };
  }, []);

  const revealMotion: MotionSectionProps = motionReduced
    ? {}
    : {
        initial: { opacity: 0, y: 16, scale: 0.996 },
        whileInView: { opacity: 1, y: 0, scale: 1 },
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
                className="rounded-xl px-3 py-2 text-sm font-semibold tracking-tight text-slate-800 transition hover:bg-slate-100/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
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
                        ? "group relative rounded-xl px-3 py-2 text-sm font-medium text-slate-600 transition hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
                        : "group relative rounded-xl px-3 py-2 text-sm font-medium text-slate-600 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:scale-[1.01] active:scale-[0.99] hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
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

              <p className="mt-4 text-xl text-slate-600">Full Stack Developer</p>

              <p className="mt-5 max-w-2xl text-[1.03rem] leading-relaxed text-slate-600">
                Backend-focused full-stack developer building maintainable web applications.
                Experience with Java/Spring, SQL and modern React/Next.js frontends.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="https://www.linkedin.com/in/ricardoveloso24/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className={
                    motionReduced
                      ? "group/cta inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-800 shadow-[0_12px_30px_-18px_rgba(15,23,42,0.6)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
                      : "group/cta inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-800 shadow-[0_12px_30px_-18px_rgba(15,23,42,0.6)] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:scale-[1.01] active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
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
                </a>

                <a
                  href="https://github.com/ricardoVeloso2424"
                  target="_blank"
                  rel="noreferrer noopener"
                  className={
                    motionReduced
                      ? "group/cta inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-800 shadow-[0_12px_30px_-18px_rgba(15,23,42,0.6)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
                      : "group/cta inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-800 shadow-[0_12px_30px_-18px_rgba(15,23,42,0.6)] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:scale-[1.01] active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
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
                </a>

                <a
                  href="/CVRicardoVeloso.pdf"
                  className={
                    motionReduced
                      ? "group/cta inline-flex items-center gap-2 rounded-xl border border-sky-700 bg-sky-700 px-4 py-2.5 text-sm font-medium text-white shadow-[0_18px_34px_-22px_rgba(15,23,42,0.8)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
                      : "group/cta inline-flex items-center gap-2 rounded-xl border border-sky-700 bg-sky-700 px-4 py-2.5 text-sm font-medium text-white shadow-[0_18px_34px_-22px_rgba(15,23,42,0.8)] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:scale-[1.01] active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
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
                </a>
              </div>

              <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {[
                  { k: "Currently", v: "LKCOM (Laravel + Livewire CMS)" },
                  { k: "Focus", v: "Backend + clean architecture" },
                  { k: "Also", v: "Python desktop tools" },
                ].map((item) => (
                  <div
                    key={item.k}
                    className={
                      motionReduced
                        ? "rounded-2xl border border-white/90 bg-white/90 p-4 shadow-[0_18px_45px_-30px_rgba(15,23,42,0.65)]"
                        : "rounded-2xl border border-white/90 bg-white/90 p-4 shadow-[0_18px_45px_-30px_rgba(15,23,42,0.65)] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5"
                    }
                  >
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-slate-500">
                      {item.k}
                    </p>
                    <p className="mt-1.5 text-sm font-semibold text-slate-900">{item.v}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...heroRightMotion} className="relative mx-auto w-full max-w-[20rem]">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-sky-300/40 via-cyan-300/20 to-emerald-300/30 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/85 bg-white/80 p-4 shadow-[0_35px_85px_-40px_rgba(15,23,42,0.75)] backdrop-blur-xl">
                <div className="relative aspect-square overflow-hidden rounded-[1.4rem] border border-slate-200/70 bg-slate-100">
                  <Image
                    src="/A1A1A1.webp"
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

        <AboutSection sectionRef={aboutRef} revealMotion={revealMotion} motionReduced={motionReduced} />

        <SkillsSection
          sectionRef={skillsRef}
          revealMotion={revealMotion}
          motionReduced={motionReduced}
          skills={skills}
        />

        <ProjectsSection
          sectionRef={projectsRef}
          revealMotion={revealMotion}
          motionReduced={motionReduced}
          projects={projects}
        />

        <ContactSection sectionRef={contactRef} revealMotion={revealMotion} />

        <footer className="mt-10 border-t border-slate-200/80 pt-7 text-sm text-slate-500">
          Ricardo Veloso
        </footer>
      </div>
    </main>
  );
}
