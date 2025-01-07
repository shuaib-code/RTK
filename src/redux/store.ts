import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter/counterSlice";
import taskReducer from "./slices/task/taskSlice";
import userReducer from "./slices/user/userSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: taskReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
