import { generateDescription } from "./lib/openai-api/openai.service";
import { getNowWeatherByQuery } from "./lib/weather-api/weather.service";

export default async function Home(props: ISearchParams) {
  const geo = props.searchParams;
  const weatherData = await getNowWeatherByQuery(
    `${geo.country} ${geo.region} ${geo.city}`
  );
  const propmtCityDescription = await generateDescription(
    `${geo.city} in ${geo.country} in region ${geo.region}`
  );

  return (
    <main>
      <h1 className="main-page-title">
        It&apos;s now {weatherData.current.condition.text.toLowerCase()} at{" "}
        {geo.city}
      </h1>
      <p>{propmtCityDescription}</p>
    </main>
  );
}

export interface ISearchParams {
  searchParams: {
    country: string;
    city: string;
    region: string;
    currencyCode: string;
    currencySymbol: string;
    name: string;
    languages: string;
  };
}
