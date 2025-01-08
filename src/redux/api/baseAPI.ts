import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { io } from "socket.io-client";
import { ITask_id } from "../slices/task/types";

const socket = io("http://localhost:5000");

export const baseAPI = createApi({
  reducerPath: "TaskAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["task"],
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => "/api/tasks",
      async onCacheEntryAdded(
        _,
        { updateCachedData, cacheDataLoaded, cacheEntryRemoved }
      ) {
        await cacheDataLoaded;
        const handleNewTask = (newTask: ITask_id) => {
          updateCachedData((draft) => {
            draft.tasks.push(newTask);
          });
        };
        socket.on("new-task", (task) => {
          console.log(task);
          handleNewTask(task);
        });

        await cacheEntryRemoved;
        socket.off("new-task", handleNewTask);
      },
    }),
    createTask: builder.mutation({
      query: (taskData) => ({
        url: "/api/tasks",
        method: "POST",
        body: taskData,
      }),
    }),
  }),
});

export const { useGetTasksQuery, useCreateTaskMutation } = baseAPI;
