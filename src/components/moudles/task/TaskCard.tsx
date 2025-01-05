import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { ITask } from "@/redux/slices/task/types";
import { Trash2 } from "lucide-react";

interface IProps {
  task: ITask;
}

export function TaskCard({ task }: IProps) {
  return (
    <div className="rounded-xl border bg-white text-gray-800 shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="flex gap-4">
        <div className="grow flex items-start gap-4">
          <span
            className={cn("flex h-3 w-3 translate-y-1 rounded-full", {
              "bg-red-500": task.proirify === "high",
              "bg-yellow-500": task.proirify === "medium",
              "bg-green-500": task.proirify === "low",
            })}
          />
          <div className="space-y-2">
            <p className="text-base font-semibold leading-tight">
              {task.title}
            </p>
            <p className="text-sm text-gray-600">{task.description}</p>
          </div>
        </div>

        <div className="flex-none flex gap-3 items-center">
          <Checkbox id={task.title} />
          <Button variant="outline" size="icon" className="text-red-500">
            <Trash2 />
          </Button>
        </div>
      </div>
    </div>
  );
}
