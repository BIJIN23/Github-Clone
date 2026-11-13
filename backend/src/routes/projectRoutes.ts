import { Router } from "express";
import { addProject, getProjects } from "../controllers/projectController.js";

const router = Router();

router.get("/", getProjects);
router.post("/", addProject);

export default router;
