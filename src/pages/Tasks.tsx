import { TaskCard } from "@/components/moudles/task/TaskCard";
import { useAppSelector } from "@/redux/hook";
import { taskSelector } from "@/redux/slices/task/taskSlice";

export default function Task() {
  const tasks = useAppSelector(taskSelector);
  console.log(tasks);

  return (
    <div className="px-2 mt-4">
      <h1 className="text-2xl font-bold mb-6">My Tasks</h1>
      <div className="grid gap-2">
        {tasks?.map((task, idx) => (
          <TaskCard task={task} key={idx} />
        ))}
      </div>
    </div>
  );
}
