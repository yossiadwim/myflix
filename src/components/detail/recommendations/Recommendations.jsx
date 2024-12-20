/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import CardRecommendation from "./CardRecommendations";

const Recommendations = ({ data, state }) => {
  return (
    <>
      <div className="flex items-end justify-between">
        <h1 className="text-3xl font-medium text-white">Recommendations</h1>
        <Link>
          <p className="text-base font-medium text-white hover:text-red-500">
            View all
          </p>
        </Link>
      </div>
      <div className="flex overflow-y-hidden">
        {data?.recommendations?.results?.map((recommendation, i) => {
          return <CardRecommendation key={i} {...recommendation} state={state} />;
        })}
      </div>
    </>
  );
};

export default Recommendations;
