import Card from "./projectCard";
import type { Project } from "@/types";

export default function ProjectsBlock({ projects }: { projects: Project[] }) {
  return (
    <div className="flex flex-col content-end gap-y-6">
      {projects.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}
