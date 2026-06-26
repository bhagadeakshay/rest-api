const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const todoItemsRouter = require("./routes/todoItemsRouter");
const errorsController = require("./controllers/errors");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  cors({
    origin: "*",
  }),
);

app.use("/api/todo", todoItemsRouter);

app.use(errorsController.pageNotFound);

// Read MongoDB URL from environment variable
const DB_PATH = process.env.MONGO_URI;

mongoose
  .connect(DB_PATH)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = app;
