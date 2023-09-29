import React from "react";

const Page = () => {
  return (
    <main>
      <article>
        <div className="header-container">
          <h1 className="page-title">About this small-scaled project.</h1>
        </div>
        <p className="paragraph">
          Geo-Weather-AI project is a project I meant to develop so it&apos;d be
          as a part of my portfolio at{" "}
          <a href="https://xarielah.dev">xarielah.dev</a>.
        </p>

        <p className="paragraph">
          This project is using the following technologies:
          <br />
        </p>
        <ul className="list-disc flex flex-col gap-3">
          <li>
            <b>Nextjs</b> - Currently the leading and most popular React
            framework for Server Side Rendering, Static Site Generation and has
            many advanced, serious and production-ready features for developing
            a solid product.
          </li>
          <li>
            <b>OpenAI API</b> - In order to keep content generated as fresh and
            diverse as it can be, the project uses quering the OpenAI API to
            generate a vibrant description for the user&apos;s location based on
            Vercel&apos;s Geo Location headers.
          </li>
          <li>
            <b>Weather API</b> - A great, free and open source weather API
            providing multiple layers of weather data for a given location
            including in-specific queries, and different types of returned data.
          </li>
          <li>
            <b>Redis</b> - Caching. Caching. Caching. Since the project uses
            OpenAI API, in order to reduce as much as possible generative calls
            the API, I have set a caching service to serve the app anytime a
            result is cached and cache it if it is not cached already.
          </li>
        </ul>
      </article>
    </main>
  );
};

export default Page;
