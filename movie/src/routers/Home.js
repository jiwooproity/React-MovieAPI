import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import Loading from "../components/Loading";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    
    const getMovie = async() => {
        const json = await (
            await fetch (
                `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
            )
        ).json();

        console.log(json.data.movies);
        setMovies(json.data.movies);
        setLoading(false);
    };

    useEffect(() => {
        getMovie();
    }, [])

    return (
        <div>
            {loading ? (
                <Loading />
            ) : (
                <div className="main">
                    <div className="movie__container">
                        {movies.map((movie) => (
                            <Movie
                                key={movie.id}
                                id={movie.id}
                                image={movie.medium_cover_image}
                                title={movie.title}
                                year={movie.year}
                                summary={movie.summary}
                                genres={movie.genres}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Home;