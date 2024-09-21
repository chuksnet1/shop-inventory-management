"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController_1 = require("../controllers/productController");
const router = (0, express_1.Router)();
router.post("/createProduct", productController_1.createProducts);
router.get("/getProduct", productController_1.getProduct);
exports.default = router;
