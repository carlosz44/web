import type { Skill } from "@/types";
import { formatExperience } from "@/lib/helpers";

export default function SkillCard({ item }: { item: Skill }) {
  const formatted = formatExperience(item.start, item.end);

  return (
    <div className="grid grid-cols-3 items-center py-6">
      <p className="col-span-2 tracking-wide">{item.title}</p>
      <p className="col-span-1 text-right tracking-wide">{formatted}</p>
    </div>
  );
}
