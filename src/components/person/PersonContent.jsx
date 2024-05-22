import { useEffect, useState } from "react";
import MovieCredit from "./MovieCredit";
import ReactPaginate from "react-paginate";

/* eslint-disable react/prop-types */
const PersonContent = ({ person }) => {
  const [hoverType, setHoverType] = useState(false);
  const [hoverDepartment, setHoverDepartment] = useState(false);

  const [type, setType] = useState("all");
  const [dep, setDepartment] = useState("All");

  const [currentPage, setCurrentPage] = useState(0);
  const [perPage] = useState(3);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const indexOfLastItem = (currentPage + 1) * perPage;
  const indexOfFirstItem = indexOfLastItem - perPage;

  let cast =
    type === "all"
      ? getYear(person?.combined_credits?.cast).slice(
          indexOfFirstItem,
          indexOfLastItem,
        )
      : getYear(
          person?.combined_credits?.cast?.filter(
            (item) => item.media_type === type,
            (item) => item.department === dep,
          ),
        ).slice(indexOfFirstItem, indexOfLastItem);

  let length =
    type || dep === "all"
      ? getYear(person?.combined_credits?.cast)
      : getYear(
          person?.combined_credits?.cast?.filter(
            (item) => item.media_type === type,
            (item) => item.department === dep,
          ),
        );

  useEffect(() => {
    setCurrentPage(0);
  }, [person]);

  return (
    <>
      <div className="container flex pb-20">
        <aside className="w-1/5">
          <div className="mt-80 border-slate-800">
            <h1 className="text-4xl font-bold text-white">Personal Info</h1>
            <div className="my-5 flex">
              <a
                className="fill-white hover:fill-[#E4405F]"
                href={`https://instagram.com/${person?.external_ids?.instagram_id}`}
                target="blank"
              >
                <svg
                  className="h-6 w-6"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Visit Instagram</title>
                  <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
                </svg>
              </a>
              <a
                href={`https://twitter.com/${person?.external_ids?.twitter_id}`}
                className="ml-5 fill-white hover:fill-[#1D9BF0]"
              >
                <svg
                  role="img"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  target="blank"
                >
                  <title>Visit X</title>
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
              </a>
            </div>
            <div className="my-5">
              <p className="text-xl font-medium text-white">Stage Name</p>
              <p className="text-lg text-white">{person?.name}</p>
            </div>
            <div className="my-5">
              <p className="text-xl font-medium text-white">Known For</p>
              <p className="text-lg text-white">
                {person?.known_for_department}
              </p>
            </div>
            <div className="my-5">
              <p className="text-xl font-medium text-white">Known Credits</p>
              <p className="text-lg text-white">
                {person?.combined_credits?.cast?.length > 0
                  ? person?.combined_credits?.cast?.length
                  : person?.combined_credits?.crew?.length}
              </p>
            </div>
            <div className="my-5">
              <p className="text-xl font-medium text-white">Gender</p>
              <p className="text-lg text-white">
                {person?.gender === 0
                  ? "Not set / not specified"
                  : person?.gender === 1
                    ? "Female"
                    : person?.gender === 2
                      ? "Male"
                      : person?.gender === 3
                        ? "Non-binary"
                        : "-"}
              </p>
            </div>
            <div className="my-5">
              <p className="text-xl font-medium text-white">Birthday</p>
              <p className="text-lg text-white">
                {person?.birthday
                  ? new Date(person?.birthday).toLocaleString("en-us", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    }) +
                    " (" +
                    Math.floor(
                      (Date.now() - Date.parse(person?.birthday)) /
                        (1000 * 60 * 60 * 24 * 365.25),
                    ) +
                    " years old)"
                  : "-"}
              </p>
            </div>
            <div className="my-5">
              <p className="text-xl font-medium text-white">Place of Birth</p>
              <p className="text-lg text-white">
                {person?.place_of_birth ? person?.place_of_birth : "-"}
              </p>
            </div>
            <div className="my-5">
              <p className="text-xl font-medium text-white">Also Known As</p>
              {person?.also_known_as?.length > 0 ? (
                person?.also_known_as?.map((item, index) => (
                  <p className="text-lg text-white" key={index}>
                    {item}
                  </p>
                ))
              ) : (
                <p className="text-lg text-white">-</p>
              )}
            </div>
          </div>
        </aside>
        <section className="container mx-5 mt-64 w-4/5">
          <div className="mt-10 flex items-end">
            <h1 className="mx-10 py-5 text-4xl font-medium text-white">
              {person?.known_for_department}
            </h1>

            <div
              className="group flex items-end"
              onMouseOver={() => setHoverType(true)}
              onMouseLeave={() => setHoverType("")}
            >
              <div className="group mx-10 py-5">
                <button className="flex items-center text-2xl text-white">
                  {type === "all"
                    ? "All"
                    : type === "movie"
                      ? "Movies"
                      : type === "tv"
                        ? "TV Shows"
                        : "-"}
                  <span className="ml-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-6 w-6 fill-white"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </button>
              </div>
              <div
                className={`absolute -bottom-60 rounded-lg ${hoverType ? "block" : "hidden"} bg-slate-900`}
              >
                <ul className="mx-5 my-2">
                  <li className="my-1 py-1 text-lg font-medium text-white hover:text-red-500">
                    <button
                      onClick={() => setType("all")}
                      className={`${type === "all" ? "text-red-500" : ""}`}
                    >
                      All {"(" + person?.combined_credits?.cast?.length + ")"}
                    </button>
                  </li>
                  <li className="my-1 py-1 text-lg font-medium text-white hover:text-red-500">
                    <button
                      onClick={() => setType("movie")}
                      className={`${type === "movie" ? "text-red-500" : ""}`}
                    >
                      Movies{" "}
                      {"(" +
                        person?.combined_credits?.cast?.filter(
                          (item) => item.media_type === "movie",
                        ).length +
                        ")"}
                    </button>
                  </li>
                  <li className="my-1 py-1 text-lg font-medium text-white hover:text-red-500">
                    <button
                      onClick={() => setType("tv")}
                      className={`${type === "tv" ? "text-red-500" : ""}`}
                    >
                      TV Shows{" "}
                      {"(" +
                        person?.combined_credits?.cast?.filter(
                          (item) => item.media_type === "tv",
                        ).length +
                        ")"}
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="group flex items-end"
              onMouseOver={() => setHoverDepartment(true)}
              onMouseLeave={() => setHoverDepartment("")}
            >
              <div className="group mx-10 py-5">
                <button className="flex items-center text-2xl text-white">
                  Department
                  <span className="ml-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-6 w-6 fill-white"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </button>
              </div>
              <div
                className={`absolute -bottom-[380px] right-[750px]  rounded-lg ${hoverDepartment ? "block" : "hidden"} bg-slate-900`}
              >
                <ul className="mx-5 my-2">
                  <li
                    className={`text-md mt-1 px-2 py-1 font-medium text-white `}
                  >
                    <button
                      className={` ${dep === "all" ? "text-red-500" : "text-white"} hover:text-red-500`}
                      onClick={() => setDepartment("all")}
                    >
                      All
                    </button>
                  </li>
                  {[
                    ...new Set(
                      person?.combined_credits?.crew
                        ?.sort((a, b) =>
                          a.department.localeCompare(b.department),
                        )
                        .map((crew) => crew.department),
                    ),
                  ].map((department, i) => (
                    <li
                      key={i}
                      className="text-md mt-1 px-2 py-2 font-medium text-white "
                    >
                      <button
                        className={`${dep === department ? "text-red-500" : "text-white"} hover:text-red-500`}
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
          <div className="">
            <div className="h-fit ">
              {cast?.map((data, i) => {
                const children = [];
                data[Object.keys(data)].forEach((item) => {
                  children.push(
                    <MovieCredit
                      key={i}
                      id={item.id}
                      poster_path={item.poster_path}
                      title={item.title || item.name}
                      overview={item.overview}
                      vote_average={item.vote_average}
                      episode_count={item.episode_count}
                      character={item.character}
                      media_type={item.media_type}
                      release_date={item.release_date || item.first_air_date}
                      original_name={item.original_name}
                      first_air_date={item.first_air_date}
                    ></MovieCredit>,
                  );
                });

                return (
                  <div key={i} className="my-5">
                    <p className="mx-10 h-fit w-fit text-4xl font-medium text-white">
                      {Object.keys(data)}
                    </p>
                    <div className="mx-10 grid w-fit grid-cols-6 gap-y-5 py-5">
                      {children}
                    </div>
                  </div>
                );
              })}
            </div>

            <ReactPaginate
              className="my-14 flex justify-center gap-14 text-white "
              pageCount={Math.ceil(length?.length / perPage)}
              pageRangeDisplayed={5}
              marginPagesDisplayed={1}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              activeClassName={"active"}
              previousLabel={"Previous"}
              nextLabel={"Next"}
            ></ReactPaginate>
          </div>
        </section>
      </div>
    </>
  );
};

const getYear = (cast) => {
  const groupByYear = {};
  for (let i = 0; i < cast?.length; i++) {
    const year =
      new Date(cast[i].release_date).getFullYear() ||
      new Date(cast[i].first_air_date).getFullYear();

    if (!groupByYear[year]) {
      groupByYear[year] = [];
    }
    groupByYear[year].push(cast[i]);
  }

  const sortedYears = Object.keys(groupByYear).sort((a, b) => b - a);
  const cast_movies = [];
  for (const year of sortedYears) {
    let isNullYear = year === "NaN" ? "Unknown" : year;
    cast_movies.push({ [isNullYear]: groupByYear[year] });
  }

  return cast_movies;
};

export default PersonContent;
