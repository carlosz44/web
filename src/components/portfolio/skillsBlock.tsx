import SkillCard from "./skillCard";
import Card from "../ui/card";
import type { Skill } from "@/types";

export default function SkillsBlock({ skills }: { skills: Skill[] }) {
  return (
    <Card className="px-8">
      <div className="flex flex-col divide-y-2 divide-stone-700">
        {skills.map((item) => (
          <SkillCard key={item.id} item={item} />
        ))}
      </div>
    </Card>
  );
}
