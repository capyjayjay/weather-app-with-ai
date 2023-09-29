import { NextRequest, NextResponse } from "next/server";
import countries from "@/app/lib/countries.json";

export const config = {
  matcher: "/",
};

export type CountryJSON = {
  cca2: string;
  currencies: { [key: string]: any };
  languages: { [key: string]: string };
  flag: string;
};

/**
 * Middleware for getting the geo location of a user.
 * This works for deployment only.
 * @param request NextReuqest
 * @returns void
 */
export async function middleware(request: NextRequest) {
  const { nextUrl: url, geo } = request;
  const country = geo?.country || "US";
  const city = geo?.city || "San Francisco";
  const region = geo?.region || "CA";

  const countryInfo = countries.find((x) => x.cca2 === country);

  let currencyCode;
  let currency;
  let languages;

  if (countryInfo !== undefined) {
    currencyCode = Object.keys(countryInfo.currencies)[0];
    currency = (countryInfo.currencies as any)[currencyCode];
    languages = Object.values(countryInfo.languages).join(", ");
  }

  url.searchParams.set("country", country);
  url.searchParams.set("city", city);
  url.searchParams.set("region", region);

  if (currencyCode) {
    url.searchParams.set("currencyCode", currencyCode);
  }

  url.searchParams.set("currencySymbol", currency.symbol);
  url.searchParams.set("name", currency.name);

  if (languages) {
    url.searchParams.set("languages", languages);
  }

  return NextResponse.rewrite(url);
}
