import "./css/Movie.css"

import PropTypes from "prop-types";

function Movie({id, image, title, summary, genres, year}) {
    return (
        <div className="movie__grid">
            <img className="movie__image" src={image} alt={title}/>
            <div className="movie__info__frame">
                <div className="movie__title__frame">
                    <h3>{title}</h3>
                    <span>{year}</span>
                </div>
                <div className="movie__summary">
                    <p>{summary.length > 200 ? `${summary.slice(0, 200)}...`: summary}</p>
                </div>
                <ul className="movie__genres">
                    {genres.map((gItem) => (
                        <li key={id}>#{gItem}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;