import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import projectRoutes from "./routes/projectRoutes.js";

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 5000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({
    message: "TeamFlow API is running",
  });
});

app.use("/api/projects", projectRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
