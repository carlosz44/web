import "animate.css";
import { getProjects, getExperiments } from "@/lib/queries";
import ProjectsBlock from "@/components/projectsBlock";

export default async function Projects() {
  const [projects, experiments] = await Promise.all([
    getProjects(),
    getExperiments(),
  ]);

  return (
    <div className="flex flex-col space-y-6 md:container">
      <h2>Projects & experiments.</h2>
      <p className="pb-6">
        Some projects I{"'"}ve been lucky to be part of. Also I tend to create
        things when I get bored:
      </p>
      <div className="grid grid-cols-2 gap-x-40 gap-y-6 overflow-hidden lg:gap-y-12">
        <div className="animate__animated animate__fadeInRight animate__delay-1s col-span-2 px-4 sm:px-0 lg:col-span-1">
          <ProjectsBlock projects={projects} />
        </div>
        <div className="animate__animated animate__fadeInRight col-span-2 px-4 sm:px-0 lg:col-span-1">
          <ProjectsBlock projects={experiments} />
        </div>
      </div>
    </div>
  );
}
