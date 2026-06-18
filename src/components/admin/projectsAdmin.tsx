"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { ProjectRow } from "@/lib/db/schema";
import type { ProjectFormValues } from "@/lib/validation/schemas";
import { deleteProject } from "@/server/actions/projects";
import ProjectForm from "./projectForm";
import DeleteButton from "./deleteButton";
import Modal from "@/components/ui/modal";
import OffsetButton from "@/components/ui/offsetButton";

const CURRENT_YEAR = new Date().getFullYear();

export default function ProjectsAdmin({ rows }: { rows: ProjectRow[] }) {
  const router = useRouter();
  const [editing, setEditing] = useState<ProjectRow | null | undefined>(
    undefined,
  );

  const open = editing !== undefined;
  const close = () => setEditing(undefined);
  const onSuccess = () => {
    close();
    router.refresh();
  };

  const defaults: ProjectFormValues = editing
    ? {
        title: editing.title,
        description: editing.description,
        link: editing.link ?? "",
        year: editing.year ?? CURRENT_YEAR,
        type: editing.type,
      }
    : { title: "", description: "", link: "", year: CURRENT_YEAR, type: "project" };

  return (
    <div className="flex w-full flex-col space-y-6 md:container">
      <div className="flex items-center justify-between">
        <h2>Projects.</h2>
        <OffsetButton onClick={() => setEditing(null)}>New</OffsetButton>
      </div>
      <ul className="flex flex-col divide-y divide-stone-700">
        {rows.map((p) => (
          <li key={p.id} className="flex items-center justify-between py-3">
            <div>
              <div className="text-lg">{p.title}</div>
              <div className="text-sm text-stone-400">
                {p.type} · {p.year}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setEditing(p)}
                className="text-sm underline"
              >
                Edit
              </button>
              <DeleteButton id={p.id} action={deleteProject} />
            </div>
          </li>
        ))}
      </ul>
      <Modal
        open={open}
        onClose={close}
        title={editing ? "Edit project" : "New project"}
        formId="project-form"
      >
        <ProjectForm
          key={editing?.id ?? "new"}
          formId="project-form"
          id={editing?.id ?? null}
          defaultValues={defaults}
          onSuccess={onSuccess}
        />
      </Modal>
    </div>
  );
}
