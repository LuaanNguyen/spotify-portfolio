import React from "react";
import Footer from "../components/Footer";
import { getSortedPostsData } from "../../lib/blog";
import BlogHeader from "../components/blog/BlogHeader";
import BlogPostList from "../components/blog/BlogPostList";
import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/src/config/site";

const blogTitle = `${siteConfig.blog.title} | ${siteConfig.owner.name}`;

export const metadata: Metadata = {
  title: blogTitle,
  description: siteConfig.blog.description,
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    type: "website",
    url: absoluteUrl("/blog"),
    title: blogTitle,
    description: siteConfig.blog.description,
    siteName: siteConfig.siteName,
    images: [
      {
        url: siteConfig.seo.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.seo.ogImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: blogTitle,
    description: siteConfig.blog.description,
    images: [siteConfig.seo.ogImage],
    ...(siteConfig.seo.twitterHandle
      ? { creator: siteConfig.seo.twitterHandle }
      : {}),
  },
};

export default function BlogListingPage() {
  const blogPosts = getSortedPostsData();
  const toIsoDate = (date: string) => {
    const parsed = new Date(date);
    return Number.isNaN(parsed.getTime()) ? date : parsed.toISOString();
  };
  const blogListJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${siteConfig.owner.name} ${siteConfig.blog.title}`,
    url: absoluteUrl("/blog"),
    author: {
      "@type": "Person",
      name: siteConfig.owner.name,
      url: absoluteUrl(),
    },
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: absoluteUrl(`/blog/post/${post.slug}`),
      datePublished: toIsoDate(post.date),
      image: post.image.startsWith("http") ? post.image : absoluteUrl(post.image),
    })),
  };

  return (
    <div className="min-h-screen text-white lowercase">
      <div className="max-md:mx-4 max-md:mt-2 mx-40 mt-4">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListJsonLd) }}
        />
        <BlogHeader
          title={siteConfig.blog.title}
          subtitle={siteConfig.blog.description}
          backLink="/"
          backText="Back to Portfolio"
        />
        <BlogPostList posts={blogPosts} />
        <Footer />
      </div>
    </div>
  );
}
