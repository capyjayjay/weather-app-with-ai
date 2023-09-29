import { createClient } from "redis";
import redisConfig from "./redis.config";

const redisClient = createClient({
  password: redisConfig.pw,
  socket: {
    host: redisConfig.uri,
    port: redisConfig.port,
  },
});

redisClient.on("error", (error) => {
  throw error;
});
redisClient.connect();

export async function getCachedKey(key: string): Promise<any | null> {
  try {
    const data = await redisClient.get(key);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function setCachedData(key: string, value: any): Promise<void> {
  try {
    await redisClient.set(key, value);
  } catch (error) {
    throw error;
  }
}

export default redisClient;
