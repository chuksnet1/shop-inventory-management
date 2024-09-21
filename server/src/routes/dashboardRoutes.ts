import { Router } from "express";
import { getDashboardMetrics } from "../controllers/dashboardCOntroller";


const router = Router();

router.get("/", getDashboardMetrics); 
export default router;