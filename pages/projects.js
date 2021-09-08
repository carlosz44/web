import "animate.css";
import { request } from "../lib/datocms";
import ProjectsBlock from "../components/projectsBlock";

const PROJECTS_QUERY = `query projects {
  allProjects(filter: {projecttype: {eq: "project"}}) {
    id
    title
    description
    link
  }
}`;

const EXP_QUERY = `query exp {
  allProjects(filter: {projecttype: {eq: "exp"}}) {
    id
    title
    description
    link
  }
}`;

export async function getStaticProps() {
  const projects = await request({
    query: PROJECTS_QUERY,
    variables: { limit: 10 },
  });
  const exp = await request({
    query: EXP_QUERY,
    variables: { limit: 10 },
  });

  return {
    props: { projects, exp },
  };
}

export default function Projects({ projects, exp }) {
  return (
    <div className="flex flex-col md:container space-y-6">
      <h2>Projects & experiments.</h2>
      <p className="pb-6">
        Some projects I've been lucky to be part of. Also I tend to create
        things when I get bored:
      </p>
      <div className="overflow-hidden grid grid-cols-2 gap-x-40 gap-y-12">
        <div className="animate__animated animate__fadeInRight animate__delay-1s px-4 sm:px-0 pb-6 col-span-2 sm:col-span-1">
          <ProjectsBlock projects={projects.allProjects} />
        </div>
        <div className="animate__animated animate__fadeInRight px-4 sm:px-0 col-span-2 sm:col-span-1">
          <ProjectsBlock projects={exp.allProjects} />
        </div>
      </div>
    </div>
  );
}
