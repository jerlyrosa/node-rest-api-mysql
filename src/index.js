import "dotenv/config";
import express from "express";
import indexRoutes from "./routes/index.routes.js";
import employeesRoutes from "./routes/employes.routes.js";

const PORT = process.env.APP_PORT || 3000;

const app = express();

app.use(express.json());

app.use(indexRoutes);
app.use("/api", employeesRoutes);

app.listen(PORT, () => {
  console.log(`Server runing on port ${PORT}`);
});
