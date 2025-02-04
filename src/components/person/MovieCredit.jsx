/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const MovieCredit = ({data}) => {

  console.log(data)

  const [hover, setHover] = useState(false);

  return (
    <>
      <div className="mx-2 w-36 items-center justify-center ">
        <Link
          to={`/details/${data?.id}-${data?.title?.toLowerCase().replace(/ /g, "-")}`}
          state={"movie"}
        >
          <img
            className={`rounded-lg ${data?.poster_path === null ? "h-[212px] w-36" : ""} transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:opacity-50`}
            src={
              data?.poster_path === null
                ? `/img/white.png`
                : `https://image.tmdb.org/t/p/w500${data?.poster_path}`
            }
            alt=""
            loading="lazy"
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          />
          <div
            // className={`absolute my-3 h-fit w-[400px] bg-slate-900 ${hover ? "block" : "hidden"} rounded-md`}
            className={`absolute my-3 h-fit w-[280px] bg-slate-900 ${hover ? "block" : "hidden"} rounded-md`}
          >
            <div className="mx-5 my-5 flex items-center ">
              <h1 className="text-xl font-bold text-white">{data?.title ? data?.title : "No Title"}</h1>
              <span className="ml-5 inline-flex rounded-lg px-1 py-1 text-lg font-bold text-white">
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

                <p className="px-1">{Math.round(data?.vote_average * 10) / 10}</p>
              </span>
            </div>
            <p className="mx-5 my-1 font-medium text-sm text-white">{data?.media_type === "tv" ? "(" + data?.episode_count + " episodes" + ")" : ""}  {data?.character ? 'as '  + data?.character : ""}</p>
            <p className=" mx-5 my-5 text-sm  text-white">
              {data?.overview?.slice(0, 100)}...
            </p>
          </div>
        </Link>
        <Link
          to={`/details/${data?.id}-${data?.title?.toLowerCase().replace(/ /g, "-")}`}
          state={"movie"}
        >
          <h3 className="text-sm mt-2 text-center font-bold text-white hover:text-red-500">
            {data?.title ? (data?.title.length > 15 ? data?.title.substring(0, 15) + "..." : data?.title) : "No Title"}
          </h3>
          
        </Link>
      </div>
     
    </>
  );
};

export default MovieCredit;
