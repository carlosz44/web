import { listSkills } from "@/lib/db/admin";
import SkillsAdmin from "@/components/admin/skillsAdmin";

export default async function AdminSkills() {
  const rows = await listSkills();
  return <SkillsAdmin rows={rows} />;
}
