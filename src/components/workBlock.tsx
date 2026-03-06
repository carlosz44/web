import WorkCard from "./workCard";
import type { WorkExperience } from "@/types";

export default function WorkBlock({ jobs }: { jobs: WorkExperience[] }) {
  return (
    <div className="flex flex-col content-end gap-y-6">
      {jobs.map((item) => (
        <WorkCard key={item.id} item={item} />
      ))}
    </div>
  );
}
