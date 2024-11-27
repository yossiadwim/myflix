import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSearch } from "../axios/api";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import Card from "../components/Fragment/Card";
import ReactPaginate from "react-paginate";

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const [results, setResults] = useState([]);
  const [category] = useState("all");
  const [page, setPage] = useState();
  const [pageCount, setPageCount] = useState(1);

  const category_list = [
    "all",
    "movie",
    "tv",
    "person",
    "collection",
    "company",
    "keyword",
  ];

  useEffect(() => {
  
    const fetchSearch = async () => {
      if (category === "all") {
        const page_number = page ? parseInt(page) : 1;
        const data = await getSearch(query, page_number);
        setResults(data.results);
        setPageCount(data?.total_pages);
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
          <p className="text-lg font-medium text-white">
            {results?.length} results
          </p>
        </div>
        <div className="mt-10 flex">
          <div className="w-1/5">
            <ul className="mt-10 ">
              {category_list.map((item) => (
                <li key={item} className="mb-5">
                  <a
                    href={`?query=${query}`}
                  >
                    <p className="text-lg capitalize text-white hover:text-red-500">
                      {item}
                    </p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-4/5">
            <div className="grid grid-cols-4 gap-x-5 gap-y-10 py-5">
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
