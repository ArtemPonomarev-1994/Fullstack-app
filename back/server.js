import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import colors from "colors";
import path from "path";
// Routes
import userRoutes from "./routes/userRoutes.js";
import { connectDB } from "./config/db.js";

dotenv.config();

connectDB();


const app = express();

if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

app.use(express.json());

const __dirname = path.resolve();

app.use("/uploads", express.static(path.join(__dirname, "/uploads/")));

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
