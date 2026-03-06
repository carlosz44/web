import type { Project } from "@/types";

export default function Card({ item }: { item: Project }) {
  return (
    <div className="relative">
      <div className="absolute inset-0 translate-x-1 translate-y-1 transform rounded-md border-2 border-emerald-400 bg-linear-to-r from-violet-400 to-emerald-400 shadow-lg"></div>
      <div className="relative rounded-md border-2 border-violet-400 bg-stone-800 shadow-lg">
        <div className="flex flex-col p-4 sm:px-6">
          <div className="mb-3 w-full border-b border-violet-400 pb-3">
            <h3 className="text-xl font-semibold">{item.title}</h3>
          </div>
          <div className="mb-1">
            <p className="mb-4 px-0 text-justify tracking-wide">
              {item.description}
            </p>
            <div className="flex flex-row-reverse items-center justify-between">
              <div className="relative mb-1 flex justify-end text-base leading-6 font-medium">
                <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 transform rounded-md border-2 border-emerald-400 bg-linear-to-r from-violet-400 to-emerald-400 shadow-lg"></div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative transform rounded-md border-2 border-violet-400 bg-stone-800 px-4 py-2 text-white shadow-lg transition duration-300 outline-none hover:-translate-x-1 hover:-translate-y-1 hover:bg-violet-400 hover:shadow-xl focus:ring focus:ring-white focus:ring-inset active:translate-x-0.5 active:translate-y-0.5"
                  href={item.link}
                >
                  Details →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
