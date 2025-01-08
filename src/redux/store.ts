import { configureStore } from "@reduxjs/toolkit";
import { baseAPI } from "./api/baseAPI";
import counterReducer from "./slices/counter/counterSlice";
import taskReducer from "./slices/task/taskSlice";
import userReducer from "./slices/user/userSlice";

export const store = configureStore({
  reducer: {
    [baseAPI.reducerPath]: baseAPI.reducer,
    counter: counterReducer,
    todo: taskReducer,
    user: userReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
