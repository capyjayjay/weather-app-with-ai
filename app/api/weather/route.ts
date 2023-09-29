import { getNowWeatherByQuery } from "@/app/lib/weather-api/weather.service";

async function handler(request: Request): Promise<any> {
  let query;
  try {
    const { searchParams } = new URL(request.url);
    const searchQuery = searchParams.get("q");

    if (!searchQuery) {
      return Response.json({ error: "q is required" }, { status: 400 });
    }

    query = searchQuery.trim();

    const data = await getNowWeatherByQuery(query);

    if (data.error && data.error.code === 1006) {
      return Response.json(
        { error: `\"${query}\" was not found` },
        { status: 404 }
      );
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error: (error as any).message }, { status: 500 });
  }
}

export { handler as GET };
