import type { Project } from "@/types";
import Card from "../ui/card";
import OffsetButton from "../ui/offsetButton";

export default function ProjectCard({ item }: { item: Project }) {
  return (
    <Card>
      <div className="flex flex-col p-4 sm:px-6">
        <div className="mb-3 w-full border-b border-violet-400 pb-3">
          <h3 className="text-xl font-semibold">{item.title}</h3>
        </div>
        <div className="mb-1">
          <div className="mb-4 text-justify text-xl tracking-wide">
            {item.description}
          </div>
          {item.link && (
            <div className="flex flex-row-reverse items-center justify-between">
              <OffsetButton
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Details →
              </OffsetButton>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
