"use client";

import { motion } from "framer-motion";
import type { RefObject } from "react";
import type { Project } from "@/data/portfolio";
import { reveal } from "@/lib/motion";
import { useAnimationsEnabled } from "@/lib/useAnimationsEnabled";
import ProjectCard from "./ProjectCard";
import SectionHeader from "./SectionHeader";

export default function ProjectsSection({
  sectionRef,
  projects,
}: {
  sectionRef: RefObject<HTMLElement | null>;
  projects: Project[];
}) {
  const animated = useAnimationsEnabled();

  return (
    <section id="projects" ref={sectionRef} className="mt-24 scroll-mt-28 sm:mt-32">
      <motion.div {...reveal(animated)}>
        <SectionHeader index="03" title="Projects" />
      </motion.div>

      <div className="space-y-16 sm:space-y-24">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
