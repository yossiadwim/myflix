import { useSearchParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { getSearch, getSearchMovies, getSearchTVSeries } from "../axios/api";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import Card from "../components/Fragment/Card";
import ReactPaginate from "react-paginate";

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const [results, setResults] = useState([]);
  const [category, setCategory] = useState("all");
  const [page, setPage] = useState();
  const [pageCount, setPageCount] = useState(1);
  const dataLength = useRef(0);

  const categoryList = {
    all: "all",
    movie: "movies",
    tv: "tv shows",
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchSearch = async () => {
      if (category === "all") {
        const page_number = page ? parseInt(page) : 1;
        const data = await getSearch(query, page_number);
        setResults(data.results);
        setPageCount(data?.total_pages);
        dataLength.current = data?.total_results;
      } else if (category === "movie") {
        const page_number = page ? parseInt(page) : 1;
        const data = await getSearchMovies(query, page_number);
        setResults(data.results);
        setPageCount(data?.total_pages);
        dataLength.current = data?.total_results;
      } else if (category === "tv") {
        const page_number = page ? parseInt(page) : 1;
        const data = await getSearchTVSeries(query, page_number);
        setResults(data.results);
        setPageCount(data?.total_pages);
        dataLength.current = data?.total_results;
      }
    };
    fetchSearch();
  }, [category, page, query]);

  return (
    <>
      <Navbar></Navbar>

      <div className="container mb-16 mt-28 overflow-y-hidden px-20">
        <div className="">
          <h1 className="text-4xl font-medium text-white">Search: {query}</h1>
        </div>
        <div className="flex">
          <div className="mr-5 mt-10 h-fit w-1/5 rounded-xl bg-slate-900">
            <ul className="m-5">
              {Object.keys(categoryList).map((item) => (
                <li
                  key={item}
                  className="mb-5 flex items-center justify-between"
                > 
                  <button
                    className={`text-lg capitalize hover:text-red-500 ${category === item ? "text-red-500" : "text-white"}`}
                    onClick={() => setCategory(item)}
                  >
                    {categoryList[item]}
                  </button>
                  <p className="rounded-lg bg-slate-700 px-2 text-base text-white">
                    {" "}
                    {category === item ? dataLength.current : ""} 
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-4/5">
            <div className="grid grid-cols-4 gap-x-5 gap-y-10 py-3 ">
              {results?.map((result, i) => {
                return (
                  <div className="h-[450px]" key={i}>
                    <Card data={result} state={result.media_type} />
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-center px-4 py-3 sm:px-6 ">
              <div className="flex flex-1 justify-between sm:hidden">
                <a
                  href="#"
                  className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Previous
                </a>
                <a
                  href="#"
                  className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Next
                </a>
              </div>
              <div className="flex justify-center">
                <ReactPaginate
                  className="my-14 flex w-fit justify-center gap-14 rounded-full bg-slate-900 px-10 py-3 font-medium text-white"
                  pageCount={pageCount}
                  pageRangeDisplayed={5}
                  marginPagesDisplayed={1}
                  onPageChange={(e) => setPage(e.selected + 1)}
                  containerClassName={"pagination"}
                  activeClassName={"active"}
                  previousLabel={"Previous"}
                  nextLabel={"Next"}
                ></ReactPaginate>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};

export default Search;
