"use client";

import OffsetButton from "@/components/ui/offsetButton";

export default function AdminError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex w-full flex-col items-center justify-center space-y-4">
      <h2>Something went wrong.</h2>
      <p className="text-stone-400">{error.message || "Unexpected error."}</p>
      <OffsetButton onClick={reset}>Try again</OffsetButton>
    </div>
  );
}
