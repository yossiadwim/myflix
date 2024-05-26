/* eslint-disable react/prop-types */
import { useState } from "react";
import CardBackdrop from "./CardBackdrop";

const Content = ({ data, languages }) => {
  const [typeLanguage, setTypeLanguage] = useState("No Language");

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
      <div className="container flex pb-36 pt-[900px]">
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
                            (language) =>
                              language.iso_639_1 === image.iso_639_1,
                          )?.english_name
                        : "No Language",
                    ),
                ),
              ].map((type, i) => {
                return (
                  <li key={i}>
                    <button
                      className={`text-md flex w-full mt-2 justify-items-start px-5 py-2 hover:rounded-lg hover:bg-slate-900 hover:text-red-500 ${typeLanguage === type ? "rounded-lg bg-slate-900 text-red-500" : "text-white"}`}
                      onClick={() => setTypeLanguage(type)}
                    >
                      {type} (
                      {
                        data?.images?.backdrops?.filter(
                          (image) =>
                            languages?.find((language) =>
                              image?.iso_639_1 === null
                                ? "No Language"
                                : language.iso_639_1 === image.iso_639_1,
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
            {backdropImage?.map((backdrop, i) => {
              return (
                <>
                  <CardBackdrop key={i} {...backdrop}></CardBackdrop>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
