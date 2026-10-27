export type SectionId = "about" | "skills" | "projects" | "contact";

export type ProjectLink = {
  label: string;
  href: string;
  primary: boolean;
};

export type ProjectImageGroup = "Parent" | "Child";

export type ProjectImage = {
  src: string;
  group?: ProjectImageGroup;
  // Tall full-page capture: scroll inside the frame instead of cropping.
  fullPage?: boolean;
};

export type ProjectMedia = "web" | "mobile";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  media: ProjectMedia;
  images: ProjectImage[];
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
    media: "web",
    images: [
      { src: "/projects/maquiveloso/frontend1.png", fullPage: true },
      { src: "/projects/maquiveloso/frontend2.png", fullPage: true },
      { src: "/projects/maquiveloso/frontend3.png", fullPage: true },
      { src: "/projects/maquiveloso/frontend4.png", fullPage: true },
      { src: "/projects/maquiveloso/backend1.png", fullPage: true },
      { src: "/projects/maquiveloso/backend2.png", fullPage: true },
      { src: "/projects/maquiveloso/backend3.png", fullPage: true },
      { src: "/projects/maquiveloso/backend4.png", fullPage: true },
    ],
    links: [
      {
        label: "Live Site",
        href: "https://www.maquiveloso.pt/",
        primary: false,
      },
    ],
  },
  {
    title: "Casas Gerês",
    description:
      "Full-stack web platform for managing and promoting local accommodation in Gerês. Built with Laravel, it includes a public website for houses and units, booking requests, availability calendars, iCal synchronization with external platforms, photo management, content administration through a back office and SEO-oriented public pages.",
    tags: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "Alpine.js", "Blade", "iCal", "SEO"],
    media: "web",
    images: [
      { src: "/projects/casasgeres/02-home-unidades.png" },
      { src: "/projects/casasgeres/05-unidade-reserva.png" },
      { src: "/projects/casasgeres/07-admin-dashboard.png" },
      { src: "/projects/casasgeres/08-admin-pedidos.png" },
    ],
    links: [],
  },
  {
    title: "PowerFamily",
    description:
      "Family task management application where parents create tasks and children earn points by completing them. The system supports parent and child profiles, task assignment, completion review, point rewards, penalties, shared tasks, score tracking and streak logic designed around daily family routines.",
    tags: ["Laravel", "PHP", "MySQL", "React Native", "Expo", "TypeScript", "REST API"],
    media: "mobile",
    images: [
      { src: "/projects/powerfamily/parent-dashboard.png", group: "Parent" },
      { src: "/projects/powerfamily/parent-requests.png", group: "Parent" },
      { src: "/projects/powerfamily/child-dashboard.png", group: "Child" },
      { src: "/projects/powerfamily/child-tasks.png", group: "Child" },
      { src: "/projects/powerfamily/child-rewards.png", group: "Child" },
    ],
    links: [],
  },
  {
    title: "Galeria Lelo",
    description:
      "Built a .NET 8 platform to centralize gallery data for artworks, artists, and exhibitions. Implemented Entity Framework models and admin workflows so public content and back-office catalog operations stay consistent and easier to maintain.",
    tags: ["C#", ".NET 8", "Entity Framework", "SQL Server"],
    media: "web",
    images: [
      { src: "/projects/galeria-lelo/screenshot-1.webp" },
      { src: "/projects/galeria-lelo/screenshot-2.webp" },
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/ricardoVeloso2424/Galeria-Lelo",
        primary: false,
      },
    ],
  },
  {
    title: "TLDR",
    description:
      "Developed a Spring Boot application to speed up RFP response drafting from scattered business input. Implemented REST APIs, PostgreSQL persistence, and Spring AI generation so teams start from structured editable drafts instead of blank documents.",
    tags: ["Java", "Spring Boot", "PostgreSQL", "Spring AI"],
    media: "web",
    images: [
      { src: "/projects/tldr/screenshot-1.webp" },
      { src: "/projects/tldr/screenshot-2.webp" },
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/ricardoVeloso2424/RFP-AI-Response",
        primary: false,
      },
    ],
  },
  {
    title: "PowerCouple",
    description:
      "Mobile application for couples to track positive and negative actions, monthly scores and shared relationship goals. Built with a Laravel Sanctum API and an Expo React Native frontend, it includes authentication, couple invitations, category-based scoring, action history, optional photo upload, monthly statistics and snapshot-based monthly closing.",
    tags: ["Laravel", "PHP", "MySQL", "Laravel Sanctum", "React Native", "Expo", "TypeScript", "REST API"],
    media: "mobile",
    images: [
      { src: "/projects/powercouple/02-dashboard.png" },
      { src: "/projects/powercouple/03-adicionar-acao.png" },
      { src: "/projects/powercouple/05-historico.png" },
      { src: "/projects/powercouple/08-estatisticas-evolucao.png" },
    ],
    links: [],
  },
  {
    title: "Conversor",
    description:
      "Created a Python desktop converter to simplify repetitive media preparation tasks. Built a Tkinter interface over FFmpeg and Pillow with reusable presets, then packaged it with PyInstaller so non-technical users can run it without command-line setup.",
    tags: ["Python", "Tkinter", "FFmpeg", "imageio-ffmpeg", "Pillow", "PyInstaller"],
    media: "web",
    images: [{ src: "/projects/conversor/screenshot-1.webp" }],
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
