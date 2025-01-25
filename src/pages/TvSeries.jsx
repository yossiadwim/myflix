import { useParams } from "react-router-dom";
import ContentTv from "../layouts/ContentTv";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";

const TvSeries = () => {
  const { type } = useParams();
  return (
    <>
      <Navbar></Navbar>
      <ContentTv type={type}></ContentTv>
      <Footer></Footer>
    </>
  );
};

export default TvSeries;