/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
const CardSeasons = ({
  name,
  air_date,
  episode_count,
  overview,
  season_number,
  vote_average,
  poster_path,
}) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <div className="my-5 flex w-full flex-row items-start justify-items-start rounded-lg border border-slate-700 px-2">
        <div className="my-5 h-fit w-fit bg-cover">
          <Link to={`season/${season_number}`}>
            <img
              src={`https://image.tmdb.org/t/p/w130_and_h195_bestv2${poster_path}`}
              alt="poster"
              className="justify-items-center rounded-lg hover:opacity-50 mx-2"
            />
          </Link>
        </div>
        <div className="mx-5 my-5 w-fit">
          <Link to={`season/${season_number}`}>
            <p className="text-2xl font-medium text-white hover:text-red-500">{name}</p>
          </Link>
          <div className="my-3 flex items-center">
            <div className="mr-3 flex rounded-md border p-1 hover:border-red-500 hover:bg-red-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#fcd34d"
                className="h-5 w-5 mr-1"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-white">{vote_average}</p>
            </div>
            <p className="mr-3 text-white">
              {new Date(air_date).toLocaleString("en-us", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
            <p className="text-white">{episode_count} episodes</p>
          </div>
          <p className="tex-white text-base leading-relaxed text-white">
            {showMore ? overview : overview?.slice(0, 250) + "..."}
          </p>
          <button
            onClick={() => setShowMore(!showMore)}
            className="font-medium text-red-500 hover:text-red-700"
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </>
  );
};

export default CardSeasons;
