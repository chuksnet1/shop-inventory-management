import { Router } from "express";
import { createProducts, getProduct } from "../controllers/productController";

const router = Router();

router.post("/createProduct", createProducts);
router.get("/getProduct", getProduct);

export default router;
