import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import Info from "../components/Info";

function Detail() {
    const [movie, setMovie] = useState([]);
    const [setting, setSetting] = useState(true);

    const {id} = useParams();

    const getMovie = async() => {
        const json = await(
            await fetch(
                `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
            )
        ).json();

        setMovie(json.data.movie);
        console.log(json.data.movie);
        setSetting(false);
    }

    useEffect(() => {
        getMovie();
    }, [])

    return (
        <div>
            {setting ? (
                <Loading />
            ) : (
                <div className="main">
                    <Navbar />
                    <div className="movie__container">
                        <Info
                            key={movie.id}
                            id={movie.id}
                            image={movie.medium_cover_image}
                            title={movie.title}
                            year={movie.year}
                            summary={movie.description_full}
                            genres={movie.genres}
                        />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Detail;