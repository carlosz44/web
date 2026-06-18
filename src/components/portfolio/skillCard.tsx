import type { Skill } from "@/types";
import { formatExperience } from "@/lib/helpers";

export default function SkillCard({ item }: { item: Skill }) {
  const formatted = formatExperience(item.start, item.end);

  return (
    <div className="grid grid-cols-3 items-center py-6">
      <div className="col-span-2 text-xl tracking-wide">{item.title}</div>
      <div className="col-span-1 text-right text-xl tracking-wide">{formatted}</div>
    </div>
  );
}
