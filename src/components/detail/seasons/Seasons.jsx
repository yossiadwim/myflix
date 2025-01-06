/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import CardSeasons from "./CardSeasons";

const Seasons = ({ data }) => {

  
  return (
    <>
      <div className="flex items-end justify-between">
        <h1 className="mr-10 text-4xl font-medium text-white">Seasons</h1>
        <Link to={`/tv/${data?.id}-${data?.name?.toLowerCase().replace(/:/g, "").replace(/ /g, "-")}/seasons`}>
          <button className="text-2xl font-medium text-white hover:text-red-500">
            View All Seasons
          </button>
        </Link>
      </div>
      {data?.seasons?.filter((season) => new Date(season.air_date))
        .sort((a, b) => new Date(b.air_date) - new Date(a.air_date))
        .slice(0, 3)
        .map((season, i) => (
          <CardSeasons
            key={i}
            data={season}
          />
        ))}
    </>
  );
};

export default Seasons;
