"use client";

import { motion, type MotionProps } from "framer-motion";
import type { RefObject } from "react";
import { reveal, STAGGER_CONTAINER, STAGGER_ITEM } from "@/lib/motion";
import { useAnimationsEnabled } from "@/lib/useAnimationsEnabled";
import SectionHeader from "./SectionHeader";

export default function SkillsSection({
  sectionRef,
  skills,
}: {
  sectionRef: RefObject<HTMLElement | null>;
  skills: string[];
}) {
  const animated = useAnimationsEnabled();

  const listMotion: MotionProps = animated
    ? {
        variants: STAGGER_CONTAINER,
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true, amount: 0.3 },
      }
    : {};

  const itemMotion: MotionProps = animated ? { variants: STAGGER_ITEM } : {};

  return (
    <section id="skills" ref={sectionRef} className="mt-24 scroll-mt-28 sm:mt-32">
      <motion.div {...reveal(animated)}>
        <SectionHeader index="02" title="Skills" />

        <motion.ul {...listMotion} className="flex flex-wrap gap-2.5 sm:gap-3">
          {skills.map((skill) => (
            <motion.li
              key={skill}
              {...itemMotion}
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2 font-mono text-[13px] text-slate-300 transition hover:border-cyan-400/40 hover:bg-cyan-400/[0.06] hover:text-cyan-200 motion-safe:hover:-translate-y-0.5"
            >
              <span
                aria-hidden
                className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-cyan-400 to-emerald-400"
              />
              {skill}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}
