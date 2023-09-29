import React from "react";

const WeatherBox = ({ label, data, format }: IWeatherBox) => {
  return (
    <div className="min-w-[250px] mb-4">
      <h1 className="text-zinc-800 text-xl font-light">{label}:</h1>
      <div className="flex items-center gap-3 w-max mx-auto">
        <span className="font-bold text-4xl text-zinc-600 hover:text-blue-400 duration-200 ease-in-out">
          {data}
        </span>
        {format ? <span>{format}</span> : ""}
      </div>
    </div>
  );
};

interface IWeatherBox {
  label: string;
  data: string | number;
  format?: string;
}

export default WeatherBox;
