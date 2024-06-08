/* eslint-disable react/prop-types */
import CardVideos from "./CardVideos";
import { useState } from "react";

const ContentMediaVideos = ({ data, state }) => {
  const [typeVideo, setTypeVideo] = useState("all");
  const [showMore, setShowMore] = useState(false);

  const videos = data?.videos?.results?.filter((video) => {
    if (typeVideo === "all") {
      return video;
    } else {
      return video.type === typeVideo;
    }
  });

  return (
    <>
      <div className="w-1/6">
        <div className="rounded-t-lg bg-black">
          <p className="px-5 py-5 text-xl text-white">Videos</p>
        </div>
        <div className="rounded-b-lg bg-black ">
          <ul>
            <li>
              <button
                className={`text-md px-5 py-3  ${typeVideo === "all" ? "text-red-500" : "text-white"}`}
                onClick={() => setTypeVideo("all")}
              >
                All ({data?.videos?.results?.length})
              </button>
            </li>
            {[
              ...new Set(data?.videos?.results?.map((video) => video.type)),
            ].map((type, i) => {
              return (
                <li key={i}>
                  <button
                    className={`text-md px-5 py-3  hover:text-red-500 ${typeVideo === type ? "text-red-500" : "text-white"}`}
                    onClick={() => setTypeVideo(type)}
                  >
                    {type} (
                    {
                      data?.videos?.results?.filter(
                        (video) => video.type === type,
                      )?.length
                    }
                    )
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="w-5/6">
        <div className="grid w-fit grid-cols-3 gap-y-10 ">
          {showMore
            ? videos?.map((video, i) => {
                return (
                  <>
                    <CardVideos
                      key={i}
                      video_key={video.key}
                      name={video.name}
                      state={state}
                      {...video}
                    ></CardVideos>
                  </>
                );
              })
            : videos?.slice(0, 12).map((video, i) => {
                return (
                  <>
                    <CardVideos
                      key={i}
                      video_key={video.key}
                      name={video.name}
                      state={state}
                      {...video}
                    ></CardVideos>
                  </>
                );
              })}
        </div>
        {videos?.length > 12 && (
          <div className="mt-20 flex items-center justify-center">
            <button
              className="w-fit rounded-lg border px-3 py-3 text-white hover:border-red-500 hover:bg-red-500"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default ContentMediaVideos;
