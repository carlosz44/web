import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import OffsetButton from "@/components/ui/offsetButton";

export default async function AdminPage() {
  const user = await auth.requireAdmin();

  async function signOut() {
    "use server";
    await auth.signOut();
    redirect("/login");
  }

  return (
    <div className="flex w-full flex-col space-y-6 md:container">
      <h2>Admin.</h2>
      <p>Signed in as {user.username ?? "admin"}.</p>
      <form action={signOut}>
        <OffsetButton type="submit">Sign out</OffsetButton>
      </form>
    </div>
  );
}
