import { request } from "../lib/datocms";
import SkillsBlock from "../components/skillsBlock";

const FRONT_QUERY = `query front {
  allSkills(filter: {skilltype: {eq: "front"}}) {
    id
    title
    start
    end
  }
}`;
const LANGS_QUERY = `query langs {
  allSkills(filter: {skilltype: {eq: "language"}}, orderBy: title_ASC) {
    id
    title
    start
    end
  }
}`;
const OTHER_QUERY = `query other {
  allSkills(filter: {skilltype: {eq: "other"}}, orderBy: _createdAt_ASC) {
    id
    title
    start
    end
  }
}`;

export async function getStaticProps() {
  const front = await request({
    query: FRONT_QUERY,
    variables: { limit: 10 },
  });
  const langs = await request({
    query: LANGS_QUERY,
    variables: { limit: 10 },
  });
  const other = await request({
    query: OTHER_QUERY,
    variables: { limit: 10 },
  });

  return {
    props: { front, langs, other },
  };
}

export default function Experience({ front, langs, other }) {
  return (
    <div className="flex flex-col md:container space-y-6 w-full">
      <h2>Experience & Skills.</h2>
      <p className="pb-6">What I've been doing this years since 2008:</p>
      <div className="grid grid-cols-3 gap-12">
        <div className="px-4 sm:px-0 pb-6 col-span-3 md:col-span-1">
          <SkillsBlock skills={front.allSkills} />
        </div>
        <div className="px-4 sm:px-0 col-span-3 md:col-span-1">
          <SkillsBlock skills={langs.allSkills} />
        </div>
        <div className="px-4 sm:px-0 col-span-3 md:col-span-1">
          <SkillsBlock skills={other.allSkills} />
        </div>
      </div>
    </div>
  );
}
