"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";

export default function DeleteButton({
  id,
  action,
}: {
  id: string;
  action: (id: string) => Promise<void>;
}) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  return (
    <button
      type="button"
      disabled={pending}
      onClick={() => {
        if (!confirm("Delete this item?")) return;
        startTransition(async () => {
          await action(id);
          router.refresh();
        });
      }}
      className="text-sm text-red-400 underline disabled:opacity-50"
    >
      {pending ? "Deleting…" : "Delete"}
    </button>
  );
}
