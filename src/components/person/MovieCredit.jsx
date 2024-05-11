/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const MovieCredit = ({ id, poster_path, title }) => {
  return (
    <>
      <div className="mx-2 w-36 items-center justify-center ">
        <Link to={`/details/${id}-${title.toLowerCase().replace(/ /g, "-")}`} state={"movie"}>
          <img
            className="rounded-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1  hover:scale-105 hover:opacity-50"
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt="/img/white.png"
            loading="lazy"
          />
        </Link>
        <Link to={`/details/${id}-${title.toLowerCase().replace(/ /g, "-")}`} state={"movie"}>
          <h3 className="text-md mt-2 text-center font-bold text-white hover:text-red-500">{title}</h3>
        </Link>
      </div>
    </>
  );
};

export default MovieCredit;
