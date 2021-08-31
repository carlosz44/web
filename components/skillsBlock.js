import SkillCard from "./skillCard";

export default function SkillsBlock({ skills }) {
  return (
    <div className="flex flex-col content-end gap-y-2 w-full bg-gray-600 bg-opacity-10 rounded p-8 text-white border border-purple-400 shadow-lg">
      {skills.map((item) => (
        <SkillCard key={item.id} item={item} />
      ))}
    </div>
  );
}
