"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/portfolio";
import { cn } from "@/lib/cn";
import { reveal } from "@/lib/motion";
import { useAnimationsEnabled } from "@/lib/useAnimationsEnabled";
import BrowserFrame from "./BrowserFrame";
import SpotlightCard from "./SpotlightCard";
import { ArrowUpRightIcon } from "./icons";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const animated = useAnimationsEnabled();
  const flip = index % 2 === 1;
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.article {...reveal(animated, 0.12)}>
      <SpotlightCard className="rounded-3xl border border-white/[0.08] bg-white/[0.02] p-6 transition-colors duration-300 hover:border-white/[0.16] sm:p-8 lg:p-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div className={cn("relative", flip && "lg:order-2")}>
            <span
              aria-hidden
              className="pointer-events-none absolute -top-10 right-0 hidden select-none font-mono text-[6.5rem] font-bold leading-none text-white/[0.035] lg:block"
            >
              {num}
            </span>

            <p aria-hidden className="font-mono text-sm tracking-[0.2em] text-cyan-400/80">
              {num}
            </p>

            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-100 sm:text-3xl">
              {project.title}
            </h3>

            <p className="mt-4 max-w-xl leading-relaxed text-slate-400">{project.description}</p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-md border border-white/10 bg-[#0a101c] px-2.5 py-1 font-mono text-xs text-slate-400"
                >
                  {tag}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className={cn(
                    "group/link inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition motion-safe:hover:-translate-y-0.5",
                    link.primary
                      ? "bg-gradient-to-r from-cyan-400 to-emerald-400 font-semibold text-slate-950 shadow-[0_10px_32px_-10px_rgba(34,211,238,0.55)]"
                      : "border border-white/[0.14] bg-white/[0.03] text-slate-200 hover:border-white/30 hover:bg-white/[0.06]",
                  )}
                >
                  <span>{link.label}</span>
                  <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform motion-safe:group-hover/link:translate-x-0.5 motion-safe:group-hover/link:-translate-y-0.5" />
                </a>
              ))}
            </div>
          </div>

          <div className={cn(flip && "lg:order-1")}>
            {project.images.map((src, i) => (
              <BrowserFrame
                key={src}
                src={src}
                alt={`${project.title} screenshot ${i + 1}`}
                className={cn(
                  "motion-safe:transition-transform motion-safe:duration-500",
                  i > 0 && "mt-5",
                  project.images.length > 1 && i === 0 && "lg:rotate-[-1.1deg] motion-safe:hover:rotate-0",
                  project.images.length > 1 &&
                    i === 1 &&
                    "lg:-mt-12 lg:translate-x-7 lg:rotate-[1.4deg] motion-safe:hover:rotate-0",
                )}
              />
            ))}
          </div>
        </div>
      </SpotlightCard>
    </motion.article>
  );
}
