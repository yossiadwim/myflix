/* eslint-disable react/prop-types */
import Cast from "../components/Fragment/Cast";
import Media from "../components/Fragment/Media";
import Collection from "../components/detail/collection/Collection";
import Recommendations from "../components/detail/recommendations/Recommendations";
import Review from "../components/detail/reviews/Review";
import Seasons from "../components/detail/seasons/Seasons";

const ContentDetail = ({ data, collection, state }) => {


  return (
    <>
      <div className="mx-12">
        <Cast data={data} state={state}></Cast>
      </div>

      {data?.seasons?.length > 0 && (
        <div className="pt-24 mx-12">
          <Seasons data={data}></Seasons>
        </div>
      )}

      <div className="pt-24 mx-12">
        <Review data={data} state={state}></Review>
      </div>

      <div className="pb-32 pt-24 mx-12">
        <Media data={data} state={state}></Media>
      </div>

      {collection?.length !== 0 && collection !== undefined ? (
        <div className="pb-36 pt-5 mx-12">
          <Collection collection={collection} ></Collection>
        </div>
      ) : null}

      <div className="pb-36 pt-5 mx-12">
        <Recommendations data={data} state={state}></Recommendations>
      </div>
    </>
  );
};

export default ContentDetail;
