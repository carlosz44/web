import type { ReactNode } from "react";

export default function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className="relative">
      <div className="absolute inset-0 translate-x-1 translate-y-1 transform rounded-md border-2 border-emerald-400 bg-linear-to-r from-violet-400 to-emerald-400 shadow-lg" />
      <div
        className={`relative rounded-md border-2 border-violet-400 bg-stone-800 shadow-lg ${className}`}
      >
        {children}
      </div>
    </div>
  );
}
