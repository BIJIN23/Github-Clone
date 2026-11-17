import type { Response, Request, NextFunction } from "express";
import { AppError } from "../utils/AppError.js";

export function errorHandler(
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  if (res.headersSent) {
    next(err);
    return;
  }
  if (err instanceof AppError) {
    res.status(err.statusCode).json({ message: err.message });
    return;
  }
  console.error(" Unexpected error:", err);
  res.status(500).json({ message: "Internal Server Error" });
}
