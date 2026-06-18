"use client";

import { useEffect, type ReactNode } from "react";
import Card from "./card";
import OffsetButton from "./offsetButton";

export default function Modal({
  open,
  onClose,
  title,
  formId,
  submitLabel = "Save",
  children,
}: {
  open: boolean;
  onClose: () => void;
  title?: string;
  formId?: string;
  submitLabel?: string;
  children: ReactNode;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/60 p-4 sm:p-8"
      onClick={onClose}
    >
      <div className="w-full max-w-2xl" onClick={(e) => e.stopPropagation()}>
        <Card className="p-6">
          <div className="mb-4 flex items-center justify-between border-b border-violet-400 pb-3">
            <h3 className="text-xl font-semibold">{title}</h3>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="text-2xl leading-none text-stone-400 hover:text-white"
            >
              ×
            </button>
          </div>
          {children}
          {formId && (
            <div className="mt-4 flex justify-end border-t border-violet-400 pt-4">
              <OffsetButton type="submit" form={formId}>
                {submitLabel}
              </OffsetButton>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
