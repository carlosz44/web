import Link from "next/link";
import OffsetButton from "@/components/ui/offsetButton";

export default function AdminHeader({
  title,
  onNew,
}: {
  title: string;
  onNew: () => void;
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-baseline gap-6">
        <h2>{title}</h2>
        <Link href="/admin" className="link-accent text-xl">
          ← Back
        </Link>
      </div>
      <OffsetButton onClick={onNew}>New</OffsetButton>
    </div>
  );
}
