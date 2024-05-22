import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getDetailMovies } from "../axios/api";
import Backdrop from "../components/detail/videos/Backdrop";
import Content from "../components/detail/videos/Content";


const Videos = () => {
    const {id} = useParams();
    const [movie, setMovies] = useState([]);
    const location = useLocation();
    const state = location.state;

    useEffect(() => {

        const fetchVideos = async (id) => {
            const getVideos = await getDetailMovies(id);
            setMovies(getVideos);
        }

        fetchVideos(id);

    }, [id])

    return (
        <>
            <Backdrop movie={movie} state={state}></Backdrop>
            <Content movie={movie} state={state}></Content>
        </>
    )
}

export default Videos;