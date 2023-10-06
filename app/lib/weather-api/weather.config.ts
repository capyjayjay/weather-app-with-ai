const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

if (!WEATHER_API_KEY) {
  throw new Error("WEATHER_API_KEY must be defined");
}

const weatherConfig = {
  api: {
    key: WEATHER_API_KEY,
    baseUrl: "http://api.weatherapi.com/v1",
  },
};

export default weatherConfig;

export type WeatherConfig = typeof weatherConfig;
