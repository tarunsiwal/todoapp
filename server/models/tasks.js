import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
  title: String,
  message: String,
  duedate: {
    type: Date,
    default: new Date(),
  },
  assignee: String,
  labels: [String],
  priprity: Number,
});

const TaskMessage = mongoose.model("TaskMessage", taskSchema);

export default TaskMessage;
