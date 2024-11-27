/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
const CastsMovie = ({ data }) => {
  const baseImgURL = process.env.REACT_APP_BASEIMGURL;
  const [currentPage, setCurrentPage] = useState(0);
  const [perPage] = useState(14);


  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  useEffect(() => {
    setCurrentPage(0);
  }, [data]);

  const indexOfLastItem = (currentPage + 1) * perPage;
  const indexOfFirstItem = indexOfLastItem - perPage;

  const currentItemsCastMovie = data?.credits?.cast.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );
  
  return (
    <>
      <div className="container my-20 p-20 pt-[850px]">
        <h1 className="mt-10 text-3xl font-bold text-white">
          Cast ({data?.credits?.cast?.length})
        </h1>
        <div className="my-5 grid h-fit grid-cols-7">
          {currentItemsCastMovie?.map((cast, i) => {
            return (
              <div
                key={i}
                className="my-5 mr-5 mt-7 w-40 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:opacity-50"
              >
                <Link
                  to={`/persons/${cast?.id}-${cast?.name?.toLowerCase().replace(/ /g, "-")}`}
                >
                  <img
                    className="h-56 w-full rounded-lg"
                    src={
                      cast?.profile_path
                        ? `${baseImgURL}${cast?.profile_path}`
                        : "/img/white.png"
                    }
                    alt=""
                    loading="lazy"
                  />
                </Link>
                <h3 className="text-md mt-1 font-bold text-white">
                  {cast?.name}
                </h3>
                <p className="mt-1 text-sm text-white">{cast?.character}</p>
                <p className="mt-1 text-white">{cast?.known_for_department}</p>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center">
          <ReactPaginate
            className="my-14 flex w-fit justify-center gap-14 rounded-full  bg-slate-900 px-10 py-3 font-medium text-white"
            pageCount={Math.ceil(data?.credits?.cast?.length / perPage)}
            pageRangeDisplayed={5}
            marginPagesDisplayed={1}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            activeClassName={"active"}
            previousLabel={"Previous"}
            nextLabel={"Next"}
          ></ReactPaginate>
        </div>
      </div>
    </>
  );
};

export default CastsMovie;
