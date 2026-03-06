import "animate.css";
import { getWorkExperience } from "@/lib/queries";
import WorkBlock from "@/components/workBlock";

export default async function Work() {
  const jobs = await getWorkExperience();

  return (
    <div className="flex flex-col space-y-6 md:container">
      <h2>Work experience.</h2>
      <p className="pb-6">
        Places I{"'"}ve worked at and roles I{"'"}ve held throughout my career:
      </p>
      <div className="animate__animated animate__fadeInRight animate__delay-1s px-4 pb-6 sm:px-0">
        <WorkBlock jobs={jobs} />
      </div>
    </div>
  );
}
