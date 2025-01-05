export interface ITask {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  isCompleted: boolean;
  priority: "high" | "medium" | "low";
}

export interface ITaskState {
  tasks: ITask[];
  filter: "all" | "high" | "medium" | "low";
}
