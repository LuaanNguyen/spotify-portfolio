import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";
import { ProjectsProps } from "../../page";
import { GrLinkNext } from "react-icons/gr";
import { FaArrowDown } from "react-icons/fa6";
import { personalProjects } from "../../../../data/projects";

export default function Projects({ onSetExperienceSection }: ProjectsProps) {
  return (
    <div
      className="max-md:hidden max-lg:col-span-1 max-lg:row-span-1 col-span-2 row-span-6 col-start-5 bg-spotify-light-dark rounded-xl overflow-hidden"
      id="projects"
    >
      <div className="p-4">
        <div className="flex gap-3 justify-center sm:flex-auto">
          {/* Primary Button (Green) */}
          <button
            type="button"
            className="flex items-center justify-center text-sm font-bold 
            bg-spotify-green/10 border-spotify-green hover:scale-105 
            px-5 py-2 rounded-xl gap-2 
            min-w-[180px] text-spotify-green mb-0.5 transition-all duration-200 w-fit hover:bg-spotify-green/10 cursor-pointer"
            aria-label="View featured projects below"
          >
            Featured Projects
            <FaArrowDown className="text-base" />
          </button>

          {/* Secondary Button (White Border) */}
          <button
            type="button"
            className="flex items-center justify-center text-sm font-bold 
            border border-[#727272] hover:border-white hover:scale-105 
            text-white px-5 py-3 rounded-xl gap-2 transition-all duration-200
            animate-pulse hover:animate-none hover:bg-white hover:text-black
            shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]
            min-w-[180px]"
            onClick={onSetExperienceSection}
            aria-label="Explore all projects in expanded view"
          >
            Explore All Projects
            <GrLinkNext className="text-base" />
          </button>
        </div>
      </div>
      <StickyScroll content={projectLists} />
    </div>
  );
}

const featuredProjects = personalProjects.filter((project) => project.featured);
const spotlightProjects =
  featuredProjects.length > 0 ? featuredProjects : personalProjects.slice(0, 3);

const projectLists: {
  title: string;
  description: string;
  content?: React.ReactNode | any;
}[] = spotlightProjects
  .map((project) => ({
    title: project.title,
    description: project.description,
    content: (
      <a target="_blank" rel="noopener noreferrer" href={project.href}>
        <Image
          src={project.imageSrc}
          alt={project.imageAlt}
          width={500}
          height={300}
          sizes="500px"
        />
      </a>
    ),
  }));
