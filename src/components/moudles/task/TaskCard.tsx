import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { ITask } from "@/redux/slices/task/types";
import { format } from "date-fns";
import { Calendar, Edit, Trash2 } from "lucide-react";

interface IProps {
  task: ITask;
  // onDelete: (id: number) => void;
  // onEdit: (task: ITask) => void;
  // onComplete: (id: number, isCompleted: boolean) => void;
}

export function TaskCard({ task }: IProps) {
  // const [isSelected, setIsSelected] = useState(false);

  if (!task) {
    return <div>Error: Task data is missing</div>;
  }

  // const handleCheckboxChange = (checked: boolean) => {
  //   setIsSelected(checked);
  //   onComplete(task.id, checked);
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
          <span
            className={cn("flex h-3 w-3 translate-y-1 rounded-full", {
              "bg-red-500": task?.priority === "high",
              "bg-yellow-500": task?.priority === "medium",
              "bg-green-500": task?.priority === "low",
              "bg-gray-500": !task?.priority,
            })}
          />
          <div className="space-y-2">
            <p
              className={cn(
                "text-base font-semibold leading-tight",
                task?.isCompleted && "line-through text-muted-foreground"
              )}
            >
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

        <div className="flex-none flex gap-3 items-center">
          <Checkbox
            id={`task-${task?.id}`}
            checked={task?.isCompleted}
            // onCheckedChange={() => handleCheckboxChange(true)}
          />
          <Button variant="outline" size="icon">
            <Edit className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="text-red-500"
            // onClick={() => onDelete(task.id)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
