/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import CardSeasons from "./CardSeasons";

const Seasons = ({ seasons }) => {
  return (
    <>
      <div className="flex items-end justify-between">
        <h1 className="mr-10 text-4xl font-medium text-white">Seasons</h1>
        <Link to={`seasons`}>
          <button className="text-2xl font-medium text-white hover:text-red-500">
            View All Seasons
          </button>
        </Link>
      </div>
      {seasons
        ?.filter((season) => new Date(season.air_date))
        .sort((a, b) => new Date(b.air_date) - new Date(a.air_date))
        .slice(0, 2)
        .map((season, i) => (
          <CardSeasons
            key={i}
            name={season.name}
            air_date={season.air_date}
            episode_count={season.episode_count}
            overview={season.overview}
            season_number={season.season_number}
            vote_average={season.vote_average}
            poster_path={season.poster_path}
          />
        ))}
    </>
  );
};

export default Seasons;
