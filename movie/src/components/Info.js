import "./css/Info.css"

import PropTypes from "prop-types";

function Info({id, image, title, summary, genres, year}) {
    return (
        <div className="movie__grid">
            <img className="movie__image" src={image} alt={title}/>
            <div className="movie__info__frame">
                <div className="movie__title__frame">
                    <h3>{title}</h3>
                    <span>{year}</span>
                </div>
                <div className="movie__summary">
                    <p>{summary.length > 120 ? `${summary.slice(0, 120)}...`: summary}</p>
                </div>
                <ul className="movie__genres">
                    {genres.map((gItem, index) => (
                        <li key={index}>#{gItem}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

Info.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Info;