/* eslint-disable react/prop-types */
const Collection = ({ collection }) => {
  return (
    <>
      {collection?.parts?.length > 0 && (
        <div
          className="container rounded-lg bg-cover bg-top p-0 "
          style={
            collection?.backdrop_path === null
              ? {
                  backgroundImage: `url(https://image.tmdb.org/t/p/original${collection?.parts[0].backdrop_path})`,
                }
              : {
                  backgroundImage: `url(https://image.tmdb.org/t/p/original${collection?.backdrop_path})`,
                }
          }
        >
          <div className="bg-black/60">
            <div className="px-5 py-20">
              <p className="text-4xl font-medium text-white">
                Part of the {collection?.name}{" "}
              </p>
              <div className="mt-2 flex">
                <p className=" mr-1 text-lg text-white">Includes</p>
                {collection?.parts?.map((collection, i) => {
                  if (i !== 0) {
                    return (
                      <p key={i} className="text-lg text-white">
                        , {collection?.original_title}
                      </p>
                    );
                  } else {
                    return (
                      <p key={i} className="text-lg text-white">
                        {collection?.original_title}
                      </p>
                    );
                  }
                })}
              </div>
              <div className="group mt-4">
                <button className="rounded-full border-2  px-3 py-2 text-lg font-medium text-white hover:border-white hover:bg-white">
                  <a
                    href=""
                    className="font-bold text-white group-hover:text-black"
                  >
                    VIEW THE COLLECTION
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Collection;
