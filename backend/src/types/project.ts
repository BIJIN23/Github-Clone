export type ProjectStatus = "planning" | "active" | "completed";

export interface Project {
  id: number;
  name: string;
  status: ProjectStatus;
}
