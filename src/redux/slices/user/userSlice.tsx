import { RootState } from "@/redux/store";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { IUser, IUserState } from "./types";

const initialState: IUserState = { users: [] };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<Omit<IUser, "id">>) => {
      const newUser = { ...action.payload, id: nanoid() };
      state.users.push(newUser);
    },
    removeUser: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

export const selectUser = (state: RootState) => state.user.users;
export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
