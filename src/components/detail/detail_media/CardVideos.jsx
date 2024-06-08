/* eslint-disable react/prop-types */
import { useState } from "react";

const CardVideos = ({ video_key, name, id }) => {
  const [hidden, setHidden] = useState(true);

  return (
    <>
      <div className="">
        <div
          className=" mx-5 flex h-60 w-80 items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: `url(https://i.ytimg.com/vi/${video_key}/hqdefault.jpg)`,
          }}
        >
          <div className="flex items-center justify-center">
            <button
              className="rounded-full bg-black px-2 py-2"
              onClick={() => setHidden(false)}
            >
              <span className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-10 fill-white hover:fill-red-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
        <p className="text-center text-white">{name}</p>
      </div>

      <div
        className={`fixed left-0 top-0 z-[999] ${hidden ? "hidden" : "flex"} h-full w-full `}
      >
        <div className="flex h-full w-full items-center justify-center">
          <div className="h-fit w-[1000px] rounded-lg bg-black">
            <div className="mx-5 flex justify-between">
              <p className="px-2 py-3 text-3xl font-bold text-white">{name}</p>
              <button
                className=""
                onClick={() => {
                  setHidden(true);
                  document.getElementById(`video-${id}`).src = "";
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 fill-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <iframe
              className="h-[600px] w-full"
              id={`video-${id}`}
              src={`https://www.youtube.com/embed/${video_key}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardVideos;
