import { z } from "zod";

export const taskFormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  dueDate: z.string().min(1, "Due date is required"),
  priority: z.enum(["high", "medium", "low"], {
    required_error: "Priority is required",
  }),
  isCompleted: z.boolean().default(false),
});
