export function formatExperience(start: string, end: string | null): string {
  const startDate = new Date(start);
  const endDate = end ? new Date(end) : new Date();
  const exp =
    (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 30 * 12);
  const years = Math.round(exp * 10) / 10;
  const months = Math.floor((Math.abs(exp) - Math.floor(exp)) * 12);

  if (exp < 1) return `${months} months`;
  return `${years} year${years > 1 ? "s" : ""}`;
}
