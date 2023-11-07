import { z } from "zod";

export const messagesSchema = z.object({
  messages: z.array(
    z.object({
      role: z.enum(["user", "system", "assistant"]),
      content: z.string(),
    })
  ),
});

export const promptSchema = z.object({
  prompt: z.string(),
});

export const promptEditSchema = z.object({
  prompt: z.string(),
  code: z.string(),
});

export type MessagesSchema = z.infer<typeof messagesSchema>;
export type PromptSchema = z.infer<typeof promptSchema>;
export type PromptEditSchema = z.infer<typeof promptEditSchema>;
