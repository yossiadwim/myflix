import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTVSeriesDetail } from "../axios/api";
import Backdrop from "../components/detail/seasons/detail_season/Backdrop";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import ContentSeasons from "../components/detail/seasons/detail_season/ContentSeasons";


const Seasons = () => {
    window.scrollTo(0, 0);
    const {id} = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async (id) => {
            const seasons = await getTVSeriesDetail(id);
            setData(seasons);
        }

        fetchData(id);
    },[id])

    return <>
        <Navbar></Navbar>
        <Backdrop data={data}></Backdrop>
        <ContentSeasons  data={data}></ContentSeasons>
        <Footer></Footer>
    </>
}

export default Seasons;