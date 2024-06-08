import CardMoviePopular from "../components/home/CardMoviePopular";
import { useEffect, useState } from "react";
import {
  getMoviesPopular,
  getMovieTopRated,
  getMoviesNowPlaying,
  getMoviesUpcoming,
  getMovieTrending,
} from "../axios/api";

const MoviePopular = () => {
  const [movies, setMovies] = useState([]);
  const [type, setType] = useState("trending");
  

  useEffect(() => {
    const fetchMovies = async () => {
      if (type === "trending") {
        const data = await getMovieTrending();
        setMovies(data);
      } else if (type === "popular") {
        const data = await getMoviesPopular();
        setMovies(data);
      } else if (type === "toprated") {
        const data = await getMovieTopRated();
        setMovies(data);
      } else if (type === "nowplaying") {
        const data = await getMoviesNowPlaying();
        setMovies(data);
      } else if (type === "upcoming") {
        const data = await getMoviesUpcoming();
        setMovies(data);
      }
    };
    fetchMovies();
  }, [type]);

  return (
    <>
      <div
        id="movie"
        className="container mt-80 rounded-lg bg-cover bg-center p-0 duration-500 ease-in-out"
      >
        <div className="bg-black/50 p-5">
          <div className="mx-6 my-5">
            <h1 className="text-6xl font-medium text-white">Movies</h1>
          </div>
          <div className="mx-2 mb-5 flex">
            <button
              id="trending"
              className={`mx-5 text-2xl font-semibold ${type === "trending" ? "text-red-500" : "text-white"} hover:text-red-500 `}
              onClick={() => setType("trending")}
            >
              Trending
            </button>
            <button
              id="popular-movies"
              className={`mx-5 text-2xl font-semibold ${type === "popular" ? "text-red-500" : "text-white"} hover:text-red-500 `}
              onClick={() => setType("popular")}
            >
              Popular
            </button>
            <button
              id="top-rated"
              className={`mx-5 text-2xl font-semibold ${type === "toprated" ? "text-red-500" : "text-white"} hover:text-red-500 `}
              onClick={() => setType("toprated")}
            >
              Top Rated
            </button>
            <button
              id="now-playing"
              className={`mx-5 text-2xl font-semibold ${type === "nowplaying" ? "text-red-500" : "text-white"} hover:text-red-500 `}
              onClick={() => setType("nowplaying")}
            >
              Now Playing
            </button>
            <button
              id="upcoming"
              className={`mx-5 text-2xl font-semibold ${type === "upcoming" ? "text-red-500" : "text-white"} hover:text-red-500 `}
              onClick={() => setType("upcoming")}
            >
              Upcoming
            </button>
          </div>
          <div className="container overflow-y-hidden p-0 ">
            <div className="custom-scrollbar bg-transparent">
              <div className="mx-5 flex h-[500px] min-w-fit flex-row ">
                {movies.map((movie) => {
                  return (
                    <CardMoviePopular
                      key={movie.id}
                      {...movie}
                      state={"movie"}
                    ></CardMoviePopular>
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
