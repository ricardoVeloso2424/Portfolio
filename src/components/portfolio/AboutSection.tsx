"use client";

import { motion } from "framer-motion";
import type { RefObject } from "react";
import { reveal } from "@/lib/motion";
import { useAnimationsEnabled } from "@/lib/useAnimationsEnabled";
import SectionHeader from "./SectionHeader";
import SpotlightCard from "./SpotlightCard";

const highlights = [
  { title: "Backend", text: "Java/Spring, SQL, clean data models, REST APIs." },
  { title: "Frontend", text: "React/Next.js with TypeScript, pragmatic UI." },
  { title: "Delivery", text: "Git workflows, production debugging, maintainability." },
];

export default function AboutSection({
  sectionRef,
}: {
  sectionRef: RefObject<HTMLElement | null>;
}) {
  const animated = useAnimationsEnabled();

  return (
    <section id="about" ref={sectionRef} className="mt-24 scroll-mt-28 sm:mt-32">
      <motion.div {...reveal(animated)}>
        <SectionHeader index="01" title="About" />

        <SpotlightCard className="rounded-3xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-9">
          <p className="max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Full Stack Developer with hands-on experience building web applications across backend and
            frontend. Completed the Code for All Full-Stack Bootcamp and currently working as a Software
            Developer at LKCOM, contributing to a modular Laravel + Livewire CMS used in production.
            Strong background in Java, JavaScript, SQL, and web technologies, with an engineering
            mindset shaped by an ongoing degree in Informatics Engineering.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 transition-colors hover:border-cyan-400/25 hover:bg-white/[0.04]"
              >
                <p className="flex items-center gap-2 text-sm font-semibold text-slate-100">
                  <span
                    aria-hidden
                    className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-cyan-400 to-emerald-400"
                  />
                  {item.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>
        </SpotlightCard>
      </motion.div>
    </section>
  );
}
