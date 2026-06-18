export function formatExperience(start: string, end: string | null): string {
  const startDate = new Date(start);
  const endDate = end ? new Date(end) : new Date();
  const months =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth());

  if (months < 12) return `${months} months`;

  const years = Math.round((months / 12) * 10) / 10;
  return `${years} year${years === 1 ? "" : "s"}`;
}
