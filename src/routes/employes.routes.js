import { Router } from "express";

const routes = Router();

routes.get("/employees", async (req, res) => {
  res.send("hi");
});

routes.post("/employees", (req, res) => {
  res.send("Post employees");
});
routes.put("/employees", (req, res) => {
  res.send("Put employees");
});

routes.delete("/employees", (req, res) => {
  res.send("Delete employees");
});

export default routes;
