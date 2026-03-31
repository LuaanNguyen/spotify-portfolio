export type SocialPlatform = "github" | "linkedin" | "x";

export const siteConfig = {
  siteName: "spotify-portfolio",
  siteUrl: "https://averagejoe.dev",
  locale: "en_US",
  owner: {
    name: "Average Joe",
    role: "Builder of Mostly Useful Things",
    headline: "Engineer • Tinkerer • Occasional Overthinker",
    description:
      "A Spotify-inspired portfolio starter for people who want a personal site with some personality and a low-effort content workflow.",
    currentCompany: {
      name: "Acme Moonbase",
      url: "https://example.com",
    },
    profileIntro:
      "Hi, I&apos;m Average Joe. I build things, break them, and usually fix them before lunch.",
    profileBody:
      "Use this starter to show the projects you are proud of or the rabbit holes you are currently disappearing into.",
    focus:
      "product systems, and shipping weird little ideas that turn out useful",
    blogPrompt: "",
  },
  contact: {
    email: "joe@averagejoe.dev",
  },
  socials: {
    github: "https://github.com/averagejoe",
    linkedin: "https://www.linkedin.com/in/average-joe-dev",
    x: "https://x.com/averagejoedev",
  },
  seo: {
    defaultTitle: "Average Joe | Builder of Mostly Useful Things",
    description:
      "A Spotify-inspired portfolio starter for people who want a personal site with some personality and a low-effort content workflow.",
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
    author: "Average Joe",
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
  return Object.values(siteConfig.socials).filter((url) =>
    url.startsWith("http"),
  );
}

export function getNameWords(): string[] {
  return siteConfig.owner.name.split(/\s+/).filter(Boolean);
}
