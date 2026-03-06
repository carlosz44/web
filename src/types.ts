export interface Project {
  id: string;
  title: string;
  description: string;
  link: string;
}

export interface Skill {
  id: string;
  title: string;
  start: string;
  end: string | null;
}
