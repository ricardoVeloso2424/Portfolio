"use client";

import Image from "next/image";
import { memo, type ReactNode } from "react";
import { motion } from "framer-motion";
import type { Project } from "@/data/portfolio";
import { TRANSITION_REVEAL } from "@/lib/motion";

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
                  ? "group/link inline-flex items-center gap-2 rounded-xl border border-slate-900 bg-slate-900 px-3.5 py-1.5 text-sm font-medium text-white transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:scale-[1.01] active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
                  : "group/link inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-3.5 py-1.5 text-sm font-medium text-slate-800 shadow-[0_10px_25px_-18px_rgba(15,23,42,0.8)] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:scale-[1.01] active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
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

export default ProjectCard;
