import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useState } from "react";
import movie_styles from "../css/components/Movie.module.css"

function Movie({id, cover_image, title, summary, year, genres}) {
    return (
        <div className={movie_styles.movie__frame}>
            <img className={movie_styles.movie__image} src={cover_image} alt={title}/>
            <div className={movie_styles.movie__info}>
                <h1 className={movie_styles.movie__title}>{title}</h1>
                <p>{summary.length > 150 ? `${summary.slice(0, 150)}...` : summary}</p>
                <p className={movie_styles.movie__year}>{year}</p>
                <ul className={movie_styles.movie__genres}>
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
    year: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;