/* eslint-disable react/prop-types */
const Backdrop = ({ collection, movies, genres }) => {
  return (
    <>
      <div className="bg-opacity-100 ">
        {
          <img
            className="absolute inset-0 h-screen w-screen object-cover brightness-50 "
            src={`https://image.tmdb.org/t/p/original${collection?.backdrop_path}`}
            alt=""
          />
        }
      </div>
      <div className="absolute flex h-full w-full bg-opacity-100 bg-gradient-to-b from-transparent to-black">
        <div className="w-2/6">
          <div className="flex h-full w-full items-center justify-center">
            <img
              src={`https://image.tmdb.org/t/p/w342${collection?.poster_path}`}
              className="rounded-lg transition ease-in-out hover:scale-105 hover:opacity-50"
              alt=""
            />
          </div>
        </div>
        <div className="w-4/6 ">
          <div className="mt-48">
            <p className="text-4xl font-bold text-white">{collection?.name}</p>
            {[
              ...new Set(
                collection?.parts?.map((part) => part?.genre_ids).flat(),
              ),
            ].map((genre, i) => {
              return (
                <p
                  key={i}
                  className="my-3 mr-3 inline-flex rounded-lg border px-2 py-2 text-white hover:border-red-500 hover:bg-red-500 hover:text-white"
                >
                  {genres?.genres?.find((item) => item?.id === genre)?.name}
                </p>
              );
            })}
            <p className="my-2 text-lg font-medium capitalize tracking-wide text-white">
              Overview
            </p>
            {
              <p className="text-base w-3/4 capitalize tracking-wide text-white">
                {collection?.overview}
              </p>
            }
            <p className="mt-5 text-base font-medium text-white">
              Number of movies: {collection?.parts?.length}
            </p>
            <p className="text-base font-medium text-white">
              Revenue:{" "}
              {Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(
                movies?.reduce((sum, movie) => sum + (movie?.revenue || 0), 0),
              )}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Backdrop;
