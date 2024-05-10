import CardMoviePopular from "../components/home/CardMoviePopular";
import { useEffect, useState, useCallback } from "react";
import {
  getMoviesPopular,
  getMovieTopRated,
  getMoviesNowPlaying,
  getMoviesUpcoming,
  getMovieTrending,
} from "../axios/api";

const MoviePopular = () => {
  const [movies, setMovies] = useState([]);

  const fetchDataMovieTrending = useCallback(() => {
    try {
      document.getElementById("trending").classList.add("active");
      document.getElementById("popular-movies").classList.remove("active");
      document.getElementById("top-rated").classList.remove("active");
      document.getElementById("upcoming").classList.remove("active");
      document.getElementById("now-playing").classList.remove("active");
      // const moviesPopular = getMovieTrending();
      getMovieTrending().then((result) => {
        setMovies(result);
      });
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  }, []);
  // const fetchDataMovieTrending = async () => {
  //   try {
  //     document.getElementById("trending").classList.add("active");
  //     document.getElementById("popular-movies").classList.remove("active");
  //     document.getElementById("top-rated").classList.remove("active");
  //     document.getElementById("upcoming").classList.remove("active");
  //     document.getElementById("now-playing").classList.remove("active");
  //     const moviesPopular = await getMovieTrending();
  //     setMovies(moviesPopular);
  //   } catch (error) {
  //     console.error("Error fetching image:", error);
  //   }
  // };
  const fetchDataMoviePopular = useCallback(() => {
    try {
      document.getElementById("popular-movies").classList.add("active");
      document.getElementById("trending").classList.remove("active");
      document.getElementById("top-rated").classList.remove("active");
      document.getElementById("upcoming").classList.remove("active");
      document.getElementById("now-playing").classList.remove("active");
      // const moviesPopular =  getMoviesPopular();
      getMoviesPopular().then((result) => {
        setMovies(result);
      });
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  }, []);

  const fetchDataTopRatedMovie = useCallback(() => {
    try {
      document.getElementById("top-rated").classList.add("active");
      document.getElementById("trending").classList.remove("active");
      document.getElementById("popular-movies").classList.remove("active");
      document.getElementById("upcoming").classList.remove("active");
      document.getElementById("now-playing").classList.remove("active");

      getMovieTopRated().then((result) => {
        setMovies(result);
      });
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  }, []);
  const fetchDataMovieUpcoming = useCallback(() => {
    try {
      document.getElementById("upcoming").classList.add("active");
      document.getElementById("trending").classList.remove("active");
      document.getElementById("top-rated").classList.remove("active");
      document.getElementById("popular-movies").classList.remove("active");
      document.getElementById("now-playing").classList.remove("active");
      getMoviesUpcoming().then((result) => {
        setMovies(result);
      });
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  }, []);
  const fetchDataMovieNowPlaying = useCallback(() => {
    try {
      document.getElementById("now-playing").classList.add("active");
      document.getElementById("trending").classList.remove("active");
      document.getElementById("top-rated").classList.remove("active");
      document.getElementById("popular-movies").classList.remove("active");
      document.getElementById("upcoming").classList.remove("active");

      getMoviesNowPlaying().then((result) => {
        setMovies(result);
      });
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  }, []);

  useEffect(() => {
    fetchDataMovieTrending();
  }, [fetchDataMovieTrending]);

  return (
    <>
      <div
        id="movie"
        className="container mt-56 rounded-lg bg-cover bg-center p-0 duration-500 ease-in-out"
      >
        <div className="bg-black/50 p-5">
          <div className="mx-6 my-5">
            <h1 className="text-6xl font-medium text-white">Movies</h1>
          </div>
          <div className="mx-2 mb-5 flex">
            <button
              id="trending"
              className="mx-5 text-2xl font-semibold text-white hover:text-red-500 "
              onClick={() => fetchDataMovieTrending()}
            >
              Trending
            </button>
            <button
              id="popular-movies"
              className="mx-5 text-2xl font-semibold text-white hover:text-red-500 "
              onClick={() => fetchDataMoviePopular()}
            >
              Popular
            </button>
            <button
              id="top-rated"
              className="mx-5 text-2xl font-semibold text-white hover:text-red-500"
              onClick={() => fetchDataTopRatedMovie()}
            >
              Top Rated
            </button>
            <button
              id="now-playing"
              className="mx-5 text-2xl font-semibold text-white hover:text-red-500 "
              onClick={() => fetchDataMovieNowPlaying()}
            >
              Now Playing
            </button>
            <button
              id="upcoming"
              className="mx-5 text-2xl font-semibold text-white hover:text-red-500"
              onClick={() => fetchDataMovieUpcoming()}
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
                      id={movie.id}
                      title={movie.title}
                      poster_path={movie.poster_path}
                      release_date={movie.release_date}
                      vote_average={movie.vote_average}
                      backdrop_path={movie.backdrop_path}
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
