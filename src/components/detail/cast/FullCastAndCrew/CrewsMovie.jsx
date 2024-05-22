/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

const CrewsMovie = ({ movie, state }) => {
  const baseImgURL = process.env.REACT_APP_BASEIMGURL;

  const [hover, setHover] = useState(false);
  const [dep, setDepartment] = useState("All");

  const [currentPage, setCurrentPage] = useState(0);
  const [perPage] = useState(14);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const indexOfLastItem = (currentPage + 1) * perPage;
  const indexOfFirstItem = indexOfLastItem - perPage;

  const currentItemsCrewMovie =
    dep == "All"
      ? movie?.credits?.crew?.slice(indexOfFirstItem, indexOfLastItem)
      : movie?.credits?.crew
          ?.filter((crew) => crew.department === dep)
          .slice(indexOfFirstItem, indexOfLastItem);

  // const currentItemsCrewMovie = movie?.credits?.crew?.filter((crew) => crew.department === dep).slice(
  //   indexOfFirstItem,
  //   indexOfLastItem,
  // );

  useEffect(() => {
    setCurrentPage(0);
  }, [movie]);

  return (
    <>
      <div className="container">
        <div className="flex items-end">
          <h1 className="mt-10 text-4xl font-bold text-white">
            Crew ({movie?.credits?.crew?.length})
          </h1>
          <div
            className=""
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <div className="group flex items-center">
              <button className="ml-5  bg-black text-2xl font-medium text-white group-hover:text-red-500">
                {dep === "All" ? "All" : dep}
              </button>
              <span>
                {hover ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mx-2 h-6 w-6 fill-white group-hover:fill-red-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mx-2  h-6 w-6 fill-white group-hover:fill-red-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </span>
            </div>

            <div
              className={`absolute left-[350px] ${hover ? "block" : "hidden"}`}
            >
              <ul className="rounded-lg bg-slate-900 py-1">
                <li
                  className={`text-md mt-1 px-4 py-1 font-medium text-white  hover:text-red-500`}
                >
                  <button
                    className={` ${dep === "All" ? "text-red-500" : "text-white"}`}
                    onClick={() => setDepartment("All")}
                  >
                    All
                  </button>
                </li>

                {[
                  ...new Set(
                    movie?.credits?.crew
                      ?.sort((a, b) => a.department.localeCompare(b.department))
                      .map((crew) => crew.department),
                  ),
                ].map((department, i) => (
                  <li
                    key={i}
                    className="text-md mt-1 px-4 py-1 font-medium text-white hover:text-red-500"
                  >
                    <button
                      className={`${dep === department ? "text-red-500" : "text-white"}`}
                      onClick={() => setDepartment(department)}
                    >
                      {department}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="my-5 grid h-fit grid-cols-7">
          {state === "movie" &&
            currentItemsCrewMovie?.map((cast, i) => {
              return (
                <div
                  key={i}
                  className="my-5 mr-5 mt-7 w-40 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:opacity-50"
                >
                  <Link
                    to={`/persons/${cast?.id}-${cast?.name?.toLowerCase().replace(/ /g, "-")}`}
                  >
                    <img
                      className="h-56 w-full rounded-lg"
                      src={
                        cast?.profile_path
                          ? `${baseImgURL}${cast?.profile_path}`
                          : "/img/white.png"
                      }
                      alt=""
                      loading="lazy"
                    />
                  </Link>
                  <h3 className="text-md mt-1 font-bold text-white">
                    {cast?.name}
                  </h3>
                  <p className="mt-1 text-white">
                    {cast?.known_for_department}
                  </p>
                  <p className="mt-1 text-white">{cast?.job}</p>
                </div>
              );
            })}
        </div>
        <div className="flex justify-center">
          <ReactPaginate
            className="my-14 flex w-fit justify-center gap-14 rounded-full bg-slate-900 px-10 py-3 font-medium text-white"
            pageCount={
              dep === "All"
                ? Math.ceil(movie?.credits?.crew?.length / perPage)
                : Math.ceil(
                    movie?.credits?.crew?.filter(
                      (crew) => crew?.department === dep,
                    )?.length / perPage,
                  )
            }
            pageRangeDisplayed={5}
            marginPagesDisplayed={1}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            activeClassName={"active"}
            previousLabel={"Previous"}
            nextLabel={"Next"}
          ></ReactPaginate>
        </div>
      </div>
    </>
  );
};

export default CrewsMovie;
