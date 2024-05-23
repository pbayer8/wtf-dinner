import { env } from "$env/dynamic/private";
import { json } from "@sveltejs/kit";
import OpenAI from "openai";

export const config = {
  maxDuration: 60,
};

const openai = new OpenAI({
  apiKey: env.OPENAI_API_KEY!,
});

export const POST = async ({ request }) => {
  const { prompt } = await request.json();
  const response = await openai.images.generate({
    model: "dall-e-3",
    prompt: `A photo of a plate of ${prompt}.`,
    n: 1,
    size: "1024x1024",
  });
  const src = response.data[0].url;
  return json({ src });
};
