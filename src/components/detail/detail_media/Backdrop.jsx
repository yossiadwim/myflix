import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Backdrop = ({ data, state, type }) => {
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
              className="w-56"
              alt=""
            />
          }
        </div>
        <div className="my-5">
          <p className="flex justify-center py-2 text-6xl font-bold text-white">
            {data?.title || data?.name}
          </p>
          <p className="flex justify-center py-2 text-4xl font-medium tracking-wide text-white capitalize">
            {type}
          </p>
          <Link
            className="group flex justify-center"
            to={`/${state}/${data.id}-${data?.title?.toLowerCase().replace(/:/g, "").replace(/ /g, "-")}`}
            state={state}
          >
            <button className="group flex items-center justify-center text-white group-hover:text-red-500">
              <span className="mr-2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5 fill-white group-hover:fill-red-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              Back to detail
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Backdrop;
