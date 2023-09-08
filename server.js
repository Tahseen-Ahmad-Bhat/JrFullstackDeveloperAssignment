import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import userRoutes from "./routes/userRoute.js";

const PORT = process.env.PORT || 8080;
const MONGO_URI = process.env.MONGO_URI;
const app = new express();

app.use(cors());
app.use(express.json());

app.use("/api/user", userRoutes);

// Connecting with mongoDB and creating server
mongoose
  .connect(MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server created at port ", PORT);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
