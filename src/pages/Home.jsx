import Carousel from "../components/Fragment/Carousel";
import MoviePopular from "../layouts/MoviePopular";
import TVSeries from "../layouts/TVSeries";

const Home = () => {

  return (
    <>
      <Carousel></Carousel>
      <MoviePopular></MoviePopular>
      <TVSeries ></TVSeries>
    </>
  );
};

export default Home;
