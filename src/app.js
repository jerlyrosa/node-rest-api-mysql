import "dotenv/config";
import express from "express";
import indexRoutes from "./routes/index.routes.js";
import employeesRoutes from "./routes/employes.routes.js";

const app = express();

app.use(express.json());

app.use(indexRoutes);
app.use("/api", employeesRoutes);

app.use((req, res, next) => {
  res.status(404).json({
    message: "Enpoint Not Found",
  });
});

export default app;
