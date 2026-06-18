import { listProjects } from "@/lib/db/admin";
import ProjectsAdmin from "@/components/admin/projectsAdmin";

export default async function AdminProjects() {
  const rows = await listProjects();
  return <ProjectsAdmin rows={rows} />;
}
