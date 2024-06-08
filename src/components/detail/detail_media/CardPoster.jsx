/* eslint-disable react/prop-types */
const CardPoster = ({ file_path }) => {
  return (
    <>
      <div className="w-full">
        <div className="flex h-fit w-fit px-5 pt-10">
          <img
            className="mx-3 h-full w-full rounded-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1  hover:scale-105"
            src={`https://image.tmdb.org/t/p/w220_and_h330_face${file_path}`}
            alt="card"
          ></img>
        </div>
      </div>
    </>
  );
};

export default CardPoster;
