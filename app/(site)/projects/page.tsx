import { getProjectsGrouped } from "@/lib/queries";
import ProjectsBlock from "@/components/projectsBlock";

export default async function Projects() {
  const { projects, experiments } = await getProjectsGrouped();

  return (
    <div className="flex flex-col space-y-6 md:container">
      <h2>Projects & experiments.</h2>
      <p className="pb-6">
        Some projects I{"'"}ve been lucky to be part of. Also I tend to create
        things when I get bored:
      </p>
      <div className="grid grid-cols-2 gap-x-40 gap-y-6 overflow-hidden lg:gap-y-12">
        <div className="col-span-2 animate-fade-up px-4 sm:px-0 lg:col-span-1">
          <ProjectsBlock projects={projects} />
        </div>
        <div className="col-span-2 animate-fade-up px-4 [animation-delay:80ms] sm:px-0 lg:col-span-1">
          <ProjectsBlock projects={experiments} />
        </div>
      </div>
    </div>
  );
}
