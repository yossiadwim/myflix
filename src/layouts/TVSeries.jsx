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

  const fetchDataTVSeriesTrending = async () => {
    try {
      document.getElementById("trending-tv").classList.add("active");
      document.getElementById("airing-today").classList.remove("active");
      document.getElementById("top-rated-tv").classList.remove("active");
      document.getElementById("on-the-air").classList.remove("active");
      document.getElementById("popular-tv").classList.remove("active");
      const tv_series = await getTVSeriesTrending();
      setTvSeries(tv_series);
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  };

  const fetchDataTVSeriesTopRated = async () => {
    try {
      document.getElementById("top-rated-tv").classList.add("active");
      document.getElementById("trending-tv").classList.remove("active");
      document.getElementById("airing-today").classList.remove("active");
      document.getElementById("on-the-air").classList.remove("active");
      document.getElementById("popular-tv").classList.remove("active");

      const topRatedTVSeries = await getTVSeriesTopRated();
      setTvSeries(topRatedTVSeries);
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  };
  const fetchDataMovieOnTheAir = async () => {
    try {
      document.getElementById("on-the-air").classList.add("active");
      document.getElementById("trending-tv").classList.remove("active");
      document.getElementById("top-rated-tv").classList.remove("active");
      document.getElementById("airing-today").classList.remove("active");
      document.getElementById("popular-tv").classList.remove("active");
      const tv_series_on_the_air = await getTVSeriesOnTheAir();
      setTvSeries(tv_series_on_the_air);
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  };
  const fetchDataTVSeriesAiringToday = async () => {
    try {
      document.getElementById("popular-tv").classList.remove("active");
      document.getElementById("trending-tv").classList.remove("active");
      document.getElementById("top-rated-tv").classList.remove("active");
      document.getElementById("airing-today").classList.add("active");
      document.getElementById("on-the-air").classList.remove("active");

      const topRatedMovie = await getTVSeriesAiringToday();
      setTvSeries(topRatedMovie);
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  };
  const fetchDataTVSeriesPopular = async () => {
    try {
      document.getElementById("popular-tv").classList.add("active");
      document.getElementById("trending-tv").classList.remove("active");
      document.getElementById("top-rated-tv").classList.remove("active");
      document.getElementById("airing-today").classList.remove("active");
      document.getElementById("on-the-air").classList.remove("active");

      const topRatedMovie = await getTVSeriesPopular();
      setTvSeries(topRatedMovie);
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  };

  useEffect(() => {
    fetchDataTVSeriesTrending();
  }, []);

  return (
    <>
      <div className="mb-36 h-full bg-gradient-to-r from-transparent to-black bg-cover bg-center  pt-24 ">
        <div id="tv" className="container h-full rounded-lg bg-cover bg-center p-0">
          <div className=" bg-black/50 p-5">
            <div className="mx-5 pt-16">
              <h1 className="text-6xl font-medium text-white">TV Series</h1>
            </div>
            <div className="mx-2 my-5 mb-5 flex">
              <button
                id="trending-tv"
                className="mx-5 text-2xl font-semibold text-white hover:text-red-500"
                onClick={() => fetchDataTVSeriesTrending()}
              >
                Trending
              </button>
              <button
                id="airing-today"
                className="mx-5 text-2xl font-semibold text-white hover:text-red-500 "
                onClick={() => fetchDataTVSeriesAiringToday()}
              >
                Airing Today
              </button>
              <button
                id="top-rated-tv"
                className="mx-5 text-2xl font-semibold text-white hover:text-red-500"
                onClick={() => fetchDataTVSeriesTopRated()}
              >
                Top Rated
              </button>
              <button
                id="popular-tv"
                className="mx-5 text-2xl font-semibold text-white hover:text-red-500 "
                onClick={() => fetchDataTVSeriesPopular()}
              >
                Popular
              </button>
              <button
                id="on-the-air"
                className="mx-5 text-2xl font-semibold text-white hover:text-red-500"
                onClick={() => fetchDataMovieOnTheAir()}
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
