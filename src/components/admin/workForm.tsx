"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { saveWork } from "@/server/actions/work";
import { workSchema, type WorkFormValues } from "@/lib/validation/schemas";
import Field from "@/components/ui/field";
import Input from "@/components/ui/input";
import Textarea from "@/components/ui/textarea";

export default function WorkForm({
  id,
  formId,
  defaultValues,
  onSuccess,
}: {
  id: string | null;
  formId: string;
  defaultValues: WorkFormValues;
  onSuccess?: () => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<WorkFormValues>({
    resolver: zodResolver(workSchema),
    defaultValues,
  });

  const onSubmit = handleSubmit(async (values) => {
    await saveWork(id, values);
    onSuccess?.();
  });

  return (
    <form
      id={formId}
      onSubmit={onSubmit}
      className="flex max-w-2xl flex-col gap-4"
    >
      <Field label="Company" error={errors.company?.message}>
        <Input {...register("company")} />
      </Field>
      <Field label="Role" error={errors.role?.message}>
        <Input {...register("role")} />
      </Field>
      <Field label="Description" error={errors.description?.message}>
        <Textarea rows={5} {...register("description")} />
      </Field>
      <Field label="Start" error={errors.start?.message}>
        <Input type="date" {...register("start")} />
      </Field>
      <Field label="End (blank = present)" error={errors.end?.message}>
        <Input type="date" {...register("end")} />
      </Field>
      <Field label="Location" error={errors.location?.message}>
        <Input {...register("location")} />
      </Field>
      <Field label="Tech stack" error={errors.techStack?.message}>
        <Input {...register("techStack")} />
      </Field>
    </form>
  );
}
