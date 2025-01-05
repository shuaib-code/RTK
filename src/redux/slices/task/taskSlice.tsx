import { RootState } from "@/redux/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { ITask, ITaskState, TFilter } from "./types";

const initialState: ITaskState = {
  tasks: [
    {
      title: "fdsg,",
      description: "rw",
      dueDate: "2025-01-08",
      priority: "low",
      isCompleted: false,
      id: "77389fe1-ed61-4f57-a193-b58516280f6e",
    },
    {
      title: "fdsg,",
      description: "rw",
      dueDate: "2025-01-08",
      priority: "medium",
      isCompleted: false,
      id: "77389fe1-ed61-4f57-a193-b58516280f6e",
    },
    {
      title: "fdsg,",
      description: "rw",
      dueDate: "2025-01-08",
      priority: "low",
      isCompleted: false,
      id: "77389fe1-ed61-4f57-a193-b58516280f6e",
    },
    {
      title: "fdsg,",
      description: "rw",
      dueDate: "2025-01-08",
      priority: "high",
      isCompleted: false,
      id: "77389fe1-ed61-4f57-a193-b58516280f6e",
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
