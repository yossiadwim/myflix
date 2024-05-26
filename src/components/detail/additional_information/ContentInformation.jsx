/* eslint-disable react/prop-types */
const ContentInformation = ({
  status,
  original_language,
  budget,
  revenue,
  keywords,
  original_name,
  type,
  languages,
}) => {
  return (
    <>
      <div className="mx-12">
        <div className="mb-5">
          <h1 className="text-lg font-bold text-white">Status</h1>
          <p className="text-md text-white">{status}</p>
        </div>
        <div className="mb-5">
          {original_language ? (
            <>
              <h1 className="text-lg font-bold text-white">
                Original Language
              </h1>
              <p className="text-md text-white">
                {
                  languages?.find(
                    (language) => language.iso_639_1 === original_language,
                  )?.english_name
                }
              </p>
            </>
          ) : (
            ""
          )}
        </div>
        {original_name ? (
          <div className="mb-5">
            <h1 className="text-lg font-bold text-white">Original Name</h1>
            <p className="text-md text-white">{original_name}</p>
          </div>
        ) : (
          ""
        )}
        {type ? (
          <div className="mb-5">
            <h1 className="text-lg font-bold text-white">Type</h1>
            <p className="text-md text-white">{type}</p>
          </div>
        ) : (
          ""
        )}
 
        {budget && revenue ? (
          <>
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
          </>
        ) : (
          ""
        )}
        <div className="">
          <h1 className="text-lg font-bold text-white">Keywords</h1>
          <div className="">
            {keywords?.keywords?.map((keyword, i) => {
              return (
                <a
                  key={i}
                  href=""
                  className="text-md m-1 inline-flex rounded-md border px-1 py-1 text-white hover:border-red-500 hover:bg-red-500"
                >
                  {keyword.name}
                </a>
              );
            }) ||
              keywords?.results?.map((keyword, i) => {
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
};

export default ContentInformation;
