/* eslint-disable react/prop-types */
import { useState } from "react";
import CardBackdrop from "./CardBackdrop";

const ContentMediaBackdrops = ({ data, languages }) => {
  const [typeLanguage, setTypeLanguage] = useState("No Language");
  const [showMore, setShowMore] = useState(false);

  const backdropImage =
    typeLanguage === "No Language"
      ? data?.images?.backdrops?.filter((image) => image.iso_639_1 === null)
      : data?.images?.backdrops?.filter(
          (image) =>
            languages?.find(
              (language) => language.iso_639_1 === image.iso_639_1,
            )?.english_name === typeLanguage,
        );

  return (
    <>
      <div className="w-1/6">
        <div className="rounded-t-lg bg-black">
          <p className="px-5 py-5 text-xl text-white">Backdrops</p>
        </div>
        <div className="rounded-b-lg bg-black ">
          <ul>
            {[
              ...new Set(
                data?.images?.backdrops
                  ?.sort((a, b) =>
                    languages
                      ?.find((language) => language.iso_639_1 === a.iso_639_1)
                      ?.english_name.localeCompare(
                        languages?.find(
                          (language) => language.iso_639_1 === b.iso_639_1,
                        )?.english_name,
                      ),
                  )
                  ?.map((image) =>
                    image.iso_639_1
                      ? languages?.find(
                          (language) => language.iso_639_1 === image.iso_639_1,
                        )?.english_name
                      : "No Language",
                  ),
              ),
            ].map((type, i) => {
              return (
                <li key={i}>
                  <button
                    className={`text-md mt-2 flex w-full justify-items-start px-5 py-2
                     hover:rounded-lg hover:bg-slate-900 hover:text-red-500 ${typeLanguage === type ? "rounded-lg bg-slate-900 text-red-500" : "text-white"}`}
                    onClick={() => setTypeLanguage(type)}
                  >
                    {type} (
                    {
                      data?.images?.backdrops?.filter(
                        (image) =>
                          languages?.find((language) =>
                            image?.iso_639_1 === null
                              ? language?.iso_639_1 === "xx"
                              : language?.iso_639_1 === image?.iso_639_1,
                          )?.english_name === type,
                      ).length
                    }
                    )
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="mx-5 w-5/6">
        <div className="grid w-fit grid-cols-3 gap-x-5">
          {showMore
            ? backdropImage?.map((backdrop, i) => {
                return (
                  <>
                    <CardBackdrop key={i} {...backdrop}></CardBackdrop>
                  </>
                );
              })
            : backdropImage?.slice(0, 12).map((backdrop, i) => {
                return (
                  <>
                    <CardBackdrop key={i} {...backdrop}></CardBackdrop>
                  </>
                );
              })}
        </div>
        {backdropImage?.length > 12 && (
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

export default ContentMediaBackdrops;
