import Card from "./projectCard";

export default function ProjectsBlock({ projects }) {
  return (
    <div className="flex flex-col content-end gap-y-6">
      {projects.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}
