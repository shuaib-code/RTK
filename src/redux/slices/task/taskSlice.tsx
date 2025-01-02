import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";
import { ITaskState } from "./types";

const initialState = {
  tasks: [
    {
      id: 1,
      title: "this is the task",
      description: "description of task",
      dueDate: "2024-01",
      isCompleted: false,
      proirify: "High",
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
