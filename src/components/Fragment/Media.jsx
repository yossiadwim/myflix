/* eslint-disable react/prop-types */
import { useState } from "react";
import CardVideos from "../detail/media/videos/CardVideos";
import CardBackdrops from "../detail/media/backdrops/CardBackdrops";
import CardPosters from "../detail/media/posters/CardPosters";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Media = ({ data, state }) => {
  const [active, setActive] = useState("videos");


  return (
    <>
      {
        <div className="flex items-end  justify-between">
          <div className="flex items-end ">
            <h1 className="mr-10 text-4xl font-medium text-white">Media</h1>
            <button
              className={`mr-5 text-2xl font-medium  hover:text-red-500 ${
                active === "videos" ? "text-red-500" : "text-white"
              }`}
              onClick={() => setActive("videos")}
            >
              Videos ({data?.videos?.results?.length})
            </button>
            <button
              className={`mr-5 text-2xl font-medium  hover:text-red-500 ${
                active === "backdrops" ? "text-red-500" : "text-white"
              }`}
              onClick={() => setActive("backdrops")}
            >
              Backdrops ({data?.images?.backdrops?.length})
            </button>
            <button
              className={`mr-5 text-2xl font-medium hover:text-red-500 ${
                active === "posters" ? "text-red-500" : "text-white"
              }`}
              onClick={() => setActive("posters")}
            >
              Posters ({data?.images?.posters?.length})
            </button>
          </div>
          <div className="items-end">
            <Link
              to={
                data?.title
                  ? `/${state}/${data?.id}-${data?.title?.toLowerCase().replace(/:/g, "").replace(/ /g, "-")}/${active}`
                  : `/${state}/${data?.id}-${data?.name?.toLowerCase().replace(/:/g, "").replace(/ /g, "-")}/${active}`
              }
            state={state}>
              <p className="text-white hover:text-red-500">
                {active === "videos"
                  ? "View All Videos"
                  : active === "backdrops"
                    ? "View All Backdrops"
                    : active === "posters"
                      ? "View All Posters"
                      : ""}
              </p>
            </Link>
          </div>
        </div>
      }

      {active === "videos" ? (
        <div className="container mt-2 overflow-x-auto overflow-y-hidden border-t-2 border-gray-900">
          <div className="w-3/5">
            <div className="flex h-[250px] min-w-fit">
              {data?.videos?.results?.length > 0 &&
                data?.videos?.results
                  ?.sort((a, b) =>
                    (a.name || a.title).localeCompare(b.name || b.title),
                  )
                  .map((video, i) => (
                    <CardVideos
                      key={i}
                      video_key={video.key}
                      name={video.name}
                      id={video.id}
                    />
                  ))}
            </div>
          </div>
        </div>
      ) : null}

      {active === "backdrops" ? (
        <div className="container mt-2 overflow-x-auto overflow-y-hidden border-t-2 border-gray-900">
          <div className="w-3/5">
            <div className="flex h-[300px] min-w-fit">
              {data?.images?.backdrops?.length > 0 &&
                data?.images?.backdrops
                  .slice(0, 10)
                  .sort((a, b) => a.vote_average - b.vote_average)
                  .map((backdrop, i) => (
                    <CardBackdrops key={i} file_path={backdrop.file_path} />
                  ))}
            </div>
          </div>
        </div>
      ) : null}

      {active === "posters" ? (
        <div className="container mt-2 overflow-x-auto overflow-y-hidden border-t-2 border-gray-900">
          <div className="w-3/5">
            <div className="flex h-[300px] min-w-fit">
              {data?.images?.posters?.length > 0 &&
                data?.images?.posters
                  .slice(0, 10)
                  .sort((a, b) => a.vote_average - b.vote_average)
                  .map((poster, i) => (
                    <CardPosters key={i} file_path={poster.file_path} />
                  ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
export default Media;
