import { Router } from "express";
import { getExpense } from "../controllers/expenseController";

const router = Router();

router.get("/", getExpense);

export default router;
