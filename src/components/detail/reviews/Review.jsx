/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types

import { Link } from "react-router-dom";
import CardReview from "./CardReview";

// eslint-disable-next-line react/prop-types
const Review = ({ movie, review, review_tv, state }) => {
  return (
    <>
      <div className="container">
        <div className="flex items-end ">
          <h1 className="mr-10 text-4xl font-medium text-white ">Social</h1>
          <Link
            to={`/movies/${movie?.id}-${movie?.title?.toLowerCase().replace(/:/g, "").replace(/ /g, "-")}/reviews`}
            state={state}
          >
            <button className="mr-5 text-2xl font-medium text-white hover:text-red-500">
              {state === "movie"
                ? "Review" + " (" + review?.total_results + ") "
                : "Review" + " (" + review_tv?.total_results + ") "}
            </button>
          </Link>

          <button className="mr-5 text-2xl font-medium text-white hover:text-red-500">
            Discussions
          </button>
        </div>

        <div className="mt-5 ">
          {state === "movie"
            ? review?.results?.length > 0 && (
                <CardReview
                  key={Math.floor(Math.random() * review.results.length)}
                  avatar_path={
                    review.results[
                      Math.floor(Math.random() * review.results.length)
                    ].author_details.avatar_path
                  }
                  author={
                    review.results[
                      Math.floor(Math.random() * review.results.length)
                    ].author
                  }
                  content={
                    review.results[
                      Math.floor(Math.random() * review.results.length)
                    ].content.substring(0, 250) + "..."
                  }
                  updated_at={
                    review.results[
                      Math.floor(Math.random() * review.results.length)
                    ].updated_at
                  }
                  rating={
                    review.results[
                      Math.floor(Math.random() * review.results.length)
                    ].author_details.rating
                  }
                />
              )
            : state === "tv" &&
              review_tv?.results?.length > 0 && (
                <CardReview
                  key={Math.floor(Math.random() * review_tv.results.length)}
                  avatar_path={
                    review_tv.results[
                      Math.floor(Math.random() * review_tv.results.length)
                    ].author_details.avatar_path
                  }
                  username={
                    review_tv.results[
                      Math.floor(Math.random() * review_tv.results.length)
                    ].author_details.username
                  }
                  content={
                    review_tv.results[
                      Math.floor(Math.random() * review_tv.results.length)
                    ].content.substring(0, 250) + "..."
                  }
                  updated_at={
                    review_tv.results[
                      Math.floor(Math.random() * review_tv.results.length)
                    ].updated_at
                  }
                  rating={
                    review_tv.results[
                      Math.floor(Math.random() * review_tv.results.length)
                    ].author_details.rating
                  }
                />
              )}
        </div>

        {state === "movie" && review?.results?.length == 0 ? (
          <div className="mt-5 rounded-lg border border-slate-700 p-6">
            <p className="text-xl font-bold text-white">No review yet</p>
          </div>
        ) : null}

        {state === "tv" && review_tv?.results?.length == 0 ? (
          <div className="mt-5 rounded-lg border border-slate-700 p-6">
            <p className="flex items-center justify-center text-xl font-bold text-white">
              No review yet
            </p>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Review;
