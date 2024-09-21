"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
exports.router = (0, express_1.Router)();
exports.router.get("/", userController_1.getUser);
exports.default = exports.router;
