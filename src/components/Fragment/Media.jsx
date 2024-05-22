/* eslint-disable react/prop-types */
import { useState } from "react";
import CardVideos from "../detail/media/videos/CardVideos";
import CardBackdrops from "../detail/media/backdrops/CardBackdrops";
import CardPosters from "../detail/media/posters/CardPosters";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Media = ({
  movie,
  video,
  backdrops,
  posters,
  state,
  videos_tv,
  posters_tv,
  backdrops_tv,
}) => {
  const [active, setActive] = useState("videos");

  return (
    <>
      {state === "movie" ? (
        <div className="flex items-end  justify-between">
          <div className="flex items-end ">
            <h1 className="mr-10 text-4xl font-medium text-white">Media</h1>
            <button
              className={`mr-5 text-2xl font-medium  hover:text-red-500 ${
                active === "videos" ? "text-red-500" : "text-white"
              }`}
              onClick={() => setActive("videos")}
            >
              Videos ({video?.results?.length})
            </button>
            <button
              className={`mr-5 text-2xl font-medium  hover:text-red-500 ${
                active === "backdrops" ? "text-red-500" : "text-white"
              }`}
              onClick={() => setActive("backdrops")}
            >
              Backdrops ({backdrops?.backdrops?.length})
            </button>
            <button
              className={`mr-5 text-2xl font-medium hover:text-red-500 ${
                active === "posters" ? "text-red-500" : "text-white"
              }`}
              onClick={() => setActive("posters")}
            >
              Posters ({posters?.posters?.length})
            </button>
          </div>
          <div className="items-end">
            <Link
              to={`/movies/${movie?.id}-${movie?.title?.toLowerCase().replace(/:/g, "").replace(/ /g, "-")}/videos`}
              state={state}
            >
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
      ) : state === "tv" ? (
        <div className="flex items-end  justify-between">
          <div className="flex items-end ">
            <h1 className="mr-10 text-4xl font-medium text-white">Media</h1>
            <button
              className={`mr-5 text-2xl font-medium  hover:text-red-500 ${
                active === "videos" ? "text-red-500" : "text-white"
              }`}
              onClick={() => setActive("videos")}
            >
              Videos ({videos_tv?.results?.length})
            </button>
            <button
              className={`mr-5 text-2xl font-medium  hover:text-red-500 ${
                active === "backdrops" ? "text-red-500" : "text-white"
              }`}
              onClick={() => setActive("backdrops")}
            >
              Backdrops ({backdrops_tv?.length})
            </button>
            <button
              className={`mr-5 text-2xl font-medium hover:text-red-500 ${
                active === "posters" ? "text-red-500" : "text-white"
              }`}
              onClick={() => setActive("posters")}
            >
              Posters ({posters_tv?.length})
            </button>
          </div>
          <div className="items-end">
            <p className="text-white">
              {active === "videos"
                ? "View All Videos"
                : active === "backdrops"
                  ? "View All Backdrops"
                  : active === "posters"
                    ? "View All Posters"
                    : ""}
            </p>
          </div>
        </div>
      ) : null}

      {state === "movie" ? (
        active === "videos" ? (
          <div className="container mt-2 overflow-x-auto overflow-y-hidden border-t-2 border-gray-900">
            <div className="w-3/5">
              <div className="flex h-[250px] min-w-fit">
                {video?.results?.length > 0 &&
                  video.results
                    .slice(0, 10)
                    .filter(
                      (video) =>
                        video.type === "Trailer" ||
                        video.type === "Teaser" ||
                        video.type === "Clip",
                    )
                    .sort((a, b) =>
                      (a.name || a.title).localeCompare(b.name || b.title),
                    )
                    .map((video, i) => (
                      <CardVideos key={i} video_key={video.key} />
                    ))}
              </div>
            </div>
          </div>
        ) : null
      ) : state === "tv" ? (
        active === "videos" ? (
          <div className="container mt-2 overflow-x-auto overflow-y-hidden border-t-2 border-gray-900">
            <div className="w-3/5">
              <div className="flex h-[250px] min-w-fit">
                {videos_tv?.results?.length > 0 &&
                  videos_tv.results
                    .slice(0, 10)
                    .filter(
                      (videos_tv) =>
                        videos_tv.type === "Trailer" ||
                        videos_tv.type === "Teaser" ||
                        videos_tv.type === "Clip",
                    )
                    .sort((a, b) =>
                      (a.name || a.title).localeCompare(b.name || b.title),
                    )
                    .map((video_tv, i) => (
                      <CardVideos key={i} video_key={video_tv.key} />
                    ))}
              </div>
            </div>
          </div>
        ) : null
      ) : null}

      {state === "movie" ? (
        active === "backdrops" ? (
          <div className="container mt-2 overflow-x-auto overflow-y-hidden border-t-2 border-gray-900">
            <div className="w-3/5">
              <div className="flex h-[300px] min-w-fit">
                {backdrops?.backdrops?.length > 0 &&
                  backdrops.backdrops
                    .slice(0, 10)
                    .sort((a, b) => a.vote_average - b.vote_average)
                    .map((backdrop, i) => (
                      <CardBackdrops key={i} file_path={backdrop.file_path} />
                    ))}
              </div>
            </div>
          </div>
        ) : null
      ) : state === "tv" ? (
        active === "backdrops" ? (
          <div className="container mt-2 overflow-x-auto overflow-y-hidden border-t-2 border-gray-900">
            <div className="w-3/5">
              <div className="flex h-[300px] min-w-fit">
                {backdrops_tv?.length > 0 &&
                  backdrops_tv
                    .slice(0, 10)
                    .sort((a, b) => a.vote_average - b.vote_average)
                    .map((backdrop, i) => (
                      <CardBackdrops key={i} file_path={backdrop.file_path} />
                    ))}
              </div>
            </div>
          </div>
        ) : null
      ) : null}

      {state === "movie" ? (
        active === "posters" ? (
          <div className="container mt-2 overflow-x-auto overflow-y-hidden border-t-2 border-gray-900">
            <div className="w-3/5">
              <div className="flex h-[300px] min-w-fit">
                {posters?.posters?.length > 0 &&
                  posters.posters
                    .slice(0, 10)
                    .sort((a, b) => a.vote_average - b.vote_average)
                    .map((poster, i) => (
                      <CardPosters key={i} file_path={poster.file_path} />
                    ))}
              </div>
            </div>
          </div>
        ) : null
      ) : state === "tv" ? (
        active === "posters" ? (
          <div className="container mt-2 overflow-x-auto overflow-y-hidden border-t-2 border-gray-900">
            <div className="w-3/5">
              <div className="flex h-[280px] min-w-fit">
                {posters_tv?.length > 0 &&
                  posters_tv
                    .slice(0, 10)
                    .sort((a, b) => a.vote_average - b.vote_average)
                    .map((poster, i) => (
                      <CardPosters key={i} file_path={poster.file_path} />
                    ))}
              </div>
            </div>
          </div>
        ) : null
      ) : null}
    </>
  );
};
export default Media;
