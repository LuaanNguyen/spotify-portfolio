import React from "react";
import { siteConfig } from "@/src/config/site";

const SpotifyAlbum: React.FC = () => {
  const embedUrl = siteConfig.widgets.spotifyEmbedUrl.trim();

  if (!embedUrl) {
    return (
      <div className="max-md:hidden max-lg:col-span-1 max-lg:row-span-1 col-span-2 row-span-2 col-start-5 row-start-7 bg-spotify-black rounded-xl min-h-[152px] p-4">
        <div className="flex h-full flex-col justify-center rounded-xl border border-dashed border-white/10 px-4 py-5">
          <p className="text-sm font-semibold text-white">Spotify Embed</p>
          <p className="mt-2 text-sm text-spotify-light-gray">
            Add a Spotify album or playlist embed URL in{" "}
            <code>src/config/site.ts</code> to replace this starter card.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-md:hidden max-lg:col-span-1 max-lg:row-span-1 col-span-2 row-span-2 col-start-5 row-start-7 bg-spotify-black rounded-xl min-h-[152px]">
      <iframe
        className="w-full h-full rounded-xl"
        src={embedUrl}
        title="Spotify album player"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        style={{ height: "100%", width: "100%" }}
      ></iframe>
    </div>
  );
};

export default SpotifyAlbum;
