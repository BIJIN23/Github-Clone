import type { Request, Response } from "express";
import { prisma } from "../lib/prisma.js";
import { createProjectSchema } from "../validators/projectValidator.js";
import { createProject } from "../services/projectService.js";
import { AppError } from "../utils/AppError.js";

export async function getProjects(req: Request, res: Response): Promise<void> {
  const projects = await prisma.project.findMany();
  res.json({ projects });
}

export async function addProject(req: Request, res: Response): Promise<void> {
  const result = createProjectSchema.safeParse(req.body);

  if (!result.success) {
    throw new AppError("Invalid project data", 400);
  }

  const project = await createProject(result.data);

  res.status(201).json({
    message: "Project added successfully",
    project,
  });
}
