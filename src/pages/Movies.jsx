import { useParams } from "react-router-dom";
import ContentMovies from "../layouts/ContentMovies";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";

const Movies = () => {
  const { type } = useParams();
  
  return (
    <>
      <Navbar></Navbar>
      <ContentMovies type={type}></ContentMovies>
      <Footer></Footer>
    </>
  );
};

export default Movies;
