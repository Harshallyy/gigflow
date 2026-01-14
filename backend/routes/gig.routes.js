import { createGig, getGigs } from "../controllers/gig.controller.js";
import { auth } from "../middleware/auth.js";
import express from "express";
const r = express.Router();
r.get("/", getGigs);
r.post("/", auth, createGig);
export default r;
