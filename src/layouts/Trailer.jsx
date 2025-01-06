import { useState, useEffect } from "react";
import {
  getAllTrending,
  getDetailMovies,
  getTVSeriesDetail,
} from "../axios/api";
import CardVideos from "../components/detail/detail_media/CardVideos";

const Trailer = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const fetchTrailer = async () => {
      const data = await getAllTrending();
      const trailer = await Promise.all(
        data?.results.map(async (item) => {
          if (item.media_type === "movie") {
            const detail = await getDetailMovies(item.id);
            return detail;
          } else if (item.media_type === "tv") {
            const detail = await getTVSeriesDetail(item.id);
            return detail;
          }
        }),
      );
      setDatas(trailer);
    };
    fetchTrailer();
  }, []);

  return (
    <>
      <div
        id="trailer"
        className="container mt-32 rounded-lg bg-cover p-0 duration-500 ease-in-out"
      >
        <div className="bg-black/50 ">
          <div className="mx-6 flex">
            <p className="mx-24 mt-10 text-5xl font-medium text-white">
              Trailer
            </p>
          </div>
          <div className="container w-[90%] overflow-y-hidden ">
            <div className="custom-scrollbar bg-transparent">
              <div className="mx-5 my-5 flex min-w-fit flex-row">
                {datas?.map((data, index) => {
                  if (data?.videos?.results?.length === 0) return null;
                  return <CardVideos key={index} data={data}></CardVideos>;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trailer;
