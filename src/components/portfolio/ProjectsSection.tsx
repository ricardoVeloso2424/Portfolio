"use client";

import { motion } from "framer-motion";
import type { ComponentProps, RefObject } from "react";
import type { Project } from "@/data/portfolio";
import ProjectCard from "./ProjectCard";
import SectionHeader from "./SectionHeader";

type MotionSectionProps = Partial<ComponentProps<typeof motion.section>>;

export default function ProjectsSection({
  sectionRef,
  revealMotion,
  motionReduced,
  projects,
}: {
  sectionRef: RefObject<HTMLElement | null>;
  revealMotion: MotionSectionProps;
  motionReduced: boolean;
  projects: Project[];
}) {
  return (
    <motion.section ref={sectionRef} {...revealMotion} className="mt-10 space-y-8 scroll-mt-28">
      <SectionHeader title="Projects" />

      <div className="space-y-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} motionReduced={motionReduced} />
        ))}
      </div>
    </motion.section>
  );
}
