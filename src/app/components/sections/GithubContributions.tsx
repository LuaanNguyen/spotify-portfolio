import React, { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { siteConfig } from "@/src/config/site";

const GithubContributions: React.FC = () => {
  const username = siteConfig.widgets.githubUsername.trim();
  const [loading, setLoading] = useState(true); // State to manage loading

  useEffect(() => {
    if (!username) {
      return;
    }

    const timer = setTimeout(() => {
      setLoading(false);
    }, 0);

    return () => clearTimeout(timer);
  }, [username]);

  if (!username) {
    return (
      <div
        className="flex py-2 px-3 max-lg:col-span-1 max-lg:row-span-1 col-span-4 row-span-2 col-start-1 row-start-7 bg-spotify-light-dark rounded-xl h-fit"
        id="contribution"
      >
        <div className="w-full rounded-xl border border-dashed border-white/10 p-6">
          <h2 className="text-lg font-semibold text-white">GitHub Contributions</h2>
          <p className="mt-2 text-sm text-spotify-light-gray">
            Add your GitHub username in <code>src/config/site.ts</code> to show
            your contribution graph here.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="flex py-2 px-3 max-lg:col-span-1 max-lg:row-span-1 col-span-4 row-span-2 col-start-1 row-start-7 bg-spotify-light-dark rounded-xl h-fit"
      id="contribution"
    >
      {loading ? (
        <div className="rounded-md p-4 max-w-lg w-full mx-auto">
          <div className="animate-pulse flex space-x-4">
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-spotify-green rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-spotify-green rounded col-span-2"></div>
                  <div className="h-2 bg-spotify-green rounded col-span-1"></div>
                </div>
                <div className="h-2 bg-spotify-green rounded"></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full items-center content-center justify-center justify-items-center">
          <GitHubCalendar
            username={username}
            blockSize={11} // Size of each block
            blockMargin={2} // Margin between blocks
            fontSize={12} // Font size for the text
            colorScheme="dark"
            theme={{
              dark: ["#161616", "#0e4429", "#006d32", "#26a641", "#39d353"],
              light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
            }}
          />
        </div>
      )}
    </div>
  );
};

export default GithubContributions;
