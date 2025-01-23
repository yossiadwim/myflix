/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import { getSeasonsDetails } from "../../../../axios/api";

const ContentSeasons = ({ data }) => {
  const [seasons, setSeasons] = useState([]);
  const [seasonDetail, setSeasonDetail] = useState([]);
  const [currentSeason, setCurrentSeason] = useState([]);
  const [hover, setHover] = useState(false);
  const [hoverEpisode, setHoverEpisode] = useState();
  const [readMore, setReadMore] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const seasonDetail = await getSeasonsDetails(
        data?.id,
        currentSeason?.season_number,
      );
      setSeasonDetail(seasonDetail);
    };
    fetchData(data?.id, currentSeason?.season_number);
  }, [
    data?.id,
    seasons?.id,
    currentSeason?.season_number,
    seasons?.season_number,
  ]);

  // function background(backdrop_path) {
  //   const element = document.getElementById("season");
  //   const img = `https://image.tmdb.org/t/p/original${backdrop_path}`;
  //   element.style.backgroundImage = `url(${img})`;
  // }

  return (
    <>
      <div className="container pb-36 ">
        <div className="flex w-full justify-center">
          <div className="mt-[900px] " />
        </div>

        <div className="container w-[85%] overflow-y-hidden">
          <div className="custom-scrollbar flex min-w-fit justify-center gap-x-5">
            {data?.seasons?.map((season, i) => (
              <div
                className="mt-5 h-80 w-40 items-center justify-center transition duration-300 ease-in-out hover:scale-105 hover:opacity-50"
                key={i}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w185${season?.poster_path}`}
                  alt=""
                  key={i}
                  className="trasition cursor-pointer items-center rounded-lg opacity-80"
                  onClick={() => {
                    [
                      setSeasons(season),
                      setCurrentSeason(season),
                      document
                        .getElementById("seasons")
                        .scrollIntoView({ behavior: "smooth" }),
                    ];
                  }}
                />
                <p className=" mt-2 text-center text-sm text-white">
                  {season?.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          id="season"
          className="my-5 flex justify-start rounded-md bg-contain"
        >
          {seasons?.length === 0 ? (
            ""
          ) : (
            <div className="w-full rounded-md bg-black/75 p-20" id="seasons">
              <div className="w-3/4  rounded-lg p-5">
                <h1 className="text-3xl font-bold text-white">
                  {seasonDetail?.name}{" "}
                </h1>
                <p className="inline-flex font-bold leading-relaxed text-white">
                  Premiered on{" "}
                  {new Date(seasonDetail?.air_date).toLocaleString("en-us", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}{" "}
                  - {seasonDetail?.episodes.length} Episodes
                </p>
                <p className="mt-2 flex w-fit items-center rounded-lg border bg-white px-1 py-1 font-medium text-black">
                  <span className="inline-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="mr-2 size-6 fill-yellow-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>{" "}
                  {seasonDetail?.vote_average}
                </p>
                <p className="py-5 text-lg text-white">
                  {seasonDetail?.overview
                    ? seasonDetail?.overview
                    : "No Overview"}
                </p>
              </div>
              <div className="my-10 w-full" id="episodes">
                <h1 className="text-3xl font-semibold text-white">Episodes</h1>
                <div className="w-full">
                  <div className="mt-3 grid grid-cols-4 gap-3">
                    {seasonDetail?.episodes?.map((episode, i) => {
                      return (
                        <div
                          className="relative mb-5 w-fit"
                          key={i}
                          onMouseOver={() => [
                            setHover(true),
                            setHoverEpisode(episode?.episode_number),
                          ]}
                          onMouseLeave={() => setHover(false)}
                        >
                          <img
                            src={`https://image.tmdb.org/t/p/w300${episode?.still_path}`}
                            alt=""
                            className="rounded-lg p-1 opacity-70 transition duration-300 ease-in-out hover:scale-105 hover:opacity-100"
                            loading="lazy"
                          />
                          <p className="mt-2 text-base text-white">
                            {i + 1 + ". " + episode?.name}
                          </p>
                          <div
                            className={`${hover && episode?.episode_number === hoverEpisode ? "mt-2 block " : "hidden"}`}
                          >
                            <div className="flex gap-3">
                              <p className="mt-2 text-sm font-light text-white">
                                {new Date(episode?.air_date).toLocaleDateString(
                                  "en-us",
                                  {
                                    month: "long",
                                    day: "numeric",
                                    year: "numeric",
                                  },
                                )}
                              </p>
                              <p className="mt-2 text-sm font-light text-white">
                                {episode?.runtime
                                  ? episode?.runtime < 60
                                    ? episode?.runtime + "m"
                                    : "(" +
                                      Math.floor(episode?.runtime / 60) +
                                      "h" +
                                      " " +
                                      Math.floor(episode?.runtime % 60) +
                                      "m" +
                                      ")"
                                  : ""}
                              </p>
                            </div>
                            <p className="mt-2 cursor-pointer text-justify text-sm font-light text-white">
                              {readMore == i
                                ? episode?.overview
                                : episode?.overview.substring(0, 40) +
                                  "..."}{" "}
                              <p
                                className="font-bold text-red-500"
                                onClick={() => setReadMore(i)}
                              >
                                Read more
                              </p>
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-5 flex justify-between">
                  <button
                    className={`inline-flex rounded-lg border ${data?.seasons?.map((season) => season)[currentSeason?.season_number - 1]?.name === undefined ? "hidden" : ""} p-2 text-white hover:border-red-500 hover:bg-red-500 hover:text-white`}
                    onClick={() => {
                      [
                        setCurrentSeason((prev) => {
                          return {
                            ...prev,
                            season_number: prev.season_number - 1,
                          };
                        }),
                        document
                          .getElementById("seasons")
                          .scrollIntoView({ behavior: "smooth" }),
                      ];

                      // background(
                      //   data?.seasons?.map((season) => season)[
                      //     currentSeason?.season_number - 1
                      //   ]?.poster_path,
                      // );
                    }}
                  >
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.28 7.72a.75.75 0 0 1 0 1.06l-2.47 2.47H21a.75.75 0 0 1 0 1.5H4.81l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3.75-3.75a.75.75 0 0 1 0-1.06l3.75-3.75a.75.75 0 0 1 1.06 0Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    {currentSeason === 0
                      ? currentSeason
                      : data?.seasons?.map((season) => season)[
                          currentSeason?.season_number - 1
                        ]?.name}
                  </button>

                  <button
                    className={`inline-flex rounded-lg border  p-2 text-white hover:border-red-500 hover:bg-red-500 hover:text-white ${data?.seasons?.map((season) => season)[currentSeason?.season_number + 1]?.name === undefined ? "hidden" : ""}`}
                    onClick={() => {
                      [
                        setCurrentSeason((prev) => {
                          return {
                            ...prev,
                            season_number: prev.season_number + 1,
                          };
                        }),

                        document
                          .getElementById("seasons")
                          .scrollIntoView({ behavior: "smooth" }),
                      ];

                      // background(
                      //   data?.seasons?.map((season) => season)[
                      //     currentSeason?.season_number + 1
                      //   ]?.poster_path,
                      // );
                    }}
                  >
                    {currentSeason === data?.seasons?.length - 1
                      ? currentSeason
                      : data?.seasons?.map((season) => season)[
                          currentSeason?.season_number + 1
                        ]?.name}
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ContentSeasons;
