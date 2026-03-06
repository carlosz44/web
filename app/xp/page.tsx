import "animate.css";
import { getFrontSkills, getLangSkills, getOtherSkills } from "@/lib/queries";
import SkillsBlock from "@/components/skillsBlock";

export default async function Experience() {
  const [front, langs, other] = await Promise.all([
    getFrontSkills(),
    getLangSkills(),
    getOtherSkills(),
  ]);

  return (
    <div className="flex w-full flex-col space-y-6 md:container">
      <h2>Experience & Skills.</h2>
      <p className="pb-6">What I{"'"}ve been doing this years since 2018:</p>
      <div className="grid grid-cols-3 gap-6 lg:gap-12">
        <div className="animate__animated animate__fadeInLeft col-span-3 px-4 sm:px-0 lg:col-span-1">
          <SkillsBlock skills={front} />
        </div>
        <div className="animate__animated animate__fadeInLeft animate__delay-1s col-span-3 px-4 sm:px-0 lg:col-span-1">
          <SkillsBlock skills={langs} />
        </div>
        <div className="animate__animated animate__fadeInLeft animate__delay-2s col-span-3 px-4 sm:px-0 lg:col-span-1">
          <SkillsBlock skills={other} />
        </div>
      </div>
    </div>
  );
}
