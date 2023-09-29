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

export async function getCachedKey(key: string): Promise<any | null> {
  try {
    await redisClient.connect();
    const data = await redisClient.get(key);
    redisClient.quit();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function setCachedData(key: string, value: any): Promise<void> {
  try {
    await redisClient.connect();
    await redisClient.set(key, value);
    redisClient.quit();
  } catch (error) {
    throw error;
  }
}

export default redisClient;
