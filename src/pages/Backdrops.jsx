import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getDetailMovies, getLanguage, getTVSeriesDetail } from "../axios/api";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import Backdrop from "../components/detail/backdrops/Backdrop";
import Content from "../components/detail/backdrops/Content";

const Backdrops = () => {
  window.scrollTo(0, 0);
  const { id } = useParams();
  const location = useLocation();
  const state = location.state;
  const [data, setData] = useState([]);
  const [languages, setLanguage] = useState([]);

  useEffect(() => {
    const fetchDetail = async (id) => {
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

    fetchDetail(id);
    fetchLanguage();
  }, [id, state]);

  return (
    <>
      <Navbar></Navbar>
      <Backdrop data={data} state={state}></Backdrop>
      <Content data={data} languages={languages}></Content>
      <Footer></Footer>
    </>
  );
};

export default Backdrops;
