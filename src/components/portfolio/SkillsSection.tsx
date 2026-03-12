"use client";

import { motion } from "framer-motion";
import type { ComponentProps, RefObject } from "react";
import SectionHeader from "./SectionHeader";

type MotionSectionProps = Partial<ComponentProps<typeof motion.section>>;

export default function SkillsSection({
  sectionRef,
  revealMotion,
  motionReduced,
  skills,
}: {
  sectionRef: RefObject<HTMLElement | null>;
  revealMotion: MotionSectionProps;
  motionReduced: boolean;
  skills: string[];
}) {
  return (
    <motion.section ref={sectionRef} {...revealMotion} className="mt-10 space-y-5 scroll-mt-28">
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
  );
}
