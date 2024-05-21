import { useLocation, useParams } from "react-router-dom";
import ContentMoviesCasts from "../layouts/ContentMoviesCasts";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import { useEffect, useState } from "react";
import { getDetailMovies, getTVSeriesDetail } from "../axios/api";

const MoviesCasts = () => {
  const location = useLocation();
  const state = location.state;
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [tv, setTV] = useState([]);


  useEffect(() => {
    const fetchDetail = async (id) => {
      try {
        if (state === "movie") {
          const detailMovie = await getDetailMovies(id);
          setMovie(detailMovie);
        } else if (state === "tv") {
          const detailTVSeries = await getTVSeriesDetail(id);
          setTV(detailTVSeries);
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
      <ContentMoviesCasts
        movie={movie}
        tv={tv}
        state={state}
      ></ContentMoviesCasts>
      <Footer></Footer>
    </>
  );
};

export default MoviesCasts;
