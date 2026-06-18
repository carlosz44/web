"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { saveProject } from "@/server/actions/projects";
import {
  projectSchema,
  type ProjectFormValues,
} from "@/lib/validation/schemas";
import Field from "@/components/ui/field";
import Input from "@/components/ui/input";
import Textarea from "@/components/ui/textarea";
import Select from "@/components/ui/select";

export default function ProjectForm({
  id,
  formId,
  defaultValues,
  onSuccess,
}: {
  id: string | null;
  formId: string;
  defaultValues: ProjectFormValues;
  onSuccess?: () => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProjectFormValues>({
    resolver: zodResolver(projectSchema),
    defaultValues,
  });

  const onSubmit = handleSubmit(async (values) => {
    await saveProject(id, values);
    onSuccess?.();
  });

  return (
    <form
      id={formId}
      onSubmit={onSubmit}
      className="flex max-w-2xl flex-col gap-4"
    >
      <Field label="Title" error={errors.title?.message}>
        <Input {...register("title")} />
      </Field>
      <Field label="Description" error={errors.description?.message}>
        <Textarea rows={4} {...register("description")} />
      </Field>
      <Field label="Link" error={errors.link?.message}>
        <Input {...register("link")} />
      </Field>
      <Field label="Year" error={errors.year?.message}>
        <Input type="number" {...register("year", { valueAsNumber: true })} />
      </Field>
      <Field label="Type" error={errors.type?.message}>
        <Select {...register("type")}>
          <option value="project">Project</option>
          <option value="exp">Experiment</option>
        </Select>
      </Field>
    </form>
  );
}
