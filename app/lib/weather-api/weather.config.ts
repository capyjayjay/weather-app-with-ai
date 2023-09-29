const weatherConfig = {
  api: {
    key: process.env.WEATHER_API_KEY ?? "",
    baseUrl: "http://api.weatherapi.com/v1",
  },
};

export default weatherConfig;

export type WeatherConfig = typeof weatherConfig;
