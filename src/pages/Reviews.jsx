import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import { getDetailMovies, getTVSeriesDetail } from "../axios/api";
import CardReview from "../components/detail/reviews/CardReview";

const Reviews = () => {
  const { id } = useParams();
  const location = useLocation();
  const state = location.state;
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDetail = async (id) => {
      try {
        if (state === "movie") {
          const detailMovie = await getDetailMovies(id);
          setData(detailMovie);
        } else if (state === "tv") {
          const detailTVSeries = await getTVSeriesDetail(id);
          setData(detailTVSeries);
        }
      } catch (error) {
        console.error("error : ", error);
      }
    };
    fetchDetail(id);
  }, [id, state]);

  return (
    <>
      <Navbar></Navbar>
      <div className="">
        <div className="bg-opacity-100 ">
          {
            <img
              className="absolute inset-0 h-screen w-screen object-cover brightness-50"
              src={`https://image.tmdb.org/t/p/original${data?.backdrop_path}`}
              alt=""
            />
          }
        </div>
        <div className="absolute h-full w-full bg-opacity-100 bg-gradient-to-b from-transparent to-black">
          <div className="flex h-1/2 items-end justify-center">
            {
              <img
                src={`https://image.tmdb.org/t/p/w500${
                  data?.images?.logos?.filter(
                    (item) => item?.iso_639_1 === "en",
                  )[0]?.file_path
                }`}
                className=""
                alt=""
              />
            }
          </div>
          <div className="my-5">
            <p className="flex justify-center py-2 text-6xl font-bold text-white">
              {data?.title}
            </p>
            <p className="flex justify-center py-2 text-4xl font-medium text-white">
              Reviews
            </p>
          </div>
        </div>
        <div className="container my-20 w-2/3 pt-[850px]">
          {data?.reviews?.results?.map((review, i) => {
            return (
              <CardReview
                key={i}
                {...review}
                {...review.author_details}
              ></CardReview>
            );
          })}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Reviews;
