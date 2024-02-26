import express from "express";
import { PORT, mogoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoutes from "./routes/booksRoutes.js";
import cors from "cors";

const app = express();

app.use(cors());

// Middleware for parsing request body
app.use(express.json());

app.get("/", (req, res) => {
  console.log(req);
  return res.status(200).send("Welcome Home");
});

// Routes

app.use("/books", booksRoutes);

mongoose
  .connect(mogoDBURL)
  .then(() => {
    console.log("App connected to DB");
    app.listen(PORT, () => {
      console.log(`App is running on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error, "Error connecting to the database");
  });
