import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({id, cover_image, title, summary, year, genres}) {
    return (
        <div>
            <img src={cover_image} alt={title}/>
            <div>
                <h1>{title}</h1>
                <p>{summary}</p>
                <p>{year}</p>
                <ul>
                    {genres.map(g => (
                        <li key={g}>{g}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    cover_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;