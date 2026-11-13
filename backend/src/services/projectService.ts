import { prisma } from "../lib/prisma.js";
import type { CreateProjectInput } from "../validators/projectValidator.js";

export async function createProject(data: CreateProjectInput) {
  const project = await prisma.project.create({
    data: {
      name: data.name,
      status: data.status,
    },
  });
  return project;
}
