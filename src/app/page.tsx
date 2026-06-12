"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import AboutSection from "@/components/portfolio/AboutSection";
import BackgroundFX from "@/components/portfolio/BackgroundFX";
import ContactSection from "@/components/portfolio/ContactSection";
import HeroSection from "@/components/portfolio/HeroSection";
import Navbar from "@/components/portfolio/Navbar";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import { projects, skills, type SectionId } from "@/data/portfolio";

export default function Portfolio() {
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
    <main className="relative min-h-screen overflow-x-clip text-slate-100">
      <BackgroundFX />

      <motion.div
        style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
        className="fixed inset-x-0 top-0 z-[70] h-[2px] bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400"
      />

      <div className="relative mx-auto max-w-6xl px-4 pb-12 pt-4 sm:px-8 sm:pt-6">
        <Navbar active={active} onNavigate={scrollTo} />

        <HeroSection />

        <AboutSection sectionRef={aboutRef} />

        <SkillsSection sectionRef={skillsRef} skills={skills} />

        <ProjectsSection sectionRef={projectsRef} projects={projects} />

        <ContactSection sectionRef={contactRef} />

        <footer className="mt-24 flex items-center justify-between gap-4 border-t border-white/[0.07] pt-8 sm:mt-28">
          <p className="font-mono text-xs tracking-[0.2em] text-slate-400">Ricardo Veloso</p>
          <span
            aria-hidden
            className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-cyan-400 to-emerald-400"
          />
        </footer>
      </div>
    </main>
  );
}
