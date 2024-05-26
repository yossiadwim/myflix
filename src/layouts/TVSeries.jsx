import { useEffect, useState } from "react";
import {
  getTVSeriesTrending,
  getTVSeriesAiringToday,
  getTVSeriesOnTheAir,
  getTVSeriesPopular,
  getTVSeriesTopRated,
} from "../axios/api";

import CardTVSeries from "../components/home/CardTVSeries";

const TVSeries = () => {
  const [tvSeries, setTvSeries] = useState([]);
  const [type, setType] = useState("trending");

  useEffect(() => {
    const fetchTVSeries = async () => {
      if (type === "trending") {
        const data = await getTVSeriesTrending();
        setTvSeries(data);
      } else if (type === "airing-today") {
        const data = await getTVSeriesAiringToday();
        setTvSeries(data);
      } else if (type === "on-the-air") {
        const data = await getTVSeriesOnTheAir();
        setTvSeries(data);
      } else if (type === "popular") {
        const data = await getTVSeriesPopular();
        setTvSeries(data);
      } else if (type === "top-rated") {
        const data = await getTVSeriesTopRated();
        setTvSeries(data);
      }
    };
    fetchTVSeries();
  }, [type]);

  return (
    <>
      <div className="mb-36 h-full bg-gradient-to-r from-transparent to-black bg-cover bg-center  pt-24 ">
        <div
          id="tv"
          className="container h-full rounded-lg bg-cover bg-center p-0"
        >
          <div className=" bg-black/50 p-5">
            <div className="mx-5 pt-16">
              <h1 className="text-6xl font-medium text-white">TV Series</h1>
            </div>
            <div className="mx-2 my-5 mb-5 flex">
              <button
                id="trending-tv"
                className={`mx-5 text-2xl font-semibold ${type === "trending" ? "text-red-500" : "text-white"}  hover:text-red-500`}
                onClick={() => setType("trending")}
              >
                Trending
              </button>
              <button
                id="airing-today"
                className={`mx-5 text-2xl font-semibold ${type === "airing-today" ? "text-red-500" : "text-white"} hover:text-red-500`}
                onClick={() => setType("airing-today")}
              >
                Airing Today
              </button>
              <button
                id="top-rated-tv"
                className={`mx-5 text-2xl font-semibold ${type === "top-rated" ? "text-red-500" : "text-white"} hover:text-red-500`}
                onClick={() => setType("top-rated")}
              >
                Top Rated
              </button>
              <button
                id="popular-tv"
                className={`mx-5 text-2xl font-semibold ${type === "popular" ? "text-red-500" : "text-white"} hover:text-red-500`}
                onClick={() => setType("popular")}
              >
                Popular
              </button>
              <button
                id="on-the-air"
                className={`mx-5 text-2xl font-semibold ${type === "on-the-air" ? "text-red-500" : "text-white"} hover:text-red-500`}
                onClick={() => setType("on-the-air")}
              >
                On The Air
              </button>
            </div>
            <div className=" overflow-y-hidden">
              <div className="flex h-[500px]  min-w-fit flex-row">
                {tvSeries.map((tv) => {
                  return (
                    <CardTVSeries
                      key={tv.id}
                      id={tv.id}
                      name={tv.name}
                      poster_path={tv.poster_path}
                      first_air_date={tv.first_air_date}
                      vote_average={tv.vote_average}
                      backdrop_path={tv.backdrop_path}
                      state={"tv"}
                    ></CardTVSeries>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TVSeries;
