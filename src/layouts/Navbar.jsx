import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  window.onscroll = function () {
    const navbar = document.querySelector("header");
    if (window.scrollY > 10) {
      navbar.classList.add("backdrop-blur-sm");
    } else {
      navbar.classList.remove("backdrop-blur-sm");
    }
  };

  const [hover, setHover] = useState("");

  return (
    <header className="fixed left-0 top-0 z-[999] flex w-full items-center bg-transparent shadow-sm">
      <div className="container">
        <div className=" relative flex items-center">
          <div className="mx-16">
            <a href="/">
              <img
                className="block hover:opacity-75 w-40 "
                src="/img/m.png"
                alt=""
              />
            </a>
          </div>
          <div className="flex w-full items-center">
            <nav
              id="nav-menu"
              className="right4 absolute top-full  hidden w-full max-w-[250] rounded-lg py-5 shadow-lg lg:static lg:block lg:max-w-full lg:rounded-none lg:shadow-none"
            >
              <ul className="block lg:flex">
                <li className="group">
                  <a
                    href="#hero"
                    className="mx-8 flex py-2 text-base font-bold text-white group-hover:text-red-500"
                    onMouseMove={() => setHover("movie")}
                    onMouseOut={() => setHover("")}
                  >
                    Movie
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#about"
                    className="mx-8 flex py-2 text-base font-bold text-white group-hover:text-red-500"
                    onMouseOver={() => setHover("tv")}
                    onMouseOut={() => setHover("")}
                  >
                    TV Shows
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#portofolio"
                    className="mx-8 flex py-2 text-base font-bold text-white group-hover:text-red-500"
                    onMouseMove={() => setHover("people")}
                    onMouseOut={() => setHover("")}
                  >
                    People
                  </a>
                </li>
              </ul>
            </nav>
            <div
              id="movie-menu"
              className={`absolute top-16 mx-1 ${hover === "movie" ? "block" : "hidden"} rounded-lg bg-slate-900`}
              onMouseMove={() => setHover("movie")}
              onMouseOut={() => setHover("")}
            >
              <ul className="mx-5 my-2">
                <li className="py-2 font-medium text-white hover:text-red-500">
                  <Link to="/movie/popular">Popular</Link>
                </li>
                <li className="py-2 font-medium text-white hover:text-red-500">
                  Top Rated
                </li>
                <li className="py-2 font-medium text-white hover:text-red-500">
                  Now Playing
                </li>
                <li className="py-2 font-medium text-white hover:text-red-500">
                  Trending
                </li>
                <li className="py-2 font-medium text-white hover:text-red-500">
                  Upcoming
                </li>
              </ul>
            </div>
            <div
              id="tv-menu"
              className={`absolute top-16 mx-1 ml-28 ${hover === "tv" ? "block" : "hidden"} rounded-lg bg-slate-900`}
              onMouseMove={() => setHover("tv")}
              onMouseOut={() => setHover("")}
            >
              <ul className="mx-5 my-2">
                <li className="py-2 font-medium text-white hover:text-red-500">
                  Popular
                </li>
                <li className="py-2 font-medium text-white hover:text-red-500">
                  Top Rated
                </li>
                <li className="py-2 font-medium text-white hover:text-red-500">
                  Airing Today
                </li>
                <li className="py-2 font-medium text-white hover:text-red-500">
                  On The Air
                </li>
              </ul>
            </div>
            <div
              id="people-menu"
              className={`absolute top-16 mx-1 ml-60 ${hover === "people" ? "block" : "hidden"} rounded-lg bg-slate-900`}
              onMouseMove={() => setHover("people")}
              onMouseOut={() => setHover("")}
            >
              <ul className="mx-5 my-2">
                <li className="py-2 font-medium text-white hover:text-red-500">
                  Popular People
                </li>
              </ul>
            </div>
          </div>
          <div className="">
            <span className="absolute inset-y-0 flex items-center pl-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6  fill-white "
              >
                <path
                  fillRule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search"
              name="search"
              className="rounded-full border-2 bg-transparent p-2 pl-10 pr-3 text-white placeholder:text-white focus:border-red-500 focus:outline-none"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
