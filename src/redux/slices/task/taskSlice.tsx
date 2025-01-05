import { RootState } from "@/redux/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { ITask, ITaskState, TFilter } from "./types";

const initialState: ITaskState = {
  tasks: [
    {
      title: "Complete project report",
      description: "Prepare the final report for the client presentation.",
      dueDate: "2025-01-08",
      priority: "low",
      isCompleted: false,
      id: "1a2b3c4d-001",
    },
    {
      title: "Team meeting",
      description: "Discuss project progress and next steps.",
      dueDate: "2025-01-09",
      priority: "medium",
      isCompleted: false,
      id: "1a2b3c4d-002",
    },
    {
      title: "Code review",
      description: "Review code changes submitted by the development team.",
      dueDate: "2025-01-10",
      priority: "low",
      isCompleted: true,
      id: "1a2b3c4d-003",
    },
    {
      title: "Prepare presentation",
      description: "Create slides for the upcoming stakeholder meeting.",
      dueDate: "2025-01-11",
      priority: "high",
      isCompleted: false,
      id: "1a2b3c4d-004",
    },
    {
      title: "Submit expense report",
      description: "File the expense report for the last quarter.",
      dueDate: "2025-01-12",
      priority: "medium",
      isCompleted: false,
      id: "1a2b3c4d-005",
    },
    {
      title: "Update project roadmap",
      description:
        "Revise the project roadmap based on new client requirements.",
      dueDate: "2025-01-13",
      priority: "high",
      isCompleted: false,
      id: "1a2b3c4d-006",
    },
    {
      title: "Write blog post",
      description: "Draft a blog post about the latest product features.",
      dueDate: "2025-01-14",
      priority: "low",
      isCompleted: true,
      id: "1a2b3c4d-007",
    },
    {
      title: "Product demo",
      description:
        "Conduct a live demo of the product for potential customers.",
      dueDate: "2025-01-15",
      priority: "medium",
      isCompleted: false,
      id: "1a2b3c4d-008",
    },
    {
      title: "Client feedback session",
      description:
        "Collect feedback from the client on the latest deliverables.",
      dueDate: "2025-01-16",
      priority: "high",
      isCompleted: false,
      id: "1a2b3c4d-009",
    },
    {
      title: "Fix UI bugs",
      description: "Resolve reported UI issues in the dashboard.",
      dueDate: "2025-01-17",
      priority: "low",
      isCompleted: false,
      id: "1a2b3c4d-010",
    },
  ],
  filter: "all",
};
type TIsCompleted = { id: string; checked: boolean };

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Omit<ITask, "id">>) => {
      const newTask = { ...action.payload, id: uuidv4() };
      state.tasks.push(newTask);
    },
    isCompleted: (state, action: PayloadAction<TIsCompleted>) => {
      const task = state.tasks.find((task) => task.id === action.payload.id);
      if (task) {
        task.isCompleted = action.payload.checked;
      }
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    updateFilter: (state, action: PayloadAction<TFilter>) => {
      state.filter = action.payload;
    },
  },
});

export const selectFilter = (state: RootState) => {
  const filter = state.todo.filter;
  switch (filter) {
    case "low":
      return state.todo.tasks.filter((task) => task.priority === "low");
    case "high":
      return state.todo.tasks.filter((task) => task.priority === "high");
    case "medium":
      return state.todo.tasks.filter((task) => task.priority === "medium");
    default:
      return state.todo.tasks; // Return all tasks if no specific filter is applied
  }
};

export const selectTask = (state: RootState) => state.todo.tasks;
export const { addTask, isCompleted, deleteTask, updateFilter } =
  taskSlice.actions;
export default taskSlice.reducer;
