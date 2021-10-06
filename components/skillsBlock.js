import SkillCard from "./skillCard";

export default function SkillsBlock({ skills }) {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r border-2 border-green-400 from-purple-400 to-green-400 shadow-lg transform translate-x-1 translate-y-1 rounded-md"></div>
      <div className="relative border-2 border-purple-400 bg-gray-800 shadow-lg rounded-md">
        <div className="flex flex-col px-8 divide-y-2 > * divide-gray-700 > *">
          {skills.map((item) => (
            <SkillCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
