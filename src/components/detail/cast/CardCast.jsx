/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const CardCast = ({
  id,
  profile_path,
  name,
  character,
  known_for_department,
}) => {
  // eslint-disable-next-line react/prop-types
  // eslint-disable-next-line no-undef
  const baseImgURL = process.env.REACT_APP_BASEIMGURL;

  return (
    <>
      <div className="my-5 mr-5 mt-7 w-40 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:opacity-50">
        <Link to={`/persons/${id}-${name.toLowerCase().replace(/ /g, "-")}`}>
          <img
            className="h-56 w-full rounded-lg"
            src={
              profile_path ? `${baseImgURL}${profile_path}` : "/img/white.png"
            }
            alt=""
            loading="lazy"
          />
        </Link>
        <h3 className="text-md mt-1 font-bold text-white">{name}</h3>
        <p className="mt-1 text-sm text-white">{character}</p>
        <p className="mt-1 text-white">{known_for_department}</p>
      </div>
    </>
  );
};

export default CardCast;
