import { useAppSelector } from "@/redux/hook";
import { taskSelector } from "@/redux/slices/task/taskSlice";

export default function Task() {
  const tasks = useAppSelector(taskSelector);
  console.log(tasks);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">My Tasks</h1>
    </div>
  );
}
