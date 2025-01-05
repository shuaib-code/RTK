import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";
import { ITaskState } from "./types";

const initialState = {
  tasks: [
    {
      id: 1,
      title: "Start next.js Course",
      description: "This is a simple description of task",
      dueDate: "2024-01",
      isCompleted: false,
      proirify: "high",
    },
    {
      id: 2,
      title: "Finish Redux Class",
      description: "This is a simple description of task",
      dueDate: "2024-01",
      isCompleted: false,
      proirify: "low",
    },
    {
      id: 3,
      title: "Finish SQL Track",
      description: "This is a simple description of task",
      dueDate: "2024-01",
      isCompleted: false,
      proirify: "medium",
    },
  ],
} satisfies ITaskState;

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export const taskSelector = (state: RootState) => state.todo.tasks;

export default taskSlice.reducer;
