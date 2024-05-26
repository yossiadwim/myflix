/* eslint-disable react/prop-types */
import CastsMovie from "../components/detail/cast/FullCastAndCrew/CastsMovie";
import CrewsMovie from "../components/detail/cast/FullCastAndCrew/CrewsMovie";
const ContentMoviesCasts = ({ data }) => {

  return (
    <>
      <div className="bg-opacity-100 ">
        {
          <img
            className="absolute inset-0 h-screen w-screen object-cover brightness-50"
            src={`https://image.tmdb.org/t/p/original${data?.backdrop_path}`}
            alt=""
          />
        }
      </div>
      <div className="absolute h-full w-full bg-opacity-100 bg-gradient-to-b from-transparent to-black">
        <div className="flex h-1/2 items-end justify-center">
          {
            <img
              src={`https://image.tmdb.org/t/p/w500${
                data?.images?.logos?.filter(
                  (item) => item?.iso_639_1 === "en",
                )[0]?.file_path
              }`}
              className=""
              alt=""
            />
          }
        </div>
        <div className="my-5">
          <p className="flex justify-center py-2 text-6xl font-bold text-white">
            {data.title || data.name}
          </p>
          <p className="flex justify-center py-2 text-4xl font-medium text-white">
            Cast and Crew
          </p>
        </div>
      </div>

      <CastsMovie data={data}></CastsMovie>
      <CrewsMovie data={data}></CrewsMovie>
    </>
  );
};

export default ContentMoviesCasts;
