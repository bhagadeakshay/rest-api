const express = require("express");
const path = require("path");
const { default: mongoose } = require("mongoose");
const cors = require("cors");

const DB_PATH =
  "mongodb+srv://Akshay:akshay@shophurtz.fu4wqds.mongodb.net/shopHurtz?appName=shopHurtz";

const todoItemsRouter = require("./routes/todoItemsRouter");
const errorsController = require("./controllers/errors");

const app = express();

app.use(express.urlencoded());
app.use(express.json());
app.use(cors());
app.use("/api/todo", todoItemsRouter);

app.use(errorsController.pageNotFound);

const PORT = 3000;

mongoose
  .connect(DB_PATH)
  .then(() => {
    console.log("Connected to database");
    app.listen(PORT, () => {
      console.log(`Server is running on address
     http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("error while connecting to database", err);
  });
