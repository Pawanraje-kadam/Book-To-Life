import { z } from "zod";

export const predictionSchema = z.object({
  bookTitle: z.string().min(1, "Required").max(150, "Too long"),
  age: z.coerce.number({ invalid_type_error: "Must be a number" }).int().min(13, "Min age is 13").max(120),
  currentRole: z.string().min(2, "Required").max(100),
  mainGoal: z.string().min(10, "Min 10 characters").max(500),
  availableHours: z.coerce.number({ invalid_type_error: "Must be a number" }).min(0.1, "Min 0.1").max(24),
});

export type PredictionInput = z.infer<typeof predictionSchema>;
