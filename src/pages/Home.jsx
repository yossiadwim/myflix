import { useEffect, useState } from "react";
import Carousel from "../components/Fragment/CarouselHome";
import MoviePopular from "../layouts/MoviePopular";
import TVSeries from "../layouts/TVSeries";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import Trailer from "../layouts/Trailer";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <Navbar></Navbar>
      {isLoading ? (
        <div className="flex h-screen items-center justify-center ">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="">
          <Carousel></Carousel>
          <MoviePopular></MoviePopular>
          <Trailer></Trailer>
          <TVSeries></TVSeries>
        </div>
      )}
      <Footer></Footer>
    </>
  );
};

export default Home;
