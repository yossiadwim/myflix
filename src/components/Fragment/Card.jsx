/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const Card = ({ data, state }) => {

  // eslint-disable-next-line no-undef
  const baseImgURL = process.env.REACT_APP_BASEIMGURL;
  function hoverBackground(backdrop_path, state) {
    const elementId = state === "movie" ? "movies" : "tv";
    const element = document.getElementById(elementId);
    const img = `https://image.tmdb.org/t/p/original${backdrop_path}`;
    element.style.backgroundImage = `url(${img})`;
  }

  return (
    <div className="mx-3 my-5 mt-7 h-20 w-56 transition delay-150 duration-300 ease-in-out hover:-translate-y-1  hover:scale-105">
      <Link
        to={`/${state}/${data?.id}-${(
          data?.title ||
          data?.name ||
          ""
        )
          .toLowerCase()
          .replace(/:/g, "")
          .replace(/ /g, "-")}`}
      >
        <div
          className="h-80 w-full rounded-lg bg-white opacity-80 hover:opacity-100"
          style={{
            backgroundImage: `url(${data?.poster_path ? `${baseImgURL}${data?.poster_path}` : ""})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          alt=""
          loading="lazy"
          onMouseOver={() => hoverBackground(data?.backdrop_path, state)}
        />
      </Link>

      <h3 className="mt-1 text-base font-bold text-white">
        {data?.title || data?.name}
      </h3>
      <div className="flex items-center justify-between py-5">
        <p className="mt-1 text-sm text-white">
          {data?.release_date || data?.first_air_date
            ? new Date(
                data?.release_date || data?.first_air_date,
              ).toLocaleString("en-us", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })
            : ""}
        </p>
        <div className="flex items-center">
          <span className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#fbbf24"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke=""
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
          </span>
          <p className="font-sans text-sm text-white">
            {Math.round(data?.vote_average * 10) / 10}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
