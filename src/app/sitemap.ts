import type { MetadataRoute } from "next";
import { getSortedPostsData } from "@/src/lib/blog";
import { absoluteUrl } from "@/src/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getSortedPostsData();
  const blogEntries = posts.map((post) => ({
    url: absoluteUrl(`/blog/post/${post.slug}`),
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: absoluteUrl(),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: absoluteUrl("/blog"),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogEntries,
  ];
}
