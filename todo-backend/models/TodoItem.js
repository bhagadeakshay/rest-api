const mongoose = require("mongoose");

const todoItemSchema = mongoose.Schema(
  {
    task: {
      type: String,
      required: true,
    },
    date: Date,
    isCompleted: {
      type: Boolean,
      default: false,
    },
  },
  { timeStamp: true },
);

module.exports = mongoose.model("TodoItem", todoItemSchema);
