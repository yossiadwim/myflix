/* eslint-disable react/prop-types */
const CardReview = ({ avatar_path, username, content, updated_at, rating }) => {
  // eslint-disable-next-line no-undef
  const baseImgURL = process.env.REACT_APP_BASEIMGURL;

  return (
    <div className="w-full border-t-2 border-gray-900">
      <div className="mt-5 rounded-lg border border-slate-700 p-6">
        <div className="flex w-full items-center px-2">
          <img
            className="mr-5 h-20 w-20 rounded-full"
            src={avatar_path ? `${baseImgURL}${avatar_path}` : "/img/white.png"}
            alt="Avatar"
          />
          <div className="ml-5">
            <p className="text-xl font-bold text-white">
              A review by
              {username}
            </p>
            <div className="mt-2 flex items-center">
              {!rating ? (
                <p className="text-md text-white">No rating</p>
              ) : (
                <div className="flex rounded-md border-black bg-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#fcd34d"
                    className="h-6 w-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="ml-1 font-medium text-white">{rating}/10</p>
                </div>
              )}
              <p className="text-md mx-2 text-white">
                Written by {username} on{" "}
                {new Date(updated_at).toLocaleString("en-us", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col justify-between px-2 ">
          <div className="mb-4 mt-4">
            <p className="text-justify text-lg text-white">{content} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardReview;
