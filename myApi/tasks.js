const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = new Schema(
  {
    id: Number,
    name: String,
    description: String,
    group: String,
    owner: String,
    startDate: String,
    endDate: String,
    objectives: String,
    isComplete: Boolean
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", TaskSchema);
