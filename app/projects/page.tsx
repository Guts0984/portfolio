import Diplomas from "@/components/Diplomas";
import { Button } from "@/components/ui/Button";
import { projects } from "@/projects";
import Image from "next/image";

function Projects() {
  return (
    <>
      <div className="grid grid-cols-1 gap-6">
        <h1 className="m-8 text-4xl font-bold">Recent Projects</h1>
        {projects.map((project, i) => (
          <div
            key={i}
            className="group flex min-h-[250px] w-[750px] rounded-lg border border-zinc-400 p-6 transition-all duration-300 ease-in-out hover:shadow-lg dark:border-zinc-800 dark:transition-shadow dark:hover:shadow-[0px_4px_10px_rgba(138,43,226,0.3)]"
          >
            {/* Image */}
            <div className="relative h-40 w-60 overflow-hidden rounded-md object-cover transition-all duration-300 ease-in-out group-hover:scale-105">
              <Image
                src={project.image}
                alt={project.title}
                sizes="100vh"
                fill
              />
            </div>

            {/* Description on the Right */}
            <div className="flex-1 pl-6">
              <h2 className="line-clamp-2 py-2 text-2xl font-bold leading-7">
                {project.title}
              </h2>

              <p className="line-clamp-3 py-2 text-base text-zinc-500">
                {project.description}
              </p>

              <div className="flex justify-between py-4 text-base text-zinc-500">
                <span>{new Date(project.date).toLocaleDateString()}</span>
                <div className="flex space-x-3">
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

export default Projects;
