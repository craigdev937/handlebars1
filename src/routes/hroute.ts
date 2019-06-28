import express from "express";
import { home, dashboard, contact, lookup } from "../controllers/hcontroller";
const router: express.Router = express.Router();

router
    .get("/", home)
    .get("/dashboard", dashboard)
    .get("/each/helper", contact)
    .get("/lookup", lookup)

export default router;

