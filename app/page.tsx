import { Suspense } from "react";
import { getNowWeatherByQuery } from "./lib/weather-api/weather.service";
import GenerativeDescription from "./components/content/GenerativeDescription";
import ParagraphLoadingSkeleton from "./components/ui/ParagraphLoadingSkeleton";
import DisplayWeather from "./components/content/DisplayWeather";

export default async function Home(props: ISearchParams) {
  const geo = props.searchParams;
  const weatherData = await getNowWeatherByQuery(
    `${geo.country} ${geo.region} ${geo.city}`
  );

  return (
    <main>
      <article>
        <div className="header-container">
          <h1 className="page-title text-center">
            It&apos;s now{" "}
            <span className={`border-b-4 border-b-blue-400`}>
              {weatherData.current.condition.text.toLowerCase()}
            </span>{" "}
            at{" "}
            <span className="block md:inline my-2 md:my-0 text-5xl md:text-4xl">
              {geo.city}
            </span>
          </h1>
        </div>
        <Suspense fallback={<ParagraphLoadingSkeleton />}>
          <GenerativeDescription geo={geo} />
        </Suspense>
        <DisplayWeather data={weatherData} />
      </article>
    </main>
  );
}

interface ISearchParams {
  searchParams: GeoVercel;
}

export type GeoVercel = {
  country: string;
  city: string;
  region: string;
  currencyCode: string;
  currencySymbol: string;
  name: string;
  languages: string;
};
