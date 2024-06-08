/* eslint-disable react/prop-types */
import ContentMediaBackdrops from "./ContentMediaBackdrops";
import ContentMediaPosters from "./ContentMediaPosters";
import ContentMediaVideos from "./ContentMediaVideos";

const ContentMedia = ({ data, state, languages, type }) => {
  return (
    <>
      {type === "videos" ? (
        <ContentMediaVideos
          data={data}
          languages={languages}
          state={state}
        ></ContentMediaVideos>
      ) : type === "backdrops" ? (
        <ContentMediaBackdrops
          data={data}
          languages={languages}
          state={state}
        ></ContentMediaBackdrops>
      ) : type === "posters" ? (
        <ContentMediaPosters
          data={data}
          languages={languages}
          state={state}
        ></ContentMediaPosters>
      ) : null}
    </>
  );
};

export default ContentMedia;
