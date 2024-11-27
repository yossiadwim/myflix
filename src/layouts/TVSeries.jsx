import { useEffect, useState } from "react";
import {
  getTVSeriesTrending,
  getTVSeriesAiringToday,
  getTVSeriesOnTheAir,
  getTVSeriesPopular,
  getTVSeriesTopRated,
} from "../axios/api";

import Card from "../components/Fragment/Card";

const TVSeries = () => {
  const [datas, setDatas] = useState([]);
  const [type, setType] = useState("trending");
  const tvTypes = [
    { id: "trending", label: "Trending" },
    { id: "airing-today", label: "Airing Today" },
    { id: "top-rated", label: "Top Rated" },
    { id: "popular", label: "Popular" },
    { id: "on-the-air", label: "On The Air" },
  ];

  useEffect(() => {
    const fetchTVSeries = async () => {
      if (type === "trending") {
        const data = await getTVSeriesTrending();
        setDatas(data);
      } else if (type === "airing-today") {
        const data = await getTVSeriesAiringToday();
        setDatas(data);
      } else if (type === "on-the-air") {
        const data = await getTVSeriesOnTheAir();
        setDatas(data);
      } else if (type === "popular") {
        const data = await getTVSeriesPopular();
        setDatas(data);
      } else if (type === "top-rated") {
        const data = await getTVSeriesTopRated();
        setDatas(data);
      }
    };
    fetchTVSeries();
  }, [type]);

  return (
    <>
      <div className="mb-36 h-full bg-gradient-to-r from-transparent to-black bg-cover bg-center  pt-24 ">
        <div
          id="tv"
          className="container h-full rounded-lg bg-cover bg-center p-0"
        >
          <div className=" bg-black/50 p-5">
            <div className="mx-5 pt-16">
              <h1 className="text-6xl font-medium text-white">TV Series</h1>
            </div>
            <div className="mx-2 my-5 mb-5 flex">
              {tvTypes.map((item) => (
                <button
                  key={item.id}
                  id={`${item.id}-tv`}
                  className={`mx-5 text-2xl font-semibold ${
                    type === item.id ? "text-red-500" : "text-white"
                  } hover:text-red-500`}
                  onClick={() => setType(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className=" overflow-y-hidden">
              <div className="flex h-[500px]  min-w-fit flex-row">
                {datas?.map((data) => {
                  return <Card key={data.id} data={data} state="tv"></Card>;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TVSeries;
