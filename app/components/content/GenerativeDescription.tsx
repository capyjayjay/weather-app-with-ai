import { generateDescription } from "@/app/lib/openai-api/openai.service";
import { GeoVercel } from "@/app/page";

const GenerativeDescription = async ({ geo }: IGenDesc) => {
  const propmtCityDescription = await generateDescription(
    `${geo.city} in ${geo.country} in region ${geo.region}`
  );
  return <p className="text-lg text-center">{propmtCityDescription}</p>;
};

interface IGenDesc {
  geo: GeoVercel;
}

export default GenerativeDescription;
