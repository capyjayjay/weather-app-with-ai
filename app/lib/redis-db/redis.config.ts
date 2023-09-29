const redisConfig = {
  uri: process.env.REDIS_URI ?? "",
  pw: process.env.REDIS_PW ?? "",
  port: process.env.REDIS_PORT ? +process.env.REDIS_PORT : 0,
};

export default redisConfig;
export type RedisConfig = typeof redisConfig;
