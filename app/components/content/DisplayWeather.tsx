import { WeatherObject } from "@/app/lib/weather-api/weather.type";
import WeatherBox from "./WeatherBox";

const DisplayWeather = ({ data }: IDisplayWeather) => {
  return (
    <section className="flex items-center flex-col justify-center pt-10">
      <div className="grid grid-cols-3 grid-flow-row gap-6 w-full">
        <WeatherBox
          label="Temperature"
          data={data.current.temp_c}
          format="°C"
        />
        <WeatherBox label="Humidity" data={data.current.humidity} />
        <WeatherBox
          label="Winds Speed"
          data={data.current.wind_kph}
          format="KPH"
        />
        <WeatherBox
          label="Feelslike"
          data={data.current.feelslike_c}
          format="°C"
        />
        <WeatherBox label="Wind Direction" data={data.current.wind_dir} />
        <WeatherBox label="Condition" data={data.current.condition.text} />
      </div>
      <p className="mt-5 px-3 text-sm rounded-full bg-zinc-700 text-white">
        Last updated: {new Date(data.current.last_updated).toLocaleDateString()}
      </p>
    </section>
  );
};

interface IDisplayWeather {
  data: WeatherObject;
}

export default DisplayWeather;
