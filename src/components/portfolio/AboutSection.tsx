"use client";

import { motion } from "framer-motion";
import type { ComponentProps, RefObject } from "react";
import SectionHeader from "./SectionHeader";

type MotionSectionProps = Partial<ComponentProps<typeof motion.section>>;

const highlights = [
  { title: "Backend", text: "Java/Spring, SQL, clean data models, REST APIs." },
  { title: "Frontend", text: "React/Next.js with TypeScript, pragmatic UI." },
  { title: "Delivery", text: "Git workflows, production debugging, maintainability." },
];

export default function AboutSection({
  sectionRef,
  revealMotion,
  motionReduced,
}: {
  sectionRef: RefObject<HTMLElement | null>;
  revealMotion: MotionSectionProps;
  motionReduced: boolean;
}) {
  return (
    <motion.section ref={sectionRef} {...revealMotion} className="mt-10 space-y-4 scroll-mt-28">
      <SectionHeader title="About" />

      <div className="rounded-[1.8rem] border border-white/85 bg-white/78 p-6 shadow-[0_25px_70px_-35px_rgba(15,23,42,0.55)] backdrop-blur-sm sm:p-7">
        <p className="max-w-3xl text-[1.01rem] leading-relaxed text-slate-700">
          Full Stack Developer with hands-on experience building web applications across backend and
          frontend. Completed the Code for All Full-Stack Bootcamp and currently working as a Software
          Developer at LKCOM, contributing to a modular Laravel + Livewire CMS used in production.
          Strong background in Java, JavaScript, SQL, and web technologies, with an engineering
          mindset shaped by an ongoing degree in Informatics Engineering.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className={
                motionReduced
                  ? "rounded-2xl border border-slate-200/80 bg-white/90 p-4 shadow-[0_14px_30px_-24px_rgba(15,23,42,0.6)]"
                  : "rounded-2xl border border-slate-200/80 bg-white/90 p-4 shadow-[0_14px_30px_-24px_rgba(15,23,42,0.6)] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5"
              }
            >
              <p className="text-sm font-semibold text-slate-900">{item.title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-700">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
