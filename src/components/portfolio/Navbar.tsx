"use client";

import { motion, useReducedMotion } from "framer-motion";
import { navItems, type SectionId } from "@/data/portfolio";
import { cn } from "@/lib/cn";
import { TRANSITION_HOVER } from "@/lib/motion";

export default function Navbar({
  active,
  onNavigate,
}: {
  active: SectionId;
  onNavigate: (id: SectionId) => void;
}) {
  const prefersReducedMotion = useReducedMotion();
  const pillTransition = prefersReducedMotion ? { duration: 0 } : TRANSITION_HOVER;

  return (
    <header className="rise-in sticky top-3 z-50 sm:top-5">
      <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 rounded-2xl border border-white/[0.08] bg-[#070b14]/85 px-2.5 py-2 shadow-[0_16px_50px_-20px_rgba(0,0,0,0.85)] backdrop-blur-xl max-[400px]:justify-center sm:px-3">
        <button
          onClick={() => onNavigate("about")}
          className="flex items-center gap-2.5 rounded-xl px-2 py-1.5 transition-colors hover:bg-white/[0.05]"
        >
          <span
            aria-hidden
            className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-cyan-400 to-emerald-400 font-mono text-[11px] font-bold text-slate-950"
          >
            RV
          </span>
          <span className="text-sm font-semibold tracking-tight text-slate-100 max-[400px]:hidden">
            Ricardo Veloso
          </span>
        </button>

        <nav className="flex items-center gap-0.5 sm:gap-1">
          {navItems.map(([id, label]) => (
            <button
              key={id}
              onClick={() => onNavigate(id)}
              className={cn(
                "relative rounded-lg px-2.5 py-1.5 text-[13px] font-medium transition-colors sm:px-3 sm:text-sm",
                active === id ? "text-slate-100" : "text-slate-400 hover:text-slate-100",
              )}
            >
              {active === id && (
                <>
                  <motion.span
                    layoutId="nav-pill"
                    aria-hidden
                    className="absolute inset-0 rounded-lg bg-white/[0.07] ring-1 ring-white/10"
                    transition={pillTransition}
                  />
                  <motion.span
                    layoutId="nav-underline"
                    aria-hidden
                    className="absolute inset-x-0 -bottom-[3px] mx-auto h-0.5 w-5 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400"
                    transition={pillTransition}
                  />
                </>
              )}
              <span className="relative z-10">{label}</span>
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
