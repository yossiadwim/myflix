import { useEffect, useState } from "react";

import { getMoviesNowPlaying, getDetailMovies } from "../../axios/api";
import Navbar from "../../layouts/Navbar";
import { Link } from "react-router-dom";

const Carousel = () => {
  const [movies, setMovies] = useState([]);
  const [logo, setLogo] = useState();

  useEffect(() => {
    getMoviesNowPlaying().then(async (data) => {
      const randomMovie = await data[Math.floor(Math.random() * data.length)];
      setMovies(randomMovie);

      getDetailMovies(randomMovie.id).then(async (data) => {
        const logo = await data?.images?.logos?.filter(
          (item) => item.iso_639_1 === "en",
        )[0].file_path;
        setLogo(logo);
      });
    });
  }, []);

  return (
    // eslint-disable-next-line no-undef
    <>
      <Navbar></Navbar>
      <div className="h-[650px] w-full object-cover">
        <div className="" >
          <img
            className="absolute inset-0 h-screen w-screen object-cover "
            src={`https://image.tmdb.org/t/p/original${movies.backdrop_path}`}
            alt=""
          />
        </div>

        <div className="absolute h-full w-full bg-opacity-100 bg-gradient-to-b from-transparent to-black">
          <div className="mx-36 mt-20 w-2/5 pb-20 pt-20">
            <img
              src={`https://image.tmdb.org/t/p/w500${logo}`}
              className="w-80"
              alt=""
            />
            {/* <p className="mt-5 font-sans text-6xl font-bold text-white">
              {movies.title}
            </p> */}
            <div className="flex">
              <p className="mr-2 mt-10 text-xl font-medium text-white">
                {new Date(movies.release_date).toLocaleString("en-us", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}{" "}
              </p>
              <p className="mt-10 text-xl font-medium text-white">
                Popularity ({movies.popularity})
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
                {Math.round(movies.vote_average * 10) / 10} ({movies.vote_count}{" "}
                vote )
              </p>
            </div>
            <div className="mt-5 ">
              <p className="font-sans text-xl leading-relaxed tracking-normal text-white">
                {movies.overview}
              </p>
            </div>
            <div className="my-10 ">
              <Link
                to={`/details/${movies.id}-${movies?.title?.toLowerCase().replace(/:/g, "").replace(/ /g, "-")}`}
                state={"movie"}
              >
                <button className="rounded-xl border px-10 py-4 font-semibold text-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:border-red-500 hover:bg-red-500 hover:text-slate-200 ">
                  Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
