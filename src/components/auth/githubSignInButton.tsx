"use client";

import { signInWithGitHub } from "@/lib/auth/client";
import OffsetButton from "@/components/ui/offsetButton";

export default function GitHubSignInButton() {
  return (
    <OffsetButton onClick={() => signInWithGitHub()}>
      Sign in with GitHub
    </OffsetButton>
  );
}
