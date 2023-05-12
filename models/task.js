const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: String,
  completed: Boolean,
  date: Date,
});

module.exports = mongoose.model("Task", TaskSchema);