// eslint-disable-next-line react/prop-types
const CardMedia = ({ video_key }) => {
  return (
    <>
      <div className="w-full">
        <div className="flex h-64 w-80 px-5 pt-10">
          <iframe
            className="mx-3 h-full w-full rounded-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1  hover:scale-110"
            src={`https://www.youtube.com/embed/${video_key}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
};

export default CardMedia;
