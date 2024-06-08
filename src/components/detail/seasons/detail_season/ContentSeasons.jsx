/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import { getSeasonsDetails } from "../../../../axios/api";

const ContentSeasons = ({ data }) => {
  const [seasons, setSeasons] = useState([]);
  const [seasonDetail, setSeasonDetail] = useState([]);
  const [episode, setEpisode] = useState([]);
  const [currentSeason, setCurrentSeason] = useState([]);

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

  function background(backdrop_path) {
    const element = document.getElementById("season");
    const img = `https://image.tmdb.org/t/p/original${backdrop_path}`;
    element.style.backgroundImage = `url(${img})`;
  }

  return (
    <>
      <div className="container pb-36 ">
        <div className="flex w-full  justify-center">
          <div className="mt-[900px] " />
        </div>
        <div className="rounded-lg">
          <div className="my-16 flex justify-center ">
            <div className=" overflow flex w-full gap-5 overflow-y-hidden p-10">
              {data?.seasons?.map((season, i) => (
                <>
                  <img
                    key={i}
                    src={`https://image.tmdb.org/t/p/w185${season?.poster_path}`}
                    alt=""
                    className="trasition  rounded-lg opacity-50 duration-300 ease-in-out hover:scale-110 hover:opacity-100"
                    onMouseOver={() => {
                      setSeasons(season);
                      setCurrentSeason(season);
                      background(season?.poster_path);
                    }}
                  />
                </>
              ))}
            </div>
          </div>
          <div
            id="season"
            className="my-28 flex justify-start rounded-md bg-cover"
          >
            {seasons?.length === 0 ? (
              ""
            ) : (
              <div className="w-full bg-black/75 p-20 ">
                <div className="w-3/4">
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
                    - {seasonDetail?.episode_count} Episodes
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
                <div className="my-10 w-full">
                  <h1 className="text-3xl font-semibold text-white">
                    Episodes
                  </h1>
                  <div className="overflow mb-5 flex gap-5 overflow-y-hidden p-5">
                    {seasonDetail?.episodes?.map((episode, i) => {
                      return (
                        <img
                          key={i}
                          src={`https://image.tmdb.org/t/p/w300${episode?.still_path}`}
                          alt=""
                          className="w-full rounded-md transition opacity-70 duration-300 ease-in-out hover:scale-105 hover:opacity-100"
                          onMouseOver={() => setEpisode(episode)}
                        />
                      );
                    })}
                  </div>
                  <div className="flex justify-between">
                    <button
                      className={`inline-flex rounded-lg border ${data?.seasons?.map((season) => season)[currentSeason?.season_number - 1]?.name === undefined ? "hidden" : ""} p-2 text-white hover:border-red-500 hover:bg-red-500 hover:text-white`}
                      onClick={() => {
                        setCurrentSeason((prev) => {
                          return {
                            ...prev,
                            season_number: prev.season_number - 1,
                          };
                        });

                        setEpisode([]);
                        background(
                          data?.seasons?.map((season) => season)[
                            currentSeason?.season_number - 1
                          ]?.poster_path,
                        );
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
                        setCurrentSeason((prev) => {
                          return {
                            ...prev,
                            season_number: prev.season_number + 1,
                          };
                        });

                        setEpisode([]);

                        background(
                          data?.seasons?.map((season) => season)[
                            currentSeason?.season_number + 1
                          ]?.poster_path,
                        );
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
                  {episode?.length === 0 ? (
                    ""
                  ) : (
                    <div className="w-fulll my-10 rounded-lg bg-black/50 p-10">
                      <h1 className="text-3xl font-semibold text-white">
                        Episode {episode?.episode_number} • {episode?.name}
                      </h1>
                      <p className="mt-2 text-white">
                        {new Date(episode?.air_date).toLocaleString("en-us", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}{" "}
                        •{" "}
                        {episode?.runtime > 60
                          ? "(" +
                            Math.floor(episode?.runtime / 60) +
                            " Hour" +
                            " " +
                            Math.floor(episode?.runtime % 60) +
                            " min" +
                            ")"
                          : `${episode?.runtime} min`}
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
                        {episode?.vote_average.toFixed(1)}
                      </p>
                      <p className="w-2/3 py-5 text-lg text-white">
                        {episode?.overview}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentSeasons;
