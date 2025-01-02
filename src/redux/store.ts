import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter/counterSlice";
import taskReducer from "./slices/task/taskSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: taskReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
