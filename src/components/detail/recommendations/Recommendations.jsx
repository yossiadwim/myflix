/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import CardRecommendation from "./CardRecommendations";

const Recommendations = ({
  state,
  recommendations_movie,
  recommendations_tv,
}) => {
  return (
    <>
      <div className="flex items-end justify-between">
        <h1 className="text-4xl font-medium text-white">Recommendations</h1>
        <Link>
          <p className="text-base font-medium text-white hover:text-red-500">
            View all
          </p>
        </Link>
      </div>
      <div className="flex overflow-y-hidden">
        {state === "movie"
          ? recommendations_movie?.results?.map((recommendation, i) => {
              return (
                <CardRecommendation
                  key={i}
                  id={recommendation?.id}
                  title={recommendation?.title}
                  original_title={recommendation?.original_title}
                  backdrop_path={recommendation?.backdrop_path}
                  state={state}
                />
              );
            })
          : recommendations_tv?.results?.map((recommendation, i) => {
              return (
                <CardRecommendation
                  key={i}
                  id={recommendation?.id}
                  name={recommendation?.name}
                  original_title={recommendation?.original_name}
                  backdrop_path={recommendation?.backdrop_path}
                  state={state}
                />
              );
            })}
      </div>
    </>
  );
};

export default Recommendations;
