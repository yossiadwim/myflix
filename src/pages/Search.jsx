import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSearch } from "../axios/api";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import Card from "../components/Fragment/Card";

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const pagination = searchParams.get("page");
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState();
  const [total_results, setTotalResults] = useState();
  const [category] = useState("all");

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
        const page_number = pagination ? parseInt(pagination) : 1;
        const data = await getSearch(query, page_number);
        setResults(data.results);
        setPages(data.total_pages);
        setTotalResults(data.total_results);
      }
    };
    fetchSearch();
  }, [category, pagination, query]);

  return (
    <>
      <Navbar></Navbar>

      <div className="container mb-16 mt-28 overflow-y-hidden p-0">
        <div className="">
          <h1 className="text-4xl font-medium text-white">Search: {query}</h1>
          <p className="text-lg font-medium text-white">
            {results?.length} results
          </p>
        </div>
        <div className="mt-10 flex">
          <div className="w-1/5 ">
            <ul className="mt-10">
              {category_list.map((item) => (
                <li key={item} className="mb-5">
                  <a href={`?query=${query}&page=${page}&category=${item}`}>
                    <p className="text-2xl capitalize text-white hover:text-red-500">
                      {item}
                    </p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-4/5 ">
            <div className="grid grid-cols-4 gap-x-5 gap-y-10 py-5">
              {results?.map((result, i) => {
                return (
                  <div className="h-[450px]" key={i}>
                    <Card data={result} state={result.media_type} />
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-between px-4 py-3 sm:px-6">
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
              <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-white">
                    Showing <span className="font-medium">1</span> to{" "}
                    <span className="font-medium">{results?.length}</span> of{" "}
                    <span className="font-medium">{total_results}</span> results
                  </p>
                </div>
                <div>
                  <nav
                    aria-label="Pagination"
                    className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                  >
                    <a
                      href="#"
                      className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    >
                      <span className="sr-only">Previous</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    {Array.from({ length: pages }).map((_, idx) => (
                      <a
                        key={idx + 1}
                        href={`?query=${query}&page=${idx + 1}`}
                        aria-current={idx + 1 === page ? "page" : undefined}
                        className={`relative z-10 inline-flex items-center text-white ${
                          idx + 1 === Number(pagination)
                            ? "bg-red-500 text-white"
                            : "text-gray-700"
                        } px-4 py-2 text-sm font-semibold focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                        onClick={() => setPage(idx + 1)}
                      >
                        {idx + 1}
                      </a>
                    ))}

                    <a
                      href="#"
                      className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400  hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    >
                      <span className="sr-only">Next </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </nav>
                </div>
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
