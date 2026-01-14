import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import authRoutes from "./routes/auth.routes.js";
import gigRoutes from "./routes/gig.routes.js";
import bidRoutes from "./routes/bid.routes.js";

dotenv.config();
connectDB();

const app = express();

// ---------- CORS CONFIG (IMPORTANT) ----------
app.use(
  cors({
    origin: [
      "https://gigflowharshal.netlify.app", // frontend live
      "http://localhost:5173"               // frontend local dev
    ],
    credentials: true,
  })
);

// Required header for cookies/JWT + CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/gigs", gigRoutes);
app.use("/api/bids", bidRoutes);

export default app;
