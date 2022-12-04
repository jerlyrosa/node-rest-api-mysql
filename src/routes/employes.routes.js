import { Router } from "express";
import {
  CreateEmployee,
  DeleteEmployee,
  getEmployess,
  UpdateEmployee,
} from "../controllers/employess.controllers.js";

const routes = Router();

routes.get("/employees", getEmployess);

routes.post("/employees", CreateEmployee);
routes.put("/employees", UpdateEmployee);

routes.delete("/employees", DeleteEmployee);

export default routes;
