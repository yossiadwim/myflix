/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
const CardPosters = ({ file_path }) => {
  const baseImgURL = process.env.REACT_APP_BASEIMGURL;

  return (
    <>
      <div className="my-5 mr-5 mt-7 w-40 transition delay-150 duration-300 ease-in-out hover:-translate-y-1  hover:scale-105">
        <img
          className="h-56 w-full rounded-lg"
          src={file_path ? `${baseImgURL}${file_path}` : "/img/white.png"}
          alt=""
          loading="lazy"
        ></img>
      </div>
    </>
  );
};

export default CardPosters;
