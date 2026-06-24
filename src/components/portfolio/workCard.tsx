import type { WorkExperience } from "@/types";
import Card from "../ui/card";

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export default function WorkCard({ item }: { item: WorkExperience }) {
  return (
    <Card>
      <div className="flex flex-col p-4 sm:px-6">
        <div className="mb-3 w-full border-b border-violet-400 pb-3">
          <h3 className="text-xl font-semibold">{item.role}</h3>
          <div className="text-base text-stone-400">
            {item.company} · {item.location}
          </div>
          <div className="text-sm text-stone-500">
            {formatDate(item.start)} –{" "}
            {item.end ? formatDate(item.end) : "Present"}
          </div>
        </div>
        <div className="mb-1">
          <div className="mb-2 text-justify text-xl tracking-wide">
            {item.description}
          </div>
          {item.techStack && (
            <div className="text-sm text-emerald-400">{item.techStack}</div>
          )}
        </div>
      </div>
    </Card>
  );
}
