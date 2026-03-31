import React from "react";
import { siteConfig } from "@/src/config/site";

export default function Footer() {
  return (
    <footer className="max-lg:col-span-1  max-lg:row-span-1 col-span-6 items-center text-center mb-10">
      <p className="text-spotify-light-gray max-md:text-sm">
        &copy; {new Date().getFullYear()} {siteConfig.owner.name}
      </p>
      <p className="text-spotify-light-gray max-md:text-sm mt-5">
        Built with Next.js, Tailwind CSS, and reusable content files. Update
        the starter data, swap the media, and make it yours.
      </p>
      {siteConfig.footer.repositoryUrl ? (
        <p className="text-spotify-light-gray max-md:text-sm mt-2">
          Source code{" "}
          <a
            href={siteConfig.footer.repositoryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-spotify-green font-semibold underline"
          >
            here
          </a>
          .
        </p>
      ) : null}
    </footer>
  );
}
