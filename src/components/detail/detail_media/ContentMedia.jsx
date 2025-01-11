/* eslint-disable react/prop-types */
import ContentMediaBackdrops from "./ContentMediaBackdrops";
import ContentMediaPosters from "./ContentMediaPosters";
import ContentMediaVideos from "./ContentMediaVideos";

const ContentMedia = ({ data, languages, type }) => {
  return (
    <>
      {type === "videos" ? (
        <ContentMediaVideos
          data={data}
          languages={languages}
          
        ></ContentMediaVideos>
      ) : type === "backdrops" ? (
        <ContentMediaBackdrops
          data={data}
          languages={languages}
          
        ></ContentMediaBackdrops>
      ) : type === "posters" ? (
        <ContentMediaPosters
          data={data}
          languages={languages}
          
        ></ContentMediaPosters>
      ) : null}
    </>
  );
};

export default ContentMedia;
