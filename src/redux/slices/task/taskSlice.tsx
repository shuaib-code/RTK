import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";
import { ITaskState } from "./types";

const initialState = {
  tasks: [],
} satisfies ITaskState;

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export const taskSelector = (state: RootState) => state.todo.tasks;

export default taskSlice.reducer;
