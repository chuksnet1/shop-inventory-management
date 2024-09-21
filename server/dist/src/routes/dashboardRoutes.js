"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dashboardCOntroller_1 = require("../controllers/dashboardCOntroller");
const router = (0, express_1.Router)();
router.get("/", dashboardCOntroller_1.getDashboardMetrics);
exports.default = router;
