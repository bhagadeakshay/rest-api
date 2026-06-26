require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const todoItemsRouter = require("./routes/todoItemsRouter");
const errorsController = require("./controllers/errors");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

app.use("/api/todo", todoItemsRouter);

app.use(errorsController.pageNotFound);

const DB_PATH = process.env.MONGO_URI;

mongoose
  .connect(DB_PATH)
  .then(() => {
    console.log("Connected to MongoDB");

    // Start server only when running locally
    if (!process.env.VERCEL) {
      const PORT = process.env.PORT || 3000;
      app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
      });
    }
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = app;
