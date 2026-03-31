import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { absoluteUrl, getSocialProfileUrls, siteConfig } from "@/src/config/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: siteConfig.owner.name,
  description: siteConfig.seo.description,
  keywords: [...siteConfig.seo.keywords],
  creator: siteConfig.owner.name,
  authors: [{ name: siteConfig.owner.name }],
  icons: {
    icon: siteConfig.assets.favicon,
    shortcut: siteConfig.assets.favicon,
    apple: [
      { url: siteConfig.assets.favicon, type: "image/svg+xml" },
    ],
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: absoluteUrl(),
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.description,
    siteName: siteConfig.siteName,
    images: [
      {
        url: siteConfig.seo.ogImage,
        width: 1920,
        height: 1440,
        alt: siteConfig.seo.ogImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.description,
    images: [siteConfig.seo.ogImage],
    ...(siteConfig.seo.twitterHandle
      ? {
          creator: siteConfig.seo.twitterHandle,
          site: siteConfig.seo.twitterHandle,
        }
      : {}),
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: absoluteUrl(),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Structured data for rich Google search results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: siteConfig.owner.name,
              url: absoluteUrl(),
              image: absoluteUrl(siteConfig.seo.ogImage),
              sameAs: getSocialProfileUrls(),
              email: siteConfig.contact.email,
              jobTitle: siteConfig.owner.role,
              worksFor: {
                "@type": "Organization",
                name: siteConfig.owner.currentCompany.name,
              },
              description: siteConfig.owner.description,
            }),
          }}
        />
      </head>
      <body className="font-sans">
        <header>
          <Navigation />
        </header>
        {children}
        {siteConfig.features.vercelAnalytics ? <Analytics /> : null}
        {siteConfig.features.speedInsights ? <SpeedInsights /> : null}
      </body>
    </html>
  );
}
