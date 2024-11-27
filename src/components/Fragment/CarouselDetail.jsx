/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { useState } from "react";
const CarouselDetail = ({ data }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <div className="bg h-[650px] w-full object-cover">
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
          <div className="flex">
            <div className="mx-28 my-5 w-3/5 pb-20 pt-28">
              <div className="">
                {data?.images?.logos?.filter((item) => item.iso_639_1 === "en")
                  .length !== 0 ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w300${
                      data?.images?.logos?.filter(
                        (item) => item?.iso_639_1 === "en",
                      )[0]?.file_path
                    }`}
                    className="w-56"
                    alt=""
                  />
                ) : (
                  <p className="text-5xl font-bold text-white">
                    {data.name || data.title}
                  </p>
                )}

                {data?.genres?.map((genre, i) => {
                  return (
                    <p
                      key={i}
                      className="mr-2 mt-5 inline-flex rounded-lg border border-gray-400 px-2 py-1 text-base font-medium text-white hover:border-red-500 hover:bg-red-500 hover:shadow-sm"
                    >
                      {genre.name}
                    </p>
                  );
                })}
              </div>
              <div className="my-3 flex">
                <p className="mr-2 text-base font-medium text-white">
                  {new Date(
                    data?.release_date || data?.first_air_date,
                  ).toLocaleString("en-us", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}{" "}
                </p>

                <div className="">
                  {
                    <p className="mx-1 text-base font-medium text-white">
                      {data?.runtime
                        ? "(" +
                          Math.floor(data?.runtime / 60) +
                          " Hour" +
                          " " +
                          Math.floor(data?.runtime % 60) +
                          " min" +
                          ")"
                        : ""}
                    </p>
                  }
                </div>

                <div className="flex items-center justify-center">
                  <span className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#fbbf24"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke=""
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                  </span>
                  <div className="">
                    {
                      <p className="font-sans text-base text-white">
                        {Math.round(data?.vote_average * 10) / 10} (
                        {data?.vote_count} vote )
                      </p>
                    }
                  </div>
                </div>
              </div>
              <div className="group">
                <div className="group">
                  {
                    <p className="mt-5 font-sans text-base font-semibold leading-relaxed tracking-normal text-white">
                      <i>{data?.tagline}</i>
                    </p>
                  }
                </div>
                <div className="group">
                  <p className="mt-5 font-sans text-base font-semibold leading-relaxed tracking-normal text-white">
                    {showMore
                      ? data?.overview?.length > 100
                        ? data?.overview
                        : data?.overview
                      : data?.overview?.slice(0, 120) + "..."}
                  </p>

                  <button
                    onClick={() => setShowMore(!showMore)}
                    className="font-medium text-red-500 hover:text-red-700"
                  >
                    {showMore ? "Show Less" : "Show More"}
                  </button>
                </div>
              </div>
              <div className="mt-5 flex">
                <div className="flex items-center justify-center rounded-lg border border-gray-400 px-1 text-base font-medium text-white hover:border-red-500 hover:bg-red-500">
                  <button className="mx-1 mb-2 mt-2">
                    <span className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#ffffff"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                        />
                      </svg>
                    </span>
                  </button>{" "}
                  <p className="mx-2 my-4">Watch Trailer</p>
                </div>
                <div className="mx-5 flex justify-center items-center rounded-lg border border-gray-400 px-2 text-base font-medium text-white hover:border-red-500 hover:bg-red-500">
                  <button className="mx-1 mb-2 mt-2">
                    <span className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#ffffff"
                        className="h-6 w-6"
                      >
                        <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                      </svg>
                    </span>
                  </button>{" "}
                  <p className="mx-2 my-4">Add to favorite</p>
                </div>
                <div className=" flex justify-center items-center rounded-lg border border-gray-400 px-2 text-base font-medium text-white hover:border-red-500 hover:bg-red-500">
                  <button className="mx-1 mb-2 mt-2">
                    <span className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#ffffff"
                        className="h-6 w-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.625 6.75a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875 0A.75.75 0 0 1 8.25 6h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1-.75-.75ZM2.625 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0ZM7.5 12a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5h-12A.75.75 0 0 1 7.5 12Zm-4.875 5.25a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875 0a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1-.75-.75Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </button>{" "}
                  <p className="mx-2 my-4">Add to list</p>
                </div>
              </div>
              <div className="mt-5 flex">
                {data?.credits?.crew
                  ?.filter(
                    (crew) => crew.job === "Director" || crew.job === "Writer",
                  )
                  .map((crew, index) => (
                    <div className="" key={index}>
                      <Link>
                        <p className="mr-10 mt-4 text-xs font-medium text-white hover:text-red-500">
                          {crew.name}
                        </p>
                      </Link>
                      <p className="font-light text-white text-xs">{crew.job}</p>
                    </div>
                  ))}
              </div>
            </div>
            <div className="mx-10 my-10 w-2/5 items-center pb-20 pt-20">
              {
                <img
                  className="h-[450px] rounded-lg"
                  src={`https://image.tmdb.org/t/p/original${data?.poster_path}`}
                  alt=""
                />
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarouselDetail;
