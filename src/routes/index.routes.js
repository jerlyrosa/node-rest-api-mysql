import { Router } from "express";
import { Ping } from "../controllers/index.controllers.js";

const router = Router();

router.get("/ping", Ping);

export default router;
