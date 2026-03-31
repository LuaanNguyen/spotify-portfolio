export type SocialPlatform = "github" | "linkedin" | "x";

export const siteConfig = {
  siteName: "spotify-portfolio",
  siteUrl: "https://your-domain.com",
  locale: "en_US",
  owner: {
    name: "Your Name",
    role: "Product Engineer",
    headline: "Engineer • Designer • Storyteller",
    description:
      "A Spotify-inspired portfolio starter for engineers, designers, and creative technologists who want a bold personal website.",
    currentCompany: {
      name: "North Star Studio",
      url: "https://example.com",
    },
    profileIntro: "Welcome. Make this space unmistakably yours.",
    profileBody:
      "Use this starter to introduce the work you care about, the teams you have helped, and the direction you are heading next.",
    focus:
      "product systems, frontend architecture, and developer experiences that feel polished and human",
    blogPrompt:
      "Swap these example posts for your own notes, essays, or project breakdowns.",
  },
  contact: {
    email: "hello@yourdomain.com",
  },
  socials: {
    github: "https://github.com/yourusername",
    linkedin: "https://www.linkedin.com/in/your-linkedin",
    x: "https://x.com/yourhandle",
  },
  seo: {
    defaultTitle: "Your Name | Product Engineer",
    description:
      "A Spotify-inspired portfolio starter for engineers, designers, and creative technologists who want a bold personal website.",
    keywords: [
      "portfolio website",
      "spotify portfolio",
      "next.js portfolio",
      "software engineer portfolio",
      "design engineer portfolio",
    ],
    ogImage: "/og-template.svg",
    ogImageAlt: "Spotify-inspired portfolio starter preview",
    twitterHandle: "",
  },
  blog: {
    title: "Writings",
    description:
      "Notes on shipping projects, documenting decisions, and keeping a personal site current.",
    author: "Your Name",
  },
  footer: {
    repositoryUrl: "",
  },
  features: {
    vercelAnalytics: false,
    speedInsights: false,
  },
  widgets: {
    githubUsername: "",
    spotifyEmbedUrl: "",
  },
  assets: {
    avatar: "/avatar-placeholder.svg",
    favicon: "/favicon.svg",
  },
} as const;

export function absoluteUrl(path = ""): string {
  const baseUrl = siteConfig.siteUrl.replace(/\/$/, "");

  if (!path) {
    return baseUrl;
  }

  return `${baseUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function getSocialProfileUrls(): string[] {
  return Object.values(siteConfig.socials).filter((url) => url.startsWith("http"));
}

export function getNameWords(): string[] {
  return siteConfig.owner.name.split(/\s+/).filter(Boolean);
}
