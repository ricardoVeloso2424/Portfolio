"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import type { ProjectImage, ProjectImageGroup, ProjectMedia } from "@/data/portfolio";
import { cn } from "@/lib/cn";
import { useAnimationsEnabled } from "@/lib/useAnimationsEnabled";
import BrowserFrame from "./BrowserFrame";
import PhoneFrame from "./PhoneFrame";

const GROUP_ORDER: ProjectImageGroup[] = ["Parent", "Child"];

export default function ProjectGallery({
  title,
  media,
  images,
}: {
  title: string;
  media: ProjectMedia;
  images: ProjectImage[];
}) {
  const animated = useAnimationsEnabled();

  const groups = useMemo(
    () => GROUP_ORDER.filter((g) => images.some((img) => img.group === g)),
    [images],
  );
  const grouped = groups.length > 0;

  const [activeGroup, setActiveGroup] = useState<ProjectImageGroup | null>(
    grouped ? groups[0] : null,
  );
  const [activeIndex, setActiveIndex] = useState(0);

  const visible = useMemo(
    () => (activeGroup ? images.filter((img) => img.group === activeGroup) : images),
    [images, activeGroup],
  );

  const safeIndex = Math.min(activeIndex, visible.length - 1);
  const current = visible[safeIndex] ?? visible[0];

  const Frame = media === "mobile" ? PhoneFrame : BrowserFrame;
  const mainWrapClass = media === "mobile" ? "mx-auto w-full max-w-[200px]" : "";
  const thumbClass = media === "mobile" ? "aspect-[9/19.5] w-11" : "aspect-video w-20";

  const currentLabel = `${title} screenshot ${safeIndex + 1}${
    activeGroup ? ` — ${activeGroup} view` : ""
  }`;

  return (
    <div>
      {grouped && (
        <div
          role="tablist"
          aria-label={`${title} screenshots by user type`}
          className="mb-4 inline-flex gap-1 rounded-xl border border-white/[0.08] bg-white/[0.02] p-1"
        >
          {groups.map((group) => {
            const selected = group === activeGroup;
            return (
              <button
                key={group}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => {
                  setActiveGroup(group);
                  setActiveIndex(0);
                }}
                className={cn(
                  "rounded-lg px-3 py-1.5 font-mono text-xs font-medium transition-colors",
                  selected
                    ? "bg-white/[0.08] text-slate-100 ring-1 ring-white/10"
                    : "text-slate-400 hover:text-slate-100",
                )}
              >
                {group}
              </button>
            );
          })}
        </div>
      )}

      <div className={mainWrapClass}>
        {animated ? (
          <motion.div
            key={current.src}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.22 }}
          >
            <Frame src={current.src} alt={currentLabel} />
          </motion.div>
        ) : (
          <Frame src={current.src} alt={currentLabel} />
        )}
      </div>

      {visible.length > 1 && (
        <div
          className={cn(
            "mt-4 flex gap-2 overflow-x-auto pb-1",
            media === "mobile" && "justify-center",
          )}
        >
          {visible.map((img, index) => {
            const selected = index === safeIndex;
            return (
              <button
                key={img.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show ${title} screenshot ${index + 1}${
                  activeGroup ? ` (${activeGroup} view)` : ""
                }`}
                aria-current={selected}
                className={cn(
                  "relative shrink-0 overflow-hidden rounded-lg border transition-colors",
                  thumbClass,
                  selected
                    ? "border-cyan-400/70 ring-1 ring-cyan-400/40"
                    : "border-white/10 opacity-70 hover:opacity-100 hover:border-white/25",
                )}
              >
                <Image
                  src={img.src}
                  alt=""
                  fill
                  sizes="88px"
                  className="object-cover object-top"
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
