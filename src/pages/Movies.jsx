import { getMoviesPopular } from "../axios/api";
import ContentMovies from "../layouts/ContentMovies";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import { useState, useEffect } from "react";

const MoviePopulars = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const movies = await getMoviesPopular();
        setData(movies);
      };
      fetchData();
    }, []);

    return <>
        <Navbar></Navbar>
        <ContentMovies data={data}></ContentMovies>
        <Footer></Footer>
    </>
    
}

export default MoviePopulars;