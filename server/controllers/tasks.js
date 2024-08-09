import TaskMessage from "../models/tasks";

export const getTasks = async (req, res) => {
  try {
    const taskMessanges = await TaskMessage.find();
    res.status(200).json({ taskMessanges });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createTask = (req, res) => {
  res.send("task created!");
};
