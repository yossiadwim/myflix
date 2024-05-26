import Carousel from "../components/Fragment/Carousel";
import MoviePopular from "../layouts/MoviePopular";
import TVSeries from "../layouts/TVSeries";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";

const Home = () => {
  return (
    <>
      <div className="">
        <Navbar></Navbar>
        <Carousel></Carousel>
        <MoviePopular></MoviePopular>
        <TVSeries></TVSeries>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Home;
