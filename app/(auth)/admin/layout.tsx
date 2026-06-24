import { auth } from "@/lib/auth";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await auth.requireAdmin();
  return <>{children}</>;
}
