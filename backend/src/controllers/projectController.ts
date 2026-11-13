import type { Request, Response } from "express";
import type { Project } from "../types/project.js";
import { prisma } from "../lib/prisma.js";
import { createProjectSchema } from "../validators/projectValidator.js";
import { createProject } from "../services/projectService.js";

export async function getProjects(req: Request, res: Response): Promise<void> {
  try {
    const projects = await prisma.project.findMany();
    res.json({ projects });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch projects" });
  }
}

export async function addProject(req: Request, res: Response): Promise<void> {
  try {
    const result = createProjectSchema.safeParse(req.body);

    if (!result.success) {
      res.status(400).json({
        message: "Invalid project data",
        errors: result.error.flatten(),
      });
      return;
    }

    const project = await createProject(result.data);

    res.status(201).json({
      message: "Project added successfully",
      project,
    });
  } catch (error) {
    console.error("Failed to create project:", error);

    res.status(500).json({
      message: "Failed to create project",
    });
  }
}
