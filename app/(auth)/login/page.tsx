import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { config } from "@/lib/config";
import GitHubSignInButton from "@/components/auth/githubSignInButton";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const user = await auth.getCurrentUser();
  if (user && user.githubId === config.ALLOWED_GH_ID) {
    redirect("/admin");
  }

  const { error } = await searchParams;

  return (
    <div className="flex w-full flex-col items-center justify-center space-y-6">
      {error && <p className="text-red-400">Sign in failed. Try again.</p>}
      {user && (
        <p className="text-stone-400">
          Signed in as {user.username ?? "unknown"}, but not authorized.
        </p>
      )}
      <GitHubSignInButton />
    </div>
  );
}
