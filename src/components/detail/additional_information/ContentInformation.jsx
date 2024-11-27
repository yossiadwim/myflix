/* eslint-disable react/prop-types */
const ContentInformation = ({data, languages}) => {


  return (
    <>
      <div className="mx-12">
        <div className="mb-5">
          <h1 className="text-lg font-bold text-white">Status</h1>
          <p className="text-base text-white">{data?.status}</p>
        </div>
        <div className="mb-5">
          {data?.original_language ? (
            <>
              <h1 className="text-lg font-bold text-white">
                Original Language
              </h1>
              <p className="text-base text-white">
                {
                  languages?.find(
                    (language) => language.iso_639_1 === data?.original_language,
                  )?.english_name
                }
              </p>
            </>
          ) : (
            ""
          )}
        </div>
        {data?.original_name ? (
          <div className="mb-5">
            <h1 className="text-lg font-bold text-white">Original Name</h1>
            <p className="text-base text-white">{data?.original_name}</p>
          </div>
        ) : (
          ""
        )}
        {data?.type ? (
          <div className="mb-5">
            <h1 className="text-lg font-bold text-white">Type</h1>
            <p className="text-base text-white">{data?.type}</p>
          </div>
        ) : (
          ""
        )}

        {data?.budget && data?.revenue ? (
          <>
            <div className="mb-5">
              <h1 className="text-lg font-bold text-white">Budget</h1>
              <p className="text-base text-white">
                {Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(data?.budget)}
              </p>
            </div>
            <div className="mb-10">
              <h1 className="text-lg font-bold text-white">Revenue</h1>
              <p className="text-base text-white">
                {Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(data?.revenue)}
              </p>
            </div>
          </>
        ) : (
          ""
        )}

        <div className="">
          <h1 className="text-lg font-bold text-white">Keywords</h1>
          <div className="">
            {data?.keywords?.keywords?.map((keyword, i) => {
              return (
                <a
                  key={i}
                  href=""
                  className="text-base m-1 inline-flex rounded-md border px-1 py-1 text-white hover:border-red-500 hover:bg-red-500"
                >
                  {keyword.name}
                </a>
              );
            }) ||
              data?.keywords?.keywords?.map((keyword, i) => {
                return (
                  <a
                    key={i}
                    href=""
                    className="text-base m-1 inline-flex rounded-md border px-1 py-1 text-white hover:border-red-500 hover:bg-red-500"
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
