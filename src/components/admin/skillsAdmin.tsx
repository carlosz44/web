"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import type { SkillRow } from "@/lib/db/schema";
import type { SkillFormValues } from "@/lib/validation/schemas";
import { deleteSkill } from "@/server/actions/skills";
import SkillForm from "./skillForm";
import DeleteButton from "./deleteButton";
import Modal from "@/components/ui/modal";
import OffsetButton from "@/components/ui/offsetButton";

export default function SkillsAdmin({ rows }: { rows: SkillRow[] }) {
  const router = useRouter();
  const [editing, setEditing] = useState<SkillRow | null | undefined>(undefined);

  const open = editing !== undefined;
  const close = () => setEditing(undefined);
  const onSuccess = () => {
    close();
    router.refresh();
  };

  const defaults: SkillFormValues = editing
    ? {
        title: editing.title,
        start: editing.start,
        end: editing.end ?? "",
        type: editing.type,
      }
    : { title: "", start: "", end: "", type: "front" };

  return (
    <div className="flex w-full flex-col space-y-6 md:container">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/admin" className="text-base underline">← Back</Link>
          <h2>Skills.</h2>
        </div>
        <OffsetButton onClick={() => setEditing(null)}>New</OffsetButton>
      </div>
      <ul className="flex flex-col divide-y divide-stone-700">
        {rows.map((s) => (
          <li key={s.id} className="flex items-center justify-between py-3">
            <div>
              <div className="text-lg">{s.title}</div>
              <div className="text-sm text-stone-400">
                {s.type} · {s.start}
                {s.end ? ` – ${s.end}` : ""}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setEditing(s)}
                className="text-sm underline"
              >
                Edit
              </button>
              <DeleteButton id={s.id} action={deleteSkill} />
            </div>
          </li>
        ))}
      </ul>
      <Modal
        open={open}
        onClose={close}
        title={editing ? "Edit skill" : "New skill"}
        formId="skill-form"
      >
        <SkillForm
          key={editing?.id ?? "new"}
          formId="skill-form"
          id={editing?.id ?? null}
          defaultValues={defaults}
          onSuccess={onSuccess}
        />
      </Modal>
    </div>
  );
}
