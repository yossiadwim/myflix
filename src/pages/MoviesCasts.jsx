import { useParams } from "react-router-dom";
import ContentMoviesCasts from "../layouts/ContentMoviesCasts";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import { useEffect, useState } from "react";
import { getDetailMovies, getTVSeriesDetail } from "../axios/api";

const MoviesCasts = () => {
  const { state, id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
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
      <ContentMoviesCasts data={data} state={state}></ContentMoviesCasts>
      <Footer></Footer>
    </>
  );
};

export default MoviesCasts;
