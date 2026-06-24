import { getSkillsGrouped } from "@/lib/queries";
import SkillsBlock from "@/components/portfolio/skillsBlock";

export default async function Experience() {
  const { front, languages, other } = await getSkillsGrouped();

  return (
    <div className="flex w-full flex-col space-y-6 md:container">
      <h2>Experience & Skills.</h2>
      <p className="pb-6">What I{"'"}ve been doing this years since 2018:</p>
      <div className="grid grid-cols-3 gap-6 lg:gap-12">
        <div className="col-span-3 animate-fade-up px-4 sm:px-0 lg:col-span-1">
          <SkillsBlock skills={languages} />
        </div>
        <div className="col-span-3 animate-fade-up px-4 [animation-delay:80ms] sm:px-0 lg:col-span-1">
          <SkillsBlock skills={front} />
        </div>
        <div className="col-span-3 animate-fade-up px-4 [animation-delay:160ms] sm:px-0 lg:col-span-1">
          <SkillsBlock skills={other} />
        </div>
      </div>
    </div>
  );
}
