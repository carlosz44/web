import { listWork } from "@/lib/db/admin";
import WorkAdmin from "@/components/admin/workAdmin";

export default async function AdminWork() {
  const rows = await listWork();
  return <WorkAdmin rows={rows} />;
}
