export interface Project {
  id: string;
  title: string;
  description: string;
  link: string;
  year: number;
}

export interface Skill {
  id: string;
  title: string;
  start: string;
  end: string | null;
}

export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  description: string;
  start: string;
  end: string | null;
  location: string;
  techStack: string;
}
