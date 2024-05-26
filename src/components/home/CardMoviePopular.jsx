/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const CardMoviePopular = (props) => {
  const { id, title, poster_path, release_date, vote_average, backdrop_path, state } =
    props;
  // eslint-disable-next-line no-undef
  const baseImgURL = process.env.REACT_APP_BASEIMGURL;


  function hoverBackground(backdrop_path) {
    const element = document.getElementById("movie");
    const img = `https://image.tmdb.org/t/p/original${backdrop_path}`;
    element.style.backgroundImage = `url(${img})`;
  }

  function offHoverBackground() {
    const element = document.getElementById("movie");
    element.style.backgroundImage = ``;
    element.style.backgroundColor = 'black';

  }

  return (
    <div className="mx-3 my-5 mt-7 h-20 w-56 transition delay-150 duration-300 ease-in-out hover:-translate-y-1  hover:scale-105">
      <Link to={`/${state}/${id}-${ 
        title.toLowerCase().replace(/:/g, '').replace(/ /g, '-')
      }`} state={state}>
        <img
          className="h-80 w-full rounded-lg"
          src={`${baseImgURL}${poster_path}`}
          alt=""
          loading="lazy"
          onMouseOver={() => hoverBackground(backdrop_path)}
          onMouseOut={()=> offHoverBackground()}
        />
      </Link>

      <h3 className="mt-1 text-lg font-bold text-white">{title}</h3>
      <div className="flex items-center justify-between py-5">
        <p className="mt-1 text-white">
          {new Date(release_date).toLocaleString("en-us", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>
        <div className="flex items-center">
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
            {Math.round(vote_average * 10) / 10}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardMoviePopular;
