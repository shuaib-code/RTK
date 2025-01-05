import { isValid, parse } from "date-fns";
import { z } from "zod";

export const taskFormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  dueDate: z.string().refine(
    (val) => {
      const parsedDate = parse(val, "yyyy-MM-dd", new Date());
      return isValid(parsedDate);
    },
    {
      message: "Due Date is required",
    }
  ),
  priority: z.enum(["high", "medium", "low"], {
    required_error: "Priority is required",
  }),
  isCompleted: z.boolean().default(false),
});
