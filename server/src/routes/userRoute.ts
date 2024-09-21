import express from "express";
import { Router } from "express";
import {getUser} from "../controllers/userController";

export const router = Router();

router.get("/", getUser);

export default router;
