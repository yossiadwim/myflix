// import { useState } from "react";

const Navbar = () => {
  // const [isOpen, setIsOpen] = useState(true);

  // const toogleMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  window.onscroll = function() {
    const navbar = document.querySelector("header");
    if (window.scrollY > 10) {
      navbar.classList.add("backdrop-blur-sm");
    } else {
      navbar.classList.remove("backdrop-blur-sm");
    }
  };



  return (
    <header className="fixed left-0 top-0 flex w-full items-center bg-transparent shadow-sm z-[999]">
      <div className="container">
        <div className="relative flex items-center justify-between">
          <div className="">
            {/* <img className="block py-6" src="./img/tmdb.png" alt="" /> */}
          </div>
          <div className="flex items-center ">
            {/* <button className="text-white lg:hidden" onClick={toogleMenu}>
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ffffff"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#ffffff"
                  className="h-6 w-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
            {isOpen ? null : (
              <nav
                id="nav-menu"
                className="absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg lg:hidden"
              >
                <ul className="block">
                  <li className="group">
                    <a
                      href="#hero"
                      className="mx-8 flex py-2 text-base font-semibold text-black group-hover:text-teal-500"
                    >
                      Movie
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#about"
                      className="mx-8 flex py-2 text-base font-semibold text-black group-hover:text-teal-500"
                    >
                      TV Shows
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#portofolio"
                      className="mx-8 flex py-2 text-base font-semibold text-black group-hover:text-teal-500"
                    >
                      People
                    </a>
                  </li>
                </ul>
              </nav>
            )} */}

            <nav
              id="nav-menu"
              className="right4 absolute top-full  hidden w-full max-w-[250] rounded-lg py-5 shadow-lg lg:static lg:block lg:max-w-full lg:rounded-none lg:shadow-none"
            >
              <ul className="block lg:flex">
                <li className="group">
                  <a
                    href="#hero"
                    className="mx-8 flex py-2 text-base font-bold text-white group-hover:text-red-500"
                  >
                    Movie
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#about"
                    className="mx-8 flex py-2 text-base font-bold text-white group-hover:text-red-500"
                  >
                    TV Shows
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#portofolio"
                    className="mx-8 flex py-2 text-base font-bold text-white group-hover:text-red-500"
                  >
                    People
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
