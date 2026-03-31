"use client";

import React from "react";
import Image from "next/image";
import { BackgroundGradient } from "../ui/background-gradient";
import { siteConfig } from "@/src/config/site";

export default function ProfileCard() {
  return (
    <div
      className="relative col-span-2 row-span-6 bg-spotify-light-dark rounded-xl p-4 max-md:p-3"
      id="#profile"
    >
      <div className="flex flex-col gap-7 max-md:gap-5">
        <BackgroundGradient containerClassName="rounded-[40px] place-self-center">
          <Image
            src={siteConfig.assets.avatar}
            alt={`${siteConfig.owner.name} placeholder avatar`}
            width={400}
            height={400}
            sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 400px"
            className="rounded-[25px] object-cover"
            priority
          />
        </BackgroundGradient>

        <PersonalStatement />
      </div>
    </div>
  );
}

function PersonalStatement() {
  return (
    <div className="flex flex-col gap-3 px-4">
      <div className="space-y-1.5">
        <h1 className="text-3xl font-semibold">{siteConfig.owner.name}</h1>
        <p className="text-spotify-gray text-sm">{siteConfig.owner.headline}</p>
      </div>
      <h4 className="text-sm">
        {siteConfig.owner.profileIntro}
        <br />
        <br />
        {siteConfig.owner.profileBody}
        <br />
        <br />
        I&apos;m currently building at{" "}
        <a
          href={siteConfig.owner.currentCompany.url}
          className="text-spotify-green underline"
        >
          {siteConfig.owner.currentCompany.name}.
        </a>{" "}
        <br />
        <br />
        <span>
          My interests center on{" "}
          <span className="text-spotify-green">{siteConfig.owner.focus}</span>.
        </span>
        <br />
        <br />
        <span>
          {siteConfig.owner.blogPrompt} Browse the example posts{" "}
          <a href="/blog" className="text-spotify-green underline">
            here.
          </a>{" "}
        </span>
      </h4>
    </div>
  );
}
