import { ErrorMessage } from "@/components/error/ErrorMessage";
import { AddTaskButton } from "@/components/moudles/task/modal/button";
import { TaskCard } from "@/components/moudles/task/TaskCard";
import { TaskCardSkeleton } from "@/components/skeletion/task/loading";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetTasksQuery } from "@/redux/api/baseAPI";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { selectFilter, updateFilter } from "@/redux/slices/task/taskSlice";
import { ITask_id, TFilter } from "@/redux/slices/task/types";

export default function Task() {
  const { data, isLoading, isError } = useGetTasksQuery(undefined);
  const tasks = useAppSelector(selectFilter);
  const dispatch = useAppDispatch();
  if (isLoading) return <TaskCardSkeleton />;
  if (isError)
    return (
      <ErrorMessage
        title="Error: Task data is missing"
        message="Something went worng while fetching task."
      />
    );
  if (tasks.length === 0) return <Nothing_UI />;

  return (
    <div className="px-2 mt-4">
      <div className="grid grid-cols-1 md:grid-cols-[auto,1fr,auto] items-center gap-4 md:gap-6 mb-6">
        <h1 className="text-2xl font-bold">My Tasks</h1>

        <div className="flex justify-center md:hidden">
          <AddTaskButton className="w-full" />
        </div>

        <Tabs
          defaultValue="all"
          onValueChange={(value) => dispatch(updateFilter(value as TFilter))}
          className="w-[400px] justify-self-center"
        >
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="high">High</TabsTrigger>
            <TabsTrigger value="low">Low</TabsTrigger>
            <TabsTrigger value="medium">Medium</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="justify-self-end hidden md:block">
          <AddTaskButton />
        </div>
      </div>

      <div className="grid gap-2">
        {data?.tasks?.map((task: ITask_id, idx: number) => (
          <TaskCard task={task} key={idx} />
        ))}
      </div>
    </div>
  );
}

function Nothing_UI() {
  return (
    <div className="px-2 mt-4">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold mb-6">My Tasks</h1>
      </div>
      <div className="grid gap-2">
        <div className="flex flex-col items-center justify-center p-8 border rounded-xl text-center space-y-3  py-16">
          <p className="text-base font-semibold leading-tight">No task found</p>
          <p className="text-sm text-muted-foreground pb-10">
            You don’t have any tasks yet. Start by adding a new task!
          </p>
          <AddTaskButton />
        </div>
      </div>
    </div>
  );
}
