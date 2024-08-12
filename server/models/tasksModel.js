import mongoose from "mongoose";

const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  dueDate: { type: Date },
  isCompleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  assignee: { type: String },
  labels: [String],
  priprity: { type: Number },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
