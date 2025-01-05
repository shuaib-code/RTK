import { RootState } from "@/redux/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { ITask, ITaskState } from "./types";

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
  },
});

export const taskSelector = (state: RootState) => state.todo.tasks;
export const { addTask, isCompleted, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
