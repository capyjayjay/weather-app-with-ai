import weatherConfig from "./weather.config";
import { WeatherError, WeatherObject } from "./weather.type";

async function getNowWeatherByQuery(
  query: string
): Promise<WeatherObject & WeatherError> {
  try {
    const data = await fetch(
      weatherConfig.api.baseUrl +
        "/current.json?key=" +
        weatherConfig.api.key +
        "&q=" +
        query,
      { next: { revalidate: 1800 } }
    ).then((res) => res.json());
    return data;
  } catch (error) {
    throw error;
  }
}

export { getNowWeatherByQuery };
