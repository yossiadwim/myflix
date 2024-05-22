import { useState } from "react";
import KnowFor from "./KnownFor";

/* eslint-disable react/prop-types */
const Person = ({ person }) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <>
      <div className="container flex">
        <div className="w-1/5">
          {person?.profile_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${person?.profile_path}`}
              alt="person"
              className="rounded-lg"
            />
          ) : (
            <img
              src="/img/white.png"
              alt="person"
              className="h-96 w-[500px] rounded-lg"
            />
          )}
        </div>
        <div className="h-[750px] w-4/5 overflow-x-hidden">
          <div className="mx-10">
            <h1 className="text-4xl font-bold text-white">{person.name}</h1>
            <p className="mb-3 mt-10 text-2xl font-medium text-white">
              Biography
            </p>
            <div className="text-lg font-medium text-white">
              {showMore ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: person.biography?.replace(/\n/g, "<br/>"),
                  }}
                />
              ) : person.biography?.length > 0 ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      person.biography
                        ?.substring(0, 450)
                        .replace(/\n/g, "<br/>") + "...",
                  }}
                />
              ) : (
                <p className="text-white ">
                  We dont have a biography for {person.name}.
                </p>
              )}
            </div>

            <div className="flex justify-end ">
              {person.biography?.length !== null && (
                <button
                  className="mt-3 font-medium text-red-500 hover:text-red-800"
                  onClick={() => setShowMore(!showMore)}
                >
                  {showMore ? "Read less" : "Read more"}
                </button>
              )}
            </div>

            <p className="mx-6 mt-5 text-2xl font-medium text-white">
              Known for
            </p>
            <div className="overflow-y-hidden">
              <div className="custom-scrollbar bg-transparent">
                <div className="mx-5 my-5 flex h-fit w-fit flex-row ">
                  {person?.combined_credits?.cast
                    ?.sort((a, b) => b.popularity - a.popularity)
                    .filter((movie) => movie.media_type === "movie")
                    .slice(0, 20)
                    .map((movie, i) => {
                      return (
                        <KnowFor
                          key={i}
                          id={movie.id}
                          poster_path={movie.poster_path}
                          title={movie.title}
                          overview={movie.overview}
                          character={movie.character}
                          vote_average={movie.vote_average}
                          media_type={movie.media_type}
                          release_date={movie.release_date}
                          original_name={movie.original_name}
                          first_air_date={movie.first_air_date}
                        ></KnowFor>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Person;
