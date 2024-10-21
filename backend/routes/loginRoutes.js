import express from "express";
import { createUser, verifyUser } from "../controller/loginController.js";
export const router = express.Router();

router.post("/signup", createUser);

router.post("/", verifyUser);
