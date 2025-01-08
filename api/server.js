import cors from "cors";
import express from "express";
import http from "http";
import mongoose from "mongoose";
import { Server } from "socket.io";
import QueryBuilder from "./QueryBuilder.js";
import DATABASE_URL from "./uri.js";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
  },
});

// Connect to MongoDB
mongoose.connect(DATABASE_URL);

// Task Schema
const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  priority: { type: String, enum: ["low", "medium", "high"], required: true },
  dueDate: { type: Date },
  isCompleted: { type: Boolean, default: false },
});

const Task = mongoose.model("Task", taskSchema);

app.use(express.json());
app.use(cors());

// listen to change of task collection
const taskStream = Task.watch();

taskStream.on("change", (change) => {
  if (change.operationType === "insert") {
    const newTask = change.fullDocument;
    delete newTask.__v;
    io.emit("new-task", newTask);
  }
});

// Get all tasks
app.get("/api/tasks", async (req, res) => {
  try {
    const queryBuilder = new QueryBuilder(Task.find(), req.query);

    // Add query builder methods to the query
    queryBuilder
      .search(["title"]) // You can add more searchable fields
      .filter()
      .sort()
      .paginate()
      .fields();

    // Execute the query
    const tasks = await queryBuilder.modelQuery;

    // Count total documents and calculate pagination info
    const pagination = await queryBuilder.countTotal();

    res.json({
      tasks,
      pagination,
    });
  } catch (error) {
    res.status(500).json({ message: "Error retrieving tasks", error });
  }
});

// Create new task
app.post("/api/tasks", async (req, res) => {
  const task = new Task(req.body);
  const savedTask = await task.save();
  res.status(201).json(savedTask);
});

// Update task by ID
app.patch("/api/tasks/:id", async (req, res) => {
  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updatedTask);
});

// Delete task by ID
app.delete("/api/tasks/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task deleted" });
});

io.on("connection", (socket) => {
  console.log("Client connected");
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
