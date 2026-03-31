export type personalProject = {
  href: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  tech: string[];
  featured?: boolean;
};

export type personalProjectType = personalProject[];

export const personalProjects: personalProjectType = [
  {
    href: "https://example.com",
    imageSrc: "/projects/pulseboard.svg",
    imageAlt: "Pulseboard analytics dashboard preview",
    title: "Pulseboard Analytics",
    description:
      "A metrics workspace that turns product events into weekly insights, highlight reels, and shareable team dashboards.",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "PostgreSQL", "Charts"],
    featured: true,
  },
  {
    href: "https://example.com",
    imageSrc: "/projects/voice-notes.svg",
    imageAlt: "Voice Notes Studio mobile app preview",
    title: "Voice Notes Studio",
    description:
      "A mobile journaling app for recording quick voice notes, organizing takeaways, and searching past reflections with tags.",
    tech: ["React Native", "Expo", "TypeScript", "Supabase"],
    featured: true,
  },
  {
    href: "https://example.com",
    imageSrc: "/projects/civic-atlas.svg",
    imageAlt: "Civic Atlas map interface preview",
    title: "Civic Atlas",
    description:
      "An interactive map for discovering neighborhood initiatives, public resources, and volunteer opportunities across a city.",
    tech: ["Next.js", "Mapbox", "TypeScript", "Prisma"],
    featured: true,
  },
  {
    href: "https://example.com",
    imageSrc: "/projects/orbit-planner.svg",
    imageAlt: "Orbit sprint planner interface preview",
    title: "Orbit Sprint Planner",
    description:
      "A planning tool for small product teams that combines roadmaps, standups, and async check-ins in one calm workspace.",
    tech: ["React", "Node.js", "Express", "SQLite"],
  },
  {
    href: "https://example.com",
    imageSrc: "/projects/studio-site.svg",
    imageAlt: "Studio site homepage preview",
    title: "Studio Site System",
    description:
      "A reusable marketing site starter with editorial sections, modular case studies, and a CMS-ready content model.",
    tech: ["Next.js", "MDX", "TailwindCSS", "Vercel"],
  },
];
