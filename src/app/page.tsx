import type { Metadata } from "next";
import HomeClient from "./HomeClient";
import { absoluteUrl, siteConfig } from "@/src/config/site";

export interface ProjectsProps {
  onSetExperienceSection?: () => void;
}

export const metadata: Metadata = {
  title: siteConfig.seo.defaultTitle,
  description: siteConfig.seo.description,
  alternates: {
    canonical: absoluteUrl(),
  },
};

export default function Home() {
  return <HomeClient />;
}
