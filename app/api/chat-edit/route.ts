import { promptEditSchema } from "@/lib/validations/messages";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const data = promptEditSchema.parse(json);

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: [
            "You are a helpful assistant.",
            "You're tasked with editing exiting good looking and beautiful react component using typescript and tailwind for a website.",
            "Only import React as a dependency.",
            "Be concise and only reply with code.",
            "Return only the code with no additional symbols or explanation.",
            "The output should only contain the code that I can directly execute.",
            "the design should be very good looking and colorful.",
          ].join("\n"),
        },
        {
          role: "user",
          content: [
            `- Original code: ${data.code}\n`,
            `- Modification to apply: ${data.prompt}\n`,
            `- Do not use libraries or imports other than React.`,
            `- Do not have any dynamic data. Use placeholders as data. Do not use props.`,
            `- Write only a single component.`,
          ].join("\n"),
        },
      ],
      temperature: 0,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      max_tokens: 2000,
      n: 1,
    });

    const code = response.choices[0].message.content
      ?.replace("```jsx", "")
      .replace("```tsx", "")
      .replace("```", "");
    return Response.json(code, {
      status: 200,
    });
  } catch {
    return Response.json({ error: "Error" });
  }
}
