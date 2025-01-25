/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { Dropdown } from "flowbite-react";
import {
  getTVSeriesAiringToday,
  getTVSeriesOnTheAir,
  getTVSeriesPopular,
  getTVSeriesTopRated,
  getGenre,
} from "../axios/api";

import ReactPaginate from "react-paginate";
import { useState, useEffect } from "react";

const ContentTv = ({ type }) => {
  const [data, setData] = useState([]);
  const [genres, setGenres] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      window.scrollTo(0, 0);

      const fetchGenres = async () => {
        const data = await getGenre();
        setGenres(data);
      };

      const fetchTv = async () => {

        if (type === "popular") {
          const data = await getTVSeriesPopular(page);
          setData(data);
        } else if (type === "toprated") {
          const data = await getTVSeriesTopRated(page);
          setData(data);
        } else if (type === "ontheair") {
          const data = await getTVSeriesOnTheAir(page);
          setData(data);
        } else if (type === "airingtoday") {
          const data = await getTVSeriesAiringToday(page);
          setData(data);
        }

      };

      fetchTv();
      fetchGenres();
    }, 2000);
  }, [page, type]);

  return (
    <>
      {loading ? (
        <div className="flex h-screen items-center justify-center ">
          <div className="loader"></div>
        </div>
      ) : (
        <>
          <h1 className="container mt-28 text-4xl font-bold capitalize text-white">
            {type === "toprated"
              ? "Top Rated"
              : type === "ontheair"
                ? "On the Air"
                : type === "airingtoday"
                  ? "Airing Today"
                  : type}{" "}
            TV Shows
          </h1>
          <div className="container my-10 flex">
            <div className="container w-1/4  ">
              <div className="my-5 text-lg text-white">
                <Dropdown
                  className="border-none bg-slate-900 text-white"
                  label="Sort by"
                  inline
                >
                  <Dropdown.Item className="py-2 text-white hover:text-red-500">
                    Popularity Descending
                  </Dropdown.Item>
                  <Dropdown.Item className="py-2 text-white hover:text-red-500">
                    Popularity Ascending
                  </Dropdown.Item>
                  <Dropdown.Item className="py-2 text-white hover:text-red-500">
                    Rating Descending
                  </Dropdown.Item>
                  <Dropdown.Item className="py-2 text-white hover:text-red-500">
                    Rating Ascending
                  </Dropdown.Item>
                  <Dropdown.Item className="py-2 text-white hover:text-red-500">
                    Release Date Descending
                  </Dropdown.Item>
                  <Dropdown.Item className="py-2 text-white hover:text-red-500">
                    Release Date Ascending
                  </Dropdown.Item>
                </Dropdown>
              </div>
              <div className="my-5">
                <p className="text-lg text-white">Genres</p>
                <div className="my-3 flex flex-wrap gap-2">
                  {genres?.genres?.map((genre, i) => {
                    return (
                      <p
                        key={i}
                        className="w-fit rounded-full border px-4 py-2 text-sm  text-white transition hover:border-red-500 hover:bg-red-500 hover:text-white"
                      >
                        {genre.name}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="container w-3/4 ">
              <div className="grid grid-cols-5 gap-x-5 gap-y-10">
                {data?.results?.map((tv, i) => {
                  return (
                    <div className="" key={i}>
                      <img
                        key={i}
                        src={`https://image.tmdb.org/t/p/w185/${tv?.poster_path}`}
                        alt=""
                        className="rounded-lg transition duration-300 ease-in-out hover:scale-105 hover:opacity-70"
                      />
                      <Link>
                        <p className="mt-2 text-sm font-bold text-white hover:text-red-500">
                          {tv?.name}
                        </p>
                      </Link>
                      <p className="text-xs text-white">
                        {new Date(tv?.release_date).toLocaleString("en-us", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="flex items-center justify-center px-4 py-3 sm:px-6 ">
                <div className="flex flex-1 justify-between sm:hidden">
                  <a
                    href="#"
                    className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Previous
                  </a>
                  <a
                    href="#"
                    className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Next
                  </a>
                </div>
                <div className="flex justify-center">
                  <ReactPaginate
                    className="my-14 flex w-fit justify-center gap-14 rounded-full bg-slate-900 px-10 py-3 font-medium text-white"
                    pageCount={data?.total_pages}
                    pageRangeDisplayed={5}
                    marginPagesDisplayed={1}
                    onPageChange={(e) => setPage(e.selected + 1)}
                    containerClassName={"pagination"}
                    activeClassName={"active"}
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                  ></ReactPaginate>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default ContentTv;
