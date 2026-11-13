import { z } from "zod";

export const createProjectSchema = z.object({
  name: z.string().trim().min(3),
  status: z.enum(["planning", "active", "completed"]),
});

export type CreateProjectInput = z.infer<typeof createProjectSchema>;
