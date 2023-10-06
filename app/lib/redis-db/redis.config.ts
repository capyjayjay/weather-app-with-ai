const REDIS_URI = process.env.REDIS_URI;
const REDIS_PW = process.env.REDIS_PW;
const REDIS_PORT = process.env.REDIS_PORT;

if (!REDIS_URI || !REDIS_PW || !REDIS_PORT) {
  throw new Error("REDIS_URI, REDIS_PW, REDIS_PORT must be defined");
}

const redisConfig = {
  uri: REDIS_URI,
  pw: REDIS_PW,
  port: +REDIS_PORT,
};

export default redisConfig;
export type RedisConfig = typeof redisConfig;
