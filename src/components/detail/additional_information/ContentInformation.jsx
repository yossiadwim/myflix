/* eslint-disable react/prop-types */
const ContentInformation = ({
  status,
  original_language,
  budget,
  revenue,
  keywords,
  tv,
  state,
}) => {
  if (state === "movie") {
    return (
      <>
        <div className="mx-12">
          <div className="mb-5">
            <h1 className="text-lg font-bold text-white">Status</h1>
            <p className="text-md text-white">{status}</p>
          </div>
          <div className="mb-5">
            <h1 className="text-lg font-bold text-white">Original Language</h1>
            <p className="text-md text-white">
              {original_language === "en" ? "English" : ""}
            </p>
          </div>
          <div className="mb-5">
            <h1 className="text-lg font-bold text-white">Budget</h1>
            <p className="text-md text-white">
              {Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(budget)}
            </p>
          </div>
          <div className="mb-10">
            <h1 className="text-lg font-bold text-white">Revenue</h1>
            <p className="text-md text-white">
              {Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(revenue)}
            </p>
          </div>
          <div className="">
            <h1 className="text-lg font-bold text-white">Keywords</h1>
            <div className="">
              {keywords?.keywords.map((keyword, i) => {
                return (
                  <a
                    key={i}
                    href=""
                    className="text-md m-1 inline-flex rounded-md border px-1 py-1 text-white hover:border-red-500 hover:bg-red-500"
                  >
                    {keyword.name}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  } else if (state === "tv") {
    return (
      <>
        <div className="mx-12">
          <div className="mb-5">
            <h1 className="text-lg font-bold text-white">Status</h1>
            <p className="text-md text-white">{tv.status}</p>
          </div>
          <div className="mb-5">
            <h1 className="text-lg font-bold text-white">Original Name</h1>
            <p className="text-md text-white">{tv.original_name}</p>
          </div>
          <div className="mb-5">
            <h1 className="text-lg font-bold text-white">Type</h1>
            <p className="text-md text-white">{tv.type}</p>
          </div>
          <div className="mb-10">
            <h1 className="text-lg font-bold text-white">Original Language</h1>
            <p className="text-md text-white">
              {tv?.spoken_languages?.map((language, i) => {
                return (
                  <p key={i} className="text-md text-white">
                    {language.english_name}
                  </p>
                );
              })}
            </p>
          </div>
          <div className="">
            <h1 className="text-lg font-bold text-white">Keywords</h1>
            <div className="">
              {state === "tv"
                ? tv?.keywords?.results.slice(0, 20).map((keyword, i) => {
                    return (
                      <a
                        key={i}
                        href=""
                        className="text-md m-1 inline-flex rounded-md border px-1 py-1 text-white hover:border-red-500 hover:bg-red-500"
                      >
                        {keyword.name}
                      </a>
                    );
                  })
                : null}
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default ContentInformation;
