/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ContentMovies = ({ data }) => {
  return (
    <>
      <h1 className="container mt-28 text-4xl font-bold text-white">
         Popular Movies
      </h1>
      <div className="container my-10 flex">
        <div className="container w-1/4 ">
          <h1 className="text-3xl text-white">side</h1>
        </div>
        <div className="container w-3/4 ">
          <div className="grid grid-cols-5 gap-x-5 gap-y-10">
            {data?.map((movie, i) => {
              return (
                <div className="" key={i}>
                  <img
                    key={i}
                    src={`https://image.tmdb.org/t/p/w185/${movie?.poster_path}`}
                    alt=""
                    className="rounded-lg transition duration-300 ease-in-out hover:scale-105 hover:opacity-70"
                  />
                  <Link>
                    <p className="text-md mt-2 font-bold text-white hover:text-red-500">
                      {movie?.title}
                    </p>
                  </Link>
                  <p className="text-white">
                    {new Date(movie?.release_date).toLocaleString("en-us", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default ContentMovies;
