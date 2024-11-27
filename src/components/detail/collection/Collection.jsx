import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Collection = ({ collection }) => {
  return (
    <>
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
            <p className="text-3xl font-medium text-white">
              Part of the {collection?.name}{" "}
            </p>
            <div className="mt-2">
              <p className=" mr-1 inline-flex text-base text-white">Includes</p>
              {collection?.parts?.map((collection, i) => {
                if (i !== 0) {
                  return (
                    <p key={i} className="inline-flex text-base text-white">
                      , {collection?.title}
                    </p>
                  );
                } else {
                  return (
                    <p key={i} className="inline-flex text-base text-white">
                      {collection?.title}
                    </p>
                  );
                }
              })}
            </div>
            <div className="group mt-4">
              <Link
                to={`/collection/${collection?.id}-${collection?.name
                  ?.toLowerCase()
                  .replace(/:/g, "")
                  .replace(/ /g, "-")}`}
              >
                <button className="rounded-full border-2  px-3 py-2 text-base font-medium text-white hover:border-white hover:bg-white hover:text-black">
                  VIEW THE COLLECTION
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Collection;
