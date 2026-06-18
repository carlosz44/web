import { redirect } from "next/navigation";
import Link from "next/link";
import { auth } from "@/lib/auth";
import { listProjects, listSkills, listWork } from "@/lib/db/admin";
import Card from "@/components/ui/card";
import OffsetButton from "@/components/ui/offsetButton";

export default async function AdminPage() {
  const user = await auth.requireAdmin();

  async function signOut() {
    "use server";
    await auth.signOut();
    redirect("/login");
  }

  const [projects, skills, work] = await Promise.all([
    listProjects(),
    listSkills(),
    listWork(),
  ]);

  const entities = [
    { href: "/admin/projects", label: "Projects", count: projects.length },
    { href: "/admin/skills", label: "Skills", count: skills.length },
    { href: "/admin/work", label: "Work", count: work.length },
  ];

  return (
    <div className="flex w-full flex-col space-y-6 md:container">
      <div className="flex items-center justify-between">
        <h2>Admin.</h2>
        <form action={signOut}>
          <OffsetButton type="submit">Sign out</OffsetButton>
        </form>
      </div>
      <p>Signed in as {user.username ?? "admin"}.</p>
      <div className="grid gap-4 sm:grid-cols-3">
        {entities.map((e) => (
          <Link key={e.href} href={e.href}>
            <Card className="p-6">
              <div className="text-xl font-semibold">{e.label}</div>
              <div className="text-stone-400">{e.count} entries</div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
