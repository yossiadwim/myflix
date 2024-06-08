import { useParams } from "react-router-dom";
import ContentCollection from "../components/detail/collection/content_collection/ContentCollection";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import { useEffect, useState } from "react";
import { getCollectionMovies, getDetailMovies, getGenre } from "../axios/api";

const Collections = () => {
  const { id } = useParams();
  const [collection, setCollection] = useState([]);
  const [movies, setMovies] = useState([]);

  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchCollection = async (id) => {
      const response = await getCollectionMovies(id);
      setCollection(response);

      const moviePromises = response?.parts?.map(async (part) => {
        const movie = await getDetailMovies(part.id);
        return movie;
      });
      const movies = await Promise.all(moviePromises);
      setMovies(movies);
    };

    const fetchGenre = async () => {
      const response = await getGenre();
      setGenres(response);
    };

    fetchCollection(id);
    fetchGenre();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);


  return (
    <>
      <Navbar></Navbar>
      <ContentCollection
        collection={collection}
        movies={movies}
        genres={genres}
      ></ContentCollection>
      <Footer></Footer>
    </>
  );
};

export default Collections;
