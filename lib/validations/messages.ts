import { z } from "zod";

export const promptSchema = z.object({
  prompt: z.string(),
});

export const promptEditSchema = z.object({
  prompt: z.string(),
  code: z.string(),
});

export type PromptSchema = z.infer<typeof promptSchema>;
export type PromptEditSchema = z.infer<typeof promptEditSchema>;
