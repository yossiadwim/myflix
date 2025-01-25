import { useEffect, useState } from "react";

import {
  getMoviesPopular,
  getMovieTopRated,
  getMoviesNowPlaying,
  getMoviesUpcoming,
  getMovieTrending,
} from "../axios/api";
import Card from "../components/Fragment/Card";

const MoviePopular = () => {
  const [datas, setDatas] = useState([]);
  const [type, setType] = useState("trending");

  const types = [
    { id: "trending", label: "Trending" },
    { id: "popular", label: "Popular" },
    { id: "toprated", label: "Top Rated" },
    { id: "nowplaying", label: "Now Playing" },
    { id: "upcoming", label: "Upcoming" },
  ];

  useEffect(() => {
    const fetchMovies = async () => {
      if (type === "trending") {
        const data = await getMovieTrending();
        setDatas(data);
      } else if (type === "popular") {
        const data = await getMoviesPopular();
        setDatas(data);
      } else if (type === "toprated") {
        const data = await getMovieTopRated();
        setDatas(data);
      } else if (type === "nowplaying") {
        const data = await getMoviesNowPlaying();
        setDatas(data);
      } else if (type === "upcoming") {
        const data = await getMoviesUpcoming();
        setDatas(data);
      }
    };
    fetchMovies();
  }, [type]);

  return (
    <>
      <div
        id="movies"
        className="container mt-52 w-[80%] rounded-lg bg-cover bg-center p-0 duration-500 ease-in-out"
      >
        <div className="bg-black/50 p-5">
          <div className="mx-6 my-5 flex">
            <h1 className="text-5xl font-medium text-white">Movies</h1>
            <div className="mx-2 my-4">
              {types.map((item) => (
                <button
                  key={item.id}
                  id={item.id}
                  className={`mx-5 rounded-full pl-3 pr-3 text-lg font-semibold ${
                    type === item.id
                      ? "bg-gradient-to-r from-red-500 to-red-700 text-white"
                      : "text-white"
                  } hover:text-red-500`}
                  onClick={() => setType(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="container overflow-y-hidden p-0 ">
            <div className="custom-scrollbar bg-transparent">
              <div className="mx-5 flex h-[500px] min-w-fit flex-row">
                {datas?.results?.map((data) => {
                  return (
                    <Card key={data.id} data={data} state={"movie"}></Card>
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

export default MoviePopular;
