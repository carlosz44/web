"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { saveSkill } from "@/server/actions/skills";
import { skillSchema, type SkillFormValues } from "@/lib/validation/schemas";
import Field from "@/components/ui/field";
import Input from "@/components/ui/input";
import Select from "@/components/ui/select";

export default function SkillForm({
  id,
  formId,
  defaultValues,
  onSuccess,
}: {
  id: string | null;
  formId: string;
  defaultValues: SkillFormValues;
  onSuccess?: () => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SkillFormValues>({
    resolver: zodResolver(skillSchema),
    defaultValues,
  });

  const onSubmit = handleSubmit(async (values) => {
    await saveSkill(id, values);
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
      <Field label="Start" error={errors.start?.message}>
        <Input type="date" {...register("start")} />
      </Field>
      <Field label="End (blank = ongoing)" error={errors.end?.message}>
        <Input type="date" {...register("end")} />
      </Field>
      <Field label="Type" error={errors.type?.message}>
        <Select {...register("type")}>
          <option value="front">Front</option>
          <option value="language">Language</option>
          <option value="other">Other</option>
        </Select>
      </Field>
    </form>
  );
}
