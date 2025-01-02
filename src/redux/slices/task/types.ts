export interface ITasks {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  isCompleted: boolean;
  proirify: "High" | "Medium" | "Low";
}

export interface ITaskState {
  tasks: ITasks[];
}
