/* eslint-disable react/prop-types */
import Cast from "../components/Fragment/Cast";
import Media from "../components/Fragment/Media";
import Collection from "../components/detail/collection/Collection";
import Review from "../components/detail/reviews/Review";
import Seasons from "../components/detail/seasons/Seasons";

const ContentDetail = ({
  cast,
  video,
  review,
  backdrops,
  posters,
  collection,
  state,
  cast_tv,
  review_tv,
  seasons,
  videos_tv,
  images_tv,
}) => {
  return (
    <>
      <div className="">
        <Cast cast={cast} cast_tv={cast_tv} state={state}></Cast>
      </div>

      {state === "tv" ? (
        <div className="pt-24">
          <Seasons state={state} seasons={seasons}></Seasons>
        </div>
      ) : null}

      <div className="pt-24">
        <Review review={review} review_tv={review_tv} state={state}></Review>
      </div>

      <div className="pb-36 pt-24">
        <Media
          video={video}
          backdrops={backdrops}
          posters={posters}
          state={state}
          videos_tv={videos_tv}
          posters_tv={images_tv?.posters}
          backdrops_tv={images_tv?.backdrops}
        ></Media>
      </div>

      <div className="pb-36 pt-10">
        <Collection collection={collection}></Collection>
      </div>
    </>
  );
};

export default ContentDetail;
