import { useState, useEffect } from "react";
import Navbar from "../components/Navbar"
import Movie from "../components/Movie"
import styles from "../css/module/Home.module.css"

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const getMovies = async() => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
            )
        ).json();

        setMovies(json.data.movies);
        setLoading(false);
    };

    useEffect(() => {
        getMovies();
    }, [])

    return (
        <div className={styles.container}>
            {loading ? (
                <div className={styles.loader}>
                    <span>Loading...</span>
                </div>
            ) : (
                <div>
                    <Navbar/>
                    {movies.map((movie) => (
                        <div>
                            <Movie
                                key = {movie.id}
                                id = {movie.id}
                                cover_image = {movie.medium_cover_image}
                                title = {movie.title}
                                summary = {movie.summary}
                                year = {movie.year}
                                genres = {movie.genres}
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Home;