import { request } from "./datocms";
import type { Project, Skill, WorkExperience } from "@/types";

const PROJECTS_QUERY = `query projects {
  allProjects(filter: {projecttype: {eq: "project"}}, orderBy: year_DESC) {
    id
    title
    description
    link
    year
  }
}`;

const EXPERIMENTS_QUERY = `query experiments {
  allProjects(filter: {projecttype: {eq: "exp"}}, orderBy: year_DESC) {
    id
    title
    description
    link
    year
  }
}`;

const FRONT_SKILLS_QUERY = `query front {
  allSkills(filter: {skilltype: {eq: "front"}}, orderBy: title_DESC) {
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
  allSkills(filter: {skilltype: {eq: "other"}}, orderBy: title_ASC) {
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

const WORK_EXPERIENCE_QUERY = `query work {
  allWorkExperiences(orderBy: start_DESC) {
    id
    company
    role
    description
    start
    end
    location
    techStack
  }
}`;

export async function getWorkExperience() {
  const data = await request<{ allWorkExperiences: WorkExperience[] }>({
    query: WORK_EXPERIENCE_QUERY,
  });
  return data.allWorkExperiences;
}
