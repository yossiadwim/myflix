import { useParams } from "react-router-dom";
import Navbar from "../layouts/Navbar";
import { useEffect, useState } from "react";
import Footer from "../layouts/Footer";
import Backdrop from "../components/detail/posters/Backdrop";
import { getDetailMovies, getTVSeriesDetail } from "../axios/api";

const Posters = () => {
  const { state, id } = useParams();
  const [data, setData] = useState([]);

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
    fetchDetail(id);
  }, [id, state]);

  return (
    <>
      <Navbar></Navbar>
      <Backdrop data={data} state={state}></Backdrop>
      <Footer></Footer>
    </>
  );
};

export default Posters;
