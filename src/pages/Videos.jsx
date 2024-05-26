import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getDetailMovies, getTVSeriesDetail } from "../axios/api";
import Backdrop from "../components/detail/videos/Backdrop";
import Content from "../components/detail/videos/Content";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

const Videos = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const location = useLocation();
  const state = location.state;

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchVideos = async (id) => {
      const getMovieVideos = await getDetailMovies(id);
      setData(getMovieVideos);

      const getTvVideos = await getTVSeriesDetail(id);
      setData(getTvVideos);
    };

    fetchVideos(id);
  }, [id]);

  return (
    <>
      <Navbar></Navbar>
      <Backdrop data={data} state={state}></Backdrop>
      <Content data={data} state={state}></Content>
      <Footer></Footer>
    </>
  );
};

export default Videos;
