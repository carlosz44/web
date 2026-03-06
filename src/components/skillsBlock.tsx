import SkillCard from "./skillCard";
import type { Skill } from "@/types";

export default function SkillsBlock({ skills }: { skills: Skill[] }) {
  return (
    <div className="relative">
      <div className="absolute inset-0 translate-x-1 translate-y-1 transform rounded-md border-2 border-emerald-400 bg-linear-to-r from-violet-400 to-emerald-400 shadow-lg"></div>
      <div className="relative rounded-md border-2 border-violet-400 bg-stone-800 shadow-lg">
        <div className="flex flex-col divide-y-2 divide-stone-700 px-8">
          {skills.map((item) => (
            <SkillCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
