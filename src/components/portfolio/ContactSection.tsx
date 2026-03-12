"use client";

import { motion } from "framer-motion";
import type { ComponentProps, RefObject } from "react";
import SectionHeader from "./SectionHeader";

type MotionSectionProps = Partial<ComponentProps<typeof motion.section>>;

export default function ContactSection({
  sectionRef,
  revealMotion,
}: {
  sectionRef: RefObject<HTMLElement | null>;
  revealMotion: MotionSectionProps;
}) {
  return (
    <motion.section ref={sectionRef} {...revealMotion} className="mt-10 space-y-4 scroll-mt-28">
      <SectionHeader title="Contact" />

      <div className="rounded-[1.8rem] border border-white/85 bg-white/80 p-6 shadow-[0_30px_80px_-42px_rgba(15,23,42,0.65)] backdrop-blur-sm">
        <div className="grid gap-3 sm:grid-cols-2">
          <p className="text-slate-700">
            Email:{" "}
            <a
              href="mailto:cfaricardov@hotmail.com"
              className="font-medium underline decoration-slate-300 underline-offset-4 transition hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
            >
              cfaricardov@hotmail.com
            </a>
          </p>

          <p className="text-slate-700 sm:text-right">
            Phone:{" "}
            <a
              href="tel:+351960125103"
              className="font-medium underline decoration-slate-300 underline-offset-4 transition hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
            >
              +351 960 125 103
            </a>
          </p>
        </div>
      </div>
    </motion.section>
  );
}
