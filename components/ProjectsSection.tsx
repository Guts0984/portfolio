import Diplomas from "@/components/Diplomas";
import { Button } from "@/components/ui/Button";
import { projects } from "@/projects";
import Image from "next/image";

function ProjectsSection() {
  return (
    <>
      <div className="grid grid-cols-1 gap-6">
        <h1 className="m-8 text-center text-4xl font-bold md:text-left">
          Recent Projects
        </h1>
        {projects.map((project, i) => (
          <div
            key={i}
            className="group flex min-h-[250px] w-full flex-col rounded-lg border border-zinc-400 p-6 transition-all duration-300 ease-in-out hover:shadow-lg dark:border-zinc-800 dark:transition-shadow dark:hover:shadow-[0px_4px_10px_rgba(138,43,226,0.3)] md:w-[750px] md:flex-row"
          >
            {/* Image */}
            <div className="relative h-40 w-full overflow-hidden rounded-md object-cover transition-all duration-300 ease-in-out group-hover:scale-105 md:h-40 md:w-60">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
              />
            </div>

            {/* Description on the Right */}
            <div className="mt-4 flex-1 pl-0 md:mt-0 md:pl-6">
              <h2 className="line-clamp-2 py-2 text-xl font-bold leading-7 md:text-2xl">
                {project.title}
              </h2>

              <p className="line-clamp-3 py-2 text-base text-zinc-500">
                {project.description}
              </p>

              <div className="flex flex-col justify-between py-4 text-base text-zinc-500 md:flex-row">
                <span>{new Date(project.date).toLocaleDateString()}</span>
                <div className="mt-3 flex space-x-3 md:mt-0">
                  <Button
                    asChild
                    className="rounded-md border border-zinc-300 p-2 text-nebula-purple transition-all duration-300 ease-in-out hover:bg-nebula-purple hover:text-white dark:border-nebula-purple"
                  >
                    <a
                      href={project.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live
                    </a>
                  </Button>

                  <Button
                    asChild
                    className="rounded-full border border-zinc-300 p-2 text-nebula-purple transition-all duration-300 ease-in-out hover:bg-nebula-purple hover:text-white dark:border-nebula-purple"
                  >
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Diplomas Section */}
      <Diplomas />
    </>
  );
}

export default ProjectsSection;
