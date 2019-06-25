import express from "express";
import { home, dashboard, contact } from "../controllers/hcontroller";
const router: express.Router = express.Router();

router
    .get("/", home)
    .get("/dashboard", dashboard)
    .get("/each/helper", contact)

export default router;

