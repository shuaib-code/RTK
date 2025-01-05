import { RootState } from "@/redux/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { ITask, ITaskState } from "./types";

const initialState: ITaskState = {
  tasks: [],
  filter: "all",
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Omit<ITask, "id">>) => {
      const newTask = { ...action.payload, id: uuidv4() };
      state.tasks.push(newTask);
    },
  },
});

export const taskSelector = (state: RootState) => state.todo.tasks;
export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;
