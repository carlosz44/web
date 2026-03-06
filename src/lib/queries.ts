import { request } from "./datocms";
import type { Project, Skill } from "@/types";

const PROJECTS_QUERY = `query projects {
  allProjects(filter: {projecttype: {eq: "project"}}) {
    id
    title
    description
    link
  }
}`;

const EXPERIMENTS_QUERY = `query experiments {
  allProjects(filter: {projecttype: {eq: "exp"}}) {
    id
    title
    description
    link
  }
}`;

const FRONT_SKILLS_QUERY = `query front {
  allSkills(filter: {skilltype: {eq: "front"}}) {
    id
    title
    start
    end
  }
}`;

const LANGS_SKILLS_QUERY = `query langs {
  allSkills(filter: {skilltype: {eq: "language"}}, orderBy: title_ASC) {
    id
    title
    start
    end
  }
}`;

const OTHER_SKILLS_QUERY = `query other {
  allSkills(filter: {skilltype: {eq: "other"}}, orderBy: _createdAt_ASC) {
    id
    title
    start
    end
  }
}`;

export async function getProjects() {
  const data = await request<{ allProjects: Project[] }>({
    query: PROJECTS_QUERY,
  });
  return data.allProjects;
}

export async function getExperiments() {
  const data = await request<{ allProjects: Project[] }>({
    query: EXPERIMENTS_QUERY,
  });
  return data.allProjects;
}

export async function getFrontSkills() {
  const data = await request<{ allSkills: Skill[] }>({
    query: FRONT_SKILLS_QUERY,
  });
  return data.allSkills;
}

export async function getLangSkills() {
  const data = await request<{ allSkills: Skill[] }>({
    query: LANGS_SKILLS_QUERY,
  });
  return data.allSkills;
}

export async function getOtherSkills() {
  const data = await request<{ allSkills: Skill[] }>({
    query: OTHER_SKILLS_QUERY,
  });
  return data.allSkills;
}
