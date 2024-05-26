import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
/* eslint-disable react/prop-types */
const CardRecommendation = ({ id, name, title, backdrop_path }) => {

  const location = useLocation();
  const state = location.state;

  return (
    <>
      <div className="w-full">
        <div className="flex h-64 w-96 px-5 pt-10">
          {
            <Link
              to={
                title
                  ? `/details/${id}-${title?.toLowerCase().replace(/:/g, "").replace(/ /g, "-")}`
                  : `/details/${id}-${name?.toLowerCase().replace(/:/g, "").replace(/ /g, "-")}`
              }
            state={state}>
              <img
                className="mx-3 h-full w-full rounded-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1  hover:scale-110 hover:opacity-50"
                src={`https://image.tmdb.org/t/p/w533_and_h300_bestv2${backdrop_path}`}
                alt="card"
              ></img>
            </Link>
          }
        </div>
        <p className="mx-10 my-5 text-white">{title || name}</p>
      </div>
    </>
  );
};

export default CardRecommendation;
