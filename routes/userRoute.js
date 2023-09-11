import express from "express";
import { createUser } from "../controllers/userController.js";
import { userValidation, validate } from "../middlewares/validator.js";

const router = express.Router();

router.post("/createUser", userValidation, validate, createUser);

export default router;
