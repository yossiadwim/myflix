import { useEffect, useState } from "react";

import {
  getDetailMovies,
  getTVSeriesDetail,
  getAllTrending,
} from "../../axios/api";
import { Link } from "react-router-dom";

import { Carousel } from "flowbite-react";

const CarouselHome = () => {
  const [datas, setData] = useState([]);
  const [detailDatas, setDetailDatas] = useState([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllTrending();
      const detailMovies = await Promise.all(
        data?.results?.map(async (item) => {
          if (item.media_type === "movie") {
            const detail = await getDetailMovies(item.id);
            return detail;
          } else if (item.media_type === "tv") {
            const detail = await getTVSeriesDetail(item.id);
            return detail;
          }
        }),
      );

      setData(data);
      setDetailDatas(detailMovies);
    };

    fetchData();
  }, []);

  return (
    // eslint-disable-next-line no-undef
    <>
      <div className="h-[750px] w-full object-cover">
        <Carousel pauseOnHover slideInterval={3000} indicators={false}>
          {datas?.results?.map((data) => (
            <div className="h-[800px] w-full object-cover" key={data?.id}>
              <div className="">
                <img
                  className="absolute inset-0 h-screen w-screen object-cover opacity-50"
                  src={`https://image.tmdb.org/t/p/original${data?.backdrop_path}`}
                  alt=""
                />
              </div>

              <div className="absolute h-full w-full bg-opacity-100 bg-gradient-to-b from-transparent to-black">
                <div className="mx-36 mt-20 w-2/5 pb-20 pt-20">
                  <img
                    src={`https://image.tmdb.org/t/p/w300${
                      detailDatas[datas?.results?.indexOf(data)]?.images?.logos?.find(
                        (item) => item?.iso_639_1 === "en",
                      )?.file_path ||
                      detailDatas[datas?.results?.indexOf(data)]?.images?.logos[0]
                        ?.file_path
                    }`}
                    className=""
                    alt=""
                  />

                  <div className="flex">
                    <p className="mr-2 mt-10 text-xl font-medium text-white">
                      {new Date(
                        data?.release_date
                          ? data?.release_date
                          : data?.first_air_date,
                      ).toLocaleString("en-us", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}{" "}
                    </p>
                    <p className="mt-10 text-xl font-medium text-white">
                      Popularity ({data?.popularity})
                    </p>
                  </div>
                  <div className="mt-2 flex items-center space-x-2">
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
                    <p className="font-sans text-lg text-white">
                      {Math.round(data.vote_average * 10) / 10} (
                      {data?.vote_count} vote )
                    </p>
                  </div>
                  <div className="mt-5 ">
                    <p className="font-sans text-base leading-relaxed tracking-normal text-white">
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
                  <div className="my-10 flex">
                    <Link
                      to={`/${data?.media_type}/${data?.id}-${data?.title?.toLowerCase().replace(/:/g, "").replace(/ /g, "-") || data?.name?.toLowerCase().replace(/:/g, "").replace(/ /g, "-")}`}
                      state={"movie"}
                    >
                      <button className="inline-flex rounded-xl border px-6 py-4 font-semibold text-white  hover:border-red-500 hover:bg-red-500 hover:text-slate-200 ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="size-6 mr-1"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Details
                      </button>
                    </Link>
                    <button className="ml-5 inline-flex rounded-xl border px-6 py-4 font-semibold text-white hover:border-red-500 hover:bg-red-500 hover:text-slate-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="mr-1 size-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Watch Trailer
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default CarouselHome;
