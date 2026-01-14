import { register, login } from "../controllers/auth.controller.js";
import express from "express";
const r = express.Router();
r.post("/register", register);
r.post("/login", login);
export default r;
