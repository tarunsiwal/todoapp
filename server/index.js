import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import tasksRoutes from "./routes/tasksRoutes.js";

const app = express();

app.use(express.json());
// cors() allows us to make requests from a different origin (e.g., our front-end running on a different port)
app.use(cors());

// Use the routes you created
app.use("/api", tasksRoutes);

const mongoosConnection =
  "mongodb+srv://todoapp:BCHyiiD16wymKP6k@cluster0.je9xx4v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {
  try {
    await mongoose.connect(mongoosConnection);
    console.log("mongoose connected successfully!");
  } catch (err) {
    console.error("mongoose failed to connect", err.message);
  }
};

const startServer = () => {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
};

// Connect to the database and then start the server
connectDB().then(() => {
  startServer();
});
