import "dotenv/config";
import express from "express";
import indexRoutes from "./routes/index.routes.js";
import employeesRoutes from "./routes/employes.routes.js";

const app = express();

const PORT = process.env.APP_PORT || 3000;

app.use(indexRoutes);
app.use(employeesRoutes);

app.listen(PORT, () => {
  console.log(`Server runing on port ${PORT}`);
});
