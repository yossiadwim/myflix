const CardBackdrop = ({ file_path, width, height, iso_639_1 }) => {
  return (
    <>
      <div className="w-full">
        <div className="flex h-64 w-96 px-5 pt-10">
          <img
            className="mx-3 h-full w-full rounded-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1  hover:scale-105"
            src={`https://image.tmdb.org/t/p/w533_and_h300_bestv2${file_path}`}
            alt="card"
          ></img>
        </div>
      </div>
    </>
  );
};

export default CardBackdrop;
