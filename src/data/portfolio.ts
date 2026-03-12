export type SectionId = "about" | "skills" | "projects" | "contact";

export type ProjectLink = {
  label: string;
  href: string;
  primary: boolean;
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  images: string[];
  links: ProjectLink[];
};

export const skills = [
  "Java",
  "JavaScript",
  "TypeScript",
  "SQL",
  "React",
  "Next.js",
  "Spring",
  "Laravel",
  "REST APIs",
  "Git",
  "Python",
];

export const projects: Project[] = [
  {
    title: "Maquiveloso",
    description:
      "Built a full-stack Laravel platform for a sewing machine repair and sales business. Replaced static content updates with a public product catalog and a CMS back office so non-technical staff can manage products and pages directly.",
    tags: ["Laravel", "Livewire", "Tailwind CSS", "Blade", "MySQL", "JavaScript"],
    images: ["/maquiveloso-frontend.webp", "/maquiveloso-backoffice.webp"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/ricardoVeloso2424/maquivelosoV2",
        primary: false,
      },
    ],
  },
  {
    title: "TLDR",
    description:
      "Developed a Spring Boot application to speed up RFP response drafting from scattered business input. Implemented REST APIs, PostgreSQL persistence, and Spring AI generation so teams start from structured editable drafts instead of blank documents.",
    tags: ["Java", "Spring Boot", "PostgreSQL", "Spring AI"],
    images: ["/TLDR1.webp", "/TLDR2.webp"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/ricardoVeloso2424/RFP-AI-Response",
        primary: false,
      },
    ],
  },
  {
    title: "Galeria Lelo",
    description:
      "Built a .NET 8 platform to centralize gallery data for artworks, artists, and exhibitions. Implemented Entity Framework models and admin workflows so public content and back-office catalog operations stay consistent and easier to maintain.",
    tags: ["C#", ".NET 8", "Entity Framework", "SQL Server"],
    images: ["/GALERIA1.webp", "/GALERIA2.webp"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/ricardoVeloso2424/Galeria-Lelo",
        primary: false,
      },
    ],
  },
  {
    title: "Conversor",
    description:
      "Created a Python desktop converter to simplify repetitive media preparation tasks. Built a Tkinter interface over FFmpeg and Pillow with reusable presets, then packaged it with PyInstaller so non-technical users can run it without command-line setup.",
    tags: ["Python", "Tkinter", "FFmpeg", "imageio-ffmpeg", "Pillow", "PyInstaller"],
    images: ["/conversor.webp"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/ricardoVeloso2424/Converter",
        primary: false,
      },
    ],
  },
];

export const navItems: ReadonlyArray<readonly [SectionId, string]> = [
  ["about", "About"],
  ["skills", "Skills"],
  ["projects", "Projects"],
  ["contact", "Contact"],
];
