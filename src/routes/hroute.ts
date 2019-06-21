import express from "express";
import { home } from "../controllers/hcontroller";
const router: express.Router = express.Router();

router.get("/", home);

export default router;

