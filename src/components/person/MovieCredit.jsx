/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const MovieCredit = ({
  id,
  poster_path,
  title,
  overview,
  vote_average,
  character,
  episode_count,
  media_type,
}) => {
  const [hover, setHover] = useState(false);

  return (
    <>
      <div className="mx-2 w-36 items-center justify-center ">
        
        <Link
          to={`/details/${id}-${title?.toLowerCase().replace(/ /g, "-")}`}
          state={"movie"}
        >
          <img
            className={`rounded-lg ${poster_path === null ? "h-[212px] w-36" : ""} transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:opacity-50`}
            src={
              poster_path === null
                ? `/img/white.png`
                : `https://image.tmdb.org/t/p/w500${poster_path}`
            }
            alt=""
            loading="lazy"
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          />
          <div
            className={`absolute h-fit  w-[350px] bg-slate-900 ${hover ? "block" : "hidden"} rounded-md`}
          >
            <div className="mx-5 my-5 flex items-center ">
              <h1 className="text-2xl font-bold text-white">{title}</h1>
              <span className="ml-5 inline-flex rounded-lg bg-white px-1 py-1 text-lg font-bold text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6 fill-yellow-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clipRule="evenodd"
                  />
                </svg>

                <p className="px-1">{Math.round(vote_average * 10) / 10}</p>
              </span>
            </div>
            <p className="mx-5 my-1 font-medium text-white"> {media_type === "tv" ?  "(" + episode_count + " episodes" + ")" : ""} as {character}</p>
            <p className=" mx-5 my-5  text-white">
              {overview?.slice(0, 100)}...
            </p>
          </div>
        </Link>
        <Link
          to={`/details/${id}-${title?.toLowerCase().replace(/ /g, "-")}`}
          state={"movie"}
        >
          <h3 className="text-md mt-2 text-center font-bold text-white hover:text-red-500">
            {title}
          </h3>
          {/* <p className="text-center text-sm font-bold text-white">
            {release_date === ""
              ? "-"
              : "(" + new Date(release_date).getFullYear() + ")"}
          </p> */}
        </Link>
      </div>
      {/* {media_type === "movie" ? (
        <div className="mx-2 w-36 items-center justify-center ">
          <Link
            to={`/details/${id}-${title?.toLowerCase().replace(/ /g, "-")}`}
            state={"movie"}
          >
            <img
              className={`rounded-lg ${poster_path === null ? "h-[212px] w-36" : ""} transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:opacity-50`}
              src={
                poster_path === null
                  ? `/img/white.png`
                  : `https://image.tmdb.org/t/p/w500${poster_path}`
              }
              alt=""
              loading="lazy"
              onMouseOver={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            />
            <div
              className={`absolute h-fit  w-[350px] bg-slate-900 ${hover ? "block" : "hidden"} rounded-md`}
            >
              <div className="mx-5 my-5 flex items-center ">
                <h1 className="text-2xl font-bold text-white">{title}</h1>
                <span className="ml-5 inline-flex rounded-lg bg-white px-1 py-1 text-lg font-bold text-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6 fill-yellow-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <p className="px-1">{Math.round(vote_average * 10) / 10}</p>
                </span>
              </div>
              <p className="mx-5 my-1 font-medium text-white">as {character}</p>
              <p className=" mx-5 my-5  text-white">
                {overview?.slice(0, 100)}...
              </p>
            </div>
          </Link>
          <Link
            to={`/details/${id}-${title?.toLowerCase().replace(/ /g, "-")}`}
            state={"movie"}
          >
            <h3 className="text-md mt-2 text-center font-bold text-white hover:text-red-500">
              {title}
            </h3>
            <p className="text-center text-sm font-bold text-white">
              {release_date === ""
                ? "-"
                : "(" + new Date(release_date).getFullYear() + ")"}
            </p>
          </Link>
        </div>
      ) : (
        <div className="mx-2 w-36 items-center justify-center ">
          <Link
            to={`/details/${id}-${name?.toLowerCase().replace(/ /g, "-")}`}
            state={"tv"}
          >
            <img
              className={`rounded-lg ${poster_path === null ? "h-[212px] w-36" : ""} transition delay-150 duration-300 ease-in-out hover:-translate-y-1  hover:scale-105 hover:opacity-50`}
              src={
                poster_path === null
                  ? `/img/white.png`
                  : `https://image.tmdb.org/t/p/w500${poster_path}`
              }
              alt="/img/white.png"
              loading="lazy"
              onMouseOver={() => setHover(true)}
              onMouseOut={() => setHover(false)}
            />
            <div
              className={`absolute h-fit w-[400px] bg-slate-900 ${hover ? "block" : "hidden"} rounded-md`}
            >
              <div className="mx-5 my-5 flex items-center ">
                <h1 className="text-2xl font-bold text-white">{name}</h1>
                <span className="ml-5 inline-flex rounded-lg bg-white px-1 py-1 text-lg font-bold text-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6 fill-yellow-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <p className="px-1">{Math.round(vote_average * 10) / 10}</p>
                </span>
              </div>
              <p className="mx-5 my-1 font-medium text-white">
                ({episode_count} episodes) as {character}
              </p>
              <p className=" mx-5 my-5  text-white">
                {overview?.slice(0, 100)}...
              </p>
            </div>
          </Link>
          <Link
            to={`/details/${id}-${name?.toLowerCase().replace(/ /g, "-")}`}
            state={"movie"}
          >
            <h3 className="text-md mt-2 text-center font-bold text-white hover:text-red-500">
              {name}{" "}
            </h3>
            <p className="text-center text-sm font-bold text-white">
              {first_air_date === ""
                ? "-"
                : "(" + new Date(first_air_date).getFullYear() + ")"}
            </p>
          </Link>
        </div>
      )} */}
    </>
  );
};

export default MovieCredit;
