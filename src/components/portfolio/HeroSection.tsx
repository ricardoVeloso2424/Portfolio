"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/cn";
import { useAnimationsEnabled } from "@/lib/useAnimationsEnabled";
import { ArrowUpRightIcon, FileDownIcon, GitHubIcon, LinkedInIcon } from "./icons";

const stats = [
  { k: "Currently", v: "LKCOM (Laravel + Livewire CMS)" },
  { k: "Focus", v: "Backend + clean architecture" },
  { k: "Also", v: "Python desktop tools" },
];

const ctaBase =
  "group/cta inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition motion-safe:hover:-translate-y-0.5";

const secondaryCta = cn(
  ctaBase,
  "border border-white/[0.14] bg-white/[0.03] text-slate-200 hover:border-white/30 hover:bg-white/[0.06]",
);

const primaryCta = cn(
  ctaBase,
  "bg-gradient-to-r from-cyan-400 to-emerald-400 font-semibold text-slate-950 shadow-[0_10px_32px_-10px_rgba(34,211,238,0.55)] hover:shadow-[0_14px_40px_-10px_rgba(34,211,238,0.7)]",
);

const ctaArrow =
  "h-3.5 w-3.5 text-slate-500 transition-transform motion-safe:group-hover/cta:translate-x-0.5 motion-safe:group-hover/cta:-translate-y-0.5";

export default function HeroSection() {
  const animated = useAnimationsEnabled();
  const { scrollY } = useScroll();
  const portraitY = useTransform(scrollY, [0, 700], [0, 46]);

  return (
    <section className="relative pt-12 sm:pt-16 lg:pt-20">
      <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <span className="rise-in inline-flex items-center gap-2.5 rounded-full border border-cyan-400/25 bg-cyan-400/[0.07] px-3.5 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-cyan-300">
            <span aria-hidden className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:animate-none" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            Software Developer at LKCOM
          </span>

          <h1 className="rise-in rise-delay-1 mt-6 text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            <span className="block text-slate-100">Ricardo</span>
            <span className="block bg-gradient-to-r from-cyan-300 via-teal-200 to-emerald-300 bg-clip-text text-transparent">
              Veloso
            </span>
          </h1>

          <p className="rise-in rise-delay-2 mt-5 font-mono text-sm uppercase tracking-[0.32em] text-slate-400">
            Full Stack Developer
          </p>

          <p className="rise-in rise-delay-3 mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-[1.05rem]">
            Backend-focused full-stack developer building maintainable web applications.
            Experience with Java/Spring, SQL and modern React/Next.js frontends.
          </p>

          <div className="rise-in rise-delay-4 mt-8 flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/in/ricardoveloso24/"
              target="_blank"
              rel="noreferrer noopener"
              className={secondaryCta}
            >
              <LinkedInIcon className="h-4 w-4 text-slate-400" />
              <span>LinkedIn</span>
              <ArrowUpRightIcon className={ctaArrow} />
            </a>

            <a
              href="https://github.com/ricardoVeloso2424"
              target="_blank"
              rel="noreferrer noopener"
              className={secondaryCta}
            >
              <GitHubIcon className="h-4 w-4 text-slate-400" />
              <span>GitHub</span>
              <ArrowUpRightIcon className={ctaArrow} />
            </a>

            <a href="/CVRicardoVeloso.pdf" className={primaryCta}>
              <FileDownIcon className="h-4 w-4" />
              <span>Resume</span>
            </a>
          </div>

          <div className="rise-in rise-delay-5 mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {stats.map((item) => (
              <div
                key={item.k}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4 transition-colors hover:border-cyan-400/25 hover:bg-white/[0.04]"
              >
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  {item.k}
                </p>
                <p className="mt-1.5 text-sm font-medium text-slate-200">{item.v}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rise-in rise-delay-2 relative mx-auto w-full max-w-[19rem] sm:max-w-[21rem]">
          <motion.div style={animated ? { y: portraitY } : undefined} className="relative">
            <div
              aria-hidden
              className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-cyan-500/15 via-transparent to-emerald-500/15 blur-2xl"
            />

            <div className="relative rounded-[1.6rem] bg-gradient-to-br from-cyan-400/50 via-white/10 to-emerald-400/40 p-px">
              <div className="relative overflow-hidden rounded-[calc(1.6rem-1px)] bg-[#0a0f18] p-2.5">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.05rem]">
                  <Image
                    src="/A1A1A1.webp"
                    alt="Portrait of Ricardo Veloso"
                    fill
                    sizes="(max-width: 640px) 304px, 336px"
                    className="object-cover"
                    priority
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#04070d]/45 via-transparent to-transparent"
                  />
                </div>
              </div>
            </div>

            <span
              aria-hidden
              className="absolute -left-3 -top-3 h-7 w-7 rounded-tl-xl border-l-2 border-t-2 border-cyan-400/60"
            />
            <span
              aria-hidden
              className="absolute -bottom-3 -right-3 h-7 w-7 rounded-br-xl border-b-2 border-r-2 border-emerald-400/60"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
