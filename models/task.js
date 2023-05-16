const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name must be provided."],
    trim: true,
    unique: true,
    maxlength: [20, "Name can not be more than 20 characters"],
  },
  completed: { type: Boolean, default: false },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Task", TaskSchema);
