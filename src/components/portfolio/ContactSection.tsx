"use client";

import { motion } from "framer-motion";
import type { RefObject } from "react";
import { reveal } from "@/lib/motion";
import { useAnimationsEnabled } from "@/lib/useAnimationsEnabled";
import SectionHeader from "./SectionHeader";
import { MailIcon, PhoneIcon } from "./icons";

export default function ContactSection({
  sectionRef,
}: {
  sectionRef: RefObject<HTMLElement | null>;
}) {
  const animated = useAnimationsEnabled();

  return (
    <section id="contact" ref={sectionRef} className="mt-24 scroll-mt-28 sm:mt-32">
      <motion.div {...reveal(animated)}>
        <SectionHeader index="04" title="Contact" />

        <div className="grid gap-4 sm:grid-cols-2">
          <a
            href="mailto:cfaricardov@hotmail.com"
            className="group flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 transition hover:border-cyan-400/30 hover:bg-white/[0.04] motion-safe:hover:-translate-y-0.5"
          >
            <span
              aria-hidden
              className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-cyan-400/25 bg-cyan-400/10 text-cyan-300"
            >
              <MailIcon className="h-5 w-5" />
            </span>
            <span className="min-w-0">
              <span className="block font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                Email:
              </span>
              <span className="mt-1 block truncate text-sm font-medium text-slate-200 sm:text-base">
                cfaricardov@hotmail.com
              </span>
            </span>
          </a>

          <a
            href="tel:+351960125103"
            className="group flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 transition hover:border-emerald-400/30 hover:bg-white/[0.04] motion-safe:hover:-translate-y-0.5"
          >
            <span
              aria-hidden
              className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-emerald-400/25 bg-emerald-400/10 text-emerald-300"
            >
              <PhoneIcon className="h-5 w-5" />
            </span>
            <span className="min-w-0">
              <span className="block font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                Phone:
              </span>
              <span className="mt-1 block truncate text-sm font-medium text-slate-200 sm:text-base">
                +351 960 125 103
              </span>
            </span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
