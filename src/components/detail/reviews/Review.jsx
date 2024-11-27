/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types

import { Link } from "react-router-dom";
import CardReview from "./CardReview";

// eslint-disable-next-line react/prop-types
const Review = ({ data, state }) => {

  return (
    <>
      <div className="container">
        <div className="flex items-end ">
          <h1 className="mr-10 text-3xl font-medium text-white ">Social</h1>
          <Link
            to={
              data?.title
                ? `/${state}/${data?.id}-${data?.title?.toLowerCase().replace(/:/g, "").replace(/ /g, "-")}/reviews`
                : `/${state}/${data?.id}-${data?.name?.toLowerCase().replace(/:/g, "").replace(/ /g, "-")}/reviews`
            }
          state={state}>
            <button className="mr-5 text-xl font-medium text-white hover:text-red-500">
              {"Review" + " (" + data?.reviews?.total_results + ") " ||
                "Review" + " (" + data?.reviews?.total_results + ") "}
            </button>
          </Link>

          {/* <button className="mr-5 text-2xl font-medium text-white hover:text-red-500">
            Discussions
          </button> */}
        </div>

        <div className="mt-5 ">
          {data?.reviews?.results?.length > 0 && (
            <CardReview
              key={Math.floor(Math.random() * data?.reviews?.results?.length)}
              avatar_path={
                data?.reviews?.results[
                  Math.floor(Math.random() * data?.reviews?.results?.length)
                ].author_details.avatar_path
              }
              author={
                data?.reviews?.results[
                  Math.floor(Math.random() * data?.reviews?.results?.length)
                ].author
              }
              content={
                data?.reviews?.results[
                  Math.floor(Math.random() * data?.reviews?.results?.length)
                ].content.substring(0, 250) + "..."
              }
              updated_at={
                data?.reviews?.results[
                  Math.floor(Math.random() * data?.reviews?.results?.length)
                ].updated_at
              }
              rating={
                data?.reviews?.results[
                  Math.floor(Math.random() * data?.reviews?.results?.length)
                ].author_details.rating
              }
            />
          )}
        </div>

        {data?.reviews?.results?.length == 0 ?
          <div className="mt-5 rounded-lg border border-slate-700 p-6">
            <p className="text-xl font-bold text-white">No review yet</p>
          </div> : ""
        }

      </div>
    </>
  );
};

export default Review;
