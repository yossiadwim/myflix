/* eslint-disable react/prop-types */
const Backdrop = ({ movie, state }) => {
  return (
    <>
      <div className="bg-opacity-100 ">
        {state === "movie" ? (
          <img
            className="absolute inset-0 h-screen w-screen object-cover brightness-50"
            src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
            alt=""
          />
        ) : state === "tv" ? (
          <img
            className="absolute inset-0 h-screen w-screen object-cover brightness-50"
            src={`https://image.tmdb.org/t/p/original${tv?.backdrop_path}`}
            alt=""
          />
        ) : (
          ""
        )}
      </div>
      <div className="absolute h-full w-full bg-opacity-100 bg-gradient-to-b from-transparent to-black">
        <div className="flex h-1/2 items-end justify-center">
          {state === "movie" ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${
                movie?.images?.logos?.filter(
                  (item) => item?.iso_639_1 === "en",
                )[0]?.file_path
              }`}
              className=""
              alt=""
            />
          ) : state === "tv" ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${
                tv?.images?.logos?.filter((item) => item?.iso_639_1 === "en")[0]
                  ?.file_path
              }`}
              className=""
              alt=""
            />
          ) : (
            ""
          )}
        </div>
        <div className="my-5">
          <p className="flex justify-center py-2 text-6xl font-bold text-white">
            {movie.title}
          </p>
          <p className="flex justify-center py-2 text-4xl font-medium tracking-wide text-white">
            Videos
          </p>
        </div>
      </div>
    </>
  );
};

export default Backdrop;
