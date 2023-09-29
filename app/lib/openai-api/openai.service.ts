import { OpenAI } from "openai";
import { openaiConfig } from "./openai.config";
import { getCachedKey, setCachedData } from "../redis-db/redis.service";

const openai = new OpenAI({ apiKey: openaiConfig.api.key });
openai.models;

async function generateDescription(geoQuery: string): Promise<string> {
  try {
    const cachedResponse = await getCachedKey(geoQuery);
    if (cachedResponse) return cachedResponse;

    const gipityResponse = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `please write a short general discriptive paragraph of ${geoQuery}`,
        },
      ],
    });

    const text = gipityResponse.choices[0].message.content ?? "no response";
    await setCachedData(geoQuery, text);

    return text;
  } catch (e) {
    throw e;
  }
}
export { generateDescription };
