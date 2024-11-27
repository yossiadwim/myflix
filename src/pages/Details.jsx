/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getDetailMovies,
  getCollectionMovies,
  getTVSeriesDetail,
  getLanguage,
} from "../axios/api";
import CarouselDetail from "../components/Fragment/CarouselDetail";
import ContentDetail from "../layouts/ContentDetail";
import Information from "../components/detail/additional_information/Information";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

const Details = () => {
  const { state, id } = useParams();
  const [data, setData] = useState([]);
  const [collection, setCollection] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
      const fetchDetail = async (id) => {
        try {
          if (state === "movie") {
            const detailMovie = await getDetailMovies(id);
            setData(detailMovie);

            if (detailMovie?.belongs_to_collection) {
              const collectionMovie = await getCollectionMovies(
                detailMovie.belongs_to_collection.id,
              );
              setCollection(collectionMovie);
            }

            const languages = await getLanguage();
            setLanguages(languages);
          } else if (state === "tv") {
            const detailTVSeries = await getTVSeriesDetail(id);
            setData(detailTVSeries);

            const languages = await getLanguage();
            setLanguages(languages);
          }
        } catch (error) {
          console.error("error : ", error);
        }
      };

      setIsLoading(false);

      fetchDetail(id);
    }, 2000);
  }, [id, state]);

  return (
    <>
      <Navbar></Navbar>
      {isLoading ? (
        <div className="flex h-screen items-center justify-center ">
          <div className="loader"></div>
        </div>
      ) : (
        <>
          <CarouselDetail data={data}></CarouselDetail>
          <div className="container flex pt-64">
            <div className="w-3/4">
              {state === "movie" ? (
                <ContentDetail
                  data={data}
                  state={state}
                  collection={collection}
                ></ContentDetail>
              ) : (
                <ContentDetail data={data} state={state}></ContentDetail>
              )}
            </div>
            <div className="shadow- mr-5 w-1/4">
              <Information data={data} languages={languages}></Information>
            </div>
          </div>
        </>
      )}
      <Footer></Footer>
    </>
  );
};

export default Details;
