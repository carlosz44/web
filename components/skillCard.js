export default function SkillCard({ item }) {
  const start = new Date(item.start);
  const end = item.end ? new Date(item.end) : new Date();
  const exp =
    (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24 * 30 * 12);
  const years = Math.round(exp * 10) / 10;
  const months = Math.floor((Math.abs(exp) - Math.floor(exp)) * 12);
  const formatted =
    exp < 1 ? `${months} months` : `${years} year${years > 1 ? "s" : ""}`;

  return (
    <div className="grid grid-cols-3">
      <p className="col-span-2 tracking-wide">{item.title}</p>
      <p className="col-span-1 tracking-wide text-right">{formatted}</p>
    </div>
  );
}
