/* eslint-disable react/prop-types */

import { useState } from "react";
import Backdrop from "./Backdrop";

const ContentCollection = ({ collection, movies, genres }) => {
  const [hover, setHover] = useState([]);

  function hoverBackground(backdrop_path) {
    const element = document.getElementById("movie");
    const img = `https://image.tmdb.org/t/p/original${backdrop_path}`;
    element.style.backgroundImage = `url(${img})`;
  }


  return (
    <>
      <Backdrop
        collection={collection}
        movies={movies}
        genres={genres}
      ></Backdrop>
      <div className="container pt-[850px] p-20">
        <h1 className="text-4xl font-medium text-white">Featured Cast</h1>
        <div className="my-5 grid grid-cols-5 gap-y-5">
          {[
            ...new Set(
              [...new Set(movies?.map((movie) => movie?.credits?.cast?.id))]
                .map((id) => {
                  return movies.filter(
                    (movie) => movie?.credits?.cast?.id === id,
                  )[0];
                })
                .map((movie) => {
                  return movie?.credits?.cast?.slice(0, 14).map((cast) => cast);
                }),
            ),
          ].map((cast) => {
            return cast?.map((cast, i) => {
              return (
                <>
                  <div className="mr-5 flex items-center justify-start rounded-lg border border-gray-500 hover:border-red-800 hover:bg-red-800">
                    <img
                      key={i}
                      src={`https://image.tmdb.org/t/p/w185${cast?.profile_path}`}
                      alt=""
                      className="mr-5 h-20 w-20 rounded-l-lg object-cover transition ease-in-out hover:opacity-50"
                    />
                    <div className="items-start">
                      <p className="text-white ">{cast?.name} </p>
                      <p className="text-white ">{cast?.character} </p>
                    </div>
                  </div>
                </>
              );
            });
          })}
        </div>

        <div className="my-10">
          <h1 className="text-4xl font-medium text-white">Featured Crew</h1>
          <div className="my-5 grid grid-cols-5 gap-y-5">
            {[
              ...new Set(
                [...new Set(movies?.map((movie) => movie?.credits?.crew?.id))]
                  .map((id) => {
                    return movies.filter(
                      (movie) => movie?.credits?.crew?.id === id,
                    )[0];
                  })
                  .map((movie) => {
                    return movie?.credits?.crew
                      ?.slice(0, 10)
                      .map((crew) => crew);
                  }),
              ),
            ].map((crew) => {
              return crew?.map((crew, i) => {
                return (
                  <>
                    <div className="mr-5 flex items-center justify-start rounded-lg border border-gray-500 hover:border-red-800 hover:bg-red-800">
                      <img
                        key={i}
                        src={crew?.profile_path ? `https://image.tmdb.org/t/p/w185${crew?.profile_path}` : "/img/white.png"}
                        alt=""
                        className="mr-5 h-20 w-20 rounded-l-lg object-cover transition ease-in-out hover:opacity-50"
                      />
                      <div className="items-start">
                        <p className="text-white ">{crew?.name} </p>
                        <p className="text-white ">{crew?.department} </p>
                      </div>
                    </div>
                  </>
                );
              });
            })}
          </div>
        </div>
      </div>  

      <div
        id="movie"
        className="container h-[700px] w-[85%] p-0 mb-36 rounded-lg bg-cover bg-center border"
      >
        <div className="bg-black/60 bg-cover pt-14 pb-32 pl-10 pr-10">
          <h1 className="text-4xl font-medium text-white">
            {movies?.length} Movies
          </h1>
          <div className=" my-5 flex">
            {movies?.map((movie, i) => {
              return (
                <>
                  <div key={i} className="">
                    <img
                      src={`https://image.tmdb.org/t/p/w185${movie?.poster_path}`}
                      alt=""
                      className={`mr-5 opacity-70 hover:opacity-100 rounded-lg object-cover transition ease-in-out hover:scale-105`}
                      onMouseOver={() => {
                        hoverBackground(movie?.backdrop_path);
                        setHover(movie);
                      }}
                      // onMouseOut={() => offHoverBackground()}
                    />
                  </div>
                </>
              );
            })}
          </div>
          <div className="w-1/2 rounded-l">
            {hover && (
              <>
                <h1 className="text-4xl font-bold text-white">
                  {hover?.title}
                </h1>
                <p className="mb-5 text-slate-200">
                  {hover?.release_date
                    ? new Date(hover?.release_date).toLocaleString("en-us", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })
                    : "Not released yet"}
                </p>
                <p className="text-lg text-white">{hover?.overview}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentCollection;
