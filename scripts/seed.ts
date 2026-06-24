import { readFileSync } from "node:fs";
import { db } from "@/lib/db";
import { projects, skills, work } from "@/lib/db/schema";

type SeedFile = {
  projects: {
    title: string;
    description: string;
    link: string;
    year: number;
    type: "project" | "exp";
  }[];
  skills: {
    title: string;
    start: string;
    end: string | null;
    type: "front" | "language" | "other";
  }[];
  work: {
    company: string;
    role: string;
    description: string;
    start: string;
    end: string | null;
    location: string;
    tech_stack: string;
  }[];
};

const SEED_PATH = "../portfolio-api/seed_data.json";

async function main() {
  const data = JSON.parse(readFileSync(SEED_PATH, "utf8")) as SeedFile;

  await db.delete(work);
  await db.delete(skills);
  await db.delete(projects);

  await db.insert(projects).values(data.projects);
  await db.insert(skills).values(data.skills);
  await db.insert(work).values(
    data.work.map((w) => ({
      company: w.company,
      role: w.role,
      description: w.description,
      start: w.start,
      end: w.end,
      location: w.location,
      techStack: w.tech_stack,
    })),
  );

  console.log(
    `seeded ${data.projects.length} projects, ${data.skills.length} skills, ${data.work.length} work entries`,
  );
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
