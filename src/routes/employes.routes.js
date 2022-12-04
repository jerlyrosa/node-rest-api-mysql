import { Router } from "express";
import {
  CreateEmployee,
  DeleteEmployee,
  getEmployes,
  getEmployess,
  UpdateEmployee,
} from "../controllers/employess.controllers.js";

const routes = Router();

routes.get("/employees", getEmployess);
routes.get("/employees/:id", getEmployes);

routes.post("/employees", CreateEmployee);
routes.put("/employees", UpdateEmployee);

routes.delete("/employees/:id", DeleteEmployee);

export default routes;
