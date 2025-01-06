import { useState } from "react";
import { Form } from "react-router-dom";
import { Dropdown } from "flowbite-react";
import { HiCog, HiCurrencyDollar, HiLogout, HiViewGrid } from "react-icons/hi";

const Navbar = () => {
  window.onscroll = function () {
    const navbar = document.querySelector("header");
    if (window.scrollY > 10) {
      navbar.classList.add("backdrop-blur-sm");
    } else {
      navbar.classList.remove("backdrop-blur-sm");
    }
  };

  const [query, setQuery] = useState("");

  const menu_movie = [
    { id: "trending", label: "Trending" },
    { id: "popular", label: "Popular" },
    { id: "toprated", label: "Top Rated" },
    { id: "nowplaying", label: "Now Playing" },
    { id: "upcoming", label: "Upcoming" },
  ];

  const menu_tv = ["Popular", "Top Rated", "Airing Today", "On The Air"];

  return (
    <header className="fixed left-0 top-0 z-[999] flex w-full items-center bg-transparent shadow-sm">
      <div className="container ">
        <div className=" relative flex items-center">
          <div className="mx-16">
            <a href="/">
              <img
                className="block w-40 hover:opacity-75 "
                src="/img/m.png"
                alt=""
              />
            </a>
          </div>
          <div className="flex w-full items-center">
            <div className="mr-5 font-semibold text-white">
              <Dropdown
                label="Movies"
                inline
                className="border-none bg-slate-900"
              >
                {menu_movie.map((item) => (
                  <Dropdown.Item
                    key={item.id}
                    className=" text-white hover:bg-slate-900 hover:text-red-500"
                    href={`/movies/${item.id}`}
                  >
                    {item.label}
                  </Dropdown.Item>
                ))}
              </Dropdown>
            </div>

            <div className="mr-5 font-semibold text-white">
              <Dropdown
                label="TV Shows"
                inline
                className="border-none bg-slate-900"
              >
                {menu_tv.map((item, index) => (
                  <Dropdown.Item
                    key={index}
                    className="text-white hover:bg-slate-900 hover:text-red-500"
                  
                  >
                    {item}
                  </Dropdown.Item>
                ))}
              </Dropdown>
            </div>

            <div className="font-semibold text-white">
              <Dropdown
                label="People"
                inline
                className="border-none bg-slate-900"
              >
                <Dropdown.Item className="text-white hover:bg-slate-900 hover:text-red-500">
                  Popular People
                </Dropdown.Item>
              </Dropdown>
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
            <Form action="/search">
              <input
                type="text"
                placeholder="Search"
                name="query"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="rounded-full border-2 border-white  bg-transparent p-2 pl-10 pr-3 text-white placeholder:text-white focus:border-red-500 focus:outline-none focus:ring-transparent"
              />
            </Form>
          </div>
          <div className="ml-5 text-white">
            <Dropdown
              label="Account"
              inline
              className="border-none bg-slate-900"
            >
              <Dropdown.Item
                className="text-white hover:bg-slate-900 hover:text-red-500"
                icon={HiViewGrid}
              >
                Dashboard
              </Dropdown.Item>
              <Dropdown.Item
                className="text-white hover:bg-slate-900 hover:text-red-500"
                icon={HiCog}
              >
                Settings
              </Dropdown.Item>
              <Dropdown.Item
                className="text-white hover:bg-slate-900 hover:text-red-500"
                icon={HiCurrencyDollar}
              >
                Earnings
              </Dropdown.Item>
              <Dropdown.Item
                className="text-white hover:bg-slate-900 hover:text-red-500"
                icon={HiLogout}
              >
                Sign out
              </Dropdown.Item>
            </Dropdown>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
