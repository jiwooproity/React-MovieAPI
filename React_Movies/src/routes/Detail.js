import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Home.module.css";

function Detail() {
    const [dLoading, setDloading] = useState(true);
    const [movieInfo, setMovieInfo] = useState([]);

    const {id} = useParams();
    
    const getMovie = async() => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
                )
            ).json();

        setMovieInfo(json.data.movie);
        setDloading(false);

        console.log(json);
    };

    useEffect(() => {
        getMovie();
    }, [])

    return (
        <div>
        {dLoading ? (
            <div className={styles.loader}>
                <span>Loading...</span>
            </div>
        ) : (
            <div>
                <img src={movieInfo.medium_cover_image} alt=""/>
                <h1>{movieInfo.title}</h1>
                <p>{movieInfo.description_full}</p>
            </div>
        )}
    </div>
    );
}

export default Detail;