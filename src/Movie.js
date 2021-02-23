import React from 'react';
import './Movie.css';

function Movie({year, title, summary, medium_cover_image, genres}) {

    return (
        <div className="movie">
            <img src={medium_cover_image} alt={title} title={title}/>
            <div className="movie_data">
                <h3 className="movie_title">{title}</h3>
                <h5 className="movie_year">{year}</h5>
                <ul className="genres">{genres.map((genre,idex) =>{return <li key={idex} className="genres_genre">{genre}</li>})}</ul>
                <p className="movie_summary">{summary}</p>
            </div>
        </div>
    );
}

export default Movie;