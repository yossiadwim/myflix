/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const KnowFor = ({ id, poster_path, title, release_date }) => {
  return (
    <>
      <div className="mx-2 w-36 items-center justify-center ">
        <Link
          to={`/details/${id}-${title?.toLowerCase().replace(/ /g, "-")}`}
          state={"movie"}
        >
          <img
            className={`rounded-lg transition  ${poster_path === null ? "h-[215px]" : ""} delay-150 duration-300 ease-in-out hover:-translate-y-1  hover:scale-105 hover:opacity-50`}
            src={
              poster_path === null
                ? `/img/white.png`
                : `https://image.tmdb.org/t/p/w500${poster_path}`
            }
            alt=""
            loading="lazy"
          />
        </Link>
        <Link
          to={`/details/${id}-${title?.toLowerCase().replace(/ /g, "-")}`}
          state={"movie"}
        >
          <h3 className="text-sm mt-2 text-center font-bold text-white hover:text-red-500">
            {title}
          </h3>
          <p className="text-center text-sm font-bold text-white">
            {release_date === ""
              ? "-"
              : "(" + new Date(release_date).getFullYear() + ")"}
          </p>
        </Link>
      </div>
    </>
  );
};

export default KnowFor;
