/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import {
  getDetailMovies,
  getDetailMoviesVideos,
  getCastMovies,
  getCollectionMovies,
  getTVSeriesDetail,
} from "../axios/api";
import CarouselDetail from "../components/Fragment/CarouselDetail";
import ContentDetail from "../layouts/ContentDetail";
import Information from "../components/detail/additional_information/Information";

const Details = (props) => {
  const location = useLocation();
  const state = location.state;


  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [tv, setTV] = useState([]);
  const [video, setVideo] = useState([]);
  const [cast, setCast] = useState([]);
  const [collection, setCollection] = useState([]);

  useEffect(() => {

    // window.scrollTo(0, 0);
    const fetchDetail = async (id) => {
      try {
        if (state === 'movie') {
          const detailMovie = await getDetailMovies(id);
          setMovie(detailMovie);

          const videoMovie = await getDetailMoviesVideos(id);
          setVideo(videoMovie);

          const castMovie = await getCastMovies(id);
          setCast(castMovie);

          const collectionMovie = await getCollectionMovies(
            detailMovie.belongs_to_collection.id,
          );
          setCollection(collectionMovie);
        } else if(state === 'tv') {
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
      <CarouselDetail
        movie={movie}
        logo={movie.images}
        state={state}
        tv={tv}
      ></CarouselDetail>
      <div className="container pt-80 flex">
        <div className="w-3/4">
          <ContentDetail
            cast={cast}
            video={video}
            review={movie.reviews}
            backdrops={movie.images}
            posters={movie.images}
            collection={collection}
            state={state}
            cast_tv = {tv.credits}
            review_tv = {tv.reviews}
            seasons={tv.seasons}
            videos_tv = {tv.videos}
            images_tv = {tv.images}
            recommendations_movie={movie.recommendations}
            recommendations_tv = {tv.recommendations}
          ></ContentDetail>
        </div>

        <div className="shadow- mr-5 w-1/4">
          <Information movie={movie} tv={tv} state={state}></Information>
        </div>
      </div>
    </>
  );
};

export default Details;
