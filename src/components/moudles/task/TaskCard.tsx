import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { useAppDispatch } from "@/redux/hook";
import { deleteTask } from "@/redux/slices/task/taskSlice";
import { ITask_id } from "@/redux/slices/task/types";
import { format } from "date-fns";
import { Calendar, Edit, Trash2 } from "lucide-react";

export function TaskCard({ task }: { task: ITask_id }) {
  const dispatch = useAppDispatch();
  if (!task) {
    return <div>Error: Task data is missing</div>;
  }

  // const handleComplete = (checked: boolean) => {
  //   dispatch(isCompleted({ id: task.id, checked: checked }));
  // };

  return (
    <div
      className={cn(
        "rounded-xl border shadow-sm p-6 hover:shadow-md transition-shadow"
        // isSelected && "bg-muted"
      )}
    >
      <div className="flex gap-4">
        <div className="grow flex items-start gap-4">
          <div className="space-y-2">
            <p
              className={cn(
                "text-base font-semibold leading-tight",
                task?.isCompleted && "line-through text-muted-foreground"
              )}
            >
              <span
                className={cn("inline-block h-3 w-3 rounded-full mr-2", {
                  "bg-red-500": task?.priority === "high",
                  "bg-yellow-500": task?.priority === "medium",
                  "bg-green-500": task?.priority === "low",
                  "bg-gray-500": !task?.priority,
                })}
              />
              {task?.title}
            </p>
            <p className="text-sm text-muted-foreground">{task?.description}</p>
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="mr-2 h-4 w-4" />
              {task?.dueDate
                ? format(new Date(task.dueDate), "PPP")
                : "No due date"}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 items-center sm:flex-row">
          <Checkbox
            id={`task-${task?._id}`}
            checked={task?.isCompleted}
            // onCheckedChange={() => handleComplete(!task?.isCompleted)}
          />
          <Button variant="outline" size="icon">
            <Edit className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="text-red-500"
            onClick={() => dispatch(deleteTask(task._id))}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
