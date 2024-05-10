/* eslint-disable react/prop-types */
import CardCast from "../detail/cast/CardCast";

// eslint-disable-next-line react/prop-types
const Cast = ({ cast, cast_tv, state }) => {
  return (
    <>
      <div className="container flex items-end justify-between">
        <h1 className="mr-10 text-4xl font-medium text-white">Cast/Crew</h1>
        <button className="text-2xl font-medium text-white hover:text-red-500">
          Full Cast & Crew
        </button>
      </div>
      <div className="container mt-5 overflow-x-auto overflow-y-hidden border-t-2 border-gray-900">
        <div className="w-3/5">
          <div className="flex h-[400px] min-w-fit flex-row">
            {state === "movie"
              ? cast?.cast?.slice(0, 15).map((cast, i) => {
                  return (
                    <CardCast
                      key={i}
                      id={cast.id}
                      name={cast.name}
                      character={cast.character}
                      profile_path={cast.profile_path}
                      state={"movie"}
                    ></CardCast>
                  );
                })
              : null}

            {state == "tv" && cast_tv?.cast?.length == 0
              ? cast_tv?.crew?.slice(0, 15).map((crew, i) => {
                  return (
                    <CardCast
                      key={i}
                      id={crew.id}
                      name={crew.name}
                      character={crew.character}
                      profile_path={crew.profile_path}
                      state={"tv"}
                    ></CardCast>
                  );
                })
              : cast_tv?.cast?.slice(0, 15).map((cast, i) => {
                  return (
                    <CardCast
                      key={i}
                      id={cast.id}
                      name={cast.name}
                      character={cast.character}
                      profile_path={cast.profile_path}
                      state={"tv"}
                    ></CardCast>
                  );
                })}

            {state === "movie" && cast?.cast?.length > 5 ? (
              <div className="my-10 mr-5 flex h-56 w-40 justify-center">
                <div className="flex items-center justify-center ">
                  <div className="group inline-flex">
                    <a
                      href=""
                      className="text-md mx-1 font-medium text-white group-hover:text-red-500"
                    >
                      View More
                    </a>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#ffffff"
                        className="h-6 w-6 group-hover:fill-red-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            ) : state === "tv" && cast_tv?.cast?.length > 5 ? (
              <div className="my-10 mr-5 flex h-56 w-40 justify-center">
                <div className="flex items-center justify-center ">
                  <div className="group inline-flex">
                    <a
                      href=""
                      className="text-md mx-1 font-medium text-white group-hover:text-red-500"
                    >
                      View More
                    </a>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#ffffff"
                        className="h-6 w-6 group-hover:fill-red-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cast;
