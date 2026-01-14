import { createBid, hireBid } from "../controllers/bid.controller.js";
import { auth } from "../middleware/auth.js";
import express from "express";
const r = express.Router();
r.post("/", auth, createBid);
r.patch("/:bidId/hire", auth, hireBid);
export default r;
