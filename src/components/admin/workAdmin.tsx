"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { WorkRow } from "@/lib/db/schema";
import type { WorkFormValues } from "@/lib/validation/schemas";
import { deleteWork } from "@/server/actions/work";
import WorkForm from "./workForm";
import DeleteButton from "./deleteButton";
import Modal from "@/components/ui/modal";
import OffsetButton from "@/components/ui/offsetButton";

export default function WorkAdmin({ rows }: { rows: WorkRow[] }) {
  const router = useRouter();
  const [editing, setEditing] = useState<WorkRow | null | undefined>(undefined);

  const open = editing !== undefined;
  const close = () => setEditing(undefined);
  const onSuccess = () => {
    close();
    router.refresh();
  };

  const defaults: WorkFormValues = editing
    ? {
        company: editing.company,
        role: editing.role,
        description: editing.description,
        start: editing.start,
        end: editing.end ?? "",
        location: editing.location ?? "",
        techStack: editing.techStack ?? "",
      }
    : {
        company: "",
        role: "",
        description: "",
        start: "",
        end: "",
        location: "",
        techStack: "",
      };

  return (
    <div className="flex w-full flex-col space-y-6 md:container">
      <div className="flex items-center justify-between">
        <h2>Work.</h2>
        <OffsetButton onClick={() => setEditing(null)}>New</OffsetButton>
      </div>
      <ul className="flex flex-col divide-y divide-stone-700">
        {rows.map((w) => (
          <li key={w.id} className="flex items-center justify-between py-3">
            <div>
              <div className="text-lg">{w.role}</div>
              <div className="text-sm text-stone-400">
                {w.company} · {w.start}
                {w.end ? ` – ${w.end}` : " – present"}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setEditing(w)}
                className="text-sm underline"
              >
                Edit
              </button>
              <DeleteButton id={w.id} action={deleteWork} />
            </div>
          </li>
        ))}
      </ul>
      <Modal
        open={open}
        onClose={close}
        title={editing ? "Edit work" : "New work"}
        formId="work-form"
      >
        <WorkForm
          key={editing?.id ?? "new"}
          formId="work-form"
          id={editing?.id ?? null}
          defaultValues={defaults}
          onSuccess={onSuccess}
        />
      </Modal>
    </div>
  );
}
