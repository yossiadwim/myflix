import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailMovies, getLanguage, getTVSeriesDetail } from "../axios/api";
import Backdrop from "../components/detail/detail_media/Backdrop";
import Content from "../components/detail/detail_media/Content";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

const MediaDetail = () => {
  const { state, id, type } = useParams();
  const [data, setData] = useState([]);
  const [languages, setLanguage] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchVideos = async (id) => {
      if (state === "movie") {
        const detail = await getDetailMovies(id);
        setData(detail);
      } else if (state === "tv") {
        const detail = await getTVSeriesDetail(id);
        setData(detail);
      }
    };

    const fetchLanguage = async () => {
      const languages = await getLanguage();
      setLanguage(languages);
    };

    fetchVideos(id);
    fetchLanguage();
  }, [id, state]);

  return (
    <>
      <Navbar></Navbar>
      <Backdrop data={data} state={state} type={type}></Backdrop>
      <Content
        data={data}
        state={state}
        languages={languages}
        type={type}
      ></Content>
      <Footer></Footer>
    </>
  );
};

export default MediaDetail;
