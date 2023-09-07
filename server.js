import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

const PORT = process.env.PORT || 8080;

const app = new express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json("Hello World");
});

app.listen(PORT, () => {
  console.log("Server created at port ", PORT);
});
