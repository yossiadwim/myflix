/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types

import CardReview from "./CardReview";

// eslint-disable-next-line react/prop-types
const Review = ({ review, review_tv, state }) => {
  return (
    <>
      <div className="container">
        <div className="flex items-end ">
          <h1 className="mr-10 text-4xl font-medium text-white ">Social</h1>
          <a
            href="#"
            className="mr-5 text-2xl font-medium text-white hover:text-red-500"
          >
            {state === "movie"
              ? "Review" + " (" + review?.total_results + ") "
              : "Review" + " (" + review_tv?.total_results + ") "}
          </a>
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
                  username={
                    review.results[
                      Math.floor(Math.random() * review.results.length)
                    ].author_details.username
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

        {
          state === "movie" && review?.results?.length == 0 ?
          <div className="mt-5 rounded-lg border border-slate-700 p-6">
            <p className="text-xl font-bold text-white">No review yet</p>
          </div>
          : null
        }

        {
          state === "tv" && review_tv?.results?.length == 0 ?
          <div className="mt-5 rounded-lg border border-slate-700 p-6">
            <p className="text-xl font-bold text-white flex items-center justify-center">No review yet</p>
          </div>
          : null
        }
      </div>
    </>
  );
};

export default Review;
