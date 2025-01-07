import { z } from "zod";

export const userFormSchema = z.object({
  name: z.string().min(2, "User name is required"),
});
